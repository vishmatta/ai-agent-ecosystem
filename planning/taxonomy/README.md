# AI Agent Ecosystem and Technology Stack

**Scope:** applied / deployment-time AI agent tooling — how agents are built, orchestrated, connected, run, and governed. Training-time concerns (fine-tuning, RLHF, dataset curation, distributed training infra) are explicitly out of scope. Compliance and regulatory standards (e.g. EU AI Act, NIST AI RMF, ISO 42001) are also out of scope — §14's data retention, approval, and audit entries are operational policy levers an organization implements, not the standards themselves.

The taxonomy is authoritative for structure and entries: which sections and
Landscape categories exist, what each lists, where each product is placed, and
in what order. The site (`content/`) owns the prose built from it.

## Files

One file per section, so a change to one section never touches another.

| Stage | § | Section |
|---|---|---|
| Build | §1 | [Agent Harnesses](01-agent-harnesses.md) |
| Build | §2 | [Agent Frameworks](02-agent-frameworks.md) |
| Build | §3 | [Orchestration Patterns](03-orchestration-patterns.md) |
| Build | §4 | [Models](04-models.md) |
| Build | §5 | [Agent Behavior and Configuration](05-agent-behavior-and-configuration.md) |
| Connect | §6 | [Model Infrastructure](06-model-infrastructure.md) |
| Connect | §7 | [Tools and Environment Interfaces](07-tools-and-environment-interfaces.md) |
| Connect | §8 | [Agent Communication and Interoperability](08-agent-communication-and-interoperability.md) |
| Connect | §9 | [Context](09-context.md) |
| Connect | §10 | [Memory](10-memory.md) |
| Connect | §11 | [Knowledge and Retrieval](11-knowledge-and-retrieval.md) |
| Run | §12 | [Runtime and Execution Infrastructure](12-runtime-and-execution-infrastructure.md) |
| Run | §13 | [Agent Operations and Deployment](13-agent-operations-and-deployment.md) |
| Control | §14 | [Security and Governance](14-security-and-governance.md) |
| Control | §15 | [Observability and Evaluation](15-observability-and-evaluation.md) |

Also: [tags.md](tags.md) (the tags pages may use), [open-items.md](open-items.md)
(undecided questions), and [changelog.md](changelog.md) (history up to the
split).

## Versions

Until 2026-09-13 the taxonomy was one file, versioned by filename (last:
`ai-agent-ecosystem-v2.19.md`). It no longer has a version number: each file
records its own changes in its `## Changelog`, and git history is the full
record. To change the taxonomy, follow "Changing the taxonomy" in
`docs/practices.md`.

## Formatting rules

Classification and entry conventions (the `Name (Creator)` discipline,
attribution exceptions, dual-listing, Legacy timing, and the rest) live in
`/CONTRIBUTING.md`, the repo's single published copy. Read that before
writing or editing entries.

Two rules stay here because they're internal document structure, not part
of the classification method itself:

- Numbering flows in one continuous sequence through Build → Connect → Run → Control — no duplicate section numbers between legend and body.
- All fifteen sections follow a standard five-part `###` sub-header shape: **What** (definition, plus cross-references to concepts a reader might confuse it with), **Why** (the problem this category solves), **When** (decision criteria for reaching for it, including relevant risk factors), **How** (how it's used in practice), **Where** (which direction the category is heading) — followed by a `### <Section> Landscape` sub-header holding the Commercial/Open Source/Legacy product lists (see site-content-plan-v2.md §3 for the site-level rationale). Narrative content is drafted only where the section has been worked through in full (currently §1 and §2); elsewhere the five headers stand as placeholders marked *(not yet drafted)*, with existing concept material sitting between the headers and the Landscape link — a Landscape header can also carry an honest "no dedicated tooling" note rather than a product list, where that's genuinely true (e.g. Orchestration Patterns, Context). This is the default shape, not a loose per-section improvisation; deviate only when a section genuinely doesn't fit one of the five beats.
