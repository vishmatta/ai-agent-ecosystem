# Research inbox

Research notes waiting for review, and the record of where taxonomy changes
came from. **Nothing here is authoritative.** The taxonomy
(`planning/ai-agent-ecosystem-v*.md`) is. A research file is input to verify,
never a source to cite or copy from, even after it's incorporated.

## Adding a file (people and research agents)

- One topic per file, named `YYYY-MM-DD-<topic-slug>.md`, dated the day the
  research was done. Lowercase and hyphens, no spaces.
- Start with this frontmatter:

  ```yaml
  ---
  title: Agent memory tooling landscape
  status: new # new | in-review | incorporated | rejected
  researched: 2026-09-13
  by: <person, or agent plus model>
  incorporated-in: "" # filled in by the reviewer, e.g. "taxonomy v2.19 (#28)"
  ---
  ```

- For each product or claim, link its primary source: the vendor's own page,
  docs, or repository. Blogs, reviews, and listicles are leads, not evidence.
- Propose a placement for each product (taxonomy section and Landscape
  bucket), using the taxonomy's `## Formatting rules`. Say so when something
  fits no section, rather than forcing it.
- Flag anything you couldn't confirm as `(unconfirmed)`.
- Write only in this folder. Don't edit the taxonomy, the site plan,
  `content/`, or other research files; review does that.

## Reviewing a file

1. Open an issue for it and set `status: in-review`.
2. Verify every item at its primary source: license and archived status on
   GitHub, and the vendor's own announcements for renames and shutdowns.
   Research goes stale fast; expect some of it to be wrong by review time.
3. Put accepted items into the taxonomy with the version-bump checklist in
   `docs/practices.md`. In the taxonomy changelog, say what was corrected or
   left out, and why.
4. Set `status: incorporated` or `rejected`, fill in `incorporated-in`, and add
   `review-notes` summarizing the corrections. Leave the body as written: it's
   the record of what was proposed.
