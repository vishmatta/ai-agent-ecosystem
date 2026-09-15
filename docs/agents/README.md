# Content pipeline

How a taxonomy section goes from research to published pages. Several
agents run it, from different vendors, each doing one stage and handing off
through files, so any vendor's agent can run any stage.

## Stages

A run covers one section, tracked by one issue (labelled `pipeline`, from the
Section template, with the priority of the pipeline tracker #37 per
`docs/triage.md`) and one branch, `<issue>-<section-slug>`. Every stage commits
to that branch. Files named `<run>` below are
`planning/research/YYYY-MM-DD-<section-slug>`, using the date the run started.

| # | Stage | Instructions | Writes | Gate before the next stage |
|---|---|---|---|---|
| 1 | Brief | [brief-writer.md](brief-writer.md) | `<run>-brief.md` | — |
| 2 | Research, 2–3 tools | [`planning/research/PROMPT.md`](../../planning/research/PROMPT.md) | `<run>-<tool>.md`, one per tool | at least two tools from different vendors |
| 3 | Consolidate | [consolidator.md](consolidator.md) | `<run>-consolidated.md` | coverage complete, or gaps escalated |
| 4 | Plan | [planner.md](planner.md) | the section's `planning/taxonomy/` file | **owner approves on the issue** |
| 5 | Write | [copywriter.md](copywriter.md) | `content/<stage>/<section-slug>/` | CI passes |
| 6 | Review | [reviewer.md](reviewer.md) | `<run>-review.md`, and fixes | coverage checklist all done |
| 7 | PR | this file, below | the pull request | **owner reviews and merges** |

## Picking up a stage

- On a `pipeline` issue, do **only the next unchecked stage**, then tick it and
  stop. Don't run the whole pipeline yourself.
- **Vendor rotation.** The consolidator must be from a different vendor than
  every researcher, and the reviewer from a different vendor than the
  copywriter. Record your tool and model on the issue's stage line.
- Stop at a gate. If a stage's input is missing or a gate isn't met, comment on
  the issue and stop.
- A tool without repository access (a chat research product) returns its
  output to the owner, who commits it to the branch.
- Read `docs/practices.md` first, like any task.

## Rules for every stage

- **Facts flow one way:** primary sources → research → consolidated doc →
  taxonomy → pages. A stage never adds a fact its input doesn't support.
- **Primary sources only** count as evidence (`planning/research/README.md`).
  Agreement between models isn't evidence; a source is.
- **Scope questions go to the owner.** Anything that fits no section, needs a
  new category, or changes structure is a question on the issue, not a
  decision (`AGENTS.md` → "Don't make the owner's calls").
- **Edit only the section.** A run changes its own taxonomy file, its own
  `content/` folder, and its own `<run>-*` files. The one exception is the
  reviewer turning plain-text mentions of this section elsewhere into links.

## Stage 7: the pull request

Whoever finished stage 6 opens it, in the shape of
`.github/pull_request_template.md`: `Closes #<issue>`, a summary per stage
(which tools ran, what was corrected, what was escalated), and the review
file's checklist. Leave it for the owner's review: it sets permanent concept
and Landscape URLs, and it's copy.
