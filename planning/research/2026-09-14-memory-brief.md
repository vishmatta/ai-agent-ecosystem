---
title: Memory research brief
kind: brief
status: new
researched: 2026-09-14
by: Claude Code (claude-opus-5)
incorporated-in: ""
---

# Memory research brief

**Section:** §10 Memory · taxonomy file: `planning/taxonomy/10-memory.md` ·
pages: `content/connect/memory/`

§10 covers how an agent retains information across turns and across sessions:
the memory types (short-term, long-term, working, procedural), the processes
that maintain them (consolidation, retrieval, editing and deletion), and the
products that provide memory as a service or a library. Nothing is live yet.
The taxonomy has all five narrative beats marked *(not yet drafted)*, eight
concept bullets, and a Memory Landscape holding three entries (Mem0, Zep,
Letta / MemGPT), each dual-listed as an open-source core with a hosted layer
under the same brand. The section is Connect nav 4, slug `memory`, concept
tier yes, one Landscape page.

Two boundaries matter throughout, because the neighbouring sections publish
from the same run of pages: §9 Context is what the model sees in this request,
§11 Knowledge and Retrieval is the external corpus an agent looks things up in,
and §10 is what persists about this agent and this user between requests.
Several questions below exist to pin those boundaries at primary sources rather
than by assertion.

## Questions

### `index.md`: What is agent memory (beat 1)

1. How do the major agent platforms define "memory" in their own documentation,
   and what term does each use for the same idea (memory, sessions, state,
   threads, store, checkpoints)? Check at least: Anthropic's memory tool and
   context-management docs, OpenAI's Agents SDK sessions and the Responses API,
   Google ADK sessions/state/memory, LangGraph persistence and store,
   Microsoft Agent Framework, Letta, Mem0, Zep.
2. Where do primary sources draw the line between memory and the context window
   (§9), and between memory and retrieval over a document corpus (§11)? Give
   the cases where the sources themselves disagree, quoting the definition each
   uses rather than reconciling them.

### `index.md`: Why agents need memory (beat 2)

3. Which concrete failure modes do vendor docs and the memory papers give as the
   reason to add a memory layer (starting each session cold, re-eliciting
   preferences, context window limits, token cost of replaying history,
   degraded recall over long threads)? Cite each to a paper or a vendor
   document, not to a blog post.
4. Which published benchmarks evaluate agent memory (for example LoCoMo,
   LongMemEval, and any successor), what does each actually measure, and what
   results do the memory products' own primary sources report against them?
   Give the benchmark's paper or repository, the reported figure, the product
   version, and the date of the claim.

### `index.md`: When to apply which memory type (beat 3)

5. What decision criteria do primary sources state for choosing between
   session-scoped and persistent memory, and between user-scoped, agent-scoped
   and organization-scoped memory? Quote the criteria the docs themselves give
   (data lifetime, multi-tenancy, cost, latency), not general advice.
6. What risks of persistent memory are documented at primary sources: memory
   poisoning or indirect prompt injection through stored memories, stale or
   incorrect facts persisting across sessions, cross-user leakage in shared
   stores, and retention or deletion obligations? Cite vendor security
   documentation, published advisories, or papers. Mark anything only reported
   second-hand as unconfirmed.

### `index.md`: How agent memory is implemented (beat 4)

7. What storage substrate does each catalogued memory product actually use
   (vector index, graph, relational, key-value, plain files), per its own docs?
8. When is a memory written, and by what: an explicit tool call the model makes,
   automatic extraction after each turn, or a background consolidation job?
   Which product does which, per its documentation?
9. How do harnesses and frameworks expose memory to the model: instruction files
   read at startup (the `CLAUDE.md` / `AGENTS.md` pattern), a memory tool the
   model calls, or injection into the system prompt? Cite the harness or
   framework docs for each pattern named.
10. Is there any protocol-level or standard interface for agent memory as of
    2026-09 (an MCP server or reference implementation, an A2A extension, or a
    published spec)? Give its status, maintainer, and date, or state plainly
    that none exists.

### `index.md`: Where agent memory is heading (beat 5)

11. Which memory capabilities have model and platform vendors shipped in roughly
    the last twelve months, with dates from their own changelogs or release
    notes? Is the capability moving into the model and platform layer, away from
    third-party libraries, and what primary evidence shows that either way?
12. Is any work under way on portable memory between vendors (an export format,
    a shared schema, a migration path), and what is its status and date?

### Concept pages

13. **Short-term / session memory.** How do primary sources define it, what is
    its lifetime and scope, and where does it physically live (thread
    checkpoints, a session object, a server-side conversation id)? Which
    products use which name for it?
14. **Long-term memory.** How is it defined against short-term memory in
    primary sources, what triggers promotion from one to the other, and which
    catalogued products document such a promotion step?
15. **Episodic memory.** What definition do the papers and product docs use,
    what is actually stored in a record (event, time, participants, outcome),
    and which of the catalogued products implement it under that name?
16. **Semantic memory.** How do primary sources distinguish semantic memory from
    a §11 knowledge base built over documents, given both store facts and both
    retrieve by similarity? Which products implement it under that name?
17. **User profiles and preferences.** How do products model a user profile:
    a fixed schema, extracted key-value facts, or free text? Which expose the
    stored memories to the end user for inspection, correction, or deletion,
    and how? Cover the consumer assistants as well as the memory libraries.
18. **Working memory.** Which primary sources use this term for agents, and what
    do they mean by it? Establish whether it names something distinct from the
    context window and from a scratchpad, or whether usage is inconsistent
    across sources. If the sources genuinely disagree, say so rather than
    picking one; this is the concept most at risk of being defined by
    assertion.
