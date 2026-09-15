# Issue triage

How an issue gets a type and a priority, and how an agent picks the next
issue to work on. The reasoning behind these rules is in
`planning/issue-triage-plan.md`; this file is the rule.

## Labels

Once triaged, every open issue has exactly **one type label** and **one
priority label**. Status labels are added only when they apply.

| Label | Kind | Use it for |
|---|---|---|
| `bug` | type | Something already shipped is wrong: a broken page, link or rendering, a fact on the live site that's no longer true, a check that passes when it should fail. Takes precedence over the other types. |
| `content` | type | Pages in `content/`: writing, porting a catalog, links between pages. |
| `taxonomy` | type | Entries, categories or statuses in `planning/taxonomy/`, including the re-port to pages in the same PR. |
| `site` | type | How the site renders or behaves: plugins, config, styles, components. |
| `infra` | type | Build, CI, deploy, dependencies, formatting. |
| `process` | type | How people and agents work: `AGENTS.md`, `docs/`, templates, the research inbox. |
| `pipeline` | type | One section's content-pipeline run (`docs/agents/README.md`). |
| `tracker` | type | Tracks work spanning several PRs through a checklist. Never worked directly. |
| `idea` | type | A content idea not yet through intake (`docs/agents/intake.md`). Intake replaces it with one of the types above. |
| `P1` | priority | Next: picked before any P2. |
| `P2` | priority | Normal: worked in order. |
| `P3` | priority | Later: picked only when no P1 or P2 is eligible. |
| `in-progress` | status | Claimed by an agent (`AGENTS.md` step 2). |
| `needs-decision` | status | Waiting on the owner: a decision, or an action only they can take. |

If an issue could be two area types, pick the one whose files the PR mostly
changes. A decision isn't a type: any issue can gain and lose
`needs-decision`.

**Not labels:**
- **Waiting:** an issue's first line (`Blocked by #N`, `Not before
  YYYY-MM-DD`).
- **Grouping:** a tracker plus a `Part of #N` line in each child issue.
- **Merge gate:** the issue's `## Merge` section (`AGENTS.md` step 5).
- **Duplicate or not planned:** GitHub's close reasons.
- Assignees, milestones and Projects aren't used. Everyone works through one
  account, and some agents' tokens can't read Projects.

## Stop the line

Before picking any issue, check:
- The latest Deploy run on `main` succeeded
  (`gh run list -R vishmatta/ai-agent-ecosystem --branch main --limit 3`),
  and the live site loads.
- No secret, token or personal email is committed or exposed.
- No vulnerability or compromised action can reach the deploy token or the
  site's visitors.

If any check fails, fixing it comes first, as a `bug` at P1, and the owner is
told. **A security exposure never gets a public issue with details:** this is
a public repo, so tell the owner directly.

## Priority

**P1** if any of these holds:
- **(a)** An open issue names it in its `Blocked by` line.
- **(b)** A reader of the live site sees something wrong: a broken link, page
  or rendering, or a fact that a primary source shows is no longer true.
- **(c)** It's part of the current objective: an item on a tracker labelled
  `P1`.
- **(d)** An external date within 30 days would cause (b) or stop the line.

**P3** if all of these hold: no reader sees a difference, nothing is blocked
on it, there's no deadline, it isn't part of the current objective, and it's
an improvement rather than a fix.

**P2** otherwise.

Floors and overrides:
- A known vulnerability is never below P2.
- An item on a tracker takes the higher of the tracker's priority and its
  own.
- A priority the owner sets, in an "Owner's decision" comment, overrides
  these rules until the owner changes it.
- **The current objective is the owner's call.** The owner sets it by
  labelling a tracker `P1`. An agent never changes a tracker's priority.

| When | Resolve it like this |
|---|---|
| High impact, but no date and nothing waiting | P2, unless the owner puts it into the current objective. |
| Low impact, but a date is coming | Hold it with `Not before`. It's P1 only when the date is within 30 days and missing it would cause (b) or stop the line; otherwise P3. |
| Large and strategic | Split it: a tracker with one-PR child issues. The owner sets the tracker's priority. |
| Small, but blocking bigger work | P1 under (a). On a `needs-decision` issue, that puts it first in the owner's queue. |
| Security with limited reach | P2 at least. The triage comment says why it can't reach the deploy token or visitors, and the owner confirms. |
| A fact goes stale on a known date | Hold it with `Not before`. Once a primary source confirms the change, it's a `bug` at P1 under (b). |

## Triaging an issue

Whoever opens an issue triages it. Anyone who finds an open issue without a
type or priority label triages it before picking work. Triage again when:
- A blocker closes, or a `Not before` date arrives. Re-check the issue's
  facts too; they go stale.
- The owner records a decision.
- A fact the issue relies on changes.

The steps:
1. **Validate.** Check that:
   - the goal can be tested, the scope names files, and "Done when" can be
     checked;
   - the facts hold up at a primary source;
   - the work is in scope (`planning/site-prd.md` §3; `CONTRIBUTING.md` →
     Scope);
   - it isn't a duplicate.

   Fill in anything the repo answers, such as the Merge section from
   `AGENTS.md` step 5. If the goal is unclear, or the work may be out of
   scope or duplicated, comment with options and add `needs-decision`.
2. **Type:** one label.
3. **Priority:** the first rule that applies.
4. **Comment** one line giving the rule and, where it's close, why it isn't
   the next level up:
   `Triage: P2 · infra. Security floor; build-machine exposure only (owner to confirm). Not P1: blocks nothing, no deadline.`

## Picking the next issue

1. **Check the stop-the-line conditions** above.
2. **List the open issues and PRs:**
   `gh issue list -R vishmatta/ai-agent-ecosystem --state open --limit 100 --json number,title,labels,body`
   and `gh pr list -R vishmatta/ai-agent-ecosystem --state open --json number,title,body`.
3. **Drop what you can't take.** An issue isn't yours to pick if any of these
   holds:
   - it's a `tracker`;
   - it has `in-progress` or `needs-decision`;
   - its `Blocked by` names an open issue;
   - its `Not before` date is still ahead;
   - an open PR closes or references it;
   - it's a `pipeline` issue whose next stage is the owner's gate, or the
     vendor rotation excludes you;
   - it needs something you don't have, such as a browser for sites that
     refuse `curl` (`docs/practices.md`).
4. **Triage** any issue still missing a label. For an `idea` issue, that
   means running intake (`docs/agents/intake.md`).
5. **Sort:** P1, then P2, then P3. Within a level, pick first the issue that
   unblocks the most others, then the next unchecked item on a tracker's
   checklist, then the lowest issue number.
6. **Explain the choice** to whoever you're working for, one line per issue:
   - `#12 → P2 · infra. Picked: highest eligible priority; blocks nothing.`
   - `#108 skipped: PR #110 open.`

   Then claim it (`AGENTS.md` step 2).

## What agents decide, and what they don't

**An agent may decide:**
- The type.
- A priority from rules (a), (b) or (d).
- What blocks what, from first lines and trackers.
- Whether a date has arrived.
- Whether a fact on the site is stale, once checked at a primary source.

**An agent doesn't:**
- Set or change the current objective, or any tracker's priority.
- Lower a priority the owner set.
- Close an issue as out of scope or duplicate. It recommends, and adds
  `needs-decision`.
- Treat a blocker that closed as "not planned" as unblocking the issue. It
  asks instead.
- Rule out a security exposure without saying why. The owner confirms.
- Run a pipeline stage the vendor rotation excludes it from.
