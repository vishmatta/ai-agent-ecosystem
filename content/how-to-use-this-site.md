---
title: How to Use This Site
type: how-to
unlisted: true
deck: >-
  How the pages relate, and how to move between them with links, the Explorer, search, the graph, and backlinks.
---

## How the site is arranged

Every page below the home page belongs to one of four stages, shown as a bar at the top of the page: [[build/index|Build]], [[connect/index|Connect]], [[run/index|Run]], and [[control/index|Control]]. Build, Connect, and Run are sequential: constructing an agent, connecting it to models, tools, and data, and operating it. Control is drawn apart with a dashed border because it is cross-cutting. Security, governance, observability, and evaluation apply at every stage rather than at one point in the pipeline, so [[control/index|Control]] links out to the pages that cover them.

Each stage holds sections, and each section can have up to three kinds of page.

| Page | What it holds | Where it appears |
|---|---|---|
| Narrative | An explanation of the section in five parts: What, Why, When, How, and Where. | One per section, at the section's own address. |
| Concept | One idea from the section, explained on its own page. | Added one at a time once written, so a section may have none yet. |
| Landscape | A catalog of named products, grouped as Commercial / Proprietary, Open Source / Provider-agnostic, and Legacy / Decommissioned. | Sections with tooling to list. Some have several, split by product category. |

## Moving between the three kinds of page

A narrative page is the entry point to its section. Its five parts are collapsible sections, with the first open by default: select a heading to open or close one. Below them, a concept list names the section's concept pages when any exist, and a Landscape card links to each catalog with counts of the products in it. Both are drawn from the section's own page settings, so a section that has no concept pages or no catalog shows neither.

To go up from a concept or Landscape page, use the breadcrumb above the title (Home, then the stage, then the section) or the section's entry in the Explorer. Section pages also appear in the stage page's list, which follows the same order as the Explorer.

Landscape pages hold the product list and no explanatory prose. The explanation of what a category is and when it is used sits on the narrative page. Each product name links to its own official page, followed by its creator in parentheses. [[how-we-classify|How This Is Classified]] describes how products are sorted into the three groups.

## Links between pages

Links between pages in the site are ordinary links. They are written in the page sources as wikilinks, a page's path inside double square brackets with an optional label after a vertical bar, and the site turns each into a link that works at any depth of the site. A wikilink whose target does not exist would lead to a missing page, so a section without a page yet is named in plain text instead of linked.

On a device with a pointer, hovering over a link to another page shows a preview of that page without leaving the current one. Links to outside sites open the vendor's or project's own page.

## Finding your way around

- **Explorer.** The tree at the left lists the stages in order, then each stage's sections in the order used on the stage page, then the pages inside each section alphabetically. Selecting a name opens that page. The arrow beside a folder opens or closes it, and the site remembers which folders are open.
- **Search.** The search box at the top left, or Ctrl+K (Cmd+K on a Mac), opens a search over page titles and text. Results lead to the matching page.
- **Graph.** The graph at the right shows the current page and every page beneath it in the site's hierarchy, plus the tags those pages carry, so a stage shows its sections and a section shows its concept and Landscape pages. The home page shows the whole site. The icon in the graph's corner expands it to the whole site on any page, and selecting a node opens that page.
- **Backlinks.** In the right-hand column, a list names the pages that link to the current page. It appears only when at least one page does.
- **Table of contents.** On pages with headings, the right-hand column lists them and highlights the current one.
- **Display.** The buttons beside the search box switch between light and dark themes and turn reader mode on and off, which reduces the page to its text.
