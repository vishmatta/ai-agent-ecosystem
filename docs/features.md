# Feature requests

How a request for a capability of the project itself becomes issues. The
content lane (`docs/agents/intake.md`) covers what the site *says*; this file
covers what the project *offers*: how it behaves, what it exposes, and what
other tools can do with it.

**Every request gets an issue, whatever anyone expects the answer to be.** The
issue holds the request, its evaluation and the owner's decision, so a "no" is
as traceable as a "yes", and a request that comes back a year later meets its
own history.

## Is it a feature request?

| The request | Lane |
|---|---|
| A Landscape entry, a concept, a correction, a new category or section | A content idea: `docs/agents/intake.md` |
| A capability the project doesn't have: an integration, a feed, an API, a surface other tools consume, a new way readers or contributors interact with the project | A feature request: this file |
| A fix to something that already works, or a change to how an existing page renders or builds | An ordinary task issue: `docs/triage.md` |

A feature request adds something the project doesn't do today, and the owner has
to want it before it's worth scoping. A better version of something already
shipped is a task or a `bug`, not a feature request.

## The lifecycle

| # | Stage | Who | Produces | Then |
|---|---|---|---|---|
| 1 | Capture | whoever hears the request | an issue from `.github/ISSUE_TEMPLATE/feature.md`, labelled `feature` and a priority | evaluate it, or leave it for the next agent |
| 2 | Evaluate | an agent | the issue's `## Evaluation`, plus `needs-decision` | **stop; the owner decides** |
| 3 | Decide | the owner | an "Owner's decision" comment, written into `## Decision` | accepted: split it; declined or deferred: close it |
| 4 | Split | an agent | one child task issue per story | the children are picked by normal triage |
| 5 | Close | whoever ticks the last story | the feature issue closed as completed | — |

A `feature` issue is never worked directly, like a `tracker`. The work lives in
its children, so a PR closes a child issue, never the feature issue.

## Personas

Stories name one of these. A story that needs a persona outside this table is a
sign the request belongs in another lane, or that the table needs a row and the
owner's agreement.

| Persona | Who they are |
|---|---|
| **Reader** | Someone browsing the published site. |
| **Owner** | The person maintaining the taxonomy, the site and this repo. |
| **Agent** | An AI agent working this repo through the issue queue. |
| **Integrator** | An external tool, client or script consuming the project: an MCP client, a feed reader, another site. |

## Writing the stories

- **`## Summary` is the epic:** one or two sentences naming the capability, not
  the implementation.
- **One to four stories**, each `**As a** <persona>, **I want** <capability>,
  **so that** <benefit>.`
- **Acceptance criteria are Given/When/Then**, and observable from outside:
  something a reviewer can run, load or look at. "The code is clean" isn't one;
  "Given the site is deployed, when a client requests `/feed.xml`, then it
  returns 200 and validates" is.
- **Each story is one PR.** If a story needs two, it's two stories. This is what
  makes step 4 mechanical: one story, one child issue.
- **Don't design it in the story.** The evaluation says what it would touch; the
  child issue's Scope names files.

## Evaluating a request

Fill in every field of `## Evaluation`. Where a fact decides something, check it
at a primary source and link it (`docs/practices.md` → Before starting).

- **Scope fit:** against `planning/site-prd.md` §3 (non-goals) and §6 (V1 vs
  later), and `CONTRIBUTING.md` → Scope. Quote the line it runs into, if any. A
  request that contradicts a non-goal isn't declined by an agent: say which
  non-goal, and let the owner say whether it still holds.
- **Duplicates or overlap:** search open *and* closed issues
  (`gh issue list -R vishmatta/ai-agent-ecosystem --state all --search "<keywords>"`).
  A declined request that returns is a signal, not a duplicate to close: link it,
  and check its `## Decision` for what would reopen it.
- **What it would touch:** the areas and files, and anything outside the repo —
  a host, a domain, a secret, a GitHub setting. Call out what only the owner can
  do; repository settings and hosting are theirs (`docs/practices.md` → This
  repo).
- **Cost and risk:** what it costs to run and to keep working. Hosting, a secret
  to rotate, an interface to version, content licensing (`LICENSE-CONTENT`),
  abuse and security surface, and what breaks when the taxonomy changes shape.
- **Alternatives:** the cheaper thing that gets most of the benefit, and doing
  nothing.
- **Recommendation:** accept, decline or defer, in a couple of sentences, with
  the reason. A recommendation is not a decision.

Then add `needs-decision`, comment one line saying the evaluation is ready, and
stop. **An agent never accepts or declines a feature request** (`AGENTS.md` step
6), and never drops one because it looks unlikely: the record is the point.

## Recording the decision

The owner answers in a comment. Whoever acts on it copies the answer into
`## Decision` before any work starts, with the date and the rationale
(`docs/practices.md` → Decisions).

| Decision | What happens |
|---|---|
| **Accepted** | Remove `needs-decision`. The issue stays open as the record and is split into child issues. |
| **Declined** | Close as **not planned**. `## Decision` says why, and what would change the answer. The `feature` label stays; the closed issue is the record. |
| **Deferred** | Close it the same way, saying what would reopen it: a date, a milestone, a second request. Keep it open only if the owner gives it a `Not before YYYY-MM-DD` first line, which makes triage skip it until the date arrives. |

A decision is never deleted or rewritten. If the owner changes their mind,
reopen the issue and add a dated line under the old one. The section is a
history, not a status field.

## Splitting an accepted request

1. One child task issue per story (`.github/ISSUE_TEMPLATE/task.md`), titled
   after the story.
2. Under Context: `Part of #<feature issue>`, and the story itself. Where the
   stories are ordered, give the later ones a `Blocked by #N` first line.
3. The story's acceptance criteria become the child's "Done when" checkboxes,
   plus `quartz-build-check`.
4. Triage each child on its own (`docs/triage.md`): its own type — `site`,
   `infra`, `content`, `process` — and its own priority.
5. List the children in the feature issue's `## Work` checklist, tick each as it
   closes, and close the feature issue as completed when they're all ticked.

Anything the feature needs that no story covers is another child issue, not a
commit that rides along.

## Priority

A `feature` issue's priority is how urgently the **decision** is needed, not how
big the feature is. Most are P3 by `docs/triage.md` → Priority: nothing is
blocked on them, no reader sees a difference, no date. They move up when the
owner puts the request into the current objective, or when a date makes them P1
under rule (d). The work's priority is the children's, set when they're created.
