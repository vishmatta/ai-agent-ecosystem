---
title: Code Frameworks
type: landscape
---

## Commercial / Proprietary

- Claude Agent SDK (Anthropic)
  - The harness behind Claude Code, as a library: file tools, shell execution, permissions, subagents, hooks, and in-process MCP servers
  - MIT-licensed, but built for Claude models only, so it isn't listed as provider-agnostic
- Mastra
  - Hosted commercial layer, Mastra Platform (deployment, observability, hosted Studio), under the same brand as the open-source core (see Open Source)

## Open Source / Provider-agnostic

- OpenAI Agents SDK
- LangChain
- LangGraph (LangChain)
  - Graph orchestration with checkpointed, resumable state. Its commercial deployment layer, LangSmith Deployment, is separately branded (§13 Agent Operations and Deployment)
- CrewAI
- Google ADK
- Microsoft Agent Framework
  - Successor to AutoGen and Semantic Kernel (see Legacy); Python and .NET
- LlamaIndex
  - LlamaIndex Workflows is its event-driven orchestration layer
- PydanticAI
- smolagents (Hugging Face)
- Mastra
  - Self-hostable open-source core; enterprise features and the hosted layer are commercial (see Commercial)
- Vercel AI SDK
- DSPy (Stanford)
- Haystack (deepset)
- AG2
  - Community-driven continuation of the AutoGen codebase; the classic `autogen` classes live on as AG2 Classic

## Legacy / Decommissioned

- AutoGen (Microsoft)
  - Superseded by Microsoft Agent Framework 1.0 (April 3, 2026), built by the same team. Now in maintenance mode and community-managed; AG2 continues the codebase
- Semantic Kernel (Microsoft)
  - Superseded by Microsoft Agent Framework in the same release. Receives critical bug and security fixes only
