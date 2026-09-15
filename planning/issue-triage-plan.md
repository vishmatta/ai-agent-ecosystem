# Plan: issue triage and prioritization for ai-agent-ecosystem

## Context

Issues are this repo's task queue. Several vendors' agents pick work from it in
parallel (`AGENTS.md` → Workflow). Today there is only one rule for choosing
work: take the lowest-numbered open issue without `in-progress` or
`needs-decision`, and skip the blocked or date-gated ones. Nothing ranks one
issue against another. Trackers and issues waiting on a PR still look
available. Type labels are applied inconsistently. This plan makes "what's
next, and why" the same answer whichever agent or person is asking, and keeps
the system small enough for one owner to run.

**How to read this plan.** "Observed" means checked in the repo or on GitHub
on 2026-09-15. "Inferred" is my reading of those observations.
"Recommended" is the proposal. No files, labels or issues have been changed.

---

## 1. Current state

**Observed**
- **Project shape:** a personal, public, static Quartz site. Its goal is the
  owner's own mental model of AI agent tooling, and other readers are
  secondary (`planning/site-prd.md` §2 and §5). It accepts no outside
  contributions (`CONTRIBUTING.md`, PRD §3).
- **Volume and authorship:** 57 issues (45 closed, 12 open) and 56 PRs in
  about three days. All 57 issues were opened by `vishmatta`, so the owner
  and every agent share one account.
- **Labels in use:**
  - Workflow labels: `in-progress`, `needs-decision` and `pipeline`.
  - GitHub's defaults: `bug` (3 issues), `enhancement` (7) and
    `documentation` (2). About 40 issues have no label at all.
  - Seven defaults have never been used: `duplicate`, `invalid`, `wontfix`,
    `question`, `good first issue`, `help wanted` and `accessibility`.
  - No PR carries a label.
- **Stale labels:** #77 closed with `in-progress` still on it, and #98 closed
  with `needs-decision`.
- **Milestones:** none.
- **Projects:** unknown. The token lacks the `read:project` scope, so an agent
  using it can't read a Project either.
- **GitHub's newer issue features:**
  - Issue types: the API returns no `type` field. This is a user-owned repo,
    and issue types are an organization feature.
  - Sub-issues and native dependencies are available but unused (0 on every
    issue).
