# Content authoring

How pages under `content/` are structured. These rules are condensed from
`planning/site-content-plan-v2.md` (cited as "plan §N"). The plan is the
authority. If this file disagrees with it, the plan wins, and fix this file.

## Page tiers

Each taxonomy section (§1–15) becomes up to three tiers of pages (plan §3):

| Tier | `type:` | Holds | When it exists |
|---|---|---|---|
| Narrative | `narrative` | the five What/Why/When/How/Where beats — nothing else | always, one per section |
| Concept | `concept` | one item from the section's concept list | only once its content is written — never stubbed |
| Landscape | `landscape` | the attributed product list, no prose | may be stubbed ahead of content |

Other page types: `home` (site root, the only first-person page — plan §9),
`how-to` (the how-to-use-this-site page), and stage pages
(`content/<stage>/index.md`, no `type:`, rendered as Quartz folder pages).

**Silent omission.** A section with no concept pages yet, or no Landscape,
simply leaves out that frontmatter key. No placeholder, empty slot, or
explanatory note (plan §3).

## Where files go

- Stages: `content/build/`, `content/connect/`, `content/run/`, `content/control/`.
- A section is a folder, `content/<stage>/<section-slug>/`. Its narrative
  page is `index.md` in that folder (served at `/<stage>/<section-slug>/`), and
  its concept and Landscape pages sit beside it. The graph and breadcrumbs
  derive hierarchy from folders, not links, so anything outside that folder
  won't show as the section's child.
- A single Landscape is `landscape.md`. A Landscape split by category has one
  file per category, named with the category's slug, e.g.
  `agent-frameworks/code-frameworks.md`.
- Slugs are descriptive, never numbered (plan §4).
- Links in page bodies: use full-path wikilinks, e.g.
  `[[build/agent-frameworks/index|Agent Frameworks]]` for a section page, or
  `[[build/agent-frameworks/code-frameworks|Code Frameworks]]`. Quartz rewrites every body
  link to a relative path, so the subpath is handled for you. A bare name like
  `[[landscape]]` can resolve to the wrong page once two files share that
  name; a full path can't.

## Section registry

Nav order within a stage follows this table, not taxonomy § order; Connect
deliberately differs (plan §4). "Never" in the concept column means the
section's content lives entirely in its beats and Landscape (plan §3).
Landscape pages split only by the product categories the taxonomy's Landscape
already names. The Commercial / Open Source / Legacy axis is never a reason to
split (plan §3).

| Stage | Nav | § | Section | Slug | Concept tier | Landscape pages |
|---|---|---|---|---|---|---|
| build | 1 | 1 | Agent Harnesses | `agent-harnesses` (live) | never | 1 |
| build | 2 | 2 | Agent Frameworks | `agent-frameworks` (live) | never | 2: Code Frameworks, No-code / Low-code Builders |
| build | 3 | 3 | Orchestration Patterns | `orchestration-patterns` | yes | none — no tooling exists |
| build | 4 | 4 | Models | `models` | never | 1 |
| build | 5 | 5 | Agent Behavior and Configuration | `agent-behavior` (live) | yes | 1 (Guardrails Tools) |
| connect | 1 | 6 | Model Infrastructure | `model-infrastructure` | never | 4: Inference Providers, Model Serving, Model Routers/Gateways/Proxies, Local Inference |
| connect | 1a | — | Cloud AI Platforms hub | `cloud-ai-platforms` | — | cross-links only (plan §8.1) |
| connect | 2 | 7 | Tools and Environment Interfaces | `tools-and-environments` | yes | 4: MCP Registries, Browser Automation, Voice/Multimodal Tools, Generative UI Tools |
| connect | 3 | 9 | Context | `context` | yes | none — no tooling exists |
| connect | 4 | 10 | Memory | `memory` | yes | 1 |
| connect | 5 | 11 | Knowledge and Retrieval | `knowledge-and-retrieval` | yes | 3: Vector Databases, Knowledge Graphs, Semantic Layer Tools |
| connect | 6 | 8 | Agent Communication and Interoperability | `agent-communication` | yes | 1 |
| run | 1 | 12 | Runtime and Execution Infrastructure | `runtime-and-execution` | yes | 1 (Sandboxes) |
| run | 2 | 13 | Agent Operations and Deployment | `agent-operations` | yes | 1 |
| control | — | 14, 15 | _distributed — see the Control mapping below_ |  |  |  |

Build and Run haven't had a reading-order pass yet, so they use taxonomy order
(plan §10). The Explorer doesn't yet follow this order (see
`docs/plugins.md`).

**Slug rule.** Descriptive, never numbered (plan §4). Keep enough words to be
unambiguous across the site, and drop a trailing generic noun (Configuration,
Interfaces, Infrastructure) when the rest stays clear: `agent-behavior`, not
`agent-behavior-and-configuration`. `model-infrastructure` keeps its noun
because `models` is taken. Slugs are permanent URLs, so a new one is the
owner's call.

