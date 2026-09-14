#!/usr/bin/env node
/**
 * Verifies a Quartz build actually succeeded.
 *
 * `npx quartz build` exiting 0 is not enough. Quartz treats some failures as
 * non-fatal and still exits 0, including exactly the mistakes a change to this
 * repo's plugins or config is most likely to make:
 *
 *   - a syntax error in a local plugin    → logs "failed to load", drops the
 *                                           plugin, and ships the site without it
 *   - config pointing at a missing plugin → logs "✗ Failed to install plugin"
 *
 * So after the build this checks four things:
 *
 *   1. The build log contains none of Quartz's failure or warning markers.
 *      A clean build of this site logs none, so any that appear mean
 *      something changed and needs a look.
 *   2. The output is intact: the site root exists, and every page carries the
 *      stage navigation, which the site renders on every page except the 404.
 *      A component that silently stops rendering breaks this even when it
 *      logs nothing.
 *   3. No page links to a page that doesn't exist. Every internal <a href>
 *      (body wikilinks and component links alike) must resolve to a built
 *      file, and must be relative: the site is served from a subpath, so an
 *      absolute link 404s. The 404 page is exempt; its links are absolute on
 *      purpose.
 *   4. Each stage page lists its sections in the order of the registry table
 *      in docs/content.md. The order comes from the Explorer's sortFn, via
 *      plugins/agent-ecosystem-stage-page; if either drifts from the registry,
 *      or the plugin stops claiming the stage pages, the list falls out of
 *      order.
 *
 * Usage: node .github/scripts/verify-build.mjs <build-log> [output-dir]
 */
import fs from "node:fs"
import path from "node:path"

const [logPath, outDir = "public"] = process.argv.slice(2)
if (!logPath) {
  console.error("usage: verify-build.mjs <build-log> [output-dir]")
  process.exit(2)
}

const failures = []
const fail = (message) => failures.push(message)

// --- 1. build log ---------------------------------------------------------

const stripAnsi = (s) => s.replace(/\x1b\[[0-9;]*m/g, "")
const log = stripAnsi(fs.readFileSync(logPath, "utf8")).split("\n")

// Quartz marks failures with ✗ and warnings with ⚠. The words catch errors it
// prints without a glyph (e.g. "failed to load", "YAMLParseError").
const FAILURE_MARKERS = /✗|⚠|\bfailed\b|\berror\b/i
// Benign: files not yet committed. Can't occur in a CI checkout, but keeps the
// script usable against a local build.
const BENIGN = /isn't yet tracked by git/

for (const line of log) {
  if (FAILURE_MARKERS.test(line) && !BENIGN.test(line)) {
    fail(`Build log reports a problem: ${line.trim()}`)
  }
}

// --- 2. build output ------------------------------------------------------

const root = path.join(outDir, "index.html")
if (!fs.existsSync(root) || fs.statSync(root).size === 0) {
  fail(`Site root ${root} is missing or empty.`)
}

const htmlFiles = (dir) =>
  fs.existsSync(dir)
    ? fs.readdirSync(dir, { withFileTypes: true, recursive: true })
        .filter((d) => d.isFile() && d.name.endsWith(".html"))
        .map((d) => path.join(d.parentPath ?? d.path, d.name))
    : []

const pages = htmlFiles(outDir)
const missingNav = pages.filter(
  (file) =>
    path.relative(outDir, file) !== "404.html" &&
    !fs.readFileSync(file, "utf8").includes('class="pipeline"'),
)
for (const file of missingNav) {
  fail(`${path.relative(outDir, file)} is missing the stage navigation.`)
}

// --- 3. internal links ---------------------------------------------------

const EXTERNAL = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i // http:, mailto:, //host …
const exists = (target) =>
  [target, `${target}.html`, path.join(target, "index.html")].some(
    (candidate) => fs.existsSync(candidate) && fs.statSync(candidate).isFile(),
  )

let linksChecked = 0
for (const file of pages) {
  const page = path.relative(outDir, file)
  if (page === "404.html") continue
  const html = fs.readFileSync(file, "utf8")
  for (const [, href] of html.matchAll(/<a\b[^>]*\bhref="([^"]*)"/g)) {
    const target = href.split(/[?#]/)[0]
    if (!target || EXTERNAL.test(href)) continue
    linksChecked++
    if (target.startsWith("/")) {
      fail(`${page} links to ${href}, an absolute path — internal links must be relative.`)
      continue
    }
    const resolved = path.join(path.dirname(file), decodeURIComponent(target))
    if (!exists(resolved.replace(/[/\\]$/, ""))) {
      fail(`${page} links to ${href}, which doesn't exist in the build.`)
    }
  }
}

// --- 4. stage page order ---------------------------------------------------

// Each stage page lists its sections in the registry's order: the table in
// docs/content.md → Section registry, whose rows are in Nav order. Sections
// without a built page yet are skipped.
const REGISTRY = "docs/content.md"
const registryRows = fs.existsSync(REGISTRY)
  ? fs.readFileSync(REGISTRY, "utf8").split("\n")
      .map((line) => line.match(/^\| (build|connect|run|control) \|[^|]*\|[^|]*\|[^|]*\| `([a-z0-9-]+)`/))
      .filter(Boolean)
  : []
if (registryRows.length === 0) fail(`No section rows found in ${REGISTRY} → Section registry.`)

let stagesChecked = 0
for (const stage of ["build", "connect", "run", "control"]) {
  const stagePage = path.join(outDir, stage, "index.html")
  if (!fs.existsSync(stagePage)) continue
  const expected = registryRows
    .filter(([, rowStage, slug]) => rowStage === stage && fs.existsSync(path.join(outDir, stage, slug, "index.html")))
    .map(([, , slug]) => slug)
  const html = fs.readFileSync(stagePage, "utf8")
  const listed = [...html.matchAll(/class="section-li">[\s\S]*?<h3><a href="[^"]*?([a-z0-9-]+)\/"/g)]
    .map(([, slug]) => slug)
    .filter((slug) => expected.includes(slug))
  stagesChecked++
  if (listed.join(",") !== expected.join(",")) {
    fail(
      `${stage}/index.html lists sections as ${listed.join(", ") || "(none)"}; the registry order is ` +
        `${expected.join(", ")}. Check the Explorer's sortFn (docs/plugins.md).`,
    )
  }
}

// --- report ---------------------------------------------------------------

if (failures.length > 0) {
  // ::error:: surfaces each problem as an annotation on the pull request.
  for (const message of failures) console.log(`::error::${message}`)
  console.log(`\nBuild verification failed: ${failures.length} problem(s).`)
  process.exit(1)
}

console.log(
  `Build verification passed: ${pages.length} pages, stage navigation on every page, ` +
    `${linksChecked} internal links resolved, ${stagesChecked} stage pages in registry order.`,
)
