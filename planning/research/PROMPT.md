# Research brief

A self-contained brief for any research tool, from any vendor: a coding agent
with access to this repository, or a chat research product that can't see it.
Paste everything below the line, then either paste a section brief (a
pipeline run's `planning/research/<run>-brief.md`, see `docs/agents/`) or fill
in a one-line topic for ad-hoc research.

---

**Brief:** <paste the section brief here, or a topic, e.g. "agent memory tooling, 2026">

You are researching for a taxonomy of AI agent tooling: how agents are built,
orchestrated, connected, run, and governed. A brief asks two kinds of thing:
**questions** (for the pages that explain a section) and **products** (for its
Landscape of tools). Answer every question and check every product it lists.
A bare topic asks for products only. Out of scope:
training-time tooling (fine-tuning, RLHF, dataset curation, training infra) and
compliance standards (EU AI Act, NIST AI RMF, ISO 42001).

## Output

Return one markdown file in exactly this shape:

```markdown
---
title: <topic or section>
kind: research
status: new
researched: <YYYY-MM-DD>
by: <tool plus model, e.g. "Perplexity Deep Research" or "Codex, <model>">
incorporated-in: ""
---

# <topic>

<One paragraph: what this category is and which taxonomy section it belongs to.>

## Answers

<Only when the brief has questions. One subsection per question, numbered as
in the brief.>

### <N>. <the question>
<The answer in plain, neutral sentences. Link each claim to the primary source
that shows it (official docs, specifications, papers, the vendor's own
announcement). Give an "as of" date for anything likely to change. Mark
anything you couldn't verify (unconfirmed).>

## Products

### <Name (Creator)>
- **What it is:** one neutral sentence on what it does.
- **Proposed placement:** §<N> <section> → <Landscape category, if the section has them> → <bucket>
- **License and status:** <license; active, archived, or sunset (with date)>
- **Primary source:** <URL of the product's own page, docs, or repository; it becomes the entry's link>
- **Confidence:** confirmed, or (unconfirmed) with what you couldn't verify

## Doesn't fit

<Products that fit no section, and why. Don't force a placement.>

## Sources

<Every URL you used.>
```

## Rules

- **Evidence is primary sources only:** the vendor's site, docs, repository,
  changelog, or official announcement. Blogs, reviews, rankings, and listicles
  are leads to follow, not evidence.
- **Check status, not just existence.** For open source, check whether the
  repository is archived and read the top of its README for sunset notices.
  Check for renames, acquisitions, and shutdowns in the past year.
- **Neutral voice.** Describe; don't rank or recommend. No "best", "moat", or
  "use this if".
- **Naming:** `Name (Creator)`. Omit the creator when its name is already in
  the product's name (Google ADK, Pinecone). For a solo or small-team open
  source project, use the person's name or handle.
- **Buckets:**
  - *Open Source / Provider-agnostic* needs both an OSI open-source license and
    real support for more than one model provider. Source-available licenses
    (e.g. Sustainable Use, Elastic) don't count, and a single-provider SDK goes
    under Commercial even if it's MIT-licensed.
  - *Commercial / Proprietary* is everything else.
  - *Legacy / Decommissioned* is only for completed shutdowns. An announced
    wind-down stays in its live bucket, with the date noted.
  - An open-source core with a hosted layer under the same brand is listed
    under both. A separately branded commercial layer is its own entry.
- **Don't invent.** If you can't find a primary source, mark the item
  (unconfirmed) or leave it out.

## Taxonomy sections (as of 2026-09-15)

Landscape categories are in parentheses. A section without them has one flat
Landscape.

- **Build:** §1 Agent Harnesses (finished agent products you use, coding or
  general-purpose) · §2 Agent Frameworks (Code Frameworks; No-code / Low-code
  Builders) · §3 Orchestration Patterns (no tooling) · §4 Models (model
  provider → model line) · §5 Agent Behavior and Configuration (Guardrails
  Tools)
- **Connect:** §6 Model Infrastructure (Inference Providers; Model Serving;
  Cloud AI Platforms; Model Routers, Gateways and Proxies; Local Inference) ·
  §7 Tools and Environment Interfaces (MCP Registries; Tool Gateways; Browser
  Automation; Voice / Multimodal Tools; Generative UI Tools) · §8 Agent
  Communication and Interoperability (Protocols; Agentic Payments) · §9
  Context (no tooling) · §10 Memory (Memory Tools) · §11 Knowledge and
  Retrieval (Vector Databases; Managed Retrieval Services; Knowledge Graphs;
  Semantic Layer Tools; Document Parsing Tools)
- **Run:** §12 Runtime and Execution Infrastructure (Sandboxes) · §13 Agent
  Operations and Deployment
- **Control:** §14 Security and Governance (Agent Identity Tools; Agent
  Governance Tools; Secrets Management Tools; Prompt-Injection Defense Tools)
  · §15 Observability and
  Evaluation (Observability Tools; Evaluation Tools; Code Review Tools;
  Benchmarks)

## If you can work in the repository

- Read `CONTRIBUTING.md`, and the file in `planning/taxonomy/` for each
  section you propose placements in. Where it differs from this brief, it
  wins. Note products it already lists rather than proposing them again.
- Save the file as `planning/research/YYYY-MM-DD-<topic-slug>.md`, adding
  `-<tool>` before `.md` if another tool may research the same topic. Write
  nothing else in the repository.

## If you can't

Return the file as a single markdown block. The owner saves it to
`planning/research/`.