## Control mapping (§14 and §15)

Control is a hub, not a stage (plan §5). Each item gets one canonical page in
the stage that governs it. The hub links out to those pages and never copies
them.

- **→ Build:** Prompt and instruction governance (sits with Agent Behavior).
  Guardrails and the Behavioral / Model-tool scope policies are already in Build.
- **→ Connect:** Access and Authorization (except Agent identity), Secrets
  management and credential delegation, Prompt-injection defenses, and the
  MCP-specific attack surface. Each brings its own Landscape tools.
- **→ Run:** Rate limiting, and Resource / budget limits. Isolation and Network
  restrictions already moved into §12 in the taxonomy.
- **Stays on the Control hub:** Data Governance, Agent identity (and its
  tools), Audit logs, Human Oversight, the **Policies hub** (Policy instructions
  and Policy enforcement), and all of §15 kept together.

The plan fixes the _stage_ for each moved item, not the section within it.
Picking the section is a `needs-decision` call. "Policies hub" must keep that
exact title so it never collides with Build's "Policies" page.

## Frontmatter

```yaml
title: Agent Behavior and Configuration # required
type: narrative # narrative | concept | landscape | home | how-to (omit on stage pages)
deck: >- # drafted narrative: one-sentence line under the title
deckPending: >- # undrafted: status note, rendered visibly differently. Use one or the other.
tags: [ADE] # only tags from planning/taxonomy/tags.md
concepts: # narrative pages; omit until at least one concept page exists
  - title: Model selection
    note: Model routing — implemented in Connect # one line on its children, or "Single concept, no children"
    href: /build/agent-behavior/model-selection # site-root path; components render it relative
conceptsTotal: 15 # optional "N of M written" footnote; not a settled rule (plan §10)
landscapes: # narrative pages; omit for sections with no tooling
  - title: Harnesses Landscape # "<Section> Landscape", or the category name when split
    href: /build/agent-harnesses/landscape
    stats:
      - { value: 22, label: harnesses catalogued }
```

In `stats`, a product listed in two buckets (e.g. Zed, commercial and open
source) counts once in the total and once in each bucket, so the buckets can
add up to more than the total.

List only concept pages that exist, in the taxonomy's own bullet order.
Position shows relative order, not rank (plan §3).

## Page bodies

**Narrative:** five `###` headings, in order, whose first word is What, Why,
When, How, or Where. The template turns them into accordions by that first
word. Reuse the taxonomy's heading wording. An undrafted beat's body is
`*(not yet drafted)*`. Leave the Landscape and concept lists out of the body;
they come from frontmatter.

**Concept:** one top-level bullet of the section's list. A bundle with
children (e.g. Reasoning strategies → CoT, ReAct…) is one page, with the
children as content on that page.

**Landscape:** three `##` buckets, always all present: Commercial / Proprietary,
Open Source / Provider-agnostic, Legacy / Decommissioned. An empty bucket says
so ("No commercial tools are catalogued in this category yet"). Entries follow
`[Name](url) (Creator)`, the name linked to the official page the taxonomy
entry carries (`docs/style.md` → Links and sources), with notes as nested
sub-bullets. Read the taxonomy's
Formatting rules (`planning/taxonomy/README.md`) before writing entries; they cover dual-listing,
exceptions, and attribution.

**Voice, punctuation, and links:** `docs/style.md`. Its CI rules (no em dashes)
fail the build check.

**Cross-references (→):** many targets move or split in the Control migration.
Check the inventory in plan §7 before writing one. A section with no page yet
is named in plain text (e.g. "§13 Agent Operations and Deployment"), not
linked. A link to a missing page ships as a 404.

**Dates:** each page shows its own last git commit date and read time
automatically, so an edit shows the old date until it's committed.

## Plan index — where the reasoning lives

| Question | Look in |
|---|---|
| Audience, scope, what this site is not | plan §1; `planning/site-prd.md` §3 |
| Word budgets | plan §2 |
| Tier rules, splitting, ordering, visual treatment | plan §3 |
| Nav, slugs, Connect order, tags | plan §4 |
| Control migration, Policies hub | plan §5 |
| What from the taxonomy isn't published | plan §6 |
| Cross-reference inventory | plan §7 |
| Cloud AI Platforms hub | plan §8 item 1 |
| Home page and how-to page | plan §9 |
| Deferred/unspecified details | plan §10 |
| V1 scope vs later | `planning/site-prd.md` §6 |
| Entry conventions, Landscape gap entries | `planning/taxonomy/README.md` → Formatting rules; `planning/taxonomy/open-items.md` |
