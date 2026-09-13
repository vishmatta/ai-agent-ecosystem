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

**While working**
- Commit an input unchanged first, then your changes in separate commits, so a
  reviewer can tell source material from your edits.
- When bumping a version, update the pointers to the current version and leave
  historical citations alone. They record when something happened.
- Don't assume bash. Quote variables, pass arguments as arrays, and avoid a
  bare `=word`, which zsh expands as a command lookup.
- In a fork, `gh` picks the `upstream` remote. Pass `-R owner/repo`.

**Before calling it done**
- Check every commit's contents (`git show --stat`) before pushing. A `cp`
  over a `git mv`'d file commits the old contents unless you re-stage it.
- Verify in layers: the local CI equivalent, the rendered result in a browser,
  CI itself, then the live deploy.
- Report failures and your own mistakes plainly, with what you changed.

**Decisions**
- Investigate first, then ask the owner a few questions at once, each with a
  recommendation. Where a sensible default exists, pick it and say so.
- Encode waiting in an issue's first line (`Blocked by #N`,
  `Not before YYYY-MM-DD`) so agents can skip it mechanically.

**Keeping context lean**
- Keep always-loaded instructions short. Put detail in docs read on demand, and
  read large specs by section. Issues are the task queue. Personal preferences
  belong in an agent's memory, not the repo.
- Write rules, not history: one line and a reason per practice.

## This repo

- Repository settings (the branch ruleset, the Pages source) belong to the
  owner. Say what to change; don't change them through the API.
- Refer to a page that doesn't exist yet in plain text, not a link. A wikilink
  to a missing page ships as a 404.

### Taxonomy version bump

When the owner supplies a new `planning/ai-agent-ecosystem-v*.md`:

1. Diff it against the committed version.
2. Commit it unchanged, deleting the old file in the same commit, so
   `planning/` holds exactly one taxonomy file. Corrections go in a later
   commit.
3. Bump the live version pointers in `planning/site-content-plan-v2.md` (the
   header, the §4 Tags note, §8 item 4). Leave historical citations.
4. Re-port every changed section that has a live page (today: §1 and §5),
   covering its beats and its Landscape stats (see `docs/content.md`).
5. Check new `→` cross-references against the site plan's §7 inventory.
6. Add a changelog entry to each planning doc you touched.
