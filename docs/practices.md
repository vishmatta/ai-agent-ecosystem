# Working practices

How to work in this repo, for people and agents. `AGENTS.md` has the rules;
this file has the habits that keep work correct. Each entry is a practice plus
its reason. Add one when a mistake could recur. Don't add incident stories;
git history and PRs already hold those.

## General: these apply in any repo

**Before starting**
- Treat the brief as a hypothesis. Issues and handoff notes go stale, so check
  their claims against the repo before acting on them.
- Diff, don't trust summaries. Given a new version of a document, diff it
  against the old one. Release notes summarize a change; they aren't the change.
- Check external facts at the primary source. For a project's status, read its
  repo's archived flag and README, not only its changelog or homepage.
- Confirm a suspected rename by loading the old product and docs URLs. A
  redirect to the new name settles it, and the new page often says
  "Formerly …".

**While working**
- Commit an input unchanged first, then your changes in separate commits, so a
  reviewer can tell source material from your edits.
- When bumping a version, update the pointers to the current version and leave
  historical citations alone. They record when something happened.
- Don't assume bash or GNU tools. Quote variables, pass arguments as arrays,
  and avoid a bare `=word`, which zsh expands as a command lookup. macOS has
  no `timeout`.
- Don't count on `cd` carrying over between an agent tool's shell calls; some
  reset the directory each time. Use absolute paths or `git -C <dir>`.
- A failed step in an `&&` chain quietly skips everything after it, for
  instance when `git fetch` hits a transient ref-lock error. Check the result
  before assuming the later steps ran.
- Pass markdown to a CLI through a file (`gh issue edit --body-file`), not an
  inline argument. The shell expands backticks and `$` inside it.
- In GitHub markdown, a bullet nested under a numbered item needs three
  spaces of indent, to line up with the item's text. With two, it renders
  flat.
- Check that a PR is still open before rebasing or pushing its branch. The
  owner may have squash-merged it; a rebase then drops the merged commit, and
  new work belongs on a fresh branch from `origin/main`. If the owner merged a
  review PR before answering its questions, apply the answers in a follow-up
  issue and PR.
- In a fork, `gh` picks the `upstream` remote. Pass `-R owner/repo`.
- If GitHub leaves a PR's mergeability unknown, test it locally:
  `git merge-tree --write-tree origin/main <branch>` exits non-zero on a
  conflict.
- Track work that spans several PRs in one issue with a checklist. Each PR
  ticks its items and references the issue without closing it. Remove your
  `in-progress` label when you stop, so the rest doesn't look claimed.

**Before calling it done**
- Check every commit's contents (`git show --stat`) before pushing. A `cp`
  over a `git mv`'d file commits the old contents unless you re-stage it.
- Verify in layers: the local CI equivalent, the rendered result in a browser,
  CI itself, then the live deploy.
- When you check by hand something that can regress (links resolve, counts
  match), make CI check it. The next edit won't repeat your manual check.
- Before trusting a new check, break the thing on purpose and watch the check
  fail. A check that can't fail passes forever.
- A 403 from a link checker doesn't prove a link is dead: some sites refuse
  non-browser clients. Open those in a browser.
- Report failures and your own mistakes plainly, with what you changed.

**Decisions**
- Investigate first, then ask the owner a few questions at once, each with a
  recommendation. Where a sensible default exists, pick it and say so.
- Encode waiting in an issue's first line (`Blocked by #N`,
  `Not before YYYY-MM-DD`) so agents can skip it mechanically.
- Record the owner's answer on the issue before applying it, so the decision
  outlives the chat. A PR that only applies a decision already made can merge
  once CI passes.
- If an answer's issue number and its option text disagree, go by the text,
  and say which issue you applied it to.
- Split an issue's work by approval gate. What the owner has decided goes in
  a PR that merges once CI passes; a rename, a new permanent URL, or a choice
  the owner hasn't made goes in its own PR for review. The decided part then
  doesn't wait on the open one.

**Several agents, several vendors**
- Keep agent instructions in plain files in the repo, and hand work between
  agents through committed files. Then any vendor's agent can run any step,
  and a tool's own features (subagents, custom commands) stay optional
  wrappers, never the only copy.
- Give each agent one step and a clear place to stop. Put an owner gate before
  anything that sets structure or permanent URLs.
- Have a different vendor's model check the work than the one that produced
  it: one vendor's models share blind spots. Agreement between models still
  isn't evidence; a primary source is.
- A tool that can't see the repo needs a self-contained brief. Paste in what it
  needs rather than pointing at files.

**Keeping context lean**
- Keep always-loaded instructions short. Put detail in docs read on demand, and
  read large specs by section. Issues are the task queue. Personal preferences
  belong in an agent's memory, not the repo.
- Write rules, not history: one line and a reason per practice.
- Before compacting or ending a session, move anything worth keeping into the
  repo, an issue, or memory. The handoff note then carries only what's in
  flight: current state, and what waits on whom.
- Start a new phase in a fresh session once the repo describes it fully. It
  costs little, and it tests that the docs stand on their own.

## This repo

- Repository settings (the branch ruleset, the Pages source) belong to the
  owner. Say what to change; don't change them through the API.
- Refer to a page that doesn't exist yet in plain text, not a link. A wikilink
  to a missing page ships as a 404.
- These official sites refuse `curl`, so check their links in a browser:
  openai.com, chatgpt.com, devin.ai, perplexity.ai, sema4.ai,
  developer.meta.com, atscale.com, hashicorp.com, snowflake.com, x.ai,
  microsoft.com, ai21.com, windsurf.com, aws.amazon.com. For the facts
  behind a link, the vendor's docs site or Hugging Face org usually answers
  `curl`. Many docs sites also publish `/llms.txt` (an index of every page)
  and a `.md` version of each page, e.g. docs.snowflake.com and
  docs.databricks.com.
- When a Landscape category opens, check every vendor on the Cloud AI
  Platforms hub for a matching service, not only the ones the proposal
  listed. A per-vendor sweep misses services that sit outside the vendor's
  agent docs.
- When porting a catalog (a taxonomy Landscape onto its page), check each
  entry at its primary source. If an entry's status, name, or maker has
  changed since the taxonomy recorded it, leave the entry as the taxonomy has
  it, report the finding on the issue, and leave the PR for the owner's
  review. The taxonomy is the authority, so correcting it is the owner's
  call. A port with no findings merges once CI passes.

### Changing the taxonomy

The taxonomy is `planning/taxonomy/`, one file per section. For any change:

1. If the owner supplies edited text, diff it against the committed file and
   commit it unchanged first. Corrections go in a later commit.
2. Edit only the section files the change needs. Entries follow
   `CONTRIBUTING.md`.
3. Add a dated entry to each changed file's `## Changelog`, saying what changed
   and why (what was corrected, left out, or verified). One heading per date:
   if today already has one, add to it.
4. Re-port every changed section that has a live page (the registry's
   `(live)` rows in `docs/content.md`), covering its beat headings and text
   and its Landscape stats.
5. Check new `→` cross-references against the site plan's §7 inventory.
6. If sections or Landscape categories were added, renamed, or split, update
   the section map in `planning/taxonomy/README.md` and the list in
   `planning/research/PROMPT.md`, and bump that list's "as of" date. Chat
   research tools only see that copy.
