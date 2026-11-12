# Writing style

How the site's pages (`content/`) read. Every copywriter follows this, person
or agent, whatever the vendor. Planning docs aren't covered. Rules marked
**CI** are enforced by `.github/scripts/check-content.mjs`, so a page
that breaks them can't merge; the rest are for writers and reviewers.

## Voice

- Neutral reference style on every page except the home page, which is first
  person (plan §9), and playbooks (below).
- On the reference tiers (everything except playbooks): describe; don't rank or
  recommend. No "best", "leading", "powerful", or "use this if". Selection
  criteria are fine; verdicts aren't.
- On the reference tiers, every fact comes from the taxonomy
  (`planning/taxonomy/`) or from reviewed research. A copywriter adds words,
  not facts.
- On playbooks, the call is the point: "reach for X over Y when Z" is allowed
  there and nowhere else. A call is stated with its situation and where it
  breaks down, never as a general ranking of products, and it is as strong as
  its `evidence` grade and no stronger. Facts about products inside a playbook
  follow the reference tiers' rules.
- Word budgets: stage intros roughly 60 to 80 words, and the Control hub
  framing 200 to 300 (plan §2).
- *Owner to add: tone, sentence length, and two or three sample paragraphs
  that sound right.*

## Punctuation and mechanics

- **CI: no em dashes (—).** This covers prose, frontmatter (`deck`,
  `deckPending`), and Landscape notes. Use a comma, colon, parentheses, or a
  new sentence, whichever the sentence needs.
- En dashes are fine for ranges (60–80), and so is "60 to 80".
- Dates in prose: "June 19, 2026". Use month and year when the day isn't known.
- Product names are spelled the way the taxonomy spells them.
- Name a section that has no page yet in plain text ("§10 Memory", until its
  page exists). Link it once the page exists (see `docs/content.md`).
- *Owner to add: further mechanical rules. Each one that needs no judgment
  should also become a CI rule.*

## Links and sources

Cite by linking the words a claim is about, never with a list of sources at
the end of a page.

- **Landscape pages:** each product's name links to its official page, e.g.
  `[Antigravity](https://antigravity.google/) (Google)`. Prefer the product's
  own page over the company homepage. A discontinued product links to its
  shutdown announcement or its archived repository.
- **Narrative and concept pages:** link the specific claim (a release, a
  rename, a license, a shutdown, a date) to the primary source that shows it.
  Plain definitions and explanations need no link.
- **Primary sources only** (reference tiers): the vendor's own page, docs,
  repository, or announcement. Not blogs, reviews, or rankings.
- **Playbooks:** a claim about a product still takes the rule above. The claim
  a playbook adds, that an approach worked, is sourced by its grade: `lived`
  names the project and outcome; `observed` links the talk, video, or
  post-mortem at that claim, which is the primary source for "this team
  reported this outcome"; `derived` links the docs or behaviour it was
  inferred from. Anything else is not a source for the claim.
- External links are markdown links over `https`, with no tracking
  parameters. Links between pages are full-path wikilinks
  (`docs/content.md`).
- Source URLs for Landscape entries belong in the taxonomy entries too, so
  the site and the taxonomy agree.
