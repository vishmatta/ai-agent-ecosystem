# AI Agent Ecosystem Site

A Quartz-based reference site for the AI agent ecosystem taxonomy. The full
specification lives in `planning/` and is imported below — read it before
proposing structure, naming, or page-template changes, since most of those
decisions are already made and recorded there.

## Specification

@planning/ai-agent-ecosystem-v2.11.md
@planning/site-content-plan-v2.md
@planning/site-prd.md

## Visual spec

Not imported (HTML, not markdown) — read directly when working on templates or styles:

- `planning/agent-harnesses-page-example.html` — narrative page, drafted
  narrative + no concept tier
- `planning/agent-behavior-page-example.html` — narrative page, undrafted
  narrative + populated concept tier

Together they are the literal spec for the page template: shared design tokens,
five-beat accordions, the concept-grouping list, the Landscape card, and the
silent empty-state rule for both lower tiers.

## Working in this repo

The planning docs predate the build. They assume Quartz v4 conventions
(`quartz.config.ts`, editable `.tsx` components); this site runs **Quartz 5**,
so where they differ, the notes below are what's true.

### Changes go through pull requests

- `main` is protected by the `protect-main` ruleset: pull request required,
  squash merge only, linear history, no force pushes, no bypass. Branch from
  `origin/main`, push the branch, open a PR.
- The required status check is **`quartz-build-check`**
  (`.github/workflows/build-check.yml`). Never rename that job — the ruleset
  matches it by name, and a rename silently disconnects it.
- Commits use the GitHub no-reply address (set in this repo's git config).
  Never commit with a personal email; `main` can't be rewritten afterwards.
- Sessions run in git worktrees under `.claude/worktrees/`, and `main` is
  checked out in the main folder, so a worktree can't `git switch main` —
  work from `origin/main` instead.

### Building and verifying

- Install with `npm ci`; build with `npx quartz build` (there is no
  `npm run build`). Output goes to `public/`.
- **Quartz can exit 0 on a broken build** — a local plugin with a syntax error
  is logged as "failed to load" and silently dropped. Before opening a PR, run
  what CI runs:
  `(set -o pipefail; npx quartz build 2>&1 | tee quartz-build.log) && node .github/scripts/verify-build.mjs quartz-build.log public`
- Start the dev server with the preview tooling (`quartz` in
  `.claude/launch.json`, port 8080), not a background shell — an orphaned
  server keeps the port. Content edits hot-reload; restart the server after
  changing plugin code or `quartz.config.yaml`.
- Page dates come from each file's last git commit, so an edit shows the old
  date until it's committed.

### How the site is put together

- Config is `quartz.config.yaml`. `quartz.config.default.yaml` is upstream's
  reference copy — don't edit it.
- The page template lives in local plugins under `plugins/agent-ecosystem-*`,
  registered in config as `./plugins/<name>`. Quartz imports them at runtime
  as plain ESM — no TypeScript or JSX — so components are written with
  preact's `h()`.
- Pages are driven entirely by frontmatter: `type` (`narrative` | `concept` |
  `landscape` | `home` | `how-to`), `deck` or `deckPending`, `concepts` (with
  optional `conceptsTotal`), and `landscapes`. A component renders nothing
  when its key is absent — that is the site plan's silent-omission rule, so
  never add placeholders to fill a missing tier.
- How the plan's five components map to the build: the What/Why/When/How/Where
  accordions are a transformer (`agent-ecosystem-template`); ConceptList,
  LandscapeCard and the deck are components; PageMeta is Quartz's built-in
  `content-meta`; the page-type router is `agent-ecosystem-page-types`.
- Design tokens are in `quartz/styles/custom.scss`; theme colours are in the
  config's `theme`, and fonts in the `quartz-fonts` plugin's own options.
- Stage pages (`content/<stage>/index.md`) render as Quartz *folder* pages.
- Concept and Landscape pages must live under their section's path (e.g.
  `content/build/agent-harnesses/…`), or the graph won't show them as
  children of that section.
- Links rendered by components must be relative — use `resolveRelative` from
  `@quartz-community/utils`. Absolute paths break under GitHub Pages' subpath.

### Quartz 5 gotchas (each cost real debugging time)

- **One component per plugin.** Layout resolves a plugin's component by the
  plugin's name, which Quartz only registers when the plugin declares exactly
  one component. Two in one plugin means neither renders, with no warning.
- `layout.byPageType.<type>.exclude` matches the full plugin source, e.g.
  `@quartz-community/note-properties`, not the bare name.
- Fonts: the font cache in `quartz/.quartz-cache/fonts` survives config
  changes. Delete it after changing fonts.
- Markdown attribute syntax (`{ .class }`) is not supported; it renders as
  literal text.
- The Explorer ignores `folderDefaultState: open`. Its ordering comes from
  the `sortFn` source string in its options — sections within a stage are
  ordered by adding their slugs there.
- `agent-ecosystem-graph` patches `@quartz-community/graph`'s minified
  browser script by exact string match. If an upgrade changes that script,
  the build fails with an explanation — re-derive the patch fragments from
  the package's dist before upgrading.

## Maintenance

The taxonomy import is version-pinned by filename. When the taxonomy doc is
bumped (e.g. `v2.11` → `v2.12`), update the `@planning/...` line above in the
same commit, or the import silently stops resolving.
