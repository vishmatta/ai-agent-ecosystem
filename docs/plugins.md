# Plugins, config, and styles

## How the page template is built

Frontmatter drives everything a page renders; the schema is in
`docs/content.md`. Each local plugin lives in `plugins/<name>/`, is registered
in `quartz.config.yaml` as `./plugins/<name>`, and is imported by Quartz at
runtime as plain ESM. It has no TypeScript or JSX, so components use preact's
`h()`.

| Plugin | Kind | What it does |
|---|---|---|
| `agent-ecosystem-page-types` | page type | Claims pages whose `type:` is narrative, concept, landscape, how-to, or hub, and gives them the `taxonomy` layout (configured under `layout.byPageType.taxonomy`). Priority 20 puts it above Quartz's folder page, so a section's `index.md` renders as a taxonomy page instead of a folder listing. `home` keeps the default layout. |
| `agent-ecosystem-stage-page` | page type | Claims the four stage pages (priority 15, between the folder page and the taxonomy page type) and renders the folder page's own listing, sorted by the Explorer's `sortFn` read from `quartz.config.yaml`, so sections appear in registry order rather than newest-edited first. |
| `agent-ecosystem-template` | transformer | Wraps the What/Why/When/How/Where `h3` beats in `<details>` accordions and adds an `ae-page--<type>` class. |
| `agent-ecosystem-deck` | component, beforeBody | Renders `deck` or `deckPending` under the title. |
| `agent-ecosystem-stage-nav` | component, beforeBody | Build → Connect → Run pipeline, with Control set apart. `verify-build.mjs` fails any page other than 404 without it. |
| `agent-ecosystem-concept-list` | component, afterBody | Renders the `concepts` list. |
| `agent-ecosystem-landscape-card` | component, afterBody | Renders the `landscapes` cards. |
| `agent-ecosystem-graph` | component, right | Wraps the upstream graph so hierarchy comes from folders and each page shows its own subtree. It works by patching upstream's minified script. |

Each plugin's header comment documents its behavior. Read that before changing
it. The plan's component names map as follows: AccordionGroup is the template
transformer, and PageMeta is Quartz's built-in `content-meta`.

**Adding a component:** copy `agent-ecosystem-deck`, which is the smallest.
Its `package.json` has a `quartz` block declaring the component. Register the
plugin in `quartz.config.yaml` with a layout position and priority, then
restart the dev server. Component CSS travels with the component as
`Component.css`.

## Quartz 5 gotchas (each cost real debugging time)

- **One component per plugin.** Layout resolves a component by its plugin's
  name, which Quartz only registers when the plugin declares exactly one. With
  two, neither renders, and there's no warning.
- **Quartz exits 0 when a plugin fails to load.** It logs "failed to load" and
  ships the site without the plugin. `verify-build.mjs` catches this; run it.
- **`layout.byPageType.<type>.exclude` matches the full plugin source**, e.g.
  `@quartz-community/note-properties`, not the bare name.
- **Explorer folder names must stay links** (`folderClickBehavior: link`). Section pages are folder `index.md` files, so with `collapse` the Explorer can't open them.
- **Explorer order comes from the `sortFn` source string** in the Explorer's
  options, and the Explorer ignores `folderDefaultState: open`. `sortFn` lists
  the stages and then every section's full path in the registry's Nav order
  (`docs/content.md`). Add a new section's path there too, or it sorts after
  the listed ones, alphabetically. Pages inside a section sort alphabetically.
  The stage pages' section lists use the same `sortFn`
  (`agent-ecosystem-stage-page`), and `verify-build.mjs` fails if a stage
  page's list doesn't match the registry.
- **`quartz.config.yaml` can't pass a function to a plugin.** It holds only
  data, so an option typed as a function (e.g. the folder page's `sort`) can't
  be set there. The Explorer's `sortFn` works because it's a source string the
  Explorer compiles in the browser. Elsewhere, write a local plugin that calls
  the upstream component with the function, as `agent-ecosystem-stage-page`
  does.
- **The graph patch matches upstream's minified script by exact string.** If an
  upgrade changes that script, the build fails with an explanation. Re-derive
  the fragments from the package's dist before upgrading.
- **Fonts are cached** in `quartz/.quartz-cache/fonts`, and the cache survives
  config changes. Delete it after changing fonts. Fonts are set in the
  `quartz-fonts` plugin's options, not just `theme.typography`.
- **Markdown attribute syntax (`{ .class }`) isn't supported.** It renders as
  literal text.
- **Restart the dev server after changing plugins or `quartz.config.yaml`.**
  Content edits hot-reload; plugin and config changes don't.

## Config and styles

- `quartz.config.yaml` is the only config file to edit.
  `quartz.config.default.yaml` is upstream's reference copy.
- Theme colours live in the config's `theme`. `quartz/styles/custom.scss`
  aliases them as `--ae-*` tokens and adds the few tokens the mockups need
  that Quartz lacks, plus styles for the beats and the title block.
- The two HTML mockups in `planning/` are the visual spec: design tokens,
  accordions, the concept list, and the Landscape card.