- **Conventions already in use:**
  - **Waiting, in the first line:** `Blocked by #N` (#29, #60, #75, #77, #78)
    and `Not before YYYY-MM-DD` (#22).
  - **Trackers:** #37 and #57 hold phased checklists, and their child issues
    start with `Part of #37`.
  - **Owner decisions:** recorded as a comment headed "Owner's decisions (date)"
    (#58, #100), with options labelled D1 or V1 and a recommendation each.
  - **Merge gate:** since #112, the task template's `## Merge` section and
    `AGENTS.md` step 5 say whether a PR merges on green or waits for the
    owner's review.
- **Recurring kinds of issue (all 57):**
  - Publishing content: catalog ports #68–#76, pages #8, #16, #59, #61 and #77.
  - Taxonomy changes: #20, #22, #27 and #106.
  - Site features: #7, #10, #15 and #65.
  - CI, build and dependencies: #6, #12, #13, #14 and #46.
  - Process and docs: #23, #31, #33, #48, #102, #108, #111 and #113.
  - Owner decisions: #36, #58, #67, #81, #88, #94, #98, #100 and #113.
  - Trackers: #37 and #57. Pipeline runs: #50. Defects: #11 and #24.
- **Existing priority notions:**
  - PRD §6 defines V1 ("what published means") separately from Later and
    Future work.
  - The trackers order their phases.
  - Nothing defines priority, severity or urgency.
- **What's open now:**
  - #9, #12, #13 and #14 can be worked.
  - #15 and #113 wait on decisions.
  - #22 waits for its date, 2027-05-01.
  - #37 and #57 are trackers.
  - #50 is a pipeline run whose next stage is the owner's.
  - #78's blockers are closed, but its design question is not yet asked.
  - #108 waits on the open PR #110.

**Inferred**
- **Readiness is the real selection problem.** Of the 12 open issues, only 4
  can be worked. Today's rule would still offer #37 (a tracker) and #108
  (waiting on a PR), since neither is labelled or blocked in its first line.
- **Severity barely applies.** There are no end users filing bugs, CI blocks
  most defects before they merge, and a defect's practical weight is whether
  a reader sees it. Accuracy of published facts is the site's core promise.
- **Tools that can't see a Project can't use it.** Any field kept only in a
  Project, Project fields or issue types is invisible to agents using this
  token and to some vendors' tools. Labels and issue text are readable by
  all of them.
- **Effort isn't a useful input.** Nearly every issue is one PR by design
  ("One issue per PR"), and larger work is already split through trackers.

---

## 2. Recommended triage model

### Issue types: exactly one type label per issue

| Type | Use when | Don't use when | Example |
|---|---|---|---|
| `bug` | Something already shipped is wrong: a broken page, link or rendering, a fact on the live site that is no longer true, or a check that passes when it should fail. It takes precedence over every other type. | The thing was never built (use its area type), or it's only a style preference. | #24, a dead Frameworks link. |
| `content` | Pages in `content/`: writing, porting a catalog, links between pages. | The change starts in `planning/taxonomy/` (use `taxonomy`). | #68, porting §4's catalog. |
| `taxonomy` | Entries, categories or statuses in `planning/taxonomy/`, including re-porting the result to pages in the same PR. | A page only needs to catch up with the taxonomy (use `content`). | #106, adding UCP. |
| `site` | How the site renders or behaves: plugins, config, styles, components. | Build, CI or dependencies (use `infra`). | #10, collapsing the Legacy bucket; #15. |
| `infra` | Build, CI checks, deploy, dependencies, formatting. | A check exists to enforce a content rule, and the rule is what's changing (use `process`). | #12, #13, #14. |
| `process` | How people and agents work: `AGENTS.md`, `docs/`, templates, the research inbox. | The site's reader-facing method in `CONTRIBUTING.md` (use `taxonomy`). | #111, #113. |
| `pipeline` (exists) | One section's content-pipeline run (Section template). | Any ad-hoc content work. | #50. |
| `tracker` (new) | Tracks work that spans several PRs through a checklist. Nobody works on it directly. | The work fits one PR. | #37, #57. |

A decision isn't a type. It's a state (`needs-decision`) that any type can
enter and leave. #15 already follows this: "once decided … this becomes a
small task". If an issue could be two area types, pick the area whose files
the PR mostly changes.

### Lifecycle

```
Created → Validated → Triaged → Ready → In progress → In review → Closed
                  ↘ Needs decision ↗       (side states: Blocked, Scheduled)
Trackers stay Open until every item on their checklist is done. They are never Ready.
```

| Stage | Decision point | Information required | Where it lives |
|---|---|---|---|
| Created | Which template? | Goal, Context, Scope, Merge and Done when (task), or the Section fields | The issue body |
| Validated | Is it actionable? The goal must be testable, the scope named, the facts checked at a primary source, the work in scope (PRD §3 non-goals; `CONTRIBUTING.md` → Scope), and not a duplicate. | Anything missing gets named in a triage comment. | A comment |
| Triaged | Which type and priority, and does it belong to a tracker? | The rules in §3 and §4 below | Labels, plus a `Part of #N` line |
| Ready | Can this agent start now? | The eligibility filter in §6 | Derived, no label |
| Blocked / Scheduled | What is it waiting for? | `Blocked by #N` or `Not before` on the first line | The issue body (existing) |
| Needs decision | Is it the owner's call? | Options and a recommendation (`AGENTS.md` step 6) | `needs-decision` plus a comment |
| In progress | Claimed | — | `in-progress` (existing) |
| In review | Merge on green, or the owner's review? | The `## Merge` section | The PR (existing, since #112) |
| Closed | Done, not planned, or duplicate | The PR's `Closes #N`, or GitHub's close reason | GitHub |

**Re-triage triggers:**
- A blocker closes, or a `Not before` date arrives. Re-validate the issue's
  facts too: #22 still points at the retired single-file taxonomy.
- The owner records a decision.
- A fact the issue relies on changes.

---

## 3. Recommended priority model: three levels, plus a stop-the-line rule

Each level maps to a different action for an agent. A separate P0 isn't
recommended: none of the 57 issues would have qualified, and the "everything
stops" case is better detected from CI's state than from a label.

**Stop the line (above priority, not a label).** Any agent checks for these
before choosing work:
- The latest `quartz-build-check` or Deploy run on `main` failed, or the live
  site doesn't load.
- A secret, token or personal email is committed or exposed.
- A vulnerability or compromised action can reach the deploy token or
  visitors.

What happens: fix it first, as a `bug` P1, and tell the owner. **Security
exposures get no public issue with details;** the owner hears about them in
chat or through a private advisory, since this is a public repo.

| Level | Meaning for an agent | Objective criteria (any one qualifies for P1; P3 needs all of its conditions) |
|---|---|---|
| **P1: next** | Pick before any P2. | (a) An open issue names it in `Blocked by`, or it's the next unchecked item gating a tracker's current phase. (b) A reader of the live site sees something wrong: a broken link, page or rendering, or a fact a primary source shows is no longer true. (c) It belongs to the current objective: a tracker the owner has labelled P1. (d) An external date within 30 days would trigger (b) or stop the line. |
| **P2: normal** | Work in order. | Workable and useful, but none of the P1 criteria apply. **The floor for any known security vulnerability.** |
| **P3: later** | Pick only when no P1 or P2 is workable. | Readers see no difference, nothing is blocked on it, there's no deadline, it isn't in the current objective, and it's an improvement rather than a fix (warnings, formatting, optional features). |

**Strategic importance is the owner's one lever.** A tracker's priority label
is the objective's priority. Items in a tracker take the higher of the
tracker's level and their own rule-derived level. An agent never raises a
tracker's level.

---

## 4. Assessment dimensions

| Dimension | Role | Why |
|---|---|---|
| Stop-the-line conditions | **Override** | Main, the deploy and secrets are shared by every agent. |
| Blocking (a) | **Input** | Checkable: other issues' `Blocked by` lines and tracker phases. |
| Visible on the live site, or accuracy (b) | **Input**, and it replaces severity | Accuracy is the site's core value. Internal defects are caught by CI. |
| Current objective (c) | **Input**, owner-set | Comes from the tracker's label, never inferred. |
| Deadline (d) | **Input** | Urgency is only real when there's a date. |
| Security exposure | **Input, with a floor** | P2 at least. It stops the line if it reaches the deploy token or visitors. A "limited exposure" judgment needs the owner. |
| Type | **Separate attribute** | Decides which docs to read and the default merge gate, not priority. |
| Merge gate (review or green) | **Separate attribute** | A PR that waits for review isn't less urgent. Don't conflate the two. |
| Effort / size | **Separate; controlled by splitting** | One issue per PR; anything larger becomes a tracker. No size field. |
| Confidence | **Part of validation** | Unverified facts mean "not ready", or get marked `(unconfirmed)`. They aren't a priority input. |
| Reach, technical debt | **Not used** | Reach: every reader has one audience and one site. Debt shows up as `infra` P3 unless another rule applies. |

---

## 5. Decision procedure and conflicts

**To prioritize one issue:**
1. Check stop-the-line.
2. Go through P1's criteria (a) to (d) in order, and note the first one that
   applies.
3. If a known vulnerability is involved, apply the P2 floor.
4. Check P3's conditions.
5. Otherwise the issue is P2.
6. An owner-set priority, recorded in an "Owner's decision" comment, overrides
   the rules and stays until the owner changes it.

| Conflict | Resolution |
|---|---|
| High impact, not urgent (e.g. #78's governance index) | P2. It rises only if the owner puts its tracker into the current objective. |
| Low impact, urgent (a Node 20 removal date) | P3 until the date is within 30 days, then P1 under (d). Use `Not before` to hold it until then. |
| Large effort, strategically important (the pipeline rollout, #37) | Split it through a tracker. The owner labels the tracker, and the child that gates the next phase gets P1 under (a). |
| Small issue blocking major work (a decision gating a tracker phase) | P1 under (a). For a `needs-decision` issue, that ranks it in the owner's decision queue. |
| Security issue with limited reach (#12: build machine only, by its own account) | P2 floor. The agent records its exposure reasoning and the owner confirms it. It stops the line if it can reach the deploy token or visitors. |
| A fact on the live site becomes false on a known date (#22) | Held by `Not before`. It becomes a `bug` P1 under (b) once the sunset is confirmed. |

---

## 6. GitHub implementation

| Concept | Mechanism | Notes |
|---|---|---|
| Type | **Labels**: `bug`, `content`, `taxonomy`, `site`, `infra`, `process`, `pipeline`, `tracker` | Issue types aren't available on a user-owned repo. |
| Priority | **Labels**: `P1`, `P2`, `P3`, exactly one after triage | Anyone can filter with `gh issue list --label P1`. |
| Status | **Labels** `in-progress` and `needs-decision` (existing), plus derived states | "Has an open PR" and "Ready" are derived, not labelled. |
| Blocked / scheduled | **The first line of the body** (existing) | Works with every vendor's tool. Native dependencies aren't mirrored, since keeping both would let them drift. |
| Objective / grouping | **Tracker issues** plus `Part of #N` (existing), with the tracker's priority label as the objective's priority | Replaces milestones and sub-issues for now. Adopt one of those later, instead of this, only if needed. |
| Merge gate | The issue's `## Merge` section and the PR body (existing) | — |
| Milestones | **Not now** | They would duplicate trackers. Revisit if the owner wants completion tracking per objective. |
| Projects and custom fields | **Not now** | The token can't read Projects, and they'd duplicate labels for one maintainer. |
| Assignees | **Not used** | Everyone shares one account, so an assignee can't show who is working. `in-progress` is the claim. |
| Duplicate / won't fix | **GitHub's close reasons** ("not planned", "duplicate") | Retire the matching labels. |
| Templates | `task.md` and `section.md`, plus a new `config.yml` with `blank_issues_enabled: false` | `task.md` gains a label hint: one type, one priority, `Part of #N` or "Standalone". |
| Label hygiene | Closing removes status labels; optionally a small Action does it | This would fix #77 and #98. |

Retire `enhancement`, `documentation`, `question`, `duplicate`, `invalid`,
`wontfix`, `good first issue` and `help wanted` (open question 2).
`accessibility` is unused; whether to keep it is also open question 2.

---

## 7. Agent decision procedure ("What should I work on next, and why?")

**1. Inspect:**
- Main's latest runs: `gh run list --branch main --limit 3`.
- Open issues: number, title, labels, first line, body and comments.
- Open PRs and the issues they close or reference.
- `docs/triage.md`.

**2. Stop the line** if any of its conditions holds (§3).

**3. Filter to what's eligible for you.** Drop an issue if any of these holds:
- It's a `tracker`, or it has `in-progress` or `needs-decision`.
- It has `Blocked by` an open issue.
- It has a `Not before` date still in the future.
- An open PR closes or references it.
- It's a pipeline issue whose next stage is the owner's gate, or the vendor
  rotation excludes you.
- It needs a capability you lack, such as a browser for sites that refuse
  `curl`.

**4. Triage anything unlabelled first,** using §3–§5, and post a one-line
triage comment for each.

**5. Sort** by priority. Within a level:
- Most issues unblocked first.
- Then the order of the current tracker phase.
- Then the lowest issue number (today's rule, kept as the final tie-break).

**6. Explain**, one line per issue:
- A pick: `#12 → P2 · infra · ready. Rule: security floor (build-only exposure, owner-confirmed). Not P1: blocks nothing, no deadline.`
- A skip, with a reason code: `#108 skipped: PR #110 open` · `#50 skipped: stage 2 is the owner's`.

**An agent may infer:**
- The type, from the files in Scope.
- Blocking, from other issues' first lines and tracker checklists.
- PR linkage.
- Whether a date has arrived.
- Live-site accuracy, once checked at a primary source.
- A priority derived from rules (a), (b) or (d).

**An agent must not assume:**
- The current objective (c) or strategic importance.
- That a request is in scope (PRD non-goals).
- That a security exposure is limited.
- That an issue's facts are still true.
- That a `Blocked by` issue closed as "not planned" means the work is
  unblocked.
- That it may run a stage another vendor must run.

**Ask the owner** (with `needs-decision`, options and a recommendation) when:
- An issue would be closed as out of scope.
- A change would lower a priority the owner set.
- A security exposure is judged limited.
- A type decision changes the merge gate.
- A criterion is ambiguous.

**Missing information:** name the absent template sections, or the unverified
facts, in the triage comment. Fill in anything derivable from the repo, such
as the Merge section from `AGENTS.md` step 5. If the Goal itself is unclear,
ask.

**Worked example on today's queue.** This assumes the owner makes #57 the
current objective, and none of it is applied yet.
- Next for an agent:
  1. **#9** (P1 under (c); last V1 item, PRD §6; merge gate: review).
  2. **#12** (P2, security floor).
  3. **#78** (P2; its first step is posting the design question).
  4. **#13** (P3, unless GitHub has announced a Node 20 removal date within
     30 days; unconfirmed, so the triager checks) and **#14** (P3).
- Next for the owner: review **#110** (unblocks #108), then **#50** stage 2,
  **#113** and **#15**.
- Today's rule would have offered #13 and #14 before #78, and would have
  let an agent try #37.

---

## 8. Documentation and files

| File | Change | Contents |
|---|---|---|
| `docs/triage.md` (new, about 120 lines) | Create | The label table with definitions; readiness states; the priority rules and stop-the-line; the conflicts table; the procedure from §7; the format for triage comments; what agents may and may not decide. It goes in `docs/`, not `.github/`, because `AGENTS.md` routes agents to `docs/` and every vendor's tool reads it there. |
| `AGENTS.md` | Edit | Step 1 becomes "take the next issue per `docs/triage.md` → Picking the next issue". The issue-creation paragraph adds "one type and one priority label". A new row goes in the "Read before you touch" table. |
| `.github/ISSUE_TEMPLATE/task.md` | Edit | The label hint, and `Part of #N` or "Standalone" in its comment. |
| `.github/ISSUE_TEMPLATE/config.yml` | Create | `blank_issues_enabled: false` |
| `docs/agents/README.md` | Edit | One line: a pipeline issue takes its priority from #37. |
| Label descriptions | GitHub data | A one-line definition on each label, matching `docs/triage.md`. |

No `ISSUE_TRIAGE.md`, no PR-template change and no `CONTRIBUTING.md` change.
`CONTRIBUTING.md` is the classification method only.

---

## 9. Implementation phases

- **Phase 0, owner decisions:** the questions below, recorded on a new
  `process` issue.
- **Phase 1, docs:** one PR with the files in §8, left for the owner's review
  because it changes the workflow. Before it merges, dry-run it: agents from
  two vendors, reading only the repo, each answer "what's next and why"
  against today's queue. Any disagreement points to an ambiguous rule.
- **Phase 2, labels:** create the new labels (already approved in general).
  Retire the old ones after the owner confirms, since deletion strips them
  from closed issues. Backfill only the 12 open issues, each with a triage
  comment. Clear the stale labels on #77 and #98.
- **Phase 3, after about two weeks:** check that every open issue has exactly
  one type and one priority (a `gh`/jq one-liner), and tune the rules. If
  stale labels recur, add the Action that removes status labels on close.

**Verification:**
- The CI command passes on the docs PR.
- The two-vendor dry run agrees.
- After the backfill, `gh issue list --label P1` and the rest return the
  expected sets.
- The next few agent sessions give a traceable "why" when they pick an issue.

## 10. Open questions for the owner

1. **Priority levels:** three levels plus stop-the-line (recommended), or four
   with P0?
2. **Labels:** adopt the eight type labels, and retire the eight unused
   defaults (recommended)? Keep `accessibility`, or drop it?
3. **Objective mechanism:** a tracker's priority label (recommended), or
   milestones? Also, is V1 done once #9 merges, and what is the next
   objective (#37's rollout)?
4. **Deadline window** for rule (d): 30 days (recommended)?
5. **Who sets priority:** agents apply rule-derived priority with a triage
   comment, and the owner overrides (recommended), or only the owner?
6. **Owner-action waits** (#50 stage 2, run by hand): keep `needs-decision`
   and broaden its description, or rename it `needs-owner`? A rename touches
   `AGENTS.md` and the docs. Also, #50 doesn't say the owner runs stage 2
   (inferred from the last session), so should it say so?
7. **Security reports:** confirm there should be no public issue for
   exposures, only chat or a private advisory. If so, should the owner
   enable private vulnerability reporting? That's a setting only the owner
   can change.
