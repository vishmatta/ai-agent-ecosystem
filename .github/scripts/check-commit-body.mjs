#!/usr/bin/env node
/**
 * Fails when a commit on main carries no message body.
 *
 * `main` takes squash merges only, and the repo's squash default is
 * COMMIT_MESSAGES, so a merge should copy the branch commit's message across
 * whole. That default only applies when the merge call supplies no message of
 * its own; an explicit empty one silently wins. 13 of the first 51 commits on
 * main landed that way, losing between 132 and 1559 bytes of reasoning each,
 * plus their Co-Authored-By and Claude-Session trailers (#158).
 *
 * AGENTS.md step 5 now says to pass no commit subject or body to the merge,
 * which fixes the cause. This catches a relapse. It can only run after the
 * fact: the message is decided at merge, once quartz-build-check has already
 * passed, so a pull-request check cannot see it. A red run on main within the
 * minute beats noticing six days later.
 *
 * The body is what survives in `git log` and `git blame` offline. The pull
 * request holds the same text, but that is GitHub's copy, not the repo's.
 *
 * Usage: node .github/scripts/check-commit-body.mjs [sha]   (default: HEAD)
 */
import { execFileSync } from "node:child_process"

const sha = process.argv[2] || "HEAD"

let message
try {
  message = execFileSync("git", ["log", "-1", "--format=%B", sha], {
    encoding: "utf8",
  })
} catch {
  console.log(`::error::Cannot read a commit message for '${sha}'.`)
  process.exit(1)
}

const [subject = "", ...rest] = message.split("\n")
const body = rest.join("\n").trim()

if (body === "") {
  // ::error:: surfaces this as an annotation on the run.
  console.log(
    `::error::${sha.slice(0, 7)} landed with no message body: "${subject.trim()}". ` +
      `The merge overrode the repo's squash default and dropped the branch commit's ` +
      `message and its trailers. Squash-merge without passing a commit subject or ` +
      `body (AGENTS.md step 5). The original is still readable at refs/pull/<n>/head.`,
  )
  process.exit(1)
}

const trailers = /^Co-authored-by:/im.test(body) ? ", trailers intact" : ""
console.log(
  `Commit body check passed: ${sha.slice(0, 7)} carries ${body.length} bytes of body${trailers}.`,
)
