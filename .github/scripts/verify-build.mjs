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
 * So after the build this checks two things:
 *
 *   1. The build log contains none of Quartz's failure or warning markers.
 *      A clean build of this site logs none, so any that appear mean
 *      something changed and needs a look.
 *   2. The output is intact: the site root exists, and every page carries the
 *      stage navigation, which the site renders on every page except the 404.
 *      A component that silently stops rendering breaks this even when it
 *      logs nothing.
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

// --- report ---------------------------------------------------------------

if (failures.length > 0) {
  // ::error:: surfaces each problem as an annotation on the pull request.
  for (const message of failures) console.log(`::error::${message}`)
  console.log(`\nBuild verification failed: ${failures.length} problem(s).`)
  process.exit(1)
}

console.log(`Build verification passed: ${pages.length} pages, stage navigation on every page.`)
