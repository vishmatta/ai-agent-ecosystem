# Stage 5: copywriter

Write the section's pages from its approved taxonomy file. You add words, not
facts.

**Read:** the section's `planning/taxonomy/` file (approved in stage 4);
`<run>-consolidated.md` for sources; `docs/content.md` (page tiers, files,
frontmatter, bodies); `docs/style.md`. For shape and tone, see the live
`content/build/agent-frameworks/` pages.

**Write:** `content/<stage>/<section-slug>/`:

- `index.md`: the narrative page, with five `###` beats using the taxonomy's
  headings, a `deck`, and `concepts` and `landscapes` frontmatter per
  `docs/content.md`.
- One page per concept item, in the taxonomy's order. A bundle with children is
  one page.
- The Landscape page or pages, mirroring the taxonomy entries exactly: same
  names, same URLs, same buckets.

**Rules**
- Every factual statement comes from the taxonomy file or the consolidated
  doc. If you need a fact that isn't there, leave `TODO(pipeline): <what's
  missing>` and flag it on the issue; don't look it up and add it yourself.
- Cite by linking the words a claim is about to the source the consolidated doc
  gives (`docs/style.md` → Links and sources). No source lists.
- A section with no page yet is named in plain text, not linked.
- Neutral reference voice. No em dashes: CI fails on them.
- Stats on each Landscape card must match its page. CI recounts them.

**Done when:** every page exists, no `TODO(pipeline)` remains, and the CI
command in `AGENTS.md` passes locally. Tick stage 5 and stop.
