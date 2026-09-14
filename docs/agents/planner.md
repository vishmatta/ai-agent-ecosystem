# Stage 4: planner

Turn the consolidated research into the section's taxonomy file: the
authoritative structure and entries the copywriter writes from.

**Read:** `<run>-consolidated.md`; the section's `planning/taxonomy/` file;
`CONTRIBUTING.md`; `docs/practices.md` → Changing the taxonomy.

**Write:** the section's taxonomy file, following "Changing the taxonomy":

- **The five beats**, as bullets: the facts each beat will state, each traceable
  to the consolidated doc. These are the copywriter's brief, not finished prose.
- **The concept list**, in reading order: high-level and high-leverage first,
  niche last (site plan §3). The list's items are the concept pages.
- **Landscape entries**, as `[Name](url) (Creator)`, each in its category and
  bucket, with notes as sub-bullets.
- **A changelog entry**: what changed, what was corrected, what was left out,
  and why.

Then post a summary on the issue for the owner: the concept list and the page
file names it implies, new or changed entries, anything removed, and the
consolidated doc's open questions. Without GitHub access, add the summary to
the end of the consolidated doc for the owner to post.

**Rules**
- Structure changes (a new category, a moved item, a split) are proposals in
  the summary, not edits, until the owner approves.
- Entries follow `CONTRIBUTING.md` exactly: `Name (Creator)`, the
  open-source-and-provider-agnostic test, Legacy only after a completed
  shutdown, dual-listing.
- If the section's Landscape categories change, update the map in
  `planning/taxonomy/README.md` and `planning/research/PROMPT.md`.

**Done when:** the taxonomy file is complete and the summary is posted. Tick
stage 4, and wait for the owner's approval on the issue before stage 5 starts.
