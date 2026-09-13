# AI Agent Ecosystem and Technology Stack

**Scope:** applied / deployment-time AI agent tooling — how agents are built, orchestrated, connected, run, and governed. Training-time concerns (fine-tuning, RLHF, dataset curation, distributed training infra) are explicitly out of scope. Compliance and regulatory standards (e.g. EU AI Act, NIST AI RMF, ISO 42001) are also out of scope — §14's data retention, approval, and audit entries are operational policy levers an organization implements, not the standards themselves.

## Formatting rules

- Numbering flows in one continuous sequence through Build → Connect → Run → Control — no duplicate section numbers between legend and body.
- Every product/tool is listed as `Name (Creator)`. Creator is omitted when its name is already contained in the product name (e.g. "Google ADK" — Google is already there, "Pinecone" the company and product share a name). For solo or small-team open-source projects, the actual creator's name or handle is used even without a company behind it (e.g. "Aider (Paul Gauthier)", "Oh My Pi (can1357)") — `Name (open source community)` is reserved for projects with no single identifiable creator or maintainer of record.
- Two exceptions to `Name (Creator)`: §4 Models uses `Company → Model line` notation, since the section is a company-to-flagship mapping rather than individual product attribution (the arrow here is unrelated to the cross-reference arrow used elsewhere). Benchmarks (§15) are listed by name only, without attribution, since academic benchmarks typically have multiple co-authoring institutions rather than a single corporate creator.
- No inline notes, dates, or explanations. Anything beyond bare identification is a nested sub-bullet underneath the entry — including cross-references (→).
- A tool with a self-hostable open-source core and a hosted commercial layer under the same brand name is listed under both columns, with a sub-bullet noting the relationship. A separately branded commercial layer (e.g. Milvus → Zilliz Cloud) is listed as its own distinct entry instead.
- Each section carries its own Legacy / Decommissioned callout where relevant, rather than one global list, so a gap reads as "never in scope," not "did I forget this."
- Entries with an unverified attribution are flagged `(unconfirmed)` rather than guessed.
- All fifteen sections follow a standard five-part `###` sub-header shape: **What** (definition, plus cross-references to concepts a reader might confuse it with), **Why** (the problem this category solves), **When** (decision criteria for reaching for it, including relevant risk factors), **How** (how it's used in practice), **Where** (which direction the category is heading) — followed by a `### <Section> Landscape` sub-header holding the Commercial/Open Source/Legacy product lists (see site-content-plan-v2.md §3 for the site-level rationale). Narrative content is drafted only where the section has been worked through in full (currently §1 and §2); elsewhere the five headers stand as placeholders marked *(not yet drafted)*, with existing concept material sitting between the headers and the Landscape link — a Landscape header can also carry an honest "no dedicated tooling" note rather than a product list, where that's genuinely true (e.g. Orchestration Patterns, Context). This is the default shape, not a loose per-section improvisation; deviate only when a section genuinely doesn't fit one of the five beats.

---

# BUILD

## 1. Agent Harnesses

### What is an agent harness
- The wrapper around a model — the tool-calling loop, context and session management, safety rails, and the interface a person actually touches
- → distinct from an agent framework (§2): a framework is a library/toolkit for building your own harness, not a finished product itself

### Why use an agent harness
- Building your own agent loop from a raw model API means re-solving problems most teams don't need to re-solve: tool-calling, context and session management, safety rails
- A harness gives you that plumbing for free, so effort goes into the task rather than the infrastructure around it

### When to leverage an existing harness vs. building your own
- The real tradeoff: polish and support (commercial) vs. model flexibility and inspectability (open source) — see the Landscape below
- Vendor lock-in and continuity risk are part of that calculus too — even established, widely-adopted harnesses can be discontinued or substantially changed with little notice (Windsurf's forced rebrand into Devin Desktop, Gemini CLI's individual-tier shutdown in favor of Antigravity CLI — see Legacy below for both)

### How to use an agent harness
- CLI, IDE-embedded, or cloud-hosted
- Increasingly also single-agent chat vs. fleet management:
  - A traditional harness runs one agent loop you converse with
  - An Agentic Development Environment (ADE) is a control plane for supervising multiple agents in parallel across a workflow
  - Most ADEs are a mode within a product that also functions as a traditional harness, not a separate product — Cursor and Devin Desktop serve both roles depending on mode
  - Warp is a notable exception to that pattern: its ADE capability has since spun out into Warp Factories, a genuinely separate, standalone product from Warp Terminal — by Warp's own account, "nobody at your company has to use warp terminal" to use it — see Harnesses Landscape below and §13 Agent Operations and Deployment, which Factories now resembles more closely than a terminal-embedded mode
  - → related to §3 Multi-agent orchestration and Supervisor/worker patterns; an ADE is the product-level, user-facing manifestation of those orchestration patterns
  - Tagged `ADE` — see Tags for cross-cutting filtering across sections

### Where agent harnesses are heading
- 2026 has seen a shift toward multi-agent fleet interfaces reshape what "harness" means, without necessarily changing the underlying company or product line
- ADE itself was coined by Warp with Warp 2.0, June 2025, defined as a control plane for orchestrating multiple coding agents in parallel across the full SDLC
- Cursor's Agents Window (Cursor 3, April 2026) and Devin Desktop's Agent Command Center are the same category
- Warp's own ADE capability has since gone further, spinning out into Warp Factories — a standalone fleet-orchestration product, distinct from Warp Terminal, with its own evals/benchmarking and self-improvement loops built in. Worth watching as a possible leading indicator: ADE-as-a-mode may be starting to split into ADE-as-a-dedicated-product-category, at least for one vendor

### Harnesses Landscape → (separate page)

**Commercial / Proprietary**
- Claude Code (Anthropic)
- Codex (OpenAI)
- Cursor (Anysphere)
  - As of Cursor 3 (April 2026), shifted from an IDE-with-AI to an agent-fleet workspace — has an ADE mode, see How to use an agent harness above
- Antigravity (Google)
  - Antigravity CLI is the terminal counterpart, sharing the same backend agent harness as the desktop app; succeeded Gemini CLI for individual users — see Legacy below
- GitHub Copilot
- Devin / Devin Desktop (Cognition)
  - Formerly Windsurf — see Legacy below
  - Agent Command Center is Devin Desktop's fleet-management mode — has an ADE mode, see How to use an agent harness above
- Amazon Q Developer
  - IDE plugins and paid subscriptions reach full end-of-support April 30, 2027; new signups already blocked since May 15, 2026 — Kiro is AWS's named successor for IDE-based agentic coding (below). Stays here rather than Legacy below, since existing users retain active support through the transition window — not yet a completed sunset the way Windsurf and Gemini CLI's were when added there
- Kiro (Amazon)
  - Named successor to Amazon Q Developer's IDE plugins (above), which are being wound down through April 2027
- Warp
  - Coined the term "Agentic Development Environment" (ADE) with Warp 2.0, June 2025
  - Now three distinct products under one company: Warp Terminal (the original harness), Warp Agent CLI (a standalone coding agent for any terminal), and Warp Factories (fleet orchestration across the SDLC — a separate product, not an ADE mode of the terminal)
  - → Warp Factories also listed in §13 Agent Operations and Deployment Landscape, since it now fits that category more precisely than a harness ADE-mode
- Zencoder
  - Zenflow is Zencoder's multi-agent orchestration mode — coordinates multiple models through structured Plan → Implement → Test → Review workflows, including cross-model verification (e.g. one model writes, a different model reviews) — has an ADE mode, see How to use an agent harness above
- Zed
  - Rust-native, GPU-rendered code editor — the Zed AI service and collaboration backend are proprietary; the editor core is open source under the same brand (below)
- Perplexity Computer
  - General-purpose agent worker rather than a coding tool: breaks a goal into subtasks and runs them through sub-agents on models from several providers, choosing a model per subtask. Launched February 25, 2026
  - Also sold as Personal Computer, which runs on a dedicated local Mac or Windows machine, and Portable Computer, a fully local edition built with NVIDIA

**Open Source / Provider-agnostic**
- OpenCode (Anomaly)
- OpenWorker (Andrew Ng)
- Crush (Charm)
- Pi (Mario Zechner)
- Hermes Agent (Nous Research)
  - Distinct from the Hermes model line — see §4 Models
- Aider (Paul Gauthier)
- Cline (Saoud Rizwan)
- Oh My Pi (can1357)
  - Rust-powered, tool-dense fork of Pi
- OpenHands (All Hands AI)
- Goose (Block)
- Zed
  - GPL-3.0 editor core; self-hostable local models via Ollama from the UI. Commercial layer (Zed AI service, collaboration backend) under the same brand, above
  - Supports the Agent Client Protocol (ACP, §8) as a host editor — external agents like Claude Agent, Codex, and OpenCode dock directly in, alongside its own native agent features

**Legacy / Decommissioned**
- Windsurf (Cognition) — rebranded Devin Desktop, June 2, 2026
- Cascade (Cognition) — Windsurf's original agent; replaced by Devin Local in the same rebrand
- Continue — acqui-hired by Cursor (Anysphere), announced mid-June 2026; final release (v2.0.0 — VS Code extension, CLI, JetBrains plugin) shipped June 19, 2026, with no product releases since. The GitHub repo isn't archived, but the only later commits are docs housekeeping (e.g. retiring the sign-in flow, July 2026). Code remains Apache 2.0 and technically forkable, but this is a completed shutdown, not an ongoing product — more definitive than Windsurf's rebrand or Gemini CLI's tier-specific sunset, since there's no successor product carrying its name forward
- Gemini CLI (Google) — code remains Apache 2.0 licensed, but the service stopped serving free, Pro, and Ultra individual accounts June 18, 2026; enterprise Gemini Code Assist licenses are unaffected. Succeeded by Antigravity CLI above. Was never actually provider-agnostic (built specifically for Gemini models) — miscategorized under Open Source / Provider-agnostic when added; that column requires genuine multi-provider support, not just an open license
- Mods (Charm) — CLI utility for piping command output through an LLM (stdin → prompt → response), with MCP tool-calling since v1.8.0. Sunset March 9, 2026, and its GitHub repo archived so Charm could focus on Crush; much of its functionality lives on in Crush's non-interactive mode (`crush run`), above. Code remains MIT licensed and forkable. Briefly listed under Open Source / Provider-agnostic (v2.15) before the sunset was caught

## 2. Agent Frameworks

### What is an agent framework
- A toolkit for building your own agent rather than a finished agent product: it supplies the tool-calling loop, tool definitions, state, and multi-agent primitives, and you assemble them into something you ship
- Comes in two forms: code frameworks (libraries and SDKs a developer programs against) and no-code / low-code builders (visual or natural-language tools for assembling agents without writing the loop)
- → distinct from an agent harness (§1): a harness is the finished wrapper you use; a framework is what you would build one with. The line can blur — the Claude Agent SDK is Claude Code's own harness, exposed as a library

### Why use an agent framework
- An agent embedded in your own product or workflow means owning its loop: which tools it can call, what it remembers, when a person has to approve. A framework supplies that loop instead of re-implementing it from a raw model API
- Frameworks package the recurring hard parts: tool schemas, validated structured output, persisting and resuming state, handing work between agents, and tracing hooks

### When to use a framework vs. a harness
- A harness fits when the task is your own (coding, research) and a finished product already does it; a framework fits when the agent is part of something you are building for other people
- Choosing among code frameworks usually comes down to four criteria: language (Python, TypeScript, .NET, Java, Go — few frameworks cover more than two); model commitment (a model vendor's own SDK is thinnest on that vendor's models, while provider-agnostic frameworks trade some of that for portability); how much state the agent keeps (a simple tool loop vs. durable, checkpointed graphs that pause for human input and resume); and cloud alignment (each hyperscaler's framework deploys most directly to its own managed runtime — see §13 Agent Operations and Deployment)
- No-code / low-code builders fit when the people defining the agent aren't engineers, or the work is mostly integration glue between existing systems; they run out of room as agent logic grows complex
- Continuity risk applies here too: Microsoft folded AutoGen and Semantic Kernel into Microsoft Agent Framework, and Flowise wound down entirely in 2026 — see Legacy below for both

### How agent frameworks are used
- Common shapes: one agent in a tool-calling loop; an explicit graph or state machine with checkpoints between steps; teams of role-based agents with assigned goals; event-driven workflows that react to typed events
- → related to §3 Orchestration Patterns: frameworks are where those patterns are implemented
- In production, a framework is usually paired with a managed runtime to host the agent (§13), a gateway for model access (§6 Model Routers, Gateways and Proxies), and an observability layer (§15)

### Where agent frameworks are heading
- Consolidation: Microsoft Agent Framework 1.0 (April 2026) replaced AutoGen and Semantic Kernel. AutoGen now continues only as a community-managed codebase in maintenance mode, and AG2 carries its classic agent classes forward
- Model vendors' SDKs are absorbing harness features — the Claude Agent SDK ships Claude Code's file tools, permissions, subagents, and hooks as a library
- Open-source frameworks increasingly come with a hosted commercial layer for deployment and observability — LangSmith Deployment for LangGraph, Mastra Platform for Mastra
- Low-code builders are under pressure from coding agents: Flowise's maintainers cited developers moving complex work to coding agents when they wound it down

### Frameworks Landscape → (separate page)

**Code Frameworks**
- Commercial / Proprietary
  - Claude Agent SDK (Anthropic)
    - The harness behind Claude Code, exposed as a library: file tools, shell execution, permissions, subagents, hooks, and in-process MCP servers
    - The SDK is MIT-licensed, but it's built for Claude models only, so it doesn't qualify as provider-agnostic — the same test applied to Gemini CLI in §1's Legacy list
  - Mastra
    - Hosted commercial layer (Mastra Platform: deployment, observability, hosted Studio) under the same brand
- Open Source / Provider-agnostic
  - OpenAI Agents SDK
  - LangChain
  - LangGraph (LangChain)
    - Graph orchestration with checkpointed, resumable state. Its commercial deployment layer is separately branded — see LangSmith Deployment in §13
  - CrewAI
  - Google ADK
  - Microsoft Agent Framework
    - Successor to AutoGen and Semantic Kernel (see Legacy below); Python and .NET
  - LlamaIndex
    - LlamaIndex Workflows is its event-driven orchestration layer
  - PydanticAI
  - smolagents (Hugging Face)
  - Mastra
    - Self-hostable open-source core; enterprise features and the hosted layer are commercial, under the same brand, above
  - Vercel AI SDK
  - DSPy (Stanford)
  - Haystack (deepset)
  - AG2
    - Community-driven continuation of the AutoGen codebase; the classic `autogen` classes now live on as AG2 Classic — see AutoGen in Legacy below
- Legacy / Decommissioned
  - AutoGen (Microsoft) — superseded by Microsoft Agent Framework, the direct successor built by the same team; shipped as MAF 1.0, April 3, 2026. The repo is now in maintenance mode and community-managed, and AG2 above continues its codebase
  - Semantic Kernel (Microsoft) — likewise superseded by Microsoft Agent Framework, same team, same April 2026 release; SK continues to receive critical bug/security fixes only, with new feature development happening in MAF

**No-code / Low-code Builders**
- Commercial / Proprietary
  - Agentforce (Salesforce)
    - Agents built on Salesforce's CRM data, flows, and business logic, with prebuilt templates for sales, service, marketing, and commerce
  - Sema4.ai Studio
    - Natural-language "Runbooks" instead of code; prebuilt enterprise-app integrations (SharePoint, SAP, Snowflake) plus MCP
  - n8n
    - Visual workflow automation with AI agent steps. Self-hostable, but source-available under its Sustainable Use License rather than open source, so it's listed here only
- Open Source / Provider-agnostic
  - Langflow
    - Visual builder for agents and LLM workflows; MIT-licensed
- Legacy / Decommissioned
  - Flowise — visual drag-and-drop builder for LLM apps and agents, wound down in 2026: code freeze July 29, repo archived August 13, end of life August 31. Code remains Apache 2.0 and forkable

## 3. Orchestration Patterns

### What is an orchestration pattern
*(not yet drafted)*

### Why orchestration patterns matter
*(not yet drafted)*

### When to apply which pattern
*(not yet drafted)*

### How orchestration patterns are used
*(not yet drafted)*

### Where orchestration patterns are heading
*(not yet drafted)*

- Agent handoffs
- Agents-as-tools
- Routing
- Sequential workflows
- Parallel workflows
- Loops / iterative workflows
- Hierarchical agents
- Supervisor/worker
- Debate / deliberation
- Blackboard / shared-state coordination
- Market-based / auction coordination
- Multi-agent orchestration
- Subagents
  - → related to Hierarchical agents and Agents-as-tools above; called out separately since it's now a named, first-class harness primitive (e.g. Claude Code, Cursor) rather than just an example of the broader pattern

### Orchestration Patterns Landscape → (separate page)

No dedicated tooling — these patterns are typically implemented within an agent framework (see §2 Frameworks) or hand-rolled directly, rather than through standalone products.

## 4. Models

### What counts as a model provider here
*(not yet drafted)*

### Why the company-to-model mapping
*(not yet drafted)*

### When model choice matters
*(not yet drafted)*

### How models are accessed
*(not yet drafted)*

### Where the model landscape is heading
*(not yet drafted)*

### Models Landscape → (separate page)

- Anthropic → Claude
- OpenAI → GPT
- Google → Gemini
- xAI → Grok
- Meta → Llama
- Amazon → Nova
- Microsoft → Phi
- Alibaba → Qwen
- DeepSeek → DeepSeek
- Mistral → Mistral
- MiniMax → MiniMax
- Z.AI → GLM
- Moonshot AI → Kimi
- AI21 Labs → Jamba
- Cohere → Command
- NVIDIA → Nemotron
- Nous Research → Hermes

## 5. Agent Behavior and Configuration

### What is agent behavior and configuration
*(not yet drafted)*

### Why configure agent behavior explicitly
*(not yet drafted)*

### When to apply which configuration lever
*(not yet drafted)*

### How agent behavior is configured
*(not yet drafted)*

### Where agent behavior and configuration is heading
*(not yet drafted)*

- Instructions
  - Prompts
  - Skills
- Tool definitions
  - Tool selection
- Model selection
  - Model routing
    - → see §6 Model Routers, Gateways and Proxies for the infrastructure layer that implements this
- Policies
  - → see §14 Policies for what policies are, why they exist, and how they're authored, approved, and enforced
  - Behavioral
    - Design-time rules governing agent conduct (what an agent is instructed to do/not do)
  - Model / tool scope
    - Design-time rules governing agent capability (which models/tools an agent is permitted to reach), distinct from conduct
- Guardrails
  - → enforced at runtime; see §14 Policy enforcement
  - → tool list in Behavior and Configuration Landscape below
- Structured outputs
- Reasoning strategies
  - Chain-of-Thought (CoT)
  - ReAct
  - Tree-of-Thought
  - Self-consistency
- Planning strategies
- Agent personas
- Temperature / sampling
- Reasoning effort level
  - Sibling control to Temperature / sampling above — e.g. Claude's thinking budget, GPT-5's reasoning effort setting
- Behavioral constraints
- Termination / stopping conditions
- Standing context files
  - Named, cross-harness conventions for persistent agent-facing context
  - AGENTS.md
  - CLAUDE.md
  - .cursorrules
- Hooks / lifecycle triggers
  - Harness-level triggers on agent lifecycle events (e.g. auto-running a code review after a file edit)
  - → distinct from "Events / triggers" in §7 (external system triggers) and "Event-driven agents" in §13 (deployment-level triggers)

### Behavior and Configuration Landscape → (separate page)

**Guardrails Tools**
- Open Source / Provider-agnostic
  - Guardrails AI
  - NeMo Guardrails (NVIDIA)
  - LlamaGuard (Meta)

---

# CONNECT

## 6. Model Infrastructure

### What is model infrastructure
*(not yet drafted)*

### Why this infrastructure layer exists
*(not yet drafted)*

### When to choose among these options
*(not yet drafted)*

### How model infrastructure is used
*(not yet drafted)*

### Where model infrastructure is heading
*(not yet drafted)*

### Model Infrastructure Landscape → (separate page)

**Inference Providers**
- Fireworks AI
- Together AI
- Groq
- Modal
  - → also see §12 Sandboxes (same product, dual capability)
- Replicate
- DeepInfra
- Cerebras
- Hugging Face Inference
- SambaNova
- Scaleway
- Baseten
- Lambda
- Workers AI (Cloudflare)
  - Serverless inference on Cloudflare's edge network. The same company's agent hosting, Cloudflare Agents, is listed in §13

**Model Serving**
- Commercial / Proprietary
  - NVIDIA NIM
- Open Source / Provider-agnostic
  - vLLM (UC Berkeley Sky Computing Lab)
  - TensorRT-LLM (NVIDIA)
  - Hugging Face TGI
  - SGLang (LMSYS)
  - llama.cpp server (Georgi Gerganov)

**Cloud AI Platforms**
- AWS Bedrock
- Google Gemini Enterprise Agent Platform
  - Formerly Google Vertex AI; rebranded April 22, 2026, with existing Vertex AI services continuing under the new name. Its managed agent runtime, Agent Engine, is listed in §13
- Microsoft Foundry
  - Formerly Azure AI Foundry; renamed November 2025
- Oracle AI Agent Studio
- Databricks Mosaic AI
- Snowflake Cortex
- **Resolved:** these platforms span build, run, and governance capabilities, not just connectivity. Canonical content splits by actual capability (model access → §4 Models, deployment infrastructure → §12 Run, governance controls → wherever the Control mapping sends them), plus a lightweight hub page cross-linking the pieces for readers thinking of the platform as one thing. See Open Items and site-content-plan-v2.md §8 item 1.

**Model Routers, Gateways and Proxies**
- Commercial / Proprietary
  - OpenRouter
  - Vercel AI Gateway
  - Nous Portal
  - LiteLLM (BerriAI)
    - Hosted commercial layer under the same brand
  - Portkey
    - Hosted commercial layer under the same brand
  - Helicone AI Gateway
    - Hosted commercial layer under the same brand
    - → distinct product from Helicone's original observability tool; see §15
- Open Source / Provider-agnostic
  - LiteLLM (BerriAI)
    - Self-hostable core; commercial layer under the same brand
  - Portkey
    - Self-hostable core; commercial layer under the same brand
  - Helicone AI Gateway
    - Self-hostable core; commercial layer under the same brand
    - → distinct product from Helicone's original observability tool; see §15

**Local Inference**
- Commercial / Proprietary
  - LM Studio
- Open Source / Provider-agnostic
  - Ollama
  - llama.cpp (Georgi Gerganov)
  - MLX (Apple)
  - Jan (Menlo Research)

## 7. Tools and Environment Interfaces

### What are tool and environment interfaces
*(not yet drafted)*

### Why agents need these interfaces
*(not yet drafted)*

### When to use which interface
*(not yet drafted)*

### How these interfaces are used
*(not yet drafted)*

### Where tools and environment interfaces are heading
*(not yet drafted)*

- Tool Calling
  - MCP (Anthropic)
    - Servers
    - Clients
      - → harnesses/apps that consume MCP servers; see §1 Harnesses Landscape
    - Transports
      - stdio
      - Streamable HTTP
    - Registries
      - → tool list in Tools and Environment Interfaces Landscape below
- Computer Use
- Browser Automation
  - → tool list in Tools and Environment Interfaces Landscape below
- Shell / Terminal
- Filesystem
- Code Execution
  - → see §12 Sandboxes
- Web Search
- APIs
- Database access
- Email / Messaging
- Events / triggers
- Voice / Multimodal I/O
  - Speech-to-text
  - Text-to-speech
  - Realtime voice agents
  - Vision/multimodal tool use
  - → tool list in Tools and Environment Interfaces Landscape below
- Generative UI
  - Agent-driven, on-the-fly interface generation rather than a fixed UI
  - → tool list in Tools and Environment Interfaces Landscape below

### Tools and Environment Interfaces Landscape → (separate page)

**MCP Registries**
- MCP Registry (Anthropic)
- Smithery
- Glama

**Browser Automation**
- Commercial / Proprietary
  - Browserbase
  - Browser Use
    - Hosted commercial layer under the same brand
- Open Source / Provider-agnostic
  - Playwright (Microsoft)
  - Browser Use
    - Self-hostable core; commercial layer under the same brand

**Voice / Multimodal Tools**
- Commercial / Proprietary
  - OpenAI Realtime API
  - ElevenLabs
  - Wispr Flow
- Open Source / Provider-agnostic
  - Whisper-based local tools
    - Voxtype (peteonrails)
      - Naming collision: unrelated same-named projects exist for Windows (zkwi, Doubao ASR-based, not Whisper) and macOS (separate PyPI package) — this entry is the Linux tool at voxtype.io, which explicitly offers Whisper as one of its transcription engines

**Generative UI Tools** (newer, less-settled space as a category, though attributions below are confirmed)
- Commercial / Proprietary
  - C1 (Thesys)
  - Vercel v0
- Open Source / Provider-agnostic
  - assistant-ui (Simon Farshid)

## 8. Agent Communication and Interoperability

### What is agent communication and interoperability
*(not yet drafted)*

### Why standardized agent communication matters
*(not yet drafted)*

### When interoperability protocols come into play
*(not yet drafted)*

### How agents communicate across systems
*(not yet drafted)*

### Where agent communication and interoperability is heading
*(not yet drafted)*

- Agent messaging
- Agent discovery
- Agent delegation
- Remote agent execution
- Human-agent communication
  - Distinct from Human-in-the-loop approval gates; see §14

### Communication and Interoperability Landscape → (separate page)

**Protocols**
- A2A (Google)
- ACP (Cognition)
  - Full name: Agent Client Protocol
  - Lets external agents run as first-class citizens inside a host editor
  - Example integrations: Codex, Claude Agent, OpenCode
  - Zed is a notable host editor implementation — see §1 Harnesses Landscape
  - Not the same protocol as IBM's ACP — see Legacy below

**Legacy / Decommissioned**
- ACP — Agent Communication Protocol (IBM) — merged into A2A under the Linux Foundation, announced Aug 2025, effective Sept 1, 2025; no longer exists as a standalone protocol. Not to be confused with Cognition's Agent Client Protocol above, which shares the acronym but is unrelated and still active.

## 9. Context

### What is context in agents
*(not yet drafted)*

### Why context management matters
*(not yet drafted)*

### When to apply which context technique
*(not yet drafted)*

### How context is managed
*(not yet drafted)*

### Where context management is heading
*(not yet drafted)*

- Context windows
- Prompt / context management
- Context compression
- Context caching
- Dynamic context loading
- Context engineering
- Context isolation
- Context prioritization
- Context retrieval

### Context Landscape → (separate page)

No dedicated tooling — context handling is typically implementation-level engineering within a harness or framework, not a distinct third-party product category.

## 10. Memory

### What is agent memory
*(not yet drafted)*

### Why agents need memory
*(not yet drafted)*

### When to apply which memory type
*(not yet drafted)*

### How agent memory is implemented
*(not yet drafted)*

### Where agent memory is heading
*(not yet drafted)*

- Short-term / session memory
- Long-term memory
  - Episodic memory
  - Semantic memory
- User profiles/preferences
- Working memory
- Procedural memory
- Memory consolidation
- Memory retrieval
- Memory editing/deletion
- → tool list in Memory Landscape below

### Memory Landscape → (separate page)

**Memory Tools**
- Commercial / Proprietary
  - Mem0
    - Hosted commercial layer under the same brand
  - Zep
    - Hosted commercial layer under the same brand
  - Letta / MemGPT
    - Hosted commercial layer under the same brand
- Open Source / Provider-agnostic
  - Mem0
    - Self-hostable core; commercial layer under the same brand
  - Zep
    - Self-hostable core; commercial layer under the same brand
  - Letta / MemGPT
    - Self-hostable core; commercial layer under the same brand

## 11. Knowledge and Retrieval

### What is knowledge and retrieval for agents
*(not yet drafted)*

### Why agents need external knowledge and retrieval
*(not yet drafted)*

### When to reach for which retrieval approach
*(not yet drafted)*

### How knowledge and retrieval is implemented
*(not yet drafted)*

### Where knowledge and retrieval is heading
*(not yet drafted)*

- RAG
- Vector databases
  - → tool list in Knowledge and Retrieval Landscape below
- Knowledge graphs
  - → tool list in Knowledge and Retrieval Landscape below
- Document stores
- Search/retrieval
- Embedding models
- Hybrid search
- Reranking
- Graph RAG
- Semantic layer over structured data
  - A third grounding representation alongside vector index and knowledge graph above — for structured data (e.g. customer records) rather than documents
  - → tool list in Knowledge and Retrieval Landscape below

### Knowledge and Retrieval Landscape → (separate page)

**Vector Databases**
- Commercial / Proprietary
  - Pinecone
  - Weaviate
    - Hosted commercial layer under the same brand
  - Qdrant
    - Hosted commercial layer under the same brand
  - Chroma
    - Hosted commercial layer under the same brand
  - Zilliz Cloud
    - Hosted layer for Milvus, under a separate brand name
- Open Source / Provider-agnostic
  - Weaviate
    - Self-hostable core; commercial layer under the same brand
  - Qdrant
    - Self-hostable core; commercial layer under the same brand
  - Chroma
    - Self-hostable core; commercial layer under the same brand
  - Milvus (Zilliz)
    - Hosted commercially as Zilliz Cloud, under a separate brand name
  - pgvector (Andrew Kane)

**Knowledge Graphs**
- Commercial / Proprietary
  - Neo4j Aura
    - Hosted layer for Neo4j, under a separate brand name
- Open Source / Provider-agnostic
  - Neo4j
    - Hosted commercially as Neo4j Aura, under a separate brand name

**Semantic Layer Tools**
- Commercial / Proprietary
  - dbt Semantic Layer (dbt Labs)
    - Hosted commercial layer via dbt Cloud
  - AtScale
  - Cube
    - Hosted commercial layer under the same brand
- Open Source / Provider-agnostic
  - dbt Semantic Layer (dbt Labs)
    - Self-hostable core via dbt Core; commercial layer via dbt Cloud
  - Cube
    - Self-hostable core; commercial layer under the same brand

---

# RUN

## 12. Runtime and Execution Infrastructure

### What is runtime and execution infrastructure
*(not yet drafted)*

### Why agents need dedicated runtime infrastructure
*(not yet drafted)*

### When to choose among runtime options
*(not yet drafted)*

### How agents are run and executed
*(not yet drafted)*

### Where runtime and execution infrastructure is heading
*(not yet drafted)*

**General Concepts**
- Containers
- VMs
- Processes
- State
- Sessions
- Execution
- Resource management
- Network access
  - → see Network restrictions below — this is the runtime capability; Network restrictions is the security-policy counterpart constraining it. Related, not identical: kept separate rather than merged
- GPU access
- Isolation
- Network restrictions
  - → see Network access above

### Runtime and Execution Infrastructure Landscape → (separate page)

**Sandboxes**
- Commercial / Proprietary
  - Modal
    - → also see §6 Inference Providers (same product, dual capability)
  - E2B
    - Hosted commercial layer under the same brand
  - Daytona
    - Hosted commercial layer under the same brand
- Open Source / Provider-agnostic
  - E2B
    - Self-hostable core; commercial layer under the same brand
  - Daytona
    - Self-hostable core; commercial layer under the same brand
  - Firecracker (AWS)
  - gVisor (Google)

## 13. Agent Operations and Deployment

### What is agent operations and deployment
*(not yet drafted)*

### Why dedicated operations tooling matters
*(not yet drafted)*

### When operations concerns come into play
*(not yet drafted)*

### How agents are operated and deployed
*(not yet drafted)*

### Where agent operations and deployment is heading
*(not yet drafted)*

- Background agents
- Scheduled agents
- Event-driven agents
  - Queues
  - Webhooks
  - Cron
- Persistent workers
- Durable execution
- Remote execution
- Agent hosting
- Checkpointing
- Retry/recovery
- Long-running tasks
- Deployment
- Autoscaling
- Versioning
- Budget / token limits
  - → runtime enforcement lives in §14; this is planning-level allocation
- Agent lifecycle management

### Operations and Deployment Landscape → (separate page)

- Commercial / Proprietary
  - Warp Factories
    - Agent-native fleet orchestration across the SDLC — event-driven (issue, Slack, or schedule triggers), evals/benchmarking and self-improvement loops built in
    - → also see §1 Harnesses Landscape — same company as Warp Terminal and Warp Agent CLI, but a separate product from either
  - Temporal
    - Hosted commercial layer via Temporal Cloud
  - Inngest
    - Hosted commercial layer under the same brand
  - Trigger.dev
    - Hosted commercial layer under the same brand
  - Amazon Bedrock AgentCore
    - Managed runtime for deploying and operating agents on AWS, built with any framework
  - Agent Engine (Google)
    - Managed agent runtime within Gemini Enterprise Agent Platform (formerly Vertex AI Agent Engine) — see §6 Cloud AI Platforms
  - Cloudflare Agents
    - Stateful agents hosted on Cloudflare's global network. The SDK is open source (MIT) but runs only on Cloudflare, so it isn't listed under Open Source. The same company's edge inference, Workers AI, is listed in §6
  - LangSmith Deployment (LangChain)
    - Hosting for long-running, stateful agents; formerly LangGraph Platform, renamed October 2025. The separately branded commercial deployment layer for LangGraph (§2); LangSmith's observability product is listed in §15
- Open Source / Provider-agnostic
  - Temporal
    - Self-hostable core; commercial layer via Temporal Cloud
  - Inngest
    - Self-hostable core; commercial layer under the same brand
  - Trigger.dev
    - Self-hostable core; commercial layer under the same brand
  - BullMQ (Taskforce.sh)

---

# CONTROL

## 14. Security and Governance

### What is agent security and governance
*(not yet drafted)*

### Why agents need dedicated security and governance
*(not yet drafted)*

### When these controls apply
*(not yet drafted)*

### How agent security and governance is implemented
*(not yet drafted)*

### Where agent security and governance is heading
*(not yet drafted)*

**Access and Authorization**
- Permissions
- Agent identity
  - → tool list in Security and Governance Landscape below
- Authentication
- Authorization
- Capability-based access

**Secrets management**
- Credential delegation
- → tool list in Security and Governance Landscape below

**Data Governance**
- Data classification
- PII protection
- Data-loss prevention
- Data access controls
- Data retention

**Agent and Prompt Governance**
- Prompt and instruction governance
  - System instructions
  - Agent instructions
  - Prompt versioning
  - Approval / review
  - Prompt testing
- Policies
  - Conceptual home for what policies are, why they exist, and their two content types; the rules themselves live in §5
  - Behavioral and Model/tool scope
    - → see §5 Policies for the actual rule content (conduct vs. capability)
  - Policy instructions
    - Authoring, review, and approval before a policy ships — applies generically to any policy regardless of type
    - Instruction hierarchy
    - Provenance / change tracking
  - Policy enforcement
    - Runtime application of a policy once approved — applies generically to any policy regardless of type
    - → runtime application of the Guardrails tooling listed in §5; canonical tool list lives there, not duplicated here
- Prompt-injection defenses
  - Content-level injection: untrusted text (web pages, emails, documents) manipulating model behavior
  - → tool list in Security and Governance Landscape below
- MCP-specific attack surface
  - Distinct from content-level prompt injection above — this is protocol/supply-chain trust: the server or its tool descriptions themselves are the untrusted party, not the content flowing through them
  - Tool poisoning
  - Tool-description injection
  - Confused-deputy problem
  - Rug-pull updates
    - A previously-approved server changing behavior after the fact

**Human Oversight**
- Approval Policies
- Human-in-the-loop
- Human oversight / Escalation

**Audit and Resource Controls**
- Audit logs
- Rate limiting
- Resource / budget limits
  - → runtime enforcement counterpart to §13's planning-level allocation

### Security and Governance Landscape → (separate page)

**Agent Identity Tools**
- Commercial / Proprietary
  - WorkOS
  - Auth0 (Okta)

**Secrets Management Tools**
- Commercial / Proprietary
  - Doppler
  - HashiCorp Vault
    - Hosted commercial layer via HCP Vault
  - Infisical
    - Hosted commercial layer under the same brand
- Open Source / Provider-agnostic
  - HashiCorp Vault
    - Self-hostable core; commercial layer via HCP Vault
  - Infisical
    - Self-hostable core; commercial layer under the same brand

**Prompt-Injection Defense Tools**
- Commercial / Proprietary
  - Lakera
  - CalypsoAI

## 15. Observability and Evaluation

### What is agent observability and evaluation
*(not yet drafted)*

### Why observability and evaluation matter for agents
*(not yet drafted)*

### When to apply which observability or evaluation method
*(not yet drafted)*

### How agents are observed and evaluated
*(not yet drafted)*

### Where observability and evaluation is heading
*(not yet drafted)*

**Observability**
- Tracing
- Logs
- Metrics
- Token usage
- Cost tracking
- Latency
- Tool-calls
- Drift detection
  - → capability of the Observability tools listed below, not a separate tool category
- → tool list in Observability and Evaluation Landscape below

**Evaluation**
- Agent evals
  - Task success
  - Trajectory evaluation
  - Regression testing
  - Tool-use accuracy
  - Hallucination
  - Safety
- Model benchmarking
- Code review / PR quality
  - AI-driven review of pull requests and code diffs — output-quality assurance for human- and agent-written code alike, distinct from the agent-trajectory evals above
  - → tool list in Observability and Evaluation Landscape below
- Evaluation methods
  - Deterministic (code-based)
    - → implemented via the Observability tools already listed above
  - LLM-as-a-judge
    - → also implemented natively by Langfuse, Braintrust, and Arize Phoenix above
    - → tool list in Observability and Evaluation Landscape below
  - Human-in-the-loop
    - → see §14 Human Oversight
- → benchmark list in Observability and Evaluation Landscape below

**Debugging / Optimization**
- Trace replay
- Failure analysis
- Prompt analysis
- Trajectory analysis
- Cost optimization
- Latency optimization

### Observability and Evaluation Landscape → (separate page)

**Observability Tools**
- Commercial / Proprietary
  - LangSmith (LangChain)
  - Braintrust
  - Weights & Biases Weave
  - Datadog LLM Observability
  - Honeycomb
  - Langfuse
    - Hosted commercial layer under the same brand
  - Helicone
    - Hosted commercial layer under the same brand
    - Distinct product from Helicone AI Gateway (§6) — same company, two separate product lines under one brand: this entry is the original observability/logging product; the Gateway is a separate routing/fallback product added later
  - Arize AX
    - Commercial platform under a separate brand name, built on Arize Phoenix
  - Fiddler AI
    - Positions itself as a control plane across agents built on any framework — telemetry, evaluation, monitoring, and policy enforcement in one layer
- Open Source / Provider-agnostic
  - Langfuse
    - Self-hostable core; commercial layer under the same brand
  - Helicone
    - Self-hostable core; commercial layer under the same brand
    - → distinct from Helicone AI Gateway; see §6
  - Arize Phoenix
    - Commercial platform available under a separate brand, Arize AX

**Evaluation Tools**
- Commercial / Proprietary
  - Confident AI
    - Hosted commercial layer under a separate brand name, built on DeepEval
- Open Source / Provider-agnostic
  - promptfoo (OpenAI)
    - Founded by Ian Webster and Michael D'Angelo; acquired by OpenAI in 2026, remains open source under continued independent development
  - Ragas (ExplodingGradients)
  - DeepEval (Confident AI)

**Code Review Tools**
- Commercial / Proprietary
  - Macroscope
  - CodeRabbit

**Benchmarks**
- SWE-bench
- GAIA
- AgentBench
- Terminal-Bench
- τ-bench

---

## Tags

- Open Source
- Proprietary
- Local
- Self-hosted
- Cloud
- Frontier
- Open-weight
- Coding
- Computer Use
- Multi-agent
- MCP
- A2A / ACP
- Enterprise
- Production
- Framework
- Protocol
- Observability
- Memory
- Voice / Multimodal
- ADE
- Security
- Governance
- Eval

## Open items

- Once this becomes a site: Build/Connect/Run/Control as top-level nav, §1–15 as sub-nav, Tags (including ADE, Security, Governance, Eval) as cross-cutting filters, and each section's own Legacy callout surfaced as a collapsed/secondary block rather than mixed into the main list — **superseded by site-content-plan-v2.md**, which resolves Control into a hub page rather than a literal nav stage
- **Landscape gaps — scope decision made: mainstream items are IN, to be added before launch; speculative items HELD, explicitly framed as "still forming" rather than omitted.**
  - **In scope, to be added:** Web Search tools (Exa, Tavily, Firecrawl, Brave Search API, Perplexity API) in §7; Structured outputs tooling (Instructor, Outlines, BAML) in §5/§7; OpenTelemetry GenAI semantic conventions in §15; expanded agent identity standards (SPIFFE/SPIRE, OAuth 2.1 for agents, Descope, Stytch) in §14; Reflection/critic and Plan-and-execute orchestration patterns in §3; agent-specific benchmarks (OSWorld, WebArena, BrowseComp) in §15. Rationale: these are already mainstream, load-bearing infrastructure agents commonly touch today, not emerging bets — omitting them would make the taxonomy read as incomplete on core use cases.
  - **Held for a later pass, marked as an actively-forming space rather than silently excluded:** Computer Use tools (Scrapybara, Hyperbrowser) — the category is still shifting alongside the underlying computer-use models; a protocol family for agentic payments/commerce (AP2, x402, Stripe agentic commerce) near §8; AG-UI as the agent↔user interaction protocol; programmatic/code-mode tool calling in §5/§7. Rationale: genuinely early/speculative, low adoption or no consensus yet — worth calling out explicitly as "the industry hasn't settled this yet," which is itself a useful signal to a reader (and potentially a pointer toward open problems/startup ideas), rather than a gap to hide.
  - Actual content/entries for the "in scope" items are not yet drafted — this resolves *whether*, not the entries themselves.
- ~~Sema4.ai Studio — placement~~ — **Resolved (v2.19): a second §2 Landscape category, No-code / Low-code Builders, alongside Code Frameworks.** These products build agents rather than being an agent someone uses, which is a framework's job without the code — so §2 fits, and §1 keeps its narrower meaning. The category landed with more than Sema4.ai in it: Agentforce, n8n, and Langflow, plus Flowise in its Legacy list. §2's What beat now names both forms.
- **LlamaCloud / LlamaParse — captured, placement not yet decided.** LlamaIndex's separately branded commercial service for document parsing, OCR, and extraction, feeding LlamaIndex pipelines. No section's Landscape covers document ingestion or parsing: §11 has Vector Databases, Knowledge Graphs, and Semantic Layer Tools only. Options: a new §11 Document Parsing category (LlamaParse plus comparable tools), or out of scope as data-preparation tooling. Logged so it isn't lost; not placed anywhere yet.
- ~~MCP is underbuilt relative to its actual weight~~ — **Resolved and built out.** §7 now has real substructure (Servers, Clients, Transports, Registries — MCP Registry/Smithery/Glama), and §14 has a dedicated MCP-specific attack surface (tool poisoning, tool-description injection, confused-deputy, rug-pull updates) as a sibling to Prompt-injection defenses, distinguished as protocol/supply-chain trust rather than content-level injection. Treated as mainstream/load-bearing rather than a speculative landscape gap, since MCP is the connective tissue of the whole Connect stage.
- ~~Cloud AI Platforms (§6) placement~~ — **Resolved:** no single-stage home forced, same pattern as Control. Canonical content splits by actual capability (model access under §4 Models, deployment infrastructure under §12 Run, governance controls wherever the Control mapping already sends them), plus a lightweight hub page cross-linking the pieces together for a reader thinking in terms of the platform as one thing (e.g. "Bedrock"). See site-content-plan-v2.md §8 item 1 for the full decision; physical move into the doc structure not yet done.
- ~~Verification: OpenWorker, Pi/Oh My Pi, and Andrew Ng's AI Engineering Skills Map~~ — **Verified, all correct.** OpenWorker's attribution to Andrew Ng confirmed (announced July 23, 2026 on his own account; README itself doesn't name him directly, only the `andrewyng` GitHub account and lineage from `aisuite`). Pi and Oh My Pi both have identifiable individual creators — Mario Zechner (`badlogic`) and `can1357` respectively — now named directly per the updated attribution convention (see Formatting rules) rather than left as "(open source community)". Andrew Ng's AI Engineering Skills Map confirmed as a real, dated source (launched Aug 14, 2026 via DeepLearning.AI's The Batch).
- ~~Helicone AI Gateway's appearance in §15 Observability~~ — **Resolved:** not a naming slip, but a missing entry. Helicone is one company with two distinct product lines under the same brand: the original observability/logging tool (correctly in §15, now labeled plainly as "Helicone") and a separate AI Gateway product added later for routing/fallback (§6, "Helicone AI Gateway"). Both entries now cross-reference each other and are named to reflect the actual product each row describes.

## Changelog

**v2.19 — 2026-09-13**
- Folded in a harness/framework landscape research pass ("Agent Harnesses & Frameworks — Full Landscape (2026)", 31 products). Every product was checked against its GitHub repo, license, and the vendor's own announcements before placing it. The source doc's descriptions come from vendor and review blogs, so entries here are rewritten as neutral identification, not its "moat"/"best use case" copy
- Drafted §2's five narrative beats, the second section drafted in full after §1. The source doc's decision guide became neutral selection criteria in the When beat (language, model commitment, how much state the agent keeps, cloud alignment) rather than a "use this product" table
- Restructured §2's Landscape into two product categories, each with Commercial / Open Source / Legacy buckets: Code Frameworks and a new No-code / Low-code Builders category. This resolves the Sema4.ai Studio open item (see Open Items). The flat list couldn't carry the Commercial/Open Source axis every Landscape needs
- Code Frameworks: moved Claude Agent SDK to Commercial / Proprietary — MIT-licensed, but Claude-models-only, so it fails the provider-agnostic test Gemini CLI's entry set. Dual-listed Mastra (hosted Mastra Platform, same brand). Added AG2 and Haystack (deepset). Noted LlamaIndex Workflows under LlamaIndex, LangGraph's separately branded deployment layer, and AutoGen's maintenance-mode status (per its README)
- No-code / Low-code Builders: Agentforce (Salesforce), Sema4.ai Studio, and n8n under Commercial — n8n is source-available (Sustainable Use License), not open source, despite the source doc calling it open source. Langflow (MIT, active) under Open Source, added beyond the source doc so the bucket isn't misleadingly empty. Flowise under Legacy: its repo was archived August 13, 2026 and it reached end of life August 31, after the source doc listed it as live
- §1: added Perplexity Computer (Commercial) — a general-purpose agent worker fits §1's What definition, and §1 already lists non-coding agents (OpenWorker, Hermes Agent)
- §6: Google Vertex AI → Google Gemini Enterprise Agent Platform (rebranded April 22, 2026); Microsoft Azure AI Foundry → Microsoft Foundry (renamed November 2025). Added Workers AI (Cloudflare) to Inference Providers
- §13: added managed agent hosting — Amazon Bedrock AgentCore, Agent Engine (Google), Cloudflare Agents, LangSmith Deployment (formerly LangGraph Platform)
- §15: added Fiddler AI to Observability Tools
- Left out: Operator (OpenAI) — shut down August 31, 2025, and ChatGPT agent, which absorbed it, was removed in August 2026; computer-use tools are held for a later pass anyway (Open Items). LlamaCloud / LlamaParse — no document-parsing category exists; logged in Open Items. LangSmith, Vercel AI Gateway, and LiteLLM were already listed

**v2.18 — 2026-09-13**
- Moved Mods (Charm) from §1 Open Source / Provider-agnostic to Legacy / Decommissioned, reversing the v2.15 addition. Its README and GitHub repo, checked directly, show Charm sunset Mods and archived the repo on March 9, 2026 — six months before it was added here — in favor of Crush's non-interactive mode (`crush run`). v2.15's check read the changelog (v1.8.0's MCP support) but missed the sunset notice at the top of the README
- Corrected Continue's Legacy entry against its GitHub repo: the repo isn't archived, and there have been docs-only commits since the final June 19, 2026 release (through July 2026), so "went read-only — no further commits, issues, or PRs" overstated it. Still Legacy, since there have been no product releases since June 19. The Cursor acqui-hire itself wasn't re-verified in this pass
- Dropped the creator from Continue's entry, "Continue (Continue Dev, Inc.)" → "Continue": company and product share a name, so `Name (Creator)` omits the creator (same as Pinecone)

**v2.17 — 2026-09-13**
- Logged Sema4.ai Studio as a new Open Item rather than placing it in the doc body — captured so the product isn't lost, but its categorization is a genuine open question (no-code enterprise agent-builder, doesn't cleanly match §1 Harnesses or §2 Frameworks as either is currently defined), not something to force a decision on yet. Deliberately not resolved in this pass

**v2.16 — 2026-09-13**
- Added Zed to §1 Harnesses Landscape, dual-listed — GPL-3.0 editor core under Open Source/Provider-agnostic, proprietary Zed AI service/collaboration backend under Commercial/Proprietary, same brand — matching the existing LiteLLM/Portkey/Helicone dual-listing pattern. Also added a cross-reference note to §8's ACP entry: Zed is a notable host-editor implementation of the protocol (Claude Agent, Codex, and OpenCode dock directly into it), alongside its own native agent features
- Added Continue (Continue Dev, Inc.) to §1 Legacy/Decommissioned — not a live addition despite being asked for as one. Checking current status before adding surfaced that Continue was acqui-hired by Cursor in mid-June 2026, shipped a final v2.0.0 release June 19, 2026, and its GitHub repo has been read-only since, with no further commits from the original team. Judged this a completed shutdown rather than an active Open Source entry — more definitive than Windsurf's rebrand or Gemini CLI's tier-specific sunset, since no successor product carries Continue's name forward
- Did not add Sema4.ai Studio — a genuine scope question, not a stale-doc fix. It's a no-code enterprise agent-builder for business users (natural-language "Runbooks," pre-built enterprise-app integrations plus MCP), which doesn't match either §1 Harnesses (developer-facing, coding-specific) or §2 Frameworks (code-based toolkits) as currently defined. Flagged for a decision rather than force-fit into either

**v2.15 — 2026-09-13**
- Added Mods (Charm) to §1 Harnesses Landscape, Open Source/Provider-agnostic — a genuine reversal from an initial call. Charm's homepage describes Mods only as "a CLI interface to the world's best models," which read as a simple stdin-to-LLM pipe tool with no real agentic capability, and was initially judged out of scope on that basis. Checking the actual GitHub changelog before finalizing that call surfaced the real picture: v1.8.0 added MCP support (tool listing and calling via a connected MCP server, e.g. GitHub), on top of already-persisted multi-turn conversations and provider-agnostic model support. That's genuine tool-calling, not just prompt-piping — enough to qualify as a lightweight harness alongside Aider and Cline, just CLI-pipe-shaped rather than interactive-session-shaped. Verified the rest of Charm's current lineup (Bubble Tea, Huh, Lip Gloss, Wish, Glamour, Bubbles, Log, Harmonica, Gum, Glow, Skate) are general-purpose terminal UI/Go libraries with no agent-specific capability — correctly out of scope, no changes needed there. Crush's existing entry also re-verified against the current charm.land site and found still accurate as-is

**v2.14 — 2026-09-13**
- Corrected a factual claim in §1's fully-drafted narrative, caught by checking warp.dev directly rather than trusting the existing entry: the "How" beat asserted Warp's ADE capability was "a mode within a product... not a separate product," alongside Cursor and Devin Desktop. Warp's own FAQ now states "Factories is a separate product — nobody at your company has to use warp terminal," directly contradicting that claim. Removed Warp from that list, added an explanatory note on the split, and updated the "Where" beat to track this as a possible leading indicator (ADE-as-mode splitting into ADE-as-product for at least one vendor). Updated Warp's Harnesses Landscape entry to reflect its current three-product structure (Terminal, Agent CLI, Factories). Added Warp Factories as a new, separately-listed entry in §13 Agent Operations and Deployment Landscape — the first genuinely agent-native entry there, versus the existing general-purpose job-orchestration tools (Temporal, Inngest, Trigger.dev, BullMQ) — with reciprocal cross-references between §1 and §13, mirroring the existing Modal dual-listing pattern (§6/§12) for a product that genuinely serves two distinct categories at once. Cursor and Devin Desktop were not re-verified in this pass — only Warp's specific claim was checked and found stale

**v2.13 — 2026-09-13**
- Added "Code review / PR quality" as a new item under §15's Evaluation bucket — AI-driven review of pull requests and code diffs, distinct from agent-trajectory evaluation above it. Added a corresponding "Code Review Tools" Landscape sub-category with its first two entries: Macroscope and CodeRabbit, both verified (Macroscope: agentic PR reviewer, usage-based pricing, no OSS layer; CodeRabbit: $88M+ raised, founded 2023 by Harjot Gill, SaaS with an enterprise self-hosted deployment option that isn't a genuine open-source core, so it stays Commercial/Proprietary only, not dual-listed). This is a genuine scope edge case flagged rather than silently absorbed: both tools review code output rather than build/orchestrate/run/govern an agent directly, but were judged in-scope given how explicitly their own positioning ties to the rise of AI coding agents specifically
- Added Zencoder to §1 Harnesses Landscape (Commercial/Proprietary), with Zenflow noted as its multi-agent orchestration/ADE mode — mirrors the existing Cursor/Devin Desktop/Warp pattern exactly (a fleet-orchestration mode folded into the parent product's entry, not a separate top-level listing)

**v2.12 — 2026-09-13**
- Added the announced Amazon Q Developer IDE plugin sunset to §1 Harnesses Landscape: full end-of-support April 30, 2027, new signups already blocked since May 15, 2026, Kiro named as the official successor for IDE-based agentic coding. Verified via AWS's own end-of-support announcement before adding. Kept Amazon Q Developer under Commercial/Proprietary rather than moving it to Legacy/Decommissioned — unlike Windsurf and Gemini CLI, which were only added to Legacy once their sunset had actually completed, Amazon Q Developer is still in an active transition window with existing users fully supported; revisit once the April 2027 date actually passes. Added a reciprocal cross-reference on the Kiro entry, mirroring the existing Devin Desktop/Windsurf and Antigravity/Gemini CLI pattern

**v2.11 — 2026-09-08**
- Dissolved §14's "Isolation and Infrastructure Security" bundle, redistributing its three items into §12 rather than leaving it as a Control-hub concept awaiting migration. Verified each item individually before moving anything, since a surface-level naming resemblance turned out to be misleading for one of the three: (1) Sandboxing had no content of its own beyond "→ see §12" — the taxonomy already treated it as the same concept as §12's existing Sandboxes topic, so it's fully absorbed with nothing new to add. (2) Isolation had no existing counterpart anywhere in §12 (Containers/VMs/Processes are the mechanisms; Isolation is the principle they serve) — added as a new item in §12's General Concepts. (3) Network restrictions was initially assumed mergeable with §12's existing Network access on the strength of the similar name, but on closer check neither the taxonomy nor any prior pass had actually asserted they're the same thing — Network access reads as a runtime capability, Network restrictions as the security policy constraining it. Kept as two separate items rather than merged, and cross-referenced them to each other for the first time, since no such link existed before. §14's "Isolation and Infrastructure Security" header is removed entirely — nothing left under it

**v2.10 — 2026-09-07**
- Reordered §5 Agent Behavior and Configuration's top-level bullets from high-level/high-leverage to niche (Instructions, Tool definitions, Model selection, Policies, Guardrails, Structured outputs, Reasoning strategies, Planning strategies, Agent personas, Temperature / sampling, Reasoning effort level, Behavioral constraints, Termination / stopping conditions, Standing context files, Hooks / lifecycle triggers) — this is the reading order a newcomer to the section should see, and the site's concept-grouping pages for this section now inherit it directly rather than needing a separately-maintained display order. Sub-items within each bullet (e.g. Prompts vs. Skills under Instructions) are intentionally left in their original order for now — a decision explicitly deferred, not an oversight. All cross-reference sub-bullets (→) moved with their parent bullet unchanged; no content added, removed, or reworded, only resequenced
- This is the first section to get this treatment; the other fourteen sections' bullet lists still reflect drafting order, not reading-priority order, pending the same pass

**v2.9 — 2026-09-06**
- Renamed file from ai-agent-ecosystem-v2.8.md to ai-agent-ecosystem-v2.9.md — this is a full renumbering pass, structurally distinct from v2.8's skeleton-only rollout
- Split two sections that were bundling genuinely different kinds of thing under one "and": §2 Agent Frameworks and Orchestration became **§2 Agent Frameworks** (tools you build with) and **§3 Orchestration Patterns** (architectural patterns implementable in any framework, or by hand — no 1:1 mapping to a framework the way ADE maps 1:1 to specific harnesses); §8 Context, Memory and Knowledge became **§9 Context**, **§10 Memory**, and **§11 Knowledge and Retrieval** — the three already had separate, non-overlapping product landscapes (Context has none at all; Memory has Mem0/Zep/Letta; Knowledge and Retrieval has vector DBs/knowledge graphs/semantic layer tools), a stronger signal for splitting than a shared "and" in the title alone
- This renumbers every section from the old §3 onward: old §3→4, §4→5, §5→6, §6→7, §7→8, §9→12, §10→13, §11→14, §12→15. Total section count goes from twelve to fifteen
- Every cross-reference in the live document (Formatting rules, all fifteen sections, Tags, Open items) was updated to the new numbering. This required care in two places rather than a blind find-and-replace: (1) old §2 had three live references, and each had to be checked for which half of the split it actually meant — the harness/framework distinction in §1 points to new §2, while the ADE/orchestration cross-reference and the Reflection/critic Open Items note both point to new §3; (2) references to *site-content-plan-v2.md's own* section numbers (a separate numbering space, e.g. "site-content-plan-v2.md §3") had to be protected from the taxonomy's renumbering — one instance (in the formatting rule describing this very convention) was initially caught by mistake and corrected back
- Historical Changelog entries below (v2.8 and earlier) were deliberately left using the section numbers that were valid at the time they were written, not updated to the new numbering — renumbering history would make those entries describe numbers that didn't exist yet when the work was done
- New §3 (Orchestration Patterns) and new §9 (Context) both have a Landscape section that honestly states there's no dedicated tooling, rather than forcing an empty product list for template consistency's sake
- Fixed the Models section's What header from "What this section covers" (meta-commentary, inconsistent with every other section's phrasing) to "What counts as a model provider here" — deliberately avoids "What is a model," which would invite an ML-fundamentals explanation the doc's own Scope line excludes as training-time content
- Verified every named tool/product/protocol present before this pass is still present after it, and that every remaining §-reference in the live document resolves to a section that actually exists

**v2.8 — 2026-09-06**
- Renamed file from ai-agent-ecosystem-v2.7.md to ai-agent-ecosystem-v2.8.md — this pass touches all twelve sections uniformly, a distinct and complete piece of work from v2.7's §1-specific rebuild, so it gets its own checkpoint rather than growing v2.7's entry
- Applied the five-part narrative header shape (What/Why/When/How/Where) plus a separated `### <Section> Landscape` sub-header to all eleven remaining sections (§2–§12), matching the template established for §1. No narrative content was drafted for these — each of the five headers stands as a placeholder marked *(not yet drafted)*; only the structural skeleton was added
- For each section, split existing content into two categories rather than moving everything wholesale: bare concept material (no attribution, no named products — e.g. Orchestration Patterns, Context, Data Governance) stayed in place between the narrative headers and the Landscape link; named/attributed material (Commercial/Proprietary and Open Source/Provider-agnostic splits, Legacy blocks, and any "Tools:" sublist) moved under the new Landscape header. Left a short `→ tool list in <Section> Landscape below` cross-reference wherever a tool list was pulled out from underneath a concept bullet, so nothing reads as silently missing
- Specific relocations worth noting: §4's Guardrails tool list (Guardrails AI, NeMo Guardrails, LlamaGuard) moved to Behavior and Configuration Landscape; §6's MCP Registries (MCP Registry, Smithery, Glama) moved to Tools and Environment Interfaces Landscape while Servers/Clients/Transports stayed as concept structure under Tool Calling; §7's A2A and ACP protocols (plus IBM's ACP in Legacy) moved to a new Communication and Interoperability Landscape, treated as named/attributed things rather than bare concepts, matching how §3 Models is treated entirely as landscape; §11's Agent identity, Secrets management, and Prompt-injection defenses tool lists moved to Security and Governance Landscape, leaving Access and Authorization, Isolation and Infrastructure Security, Data Governance, Agent and Prompt Governance, Human Oversight, and Audit and Resource Controls as concept-only groupings; §12's Benchmarks (SWE-bench, GAIA, etc.) moved to Landscape alongside the Observability and Evaluation tool lists, treated as named artifacts rather than bare concepts
- Verified every named tool/product/protocol present before this pass is still present somewhere after it, and that every new `→ tool list in ... Landscape below` cross-reference resolves to an actual header
- Updated the formatting rule to reflect universal application (previously worded as "sections that have received" the treatment, implying partial rollout) and to note that narrative content itself remains undrafted outside §1
- Updated the four taxonomy-version references in site-content-plan-v2.md from v2.7 to v2.8

**v2.7 — 2026-09-06**
- Renamed file from ai-agent-ecosystem-v2.6.md to ai-agent-ecosystem-v2.7.md — the v2.6 entry below had accumulated far more change than any prior version bump, so this splits a natural checkpoint rather than continuing to grow one unwieldy entry
- Restructured §1 end-to-end and renamed it from "Agent Products and Harnesses" to "Agent Harnesses" (matches the "Harnesses Landscape" link name; the content is entirely about harnesses, not a broader "products" concept). Final shape: five `###` narrative sub-headers — What (definition, plus a cross-reference distinguishing a harness from an agent framework in §2), Why (the problem the category solves), When (build-vs-buy tradeoff, plus vendor lock-in/continuity risk grounded in the Windsurf and Gemini CLI precedents in Legacy), How (CLI/IDE/cloud, plus the ADE distinction), Where (the fleet-management trend, ADE's origin story) — followed by a `### Harnesses Landscape` sub-header holding the Commercial/Open Source/Legacy lists. Dropped an earlier standalone ADE block once its concept was folded into How/Where and its concrete examples became light cross-ref notes on existing Landscape entries, avoiding duplicate listings
- Locked in this five-part shape (What/Why/When/How/Where + Landscape) as the standard template for the remaining eleven sections, not a one-off; updated the formatting rule and site-content-plan-v2.md §3 accordingly
- Corrected a mistake made earlier in this pass: Gemini CLI (Google) had been added to Open Source / Provider-agnostic without verifying it belonged there — it's Google's own harness for Gemini models specifically, never multi-provider, and its individual-user service was shut down June 18, 2026 in favor of Antigravity CLI. Moved to Legacy/Decommissioned with a cross-reference to Antigravity CLI, and noted the categorization lesson (open-source license ≠ provider-agnostic)
- Built out MCP substructure in §6 (Servers, Clients, Transports, Registries) and added its specific attack surface to §11 (tool poisoning, tool-description injection, confused-deputy, rug-pull updates) as a sibling to Prompt-injection defenses, distinguished by threat model (protocol/supply-chain trust vs. content-level injection)
- Revised the creator-attribution convention: solo/small-team open-source projects now name the actual creator or handle instead of falling back to "(open source community)," which is reserved for projects with no single identifiable creator. Updated Pi (Mario Zechner), Aider (Paul Gauthier), Cline (Saoud Rizwan), Oh My Pi (can1357), llama.cpp and llama.cpp server (Georgi Gerganov), pgvector (Andrew Kane), BullMQ (Taskforce.sh), Voxtype (peteonrails, with a disambiguating note about unrelated same-named Windows/macOS projects), assistant-ui (Simon Farshid), and promptfoo (OpenAI, following its 2026 acquisition — founders Ian Webster and Michael D'Angelo noted, project remains open source)
- Verified four previously-flagged sources: OpenWorker's attribution to Andrew Ng, Pi/Oh My Pi's "(open source community)" labels (both have identifiable individual creators without corporate backing, same situation as llama.cpp), and Andrew Ng's AI Engineering Skills Map as a real dated source — all confirmed correct
- Resolved the Helicone naming-slip flag: verified Helicone is one company with two distinct product lines (observability tool + separately-launched AI Gateway); fixed §12 entry to read "Helicone" and §5 entry to read "Helicone AI Gateway," with corrected cross-references between them
- Resolved Cloud AI Platforms placement flag in Open Items (see site-content-plan-v2.md §8 item 1 for the full decision)
- Fixed a self-inflicted rule violation: removed an inline flag note on MCP in §6 that broke the doc's own "no inline notes" rule; moved the underlying concern to Open Items where flags belong, then resolved it via the MCP substructure build-out above
- Fixed a stale cross-reference in §6 (MCP Clients pointed to "the harness landscape itself" instead of the actual "§1 Harnesses Landscape" header name, once that header existed)

**v2.6 — 2026-09-06**
- Moved Semantic Kernel to Legacy/Decommissioned in §2, alongside AutoGen — both superseded by Microsoft Agent Framework (verified: MAF is the official direct successor to both, shipped April 3, 2026; SK now receives only critical fixes)
- Added Claude Agent SDK (Anthropic) and DSPy (Stanford) to §2 Frameworks
- Added OpenHands (All Hands AI) and Goose (Block) to §1 Open Source harnesses
- Added Nous Research → Hermes to §3 Models, and clarified in §1 that Hermes Agent (harness) and the Hermes model line are distinct — verified Hermes Agent is a real, actively maintained harness, not a category error
- Verified and corrected creator attributions: Jan (Menlo Research), C1 (Thesys) — was inverted as "Thesys (C1 API)", Ragas (ExplodingGradients), DeepEval (Confident AI), Milvus (Zilliz)
- Added Confident AI as its own Commercial/Proprietary entry in §12, since it's a separately-branded commercial layer on DeepEval (same pattern as Milvus/Zilliz Cloud), not a same-brand dual-listing
- Flagged assistant-ui and promptfoo as unconfirmed attribution rather than guessing
- Fixed rule violations: broke up inline notes/examples into proper sub-bullets (Whisper-based tools, Deterministic evaluation, Drift detection); added explicit formatting-rule exceptions for §3's arrow notation and §12's unattributed benchmarks, rather than leaving them as unflagged violations
- Removed duplicated Guardrails AI/NeMo Guardrails tool list from §11 Policy enforcement; canonical list stays in §4, cross-referenced from §11
- Added explicit dual-capability cross-references for Modal (§5 ↔ §9), resolving a silent duplication the v2 changelog had committed to eliminating
- Fixed a structural bug in §9 where the flat concept list (Containers, VMs, etc.) had no header and rendered as a child of the OSS sandbox list; added "General Concepts" header
- Tightened the scope line to explicitly exclude compliance/regulatory standards, resolving an inconsistency with §11's policy-lever entries
- Added Security, Governance, and Eval tags
- Flagged but did not resolve: the four overlapping "policy" entries across §4/§11, Cloud AI Platforms' placement under Connect, and a possible Helicone naming slip in §12 — all need your input, not a formatting fix
- Logged, but did not add, a substantial list of landscape gaps (web search/computer use/structured-outputs tool layers, OpenTelemetry, agentic payments protocols, AG-UI, code-mode tool calling, expanded agent identity standards, additional orchestration patterns, agent-specific benchmarks) pending a scope decision

**v2.5 — 2026-09-06**
- Added Subagents to §2 Orchestration Patterns
- Added Reasoning effort level, Standing context files, and Hooks / lifecycle triggers to §4 Agent Behavior and Configuration
- Added Generative UI to §6 Tools and Environment Interfaces (tools flagged unconfirmed — newer space)
- Added Semantic layer over structured data to §8 Knowledge / Retrieval
- Added Drift detection and Evaluation methods (deterministic, LLM-as-a-judge, human-in-the-loop) to §12
- All additions sourced from Andrew Ng's AI Engineering Skills Map series (Aug–Sept 2026)

**v2.4 — 2026-09-05**
- Corrected OpenWorker attribution to Andrew Ng and Hermes attribution to Nous Research (both previously flagged unconfirmed)

**v2.3 — 2026-09-05**
- Moved Legacy / Decommissioned from one global section to a callout within each relevant section (§1, §2, §7)
- Removed all inline notes/dates/explanations from bullet lines; every note is now a nested sub-bullet, including cross-references (→)
- Standardized creator attribution to Name (Creator), omitted only when the creator's name is already contained in the product name, or replaced with "(open source community)" where there's no single corporate owner
- Flagged two entries (OpenWorker, Hermes) as unconfirmed rather than guessing an attribution

**v2.2 — 2026-09-05**
- Disambiguated Cognition's Agent Client Protocol from IBM's now-merged Agent Communication Protocol (both abbreviated ACP)
- Bolded the "Tools:" / "Benchmarks:" sub-header labels for consistency
- Moved version tracking here; dropped the version number from the document title and filename

**v2.1 — 2026-09-05**
- Split dual-listed tools into two entries where the commercial layer has a genuinely separate brand name (Milvus / Zilliz Cloud, Neo4j / Neo4j Aura, Arize Phoenix / Arize AX), keeping same-brand dual-listings (e.g. Temporal / Temporal Cloud) as-is
- Converted remaining comma-separated tool and example lists into nested, one-per-line sub-bullets
- Narrowed the ADE note to the Warp-originated "control plane for parallel coding agents" sense only

**v2 — 2026-09-05**
- Full restructure: single continuous numbering through Build → Connect → Run → Control
- Added a product/tool layer to every section that was concept-only, split into Commercial / Proprietary and Open Source / Provider-agnostic
- Added Voice / Multimodal I/O as a new category
- Updated stale entries: Windsurf → Devin Desktop rebrand, Cursor 3's agent-fleet shift, added Aider/Cline/ACP
- Added cross-references between overlapping concepts instead of leaving silent duplication
- Expanded tags

**v1 — 2026-09-05**
- Initial taxonomy outline
