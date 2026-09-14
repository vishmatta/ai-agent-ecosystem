# Stage 1: brief writer

Turn one taxonomy section into a research brief that says exactly what the
section's pages need, so research can be judged complete.

**Read:** the section's file in `planning/taxonomy/`; its row in
`docs/content.md` → Section registry (slug, concept tier, Landscape pages); and
`docs/content.md` → Page tiers. If the section already has live pages, read
them too.

**Write:** `<run>-brief.md` (see `docs/agents/README.md`), in this shape:

```markdown
---
title: <Section> research brief
kind: brief
status: new
researched: <YYYY-MM-DD>
by: <tool plus model>
incorporated-in: ""
---

# <Section> research brief

**Section:** §<N> <title> · taxonomy file: `planning/taxonomy/<file>` ·
pages: `content/<stage>/<slug>/`

<Two or three sentences: what the section covers, and what is already known
or live.>

## Questions

<Numbered questions, grouped by page. Each is answerable from primary sources
and specific enough to be checked, e.g. "Which vector databases added native
hybrid search since 2025, and when?", not "Tell me about vector databases".>

## Products to check

<Every Landscape entry in the taxonomy file, to re-verify (status, license,
bucket, official URL), plus the categories to search for new entries.>

## Coverage checklist

| # | Page | Needs | Questions | Status |
|---|---|---|---|---|
| 1 | `index.md`: What beat | definition, cross-references | 1–2 | open |
| … | `<concept>.md` | … | … | open |
| … | `landscape.md` | entries re-verified, new entries found | products | open |
```

**Rules**
- One row per page and per beat: the five narrative beats, each concept item
  in the taxonomy's own order, and each Landscape page. A section whose
  registry row says "never" for concepts gets no concept rows.
- Ask about what the pages need, not everything interesting about the topic.
- Don't answer the questions; research does that.

**Done when:** every page the section will have is in the checklist with at
least one question or check against it. Tick stage 1 on the issue and stop.
