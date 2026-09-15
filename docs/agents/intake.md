# Stage 0: intake

Turn a content idea into the right issue, so every idea enters the queue the
same way, whichever tool or person raised it. Intake checks the idea, routes
it, and triages the result, then stops. It never starts the work.

A content idea is anything that would change what the site says: a new
Landscape entry, a concept, a correction, a new category or section. It
arrives in chat, or as an issue from the Idea template (labelled `idea`).

**Read:** `docs/triage.md`; the section map in `planning/taxonomy/README.md`;
the taxonomy file for the section the idea touches; `CONTRIBUTING.md` →
Scope.

## Steps

1. **Restate the idea** in one sentence: what would change on the site. If
   you can't tell, ask the owner one question and stop.
2. **Check it isn't covered already.** Search the taxonomy and pages
   (`grep -ril "<name>" planning/taxonomy content`) and the issues
   (`gh issue list -R vishmatta/ai-agent-ecosystem --state all --search "<keywords>"`).
   If the idea is already covered, or already has an issue, say so and link
   it. On an `idea` issue, comment the link, recommend closing it as a
   duplicate, add `needs-decision`, and stop.
3. **Check scope** against `CONTRIBUTING.md` → Scope and
   `planning/site-prd.md` §3. If it's out of scope, recommend closing it the
   same way, and stop.
4. **Check the facts at a primary source** (`docs/practices.md` → Before
   starting): the product's own page, docs, repository or announcement. Keep
   the link. Mark anything you can't verify `(unconfirmed)` rather than
   dropping it.
5. **Route it:**

   | The idea | Becomes | Type label |
   |---|---|---|
   | A Landscape entry, a status change (rename, sunset, acquisition), or a correction within a section | A task issue. The work follows `docs/practices.md` → Changing the taxonomy. | `taxonomy`, or `bug` if the live site is wrong today |
   | A concept or narrative point for a section whose pipeline run hasn't happened (`gh issue list -R vishmatta/ai-agent-ecosystem --label pipeline --state all`) | A comment on that section's `pipeline` issue, as input for its brief, or on #37 if the section has none. No new issue. | none |
   | A concept page for a section whose pipeline run is done | A task issue | `content` |
   | A whole section's content, researched and written | A Section issue (`.github/ISSUE_TEMPLATE/section.md`) | `pipeline` |
   | A new Landscape category, a new section, or any change of structure | A task issue giving the options and your recommendation, with `needs-decision` (`AGENTS.md` step 6) | `taxonomy` |
   | A change to how the site works, not what it says | Not a content idea: a task issue per `docs/triage.md` | `site` or `process` |

6. **Write the issue** with the template's headings. Under Context, give the
   primary source, and say where the idea came from. Fill in Merge per
   `AGENTS.md` step 5: new page prose and structure changes wait for the
   owner's review.
   - **From an `idea` issue:** rewrite that issue in place, keeping its
     number. Give it the new title and body, with the owner's original text
     at the end under `## Original idea`, and swap the `idea` label for the
     type label. If the idea splits into several issues, create each one,
     link them from the idea issue, and close it as completed.
   - **From chat:** create the issue.
7. **Triage it:** a priority label and a one-line triage comment
   (`docs/triage.md` → Triaging an issue).
8. **Report and stop.** Tell the owner what you created or where you routed
   the idea, and why. Don't claim or start the work.

**Done when:** the idea is a labelled, triaged issue (or a comment on one),
or a recommendation to close it is waiting on the owner.
