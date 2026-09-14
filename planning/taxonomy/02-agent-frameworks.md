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

## Changelog

**2026-09-13**
- Split out of `ai-agent-ecosystem-v2.19.md` unchanged, when the taxonomy became one file per section. Earlier history is in [changelog.md](changelog.md).
