# Research inbox

Research notes waiting for review, and the record of where taxonomy changes
came from. **Nothing here is authoritative.** The taxonomy
(`planning/taxonomy/`) is. A research file is input to verify,
never a source to cite or copy from, even after it's incorporated.

## Running research, with any tool

Research isn't tied to one vendor. [`PROMPT.md`](PROMPT.md) is a
self-contained brief that works in any tool. Use it either way:

- **A coding agent with repo access** (Claude Code, Codex, Cursor, Gemini CLI,
  Copilot, or others): ask it to "research <topic> following
  `planning/research/PROMPT.md`". It reads the taxonomy and writes the file
  here itself.
- **A chat research tool** (Perplexity, ChatGPT deep research, Gemini Deep
  Research, or others): paste `PROMPT.md` with the topic filled in, then save
  the markdown it returns in this folder.

Running two tools on the same topic, then comparing their output, is a cheap
way to catch what one of them missed.

## What a file looks like

- One topic per file, named `YYYY-MM-DD-<topic-slug>.md`, dated the day the
  research was done. A content-pipeline run's files share one prefix,
  `YYYY-MM-DD-<section-slug>-`, followed by `brief`, the tool name,
  `consolidated`, or `review` (`docs/agents/README.md`). Lowercase and hyphens, no spaces. When several tools
  research the same topic, add the tool: `2026-10-01-agent-memory-perplexity.md`.
- Start with this frontmatter:

  ```yaml
  ---
  title: Agent memory tooling landscape
  kind: research # brief | research | consolidated | review (pipeline files, docs/agents/)
  status: new # new | in-review | incorporated | rejected
  researched: 2026-09-13
  by: <person, or tool plus model>
  incorporated-in: "" # filled in by the reviewer, e.g. "taxonomy §10 (#45)"
  ---
  ```

- The body follows `PROMPT.md`'s output shape: for each product, a
  neutral description, a proposed placement, license and status, a primary
  source, and whether it's confirmed. Blogs, reviews, and listicles are leads,
  not evidence.
- A research agent writes only in this folder. It doesn't edit the taxonomy,
  the site plan, `content/`, or other research files; review does that.

## Reviewing a file

1. Open an issue for it and set `status: in-review`. Where you can, review with
   a different vendor's tool than the one that did the research: models from
   different vendors tend to miss different things.
2. Verify every item at its primary source: license and archived status on
   GitHub, and the vendor's own announcements for renames and shutdowns.
   Research goes stale fast; expect some of it to be wrong by review time.
3. Put accepted items into the taxonomy with "Changing the taxonomy" in
   `docs/practices.md`. In the taxonomy changelog, say what was corrected or
   left out, and why.
4. Set `status: incorporated` or `rejected`, fill in `incorporated-in`, and add
   `review-notes` summarizing the corrections. Leave the body as written: it's
   the record of what was proposed.
