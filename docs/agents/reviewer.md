# Stage 6: reviewer

Check the section's pages against the brief, the taxonomy, and the sources.
You must be from a different vendor than the copywriter.

**Read:** `<run>-brief.md` (the coverage checklist); `<run>-consolidated.md`;
the section's `planning/taxonomy/` file; the pages in
`content/<stage>/<section-slug>/`; `docs/style.md`.

**Check**
1. **Coverage.** Every row of the brief's checklist is answered on its page,
   completely.
2. **Accuracy.** Every factual statement traces to the taxonomy file or the
   consolidated doc, and every link supports the words it's on. Open the links.
3. **Consistency.** Landscape pages match the taxonomy entries exactly; concept
   pages follow the taxonomy's order.
4. **Style.** `docs/style.md`: voice, no rankings, dates, links.
5. **Links across the site.** Search `content/` for plain-text mentions of this
   section ("§<N> <Title>") on other pages, and turn each into a full-path
   wikilink now that the page exists. This is the only edit a run makes
   outside its own folder.
6. **CI.** The command in `AGENTS.md` passes.

**Write:** fix wording, links, and formatting yourself. Don't change facts:
send a factual doubt back on the issue, naming the stage it came from. Then
write `<run>-review.md` (`kind: review`) with the brief's checklist marked
`done` or `open`, what you fixed, and what you sent back.

**Done when:** every checklist row is `done` and CI passes. Tick stage 6, then
open the PR as `docs/agents/README.md` describes.
