# Contributing

**This repository is not accepting outside contributions in this version.**
Issues and pull requests from anyone other than the owner will not be
reviewed or merged (`planning/site-prd.md` §3). This file exists because
GitHub links it from every new issue and pull request, and because the
classification method below is worth publishing on its own terms, not
because outside changes are wanted right now. A lightweight public version
of this method is also on the site itself, linked from the footer.

This file is the classification method only: how tools and products are
grouped, attributed, and listed. It is not agent or workflow instructions.
Those live in `AGENTS.md` and `docs/`.

## Scope

Applied, deployment-time AI agent tooling: how agents are built,
orchestrated, connected, run, and governed. Training-time concerns and
compliance/regulatory standards are out of scope; the full scope statement
is in `planning/taxonomy/README.md`.

## Formatting rules

- Every product or tool is listed as `Name (Creator)`, with the name linked
  to the product's official page, for example
  `[Antigravity](https://antigravity.google/) (Google)`. Prefer the
  product's own page over the company homepage; a Legacy entry links to its
  shutdown or rebrand notice, or its archived repository. Creator is
  omitted when its name is already contained in the product name (e.g.
  "Microsoft Agent Framework," "Pinecone"). For solo or small-team open-source projects,
  the actual creator's name or handle is used even without a company behind
  it (e.g. "Aider (Paul Gauthier)," "Oh My Pi (can1357)"); `Name (open
  source community)` is reserved for projects with no single identifiable
  creator or maintainer of record.
- Two exceptions to `Name (Creator)`: the Models section uses `Model
  provider → Model line` notation, since it maps model providers to their
  flagship model lines rather than attributing individual products. The
  provider links to its official site and the model line to its model
  family's page, for example
  `[Anthropic](https://www.anthropic.com/) → [Claude](https://claude.com/product/overview)`. Benchmarks are listed by
  name only, without attribution, since academic benchmarks typically have
  multiple co-authoring institutions rather than a single corporate
  creator.
- **Lead with the current name.** An entry uses the product's current
  official name, as the vendor's own product page uses it. A former name
  goes in a sub-bullet ("Formerly …"), never in the entry's name. Check
  the name at the product page, not only a changelog or a news story; a
  brand the vendor has dropped from its product pages is a rename even
  without an announcement.
- No inline notes, dates, or explanations next to an entry. Anything beyond
  bare identification is a nested sub-bullet underneath it, including
  cross-references.
- A tool with a self-hostable open-source core and a hosted commercial
  layer under the same brand name is listed under both Commercial and Open
  Source, with a sub-bullet noting the relationship. A separately branded
  commercial layer (for example Milvus and Zilliz Cloud) is listed as its
  own distinct entry instead.
- **Open Source / Provider-agnostic requires an open-source license and
  genuine multi-provider support.** A tool built specifically for one
  provider's models does not belong in this column even if its code is
  open source; it belongs under Commercial / Proprietary instead.
- **In Models, Open Source / Provider-agnostic means published weights.**
  A model line whose weights anyone can download, so any inference provider
  can serve it, is listed there whatever its model license; an API-only
  line is Commercial / Proprietary. A line with both kinds (for example
  Mistral's open Large and API-only Medium) is listed in both, with a note.
- **Source-available is not open source.** A self-hostable product under a
  source-available license (for example the Business Source License, the
  Server Side Public License, or the Elastic License) is listed under
  Commercial / Proprietary only, with a sub-bullet naming its license. An
  open-source core with a separately licensed enterprise directory stays
  under Open Source, since the core itself is open.
- Each section carries its own Legacy / Decommissioned callout where
  relevant, rather than one global list, so a gap reads as "never in
  scope," not "forgotten."
- **Legacy means the sunset has completed.** A product in an announced
  wind-down stays in its live bucket until the date passes. A product moves
  to Legacy only once its shutdown, rebrand, or end-of-life has actually
  happened, not when it is merely scheduled.
- **A mode folded into a product stays a sub-bullet; a spun-out product
  gets its own entry.** A mode that only exists within a larger product
  (an IDE's fleet-management mode, for example) stays a sub-bullet of that
  product's entry. Once it becomes a genuinely separate product, with its
  own identity and release cadence, it gets its own entry in whichever
  section it now fits, with links both ways.
- **Tools that review agent output are in scope.** A code-review tool, for
  example, is in scope when its positioning ties explicitly to AI coding
  agents, even though it does not itself build, run, or govern an agent.
- Entries with an unverified attribution are flagged `(unconfirmed)` rather
  than guessed.

## What's not published here

The full version-by-version history of this taxonomy stays internal to
this repository's git history and isn't reproduced as a standalone
changelog. What's published is the method above, current as of whenever
this file was last edited, not a record of how it changed.
