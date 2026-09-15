---
title: Code Frameworks
type: landscape
---

## Commercial / Proprietary

- [Claude Agent SDK](https://code.claude.com/docs/en/agent-sdk/overview) (Anthropic)
  - The harness behind Claude Code, as a library: file tools, shell execution, permissions, subagents, hooks, and in-process MCP servers
  - MIT-licensed, but built for Claude models only, so it isn't listed as provider-agnostic
- [Mastra](https://mastra.ai/docs/mastra-platform/overview)
  - Hosted commercial layer, Mastra Platform (deployment, observability, hosted Studio), under the same brand as the open-source core (see Open Source)

## Open Source / Provider-agnostic

- [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/)
- [LangChain](https://www.langchain.com/langchain)
- [LangGraph](https://www.langchain.com/langgraph) (LangChain)
  - Graph orchestration with checkpointed, resumable state. Its commercial deployment layer, LangSmith Deployment, is separately branded (see the [[run/agent-operations/landscape|Operations and Deployment Landscape]])
- [CrewAI](https://crewai.com/)
- [Agent Development Kit](https://adk.dev/) (Google)
  - Abbreviated ADK
- [Microsoft Agent Framework](https://learn.microsoft.com/en-us/agent-framework/)
  - Successor to AutoGen and Semantic Kernel (see Legacy); Python and .NET
- [LlamaIndex](https://developers.llamaindex.ai/python/framework/)
  - [LlamaIndex Workflows](https://developers.llamaindex.ai/python/llamaagents/workflows/) is its event-driven orchestration layer
- [PydanticAI](https://pydantic.dev/pydantic-ai)
- [smolagents](https://huggingface.co/docs/smolagents) (Hugging Face)
- [Mastra](https://github.com/mastra-ai/mastra)
  - Self-hostable open-source core; enterprise features and the hosted layer are commercial (see Commercial)
- [AI SDK](https://ai-sdk.dev/) (Vercel)
- [DSPy](https://dspy.ai/) (Stanford)
- [Haystack](https://haystack.deepset.ai/) (deepset)
- [AG2](https://www.ag2.ai/)
  - Community-driven continuation of the AutoGen codebase; the classic `autogen` classes live on as AG2 Classic

## Legacy / Decommissioned

- [AutoGen](https://github.com/microsoft/autogen) (Microsoft)
  - Superseded by Microsoft Agent Framework 1.0 (April 3, 2026), built by the same team. Now in maintenance mode and community-managed; AG2 continues the codebase
- [Semantic Kernel](https://github.com/microsoft/semantic-kernel) (Microsoft)
  - Superseded by Microsoft Agent Framework in the same release. Receives critical bug and security fixes only
