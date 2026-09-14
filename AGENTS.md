# AI Agent Ecosystem site

A Quartz 5 static site publishing a taxonomy of AI agent tooling: Build → Connect
→ Run, plus Control as a cross-cutting hub. Live at
https://vishmatta.github.io/ai-agent-ecosystem/ — every merge to `main` deploys.

## Repo map

| Path | What it is |
|---|---|
| `content/` | The site's pages: markdown + frontmatter. Everything here is published. |
| `plugins/agent-ecosystem-*/` | This site's own Quartz plugins: page template, components, graph. |
| `quartz.config.yaml` | Site config: plugins, layout, theme, Explorer order. |
| `quartz/styles/custom.scss` | Design tokens and shared template styles. |
| `planning/` | The spec: site plan, PRD, two HTML mockups. Read on demand — see below. |
| `planning/taxonomy/` | The taxonomy, one file per section. Authoritative for structure and entries; the site owns the prose. |
| `planning/research/` | Research notes awaiting review, or kept as a record. Unverified input, never spec. |
| `.github/` | `build-check.yml` (required PR check), `deploy.yml` (Pages deploy), `scripts/verify-build.mjs`. |
| rest of `quartz/`, `quartz.config.default.yaml`, `Dockerfile`, `CODE_OF_CONDUCT.md` | Vendored upstream Quartz. Don't read or edit. |

## Commands

```bash
npm ci                   # once per checkout — each git worktree needs its own
npx quartz build         # output in public/ (there is no `npm run build`)
# What CI runs. Run it before every PR — Quartz can exit 0 on a broken build:
node .github/scripts/check-content.mjs content && (set -o pipefail; npx quartz build 2>&1 | tee quartz-build.log) && node .github/scripts/verify-build.mjs quartz-build.log public
# Dev server. Other agents may hold the default ports; pick free ones:
npx quartz build --serve --port 8081 --wsPort 3002
# Add --baseDir ai-agent-ecosystem to reproduce the Pages subpath locally.
# gh picks the `upstream` remote (Quartz) if a clone has one. Name the repo:
gh issue list -R vishmatta/ai-agent-ecosystem
```

## Workflow — several agents work in this repo in parallel

1. **Work comes from GitHub Issues.** If you weren't given one, take the
   lowest-numbered open issue without the `in-progress` or `needs-decision` label,
   skipping any whose body says `Blocked by #N` while #N is still open, or
   `Not before YYYY-MM-DD` while that date is still ahead. On a `pipeline`
   issue, do only its next unchecked stage (`docs/agents/README.md`).
2. **Claim it** before starting:
   `gh issue edit <n> -R vishmatta/ai-agent-ecosystem --add-label in-progress`.
3. **Branch from `origin/main`**: `git fetch origin && git switch -c <n>-<short-slug> origin/main`.
4. **One issue per PR.** Something else you notice becomes a new issue, not scope
   creep. Rebase on `origin/main` before pushing if you touched a shared file
   (`quartz.config.yaml`, `AGENTS.md`, `docs/`).
5. **Open a PR** whose body has `Closes #<n>`, a summary, and a test plan.
   `main` accepts squash merges only, after the required `quartz-build-check`
   passes and every review thread is resolved. Squash-merge once green unless
   the issue or the owner says to leave it for review.
6. **Don't make the owner's calls.** Naming, structure, scope, and anything the
   spec leaves open: comment on the issue with the options and your
   recommendation, add `needs-decision`, and stop.

Without write access to this repo (working from a fork), claim an issue by
commenting on it instead. Open the PR from your fork, and leave labels and
merging to the maintainer.

Issue templates: `.github/ISSUE_TEMPLATE/task.md` for ordinary work, and
`section.md` for a section's content-pipeline run. Issues should be
self-contained enough that no other context is needed.

## Rules that are easy to break

- Commit as the person you're working for: the git identity already configured
  on their machine. Never set or override `user.name`, `user.email`, or
  `--author` to anyone else, the repo owner included. If no identity is
  configured, stop and ask. Use a GitHub no-reply email rather than a personal
  one, since the repo is public and `main` can't be rewritten.
- Never rename the `quartz-build-check` job — the branch ruleset matches it by
  name. Never make `deploy.yml` a required check; it doesn't run on PRs.
- Links rendered by components must be relative (`resolveRelative` from
  `@quartz-community/utils`). The site is served from a subpath, so absolute
  paths 404.
- A component renders nothing when its frontmatter key is absent. Never add a
  placeholder for a missing tier (the spec's silent-omission rule).
- This is Quartz **5**: YAML config, plugins as plain ESM using preact `h()`.
  The planning docs assume Quartz v4 (`quartz.config.ts`, `.tsx`) — where they
  differ, the code and `docs/` are right.

## Read before you touch

| If your task touches… | Read first |
|---|---|
| anything (once per session, before your first commit) | `docs/practices.md` |
| changing the taxonomy | `docs/practices.md` → Changing the taxonomy |
| `planning/research/` — adding or reviewing research | `planning/research/README.md` |
| a `pipeline` issue (a section's content run) | `docs/agents/README.md`, then your stage's file |
| `content/**` — pages, frontmatter, sections | `docs/content.md`, and `docs/style.md` for anything you write |
| `plugins/**`, `quartz.config.yaml`, styles | `docs/plugins.md` |
| `.github/**` | the header comment of the file you're changing |
| one section's taxonomy content | that section's file in `planning/taxonomy/`, plus `CONTRIBUTING.md` for entry formatting rules |
| page visual design | `planning/agent-harnesses-page-example.html`, `planning/agent-behavior-page-example.html` |
| why a site decision was made | `planning/site-content-plan-v2.md`, via the index in `docs/content.md` |

The planning docs are the authority on decisions. Read only what you need:
one taxonomy file, and the site plan by section (`grep -n '^## ' <file>`).
Skip every `## Changelog`; it's history. The site plan's "Next step" and
"Open questions" are historical; current work is in GitHub Issues.

## Keep these docs true

If your change makes anything in `AGENTS.md` or `docs/` wrong, fix it in the
same PR. Keep this file short — detail belongs in `docs/`.
