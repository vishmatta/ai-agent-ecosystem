# AI Agent Ecosystem Site — Product Requirements

*This PRD deliberately doesn't restate what's already owned elsewhere: audience is `site-content-plan-v2.md` §1, page architecture and navigation are the rest of that doc, and content organization is `ai-agent-ecosystem-vX.X.md` itself. This document exists for the four things those two didn't have: goals, non-goals, success criteria, and a prioritized MVP.*

## 1. Problem

Building real understanding of AI agent ecosystem tooling requires tracking a large, fast-moving set of concepts, products, and how they relate — more than fits in a single mental pass, and more than a static personal doc can keep organized as it grows. A taxonomy document was built to impose real structure on that space (Build → Connect → Run → Control, fifteen sections, a consistent five-part narrative template). That document has outgrown what a single markdown file can present well — it needs a browsable home that makes the structure itself navigable, not just readable top to bottom.

## 2. Goals

- Build and externalize a durable personal mental model of how AI agent ecosystem tooling fits together, as it's actually being learned — not after the fact.
- Make lookup fast: find a concept, a tool, or a category without reading past what's irrelevant to that lookup.
- Support genuine incremental growth — narrative, concept, and Landscape content all accumulate over time, not as a one-time publish.
- Be useful to other builders/learners who encounter it, as a secondary benefit of the above — never a primary design driver (see `site-content-plan-v2.md` §1 for the full reasoning).

## 3. Non-goals

- **Not a comprehensive, industry-authoritative reference.** Incompleteness at any given time is expected and stated on the home page, not something to apologize for or rush to close.
- **Not designed around a cold-reader or recruiter audience.** Usable by them incidentally; never the reason a decision gets made.
- **Not covering AI Transformation, adoption, or change-management content.** Decided as its own future site, on voice/genre grounds — this site is reference-style and neutral, that content is naturally narrative and opinionated. See `site-content-plan-v2.md` §1 for the full reasoning; revisit only if that content turns out to want the same reference-catalog shape (e.g. a taxonomy of adoption frameworks) rather than narrative writing.
- **Not a blog or general opinion platform, in this version.** A future "Blog" nav slot has already been anticipated in draft nav work, but it's explicitly future, not MVP.
- **Not accepting public contributions or feedback in this version.** The idea of eventually taking issues/PRs on a public repo has been noted as an internal, undecided consideration — not promised anywhere on the site, not built now.

## 4. Success criteria

Draft starting points — tune the specifics, the shape is the point:

- **Lookup speed:** a specific tool or concept you already know the name of should be findable in a handful of seconds, not a scroll-and-search.
- **Orientation speed:** someone new to the site should grasp the Build → Connect → Run → Control shape well enough to guess which stage a random concept belongs to, within a few minutes on the home page and how-to-use page.
- **No dead ends:** every page a reader can land on has a next step (a concept, a Landscape, a cross-reference) — nothing is a structural dead end even where content itself is still thin.
- **Consistency under growth:** a new page added six months from now looks and behaves like one added on launch day, without manual restyling — this is the actual test of whether the template layer (`site-content-plan-v2.md`, Next Step item 5) did its job.

## 5. Audience

One line, not re-derived: the author, first and primarily, learning the space in real time; other builders and learners secondarily and incidentally. Full reasoning lives in `site-content-plan-v2.md` §1.

## 6. Scope: V1 vs. later

**V1 (what "published" means):**
- The core taxonomy structure live and navigable — all fifteen sections present, even where narrative content is still placeholder.
- The three-tier page architecture (narrative / concept-grouping / Landscape) actually built and templated, not hand-styled per page.
- Home page and how-to-use-this-site page, both drafted.
- The Control migration physically done, with the wikilink inventory verified against it.
- At minimum, §1's fully-drafted narrative content live as the proof the template and the writing approach both work end to end.

**Later (real work, doesn't block V1):**
- Narrative content for the remaining fourteen sections.
- Bullet reordering (high-level → niche) for sections beyond §5.
- Concept-page and Landscape-page content beyond what's needed to prove the pattern.
- Landscape gap entries (Web Search tools, Structured outputs tooling, OpenTelemetry, expanded agent identity standards, two orchestration patterns, agent benchmarks).
- The full mechanical/spec-gap backlog already tracked in `site-content-plan-v2.md` §10.

**Explicitly future, not "later" — separate efforts entirely:**
- The AI Transformation site.
- The Blog nav slot.
- Any public-contribution mechanism.

## 7. Dependencies & open risks

- **Template layer is a prerequisite, not a parallel track.** Building pages by hand before the five reusable components exist means redoing that work later — sequence matters here.
- **Content-writing pace is the main risk to a good first impression.** Mitigated by the home page's own living-document framing, which sets the expectation explicitly rather than leaving a thin site to speak for itself.
- **Wikilink integrity during the Control migration** — inventory is now complete and verified (`site-content-plan-v2.md` §7), but the actual migration is still physical work that hasn't happened yet.

## 8. References

- `ai-agent-ecosystem-vX.X.md` — canonical taxonomy content and structure (always the current version; check the listing for the latest)
- `site-content-plan-v2.md` — site architecture, page templates, navigation, and the full decision log

## Changelog

**2026-09-09 — v1 draft**
- Initial PRD drafted, sequenced deliberately after the AI Transformation scope conversation so non-goals could be written with real content rather than left as a placeholder
