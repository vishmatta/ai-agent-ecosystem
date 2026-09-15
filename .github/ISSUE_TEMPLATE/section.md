---
name: Section (content pipeline)
about: One taxonomy section's run through the content pipeline, from research to published pages
title: "Section: §N <Title>"
labels: pipeline
---

<!-- If this run can't start until another issue is done, make the first line: Blocked by #N
     If it can't start until a date, make the first line: Not before YYYY-MM-DD -->

**Agents: do only the next unchecked stage, then tick it and stop.** Read
`docs/agents/README.md` first, then your stage's instructions.

## Section

- **Taxonomy file:** `planning/taxonomy/<NN-file>.md`
- **Pages:** `content/<stage>/<section-slug>/` (slug from `docs/content.md` → Section registry)
- **Branch:** `<this issue number>-<section-slug>`
- **Run prefix:** `planning/research/<YYYY-MM-DD>-<section-slug>-`

## Stages

Record the tool and model on each line as you tick it. The consolidator's
vendor must differ from every researcher's; the reviewer's from the
copywriter's.

- [ ] 1. Brief (`docs/agents/brief-writer.md`). By:
- [ ] 2. Research, at least two vendors (`planning/research/PROMPT.md`). By:
- [ ] 3. Consolidate (`docs/agents/consolidator.md`). By:
- [ ] 4. Plan (`docs/agents/planner.md`). By:
- [ ] **Owner approved the plan** (owner ticks this)
- [ ] 5. Write (`docs/agents/copywriter.md`). By:
- [ ] 6. Review (`docs/agents/reviewer.md`). By:
- [ ] 7. PR opened, left for the owner's review

## Open questions for the owner

<!-- Stages add scope questions here or as comments: things that fit no
section, new categories, structure changes. -->
