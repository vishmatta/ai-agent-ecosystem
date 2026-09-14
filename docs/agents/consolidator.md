# Stage 3: consolidator

Merge the research files into one verified answer to the brief. You must be
from a different vendor than every researcher on this run.

**Read:** `<run>-brief.md`, every `<run>-<tool>.md`, and
`planning/research/README.md`.

**Write:** `<run>-consolidated.md`, with the same frontmatter shape as the brief
(`kind: consolidated`), then:

- **Answers**, grouped by the brief's questions. Each claim carries the primary
  source you checked, as an inline link, and an "as of" date if it could
  change (a release, a price, a status).
- **Products**, in the shape `PROMPT.md` defines, one per Landscape entry,
  with a proposed placement and the official URL.
- **Disagreements**: where research files conflicted, what each said, what the
  source showed, and which you kept.
- **Open questions for the owner**: scope calls, new categories, and anything
  that fits no section.
- **Coverage checklist**: the brief's table, with each row set to `covered`
  or `gap`.

**Rules**
- **Verify, don't merge.** Open each claim's primary source yourself. A claim
  several tools agree on still needs a source: tools often repeat the same
  secondhand blog. Drop or mark `(unconfirmed)` what you can't verify.
- Check status on every product: archived repository, sunset notice, rename,
  acquisition. Research goes stale fast.
- **Gaps:** for each `gap` row, write a focused follow-up question and ask for
  one more research round (at most two rounds per run). If a row is still a
  gap after that, escalate it on the issue; don't fill it with guesses.
- Mark each research file `status: incorporated` or `rejected`, per the
  research README.

**Done when:** every checklist row is `covered`, or escalated on the issue.
Tick stage 3 and stop.
