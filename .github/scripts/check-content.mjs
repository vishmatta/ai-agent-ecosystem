// Checks page sources under content/ for mistakes that need no judgment.
//
// Usage: node .github/scripts/check-content.mjs [content-dir]
//
// Runs in the quartz-build-check job, before the build, so a page that breaks
// a rule can't merge. It reads the markdown (frontmatter included), not the
// built HTML, because Quartz's own chrome isn't ours to check. Tone and
// accuracy are for review; only mechanical rules belong here.
//
//   1. Line rules (RULES): patterns that must never appear, each documented
//      where writers will see it: no em dashes (docs/style.md), no pipeline
//      placeholders (docs/content.md). To add one, add an entry and a line in
//      that doc.
//   2. Landscape counts: every `stats` value on a section page's Landscape card
//      must match the Landscape page it links to. A product listed in two
//      buckets counts once in the total ("… catalogued") and once in each
//      bucket (docs/content.md → Frontmatter).

import fs from "node:fs"
import path from "node:path"
import { parse } from "yaml"

const RULES = [
  {
    name: "no em dashes",
    pattern: /—/g,
    fix: "use a comma, colon, parentheses, or a new sentence (docs/style.md)",
  },
  {
    name: "no pipeline placeholders",
    pattern: /TODO\(pipeline\)/g,
    fix: "replace the placeholder with finished content, or remove it (docs/content.md)",
  },
]

const BUCKETS = {
  "Commercial / Proprietary": "commercial",
  "Open Source / Provider-agnostic": "open source",
  "Legacy / Decommissioned": "legacy",
}

const root = process.argv[2] ?? "content"
const problems = []

function markdownFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) return markdownFiles(full)
    return entry.name.endsWith(".md") ? [full] : []
  })
}

function frontmatter(text) {
  const match = text.match(/^---\n([\s\S]*?)\n---\n/)
  return match ? (parse(match[1]) ?? {}) : {}
}

// The page an href like /build/agent-frameworks/code-frameworks points at.
function sourceFor(href) {
  const rel = href.replace(/^\/+|\/+$/g, "")
  return [path.join(root, `${rel}.md`), path.join(root, rel, "index.md")].find((f) =>
    fs.existsSync(f),
  )
}

// Counts a Landscape page's top-level entries per bucket, plus distinct products.
function countEntries(file) {
  const counts = { commercial: 0, "open source": 0, legacy: 0 }
  const products = new Set()
  let bucket = null
  for (const line of fs.readFileSync(file, "utf8").split("\n")) {
    const heading = line.match(/^## (.+)$/)
    if (heading) bucket = BUCKETS[heading[1].trim()] ?? null
    if (!bucket || !line.startsWith("- ")) continue
    counts[bucket]++
    const name = line
      .slice(2)
      .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1") // [Name](url) → Name
      .replace(/\s*\([^)]*\)\s*$/, "") // drop a trailing (Creator)
      .trim()
    products.add(name)
  }
  return { ...counts, total: products.size }
}

function checkLandscapeCounts(file, fm) {
  for (const card of fm.landscapes ?? []) {
    const target = card.href && sourceFor(card.href)
    if (!target) {
      problems.push(`${file}: Landscape card "${card.title}" links to ${card.href}, which has no page.`)
      continue
    }
    const actual = countEntries(target)
    for (const stat of card.stats ?? []) {
      const label = String(stat.label)
      const key = label.endsWith("catalogued") ? "total" : label
      if (!(key in actual)) {
        problems.push(`${file}: unknown stat label "${label}" on "${card.title}"; use "… catalogued", commercial, open source, or legacy.`)
      } else if (Number(stat.value) !== actual[key]) {
        problems.push(`${file}: "${card.title}" says ${stat.value} ${label}, but ${target} has ${actual[key]}.`)
      }
    }
  }
}

const files = markdownFiles(root)
for (const file of files) {
  const text = fs.readFileSync(file, "utf8")
  text.split("\n").forEach((line, i) => {
    for (const rule of RULES) {
      for (const match of line.matchAll(rule.pattern)) {
        problems.push(`${file}:${i + 1}:${match.index + 1}  ${rule.name}: ${rule.fix}`)
      }
    }
  })
  checkLandscapeCounts(file, frontmatter(text))
}

if (problems.length) {
  // ::error:: surfaces each problem as an annotation on the pull request.
  for (const problem of problems) console.log(`::error::${problem}`)
  console.log(`\nContent check failed: ${problems.length} problem(s).`)
  process.exit(1)
}
console.log(`Content check passed: ${files.length} pages, ${RULES.length} line rules, Landscape counts match.`)
