// Checks open issues for label and convention mistakes that need no judgment.
//
// Usage: node .github/scripts/check-issues.mjs <issues.json>
//
//   gh issue list -R vishmatta/ai-agent-ecosystem --state open --limit 200 \
//     --json number,title,labels,body > issues.json
//
// Runs in the issue-lint job, and by hand before triaging a batch. It guards
// the two conventions this repo's tools depend on and nothing else enforces
// (docs/triage.md → Where a new piece of state goes):
//
//   1. The label vocabulary. Applying an unknown label through the issues API
//      creates it, in the default grey with no description, so a typo becomes a
//      permanent label nobody filters on. One type and one priority are also
//      mutually exclusive, so two of either is a contradiction, not a choice.
//   2. Waiting markers. `Blocked by #N` and `Not before YYYY-MM-DD` are free
//      text on the issue's first line, so a near miss ("Blocked on #57") reads
//      fine to a person and is invisible to every agent.
//
// Errors fail the run. Warnings are printed and don't: they're states a person
// resolves (an untriaged issue, a date that has arrived), not mistakes.
//
// The vocabulary below is docs/triage.md → Labels. Changing one means changing
// both.

import fs from "node:fs"

const TYPES = [
  "bug",
  "content",
  "taxonomy",
  "site",
  "infra",
  "process",
  "pipeline",
  "tracker",
  "idea",
  "feature",
]
const PRIORITIES = ["P1", "P2", "P3"]
const STATUSES = ["in-progress", "needs-decision"]
const KNOWN = new Set([...TYPES, ...PRIORITIES, ...STATUSES])

// A first line that starts like a waiting marker, so a near miss is caught
// rather than silently ignored.
const LOOKS_LIKE_WAITING = /^(blocked|not[- ]before|waiting|on hold|hold until)\b/i
const BLOCKED_BY = /^Blocked by #\d+(?:(?:,| and|, and)\s*#\d+)*$/
const NOT_BEFORE = /^Not before (\d{4}-\d{2}-\d{2})$/

const isRealDate = (value) => {
  const date = new Date(`${value}T00:00:00Z`)
  return !Number.isNaN(date.getTime()) && date.toISOString().startsWith(value)
}

// gh gives label objects; the REST API and some tools give plain strings.
const labelNames = (labels = []) =>
  labels.map((label) => (typeof label === "string" ? label : label?.name)).filter(Boolean)

// The waiting marker sits on the first line a reader sees, so template
// comments and blank lines don't count.
const firstContentLine = (body = "") => {
  const lines = body.replace(/<!--[\s\S]*?-->/g, "").split("\n")
  return lines.map((line) => line.trim()).find((line) => line.length > 0) ?? ""
}

const checkIssue = (issue) => {
  const errors = []
  const warnings = []
  const names = labelNames(issue.labels)

  for (const name of names) {
    if (!KNOWN.has(name)) {
      errors.push(
        `unknown label "${name}" — applying a label through the API creates it, so this is usually a typo (docs/triage.md → Labels)`,
      )
    }
  }

  const types = names.filter((name) => TYPES.includes(name))
  const priorities = names.filter((name) => PRIORITIES.includes(name))

  if (types.length > 1)
    errors.push(`${types.length} type labels: ${types.join(", ")} — exactly one`)
  if (priorities.length > 1)
    errors.push(`${priorities.length} priority labels: ${priorities.join(", ")} — exactly one`)
  if (types.length === 0) warnings.push("no type label — triage it (docs/triage.md)")
  if (priorities.length === 0) warnings.push("no priority label — triage it (docs/triage.md)")

  const first = firstContentLine(issue.body)
  if (LOOKS_LIKE_WAITING.test(first)) {
    const blocked = BLOCKED_BY.test(first)
    const notBefore = first.match(NOT_BEFORE)

    if (!blocked && !notBefore) {
      errors.push(
        `first line reads as a waiting marker but doesn't parse: "${first}" — write "Blocked by #N" (or "#N, #M and #O") or "Not before YYYY-MM-DD"`,
      )
    } else if (notBefore && !isRealDate(notBefore[1])) {
      errors.push(`"Not before ${notBefore[1]}" isn't a real date`)
    } else if (notBefore && notBefore[1] <= new Date().toISOString().slice(0, 10)) {
      warnings.push(`"Not before ${notBefore[1]}" has arrived — re-triage it (docs/triage.md)`)
    }
  }

  // A marker below the first line gates nothing, but prose legitimately
  // mentions other issues, so this only warns.
  for (const line of (issue.body ?? "").split("\n").slice(1)) {
    const trimmed = line.trim()
    if ((BLOCKED_BY.test(trimmed) || NOT_BEFORE.test(trimmed)) && trimmed !== first) {
      warnings.push(`"${trimmed}" isn't on the first line, so nothing acts on it`)
    }
  }

  return { errors, warnings }
}

const path = process.argv[2]
if (!path) {
  console.error("Usage: node .github/scripts/check-issues.mjs <issues.json>")
  process.exit(2)
}

const issues = JSON.parse(fs.readFileSync(path, "utf8"))
if (!Array.isArray(issues)) {
  console.error(`${path}: expected an array of issues from \`gh issue list --json\``)
  process.exit(2)
}

let errorCount = 0
let warningCount = 0
const summary = []

for (const issue of issues) {
  const { errors, warnings } = checkIssue(issue)
  if (errors.length === 0 && warnings.length === 0) continue

  const heading = `#${issue.number} ${issue.title ?? ""}`.trim()
  console.log(heading)
  for (const error of errors) console.log(`  error: ${error}`)
  for (const warning of warnings) console.log(`  warning: ${warning}`)
  console.log()

  errorCount += errors.length
  warningCount += warnings.length
  summary.push(
    `- **${heading}**\n${[...errors.map((e) => `  - error: ${e}`), ...warnings.map((w) => `  - warning: ${w}`)].join("\n")}`,
  )
}

const verdict = `Checked ${issues.length} open issues: ${errorCount} error(s), ${warningCount} warning(s).`
console.log(verdict)

if (process.env.GITHUB_STEP_SUMMARY) {
  fs.appendFileSync(
    process.env.GITHUB_STEP_SUMMARY,
    [`### Issue lint`, "", verdict, "", ...summary, ""].join("\n"),
  )
}

process.exit(errorCount > 0 ? 1 : 0)
