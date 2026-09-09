# AI Agent Ecosystem Site

A Quartz-based reference site for the AI agent ecosystem taxonomy. The full
specification lives in `planning/` and is imported below — read it before
proposing structure, naming, or page-template changes, since most of those
decisions are already made and recorded there.

## Specification

@planning/ai-agent-ecosystem-v2.11.md
@planning/site-content-plan-v2.md
@planning/site-prd.md

## Visual spec

Not imported (HTML, not markdown) — read directly when working on templates or styles:

- `planning/agent-harnesses-page-example.html` — narrative page, drafted
  narrative + no concept tier
- `planning/agent-behavior-page-example.html` — narrative page, undrafted
  narrative + populated concept tier

Together they are the literal spec for the page template: shared design tokens,
five-beat accordions, the concept-grouping list, the Landscape card, and the
silent empty-state rule for both lower tiers.

## Maintenance

The taxonomy import is version-pinned by filename. When the taxonomy doc is
bumped (e.g. `v2.11` → `v2.12`), update the `@planning/...` line above in the
same commit, or the import silently stops resolving.