19. **Procedural memory.** How is it defined, and how is it realized in
    practice: learned skills or instruction files the agent writes back, a
    reflection loop that rewrites its own prompt, or cached plans? Cite a
    product or framework document for each mechanism named.
20. **Memory consolidation.** What processes do products document for turning
    raw turns into durable memories: extraction, summarization, deduplication,
    conflict resolution when a new fact contradicts a stored one, and decay or
    expiry? Name the product and point at the documented behaviour. Does any
    product document a forgetting or TTL policy?
21. **Memory retrieval.** What retrieval mechanisms do memory products document
    (semantic search, graph traversal, recency and importance ranking, time
    travel over a bitemporal store), and how do their docs distinguish this from
    §11 retrieval? How is retrieved memory injected into the request?
22. **Memory editing and deletion.** What APIs exist to update, correct, forget,
    or expire a memory? What does each product document for user-initiated
    deletion, retention windows, and deletion propagating to derived stores such
    as embeddings and summaries?

### `landscape.md`

23. Re-verify each of the three catalogued entries (see "Products to check"):
    current product name and creator, official URL, license and whether it is
    OSI-approved, repository archived status, whether the hosted layer is still
    under the same brand, and any rename, acquisition, relicense, or sunset in
    the past year.
24. Which further products qualify for the Memory Landscape as of 2026-09?
    Apply the bucket rules in `planning/research/PROMPT.md`: a
    single-provider SDK is Commercial even when its license is permissive, and
    a source-available license is not open source.

## Products to check

**Catalogued now, to re-verify** (`planning/taxonomy/10-memory.md`; all three
are currently dual-listed, open-source core plus hosted layer under the same
brand):

| Entry | Currently listed as | Check |
|---|---|---|
| Mem0 | both buckets | name, creator, official URL, license, repo archived?, hosted layer still same brand? |
| Zep | both buckets | as above, plus the relationship to its own graph engine if that is a separately branded product |
| Letta / MemGPT | both buckets | as above, plus whether "MemGPT" is still current naming or only the paper's name |

None of the three currently carries an official URL in the taxonomy, and the
Landscape page needs one per entry (`planning/taxonomy/README.md` → Formatting
rules), so every entry needs its link found and confirmed.

**Categories to search for new entries.** The section has one flat Landscape
("Memory Tools"), so search the category as a whole:

- Memory-as-a-service products and hosted memory APIs for agents.
- Open-source memory layers and libraries that work across model providers.
- Memory components shipped inside a framework (for example a framework's own
  long-term memory store or memory-management library). See open question A.
- Memory features inside a harness or consumer assistant. See open question A.
- Any product in this space that shut down, was acquired, or was archived in the
  past year: it belongs in Legacy / Decommissioned only if the shutdown has
  completed.

Unverified leads only, to confirm or reject at a primary source, not entries:
Graphiti, Cognee, LangMem, Redis Agent Memory Server, Supermemory, Honcho,
Memobase, Motorhead, Basic Memory, MemoryOS. Treat this list as search terms.
Products that turn out to be a vector database or a RAG framework belong in
§11, not here.

## Coverage checklist

| # | Page | Needs | Questions | Status |
|---|---|---|---|---|
| 1 | `index.md`: What beat | definition, boundary against §9 Context and §11 Knowledge and Retrieval, vendor terminology map | 1–2 | open |
| 2 | `index.md`: Why beat | the failure modes memory addresses, and what the benchmarks measure | 3–4 | open |
| 3 | `index.md`: When beat | decision criteria by scope and lifetime, plus the risks of persistence | 5–6 | open |
| 4 | `index.md`: How beat | storage substrates, write paths, how harnesses expose memory, protocol status | 7–10 | open |
| 5 | `index.md`: Where beat | dated vendor shipments, platform-layer trend, portability work | 11–12 | open |
| 6 | Short-term / session memory | definition, lifetime, where it lives, per-product naming | 13 | open |
| 7 | Long-term memory (with Episodic and Semantic as children on the same page) | definition and boundary, promotion trigger; child sub-sections for episodic and semantic | 14, 15, 16 | open |
| 8 | User profiles and preferences | profile modelling, user-visible and user-editable memories | 17 | open |
| 9 | Working memory | whether the term names anything distinct, and who uses it how | 18 | open |
| 10 | Procedural memory | definition plus a documented mechanism for each pattern named | 19 | open |
| 11 | Memory consolidation | extraction, dedup, conflict resolution, decay | 20 | open |
| 12 | Memory retrieval | retrieval mechanisms, injection, boundary against §11 | 21 | open |
| 13 | Memory editing / deletion | update, forget and expiry APIs, retention, deletion propagation | 22 | open |
| 14 | `landscape.md`: Memory Landscape | three entries re-verified with official URLs; new entries found; Legacy checked | 23–24, Products to check | open |

Row 7 follows `docs/content.md` → Page bodies: a bundle with children is one
page, with the children as content on it. That makes eight concept pages from
the taxonomy's eight top-level bullets, in the taxonomy's own order.

## Open questions for the owner

Raised on the section issue; they change what research should collect, so
answers before stage 2 help most.

- **A. Does the Memory Landscape list memory features that ship inside a
  harness or a framework, or only standalone memory products?** The three
  catalogued entries are all standalone. Model-vendor memory tools, consumer
  assistant memory, and framework memory libraries are the bulk of what stage 2
  will find, and the answer decides whether they are Landscape entries here,
  material for the How beat only, or entries belonging to §1 or §2.
- **B. Concept page filenames.** The checklist names pages by concept title;
  the filenames are the planner's proposal at stage 4 and the owner's call,
  since they are permanent URLs.
