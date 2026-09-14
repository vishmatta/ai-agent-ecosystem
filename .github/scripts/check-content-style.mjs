// Checks the mechanical rules in docs/style.md against every page's source.
//
// Usage: node .github/scripts/check-content-style.mjs [content-dir]
//
// Runs in the quartz-build-check job, so a page that breaks a rule can't
// merge. It reads markdown under content/ (frontmatter included), not the
// built HTML, because Quartz's own chrome isn't ours to restyle. Only the
// rules that need no judgment belong here; tone and accuracy are for review.
// To add a rule, add an entry to RULES and a line to docs/style.md.

import fs from "node:fs"
import path from "node:path"

const RULES = [
  {
    name: "no em dashes",
    pattern: /—/g,
    fix: "use a comma, colon, parentheses, or a new sentence",
  },
]

const root = process.argv[2] ?? "content"

function markdownFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) return markdownFiles(full)
    return entry.name.endsWith(".md") ? [full] : []
  })
}

const problems = []
for (const file of markdownFiles(root)) {
  const lines = fs.readFileSync(file, "utf8").split("\n")
  lines.forEach((line, i) => {
    for (const rule of RULES) {
      for (const match of line.matchAll(rule.pattern)) {
        problems.push(`${file}:${i + 1}:${match.index + 1}  ${rule.name}: ${rule.fix}`)
      }
    }
  })
}

if (problems.length) {
  console.error(`Style check failed (see docs/style.md):\n${problems.join("\n")}`)
  process.exit(1)
}
console.log(`Style check passed: ${RULES.length} rule(s) across ${root}/.`)
