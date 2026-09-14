---
title: Agent Harnesses & Frameworks — Full Landscape (2026)
kind: research
status: incorporated
researched: 2026-09-13
by: supplied by the repo owner
incorporated-in: taxonomy v2.19 (#28); site pages (#30)
review-notes: >-
  Corrected before use: Flowise was archived and reached end of life on
  2026-08-31, so it went to Legacy; n8n is source-available (Sustainable Use
  License), not open source; Claude Agent SDK is Claude-models-only, so it went
  to Commercial; Vertex AI is now Gemini Enterprise Agent Platform, and Azure AI
  Foundry is now Microsoft Foundry. Left out: Operator (shut down 2025) and
  LlamaCloud / LlamaParse (no category; logged in the taxonomy's Open Items).
  Entries were rewritten as neutral identification rather than copied.
---

# Agent Harnesses & Frameworks — Full Landscape (2026)

An **agent harness** is the operational runtime that wraps around an LLM to manage tool execution, memory, safety, context persistence, sandboxed execution, and recovery from failure — turning a stateless model into a production-ready agent. This is distinct from a **framework** (reusable building blocks like tool definitions and loop patterns), though many products serve as both ([Fiddler AI](https://www.fiddler.ai/blog/what-is-an-agent-harness)).

---

## 1. Commercial / Proprietary

These are managed platforms or proprietary runtimes where the primary value is a hosted service, vendor-locked model access, or a commercial deployment layer.

### Perplexity Computer
- **Moat**: Multi-model orchestration — coordinates 19+ AI models (GPT, Claude, Gemini, GLM, etc.) with subagents, browser automation, tool connectors (Gmail, Slack, Notion, 100+ services), scheduled tasks, and persistent memory in a single platform. No model-lockin for the user; the harness routes to the best model automatically ([VentureBeat](https://venturebeat.com/technology/perplexity-launches-computer-ai-agent-that-coordinates-19-models-priced-at)).
- **Best use case**: General-purpose knowledge work, research, content creation, scheduled automation, and multi-step workflows without writing code. Ideal for users who want an out-of-the-box agent worker rather than building one.

### OpenAI Agents SDK + Operator
- **Moat**: Tightest integration with OpenAI's model stack (o-series, GPT-4.1, etc.). Minimal abstraction, clean handoff/delegation primitives, `@function_tool` schema generation, built-in tracing, and controlled sandboxes. Shortest path from idea to working agent if you're on OpenAI models ([AgentMail](https://www.agentmail.to/blog/best-ai-agent-frameworks-2026)).
- **Best use case**: Teams committed to OpenAI's model API building tightly scoped assistants, tool-driven applications, and delegation workflows. Use Operator for browser-based task automation.

### Anthropic Claude Agent SDK / Claude Code
- **Moat**: Pre-built production harness (originally built for Claude Code) with file tools, bash execution, permissions, subagents, hooks, and in-process MCP servers. Ships with capabilities enabled and lets you restrict them. The harness is battle-tested from Claude Code's real-world usage ([AgentMail](https://www.agentmail.to/blog/best-ai-agent-frameworks-2026)).
- **Best use case**: Agents that perform real computer work — editing files, running commands, browsing — especially when using Claude models. Ideal for coding-agent-shaped tasks and computer-use workflows.

### Google ADK + Vertex AI Agent Engine + Gemini Enterprise Agent Platform
- **Moat**: Batteries-included GCP-native runtime with built-in session management, Memory Bank, browser debugging UI (ADK Web), code execution, CLI, multi-agent hierarchies, deterministic workflow runtime, evaluation tooling, and direct deployment to Vertex AI / Gemini Enterprise. Broadest language support (Python, Java, Go, TypeScript, Kotlin/Android) ([LangChain](https://www.langchain.com/resources/ai-agent-frameworks)).
- **Best use case**: Teams already on Google Cloud, especially those standardizing on Gemini or needing Java, Go, or Kotlin agent support.

### Microsoft Azure AI Foundry + Microsoft Agent Framework
- **Moat**: Unified successor to AutoGen and Semantic Kernel (1.0 released April 2026). Graph-based workflows, type-safe routing, checkpointing, human-in-the-loop, migration assistants, native MCP, OpenTelemetry observability, and responsible-AI guardrails (PII protection, prompt-injection defenses). Deep Azure/.NET enterprise integration ([LangChain](https://www.langchain.com/resources/ai-agent-frameworks)).
- **Best use case**: Microsoft-stack enterprises (Azure, .NET) needing multi-agent orchestration with responsible-AI guardrails and enterprise observability.

### AWS Bedrock AgentCore
- **Moat**: AWS-native managed agent runtime with containerized self-hosting, broad model access through Bedrock (Anthropic, Meta, Mistral, Amazon), and tight integration with AWS services (Lambda, S3, IAM, Step Functions) ([LangChain](https://www.langchain.com/resources/ai-agent-frameworks)).
- **Best use case**: AWS-native teams deploying containerized agent workflows with enterprise security and compliance requirements.

### Salesforce Agentforce
- **Moat**: Deep CRM data integration — agents natively access Salesforce records, flows, and business logic. Pre-built agent templates for sales, service, marketing, and commerce. Enterprise-grade trust layer with data masking and audit trails.
- **Best use case**: Salesforce-native enterprises automating customer-facing workflows (service, sales, commerce) where CRM data access is the core requirement.

### Cloudflare Agents (Workers AI)
- **Moat**: Global edge deployment across 200+ cities with serverless pay-per-inference pricing. 50+ models at the edge, stateful agents, AI Gateway for observability, Vectorize for RAG, and Workers infrastructure powering 20% of the internet ([Cloudflare](https://www.cloudflare.com/products/workers-ai/)).
- **Best use case**: Latency-sensitive global agent deployments, edge inference, and teams already on Cloudflare's infrastructure stack.

### LangSmith (LangChain commercial layer)
- **Moat**: Framework-agnostic observability, evaluation, deployment, cost/latency capture, failure grouping, and recommended fixes via LangSmith Engine. Works with LangGraph, OpenAI Agents SDK, Microsoft Agent Framework, Mastra, and custom code. Priced per node executed for deployment ([LangChain](https://www.langchain.com/resources/ai-agent-frameworks)).
- **Best use case**: Enterprise-grade observability and evaluation across any agent stack, regardless of framework. Use when you need production monitoring, debugging, and deployment of LangGraph or other agent workflows.

### Vercel AI Gateway (commercial layer)
- **Moat**: Provider gateway surrounding the open-source Vercel AI SDK — model routing, caching, rate limiting, and streaming chat UI hooks integrated with Next.js/React. Lightest install footprint (~15 packages, 53 MB) ([AgentMail](https://www.agentmail.to/blog/best-ai-agent-frameworks-2026)).
- **Best use case**: Product teams with existing Next.js/React apps adding agent features who want managed model access and routing.

### Mastra Platform (commercial layer)
- **Moat**: Hosted deployment and observability for Mastra agents with SOC 2 Type II compliance. Memory Gateway service with configurable retention and token limits. Free starter tier, $250/team/month Teams tier ([AgentMail](https://www.agentmail.to/blog/best-ai-agent-frameworks-2026)).
- **Best use case**: TypeScript teams deploying Mastra agents in managed environments needing enterprise compliance.

### LlamaCloud / LlamaParse
- **Moat**: Commercial OCR and document extraction that feeds directly into LlamaIndex Workflows. Cloud deployment via `llamactl` for document-heavy pipelines ([LangChain](https://www.langchain.com/resources/ai-agent-frameworks)).
- **Best use case**: Document-centric agent workflows requiring high-quality OCR and parsing at scale.

### Fiddler Control Plane
- **Moat**: Organization-wide governance, observability, evaluation, and monitoring across all agents regardless of framework. Provides the control plane layer that sits above individual harnesses ([Fiddler AI](https://www.fiddler.ai/blog/what-is-an-agent-harness)).
- **Best use case**: Enterprises running multiple agents across different harnesses who need centralized governance, evaluation, and monitoring.

---

## 2. Open Source / Vendor Agnostic

These frameworks have open-source cores (MIT or Apache 2.0) and generally support multiple model providers. Some have optional commercial layers for hosting/observability, but the framework itself is free and open.

### LangGraph (MIT)
- **Moat**: Low-level graph orchestration with durable, checkpointed state, crash recovery, resume, and first-class human-in-the-loop interrupts. Lowest token overhead in head-to-head testing. The de facto standard for complex stateful agents in Python ([AgentMail](https://www.agentmail.to/blog/best-ai-agent-frameworks-2026)).
- **Best use case**: Python teams building complex, long-running, multi-step, stateful agents with cycles, persistence, and human-in-the-loop control.

### CrewAI (MIT)
- **Moat**: Role-based multi-agent orchestration using agent personas (role, goal, backstory, tools, tasks). Intuitive abstractions for rapid setup, large community and template ecosystem. Deterministic Flows for production pipelines ([LangChain](https://www.langchain.com/resources/ai-agent-frameworks)).
- **Best use case**: Fast multi-agent prototypes, research into agent collaboration patterns, and role-based workflows like email triage, content publishing, and research.

### Microsoft Agent Framework (MIT)
- **Moat**: Unified successor to AutoGen and Semantic Kernel. Graph-based workflows, type-safe routing, checkpointing, human-in-the-loop, migration assistants from AutoGen/SK, native MCP, OpenTelemetry observability. Supports Python and .NET, and Microsoft Foundry, Azure OpenAI, OpenAI, Anthropic, Bedrock, Gemini, and Ollama ([LangChain](https://www.langchain.com/resources/ai-agent-frameworks)).
- **Best use case**: Microsoft-stack enterprise teams needing multi-agent orchestration across Python and .NET with optional responsible-AI guardrails. Also the migration target for existing AutoGen/SK projects.

### Google ADK core (Apache 2.0)
- **Moat**: Opinionated runtime with built-in session management, Memory Bank, browser debugging UI (ADK Web), code execution, CLI, multi-agent hierarchies, fan-out, retries, human-in-the-loop, evaluation tooling, and A2A protocol support. Broadest language coverage (Python, Java, Go, TypeScript, Kotlin) ([LangChain](https://www.langchain.com/resources/ai-agent-frameworks)).
- **Best use case**: Teams wanting a batteries-included agent runtime with strong debugging tools. Can self-host or deploy to GCP.

### Pydantic AI (MIT)
- **Moat**: Typed agents with dependency injection, validated structured output (via Pydantic), automatic retries, composable "capabilities," YAML agent specs, durable execution, and native token/request/tool-call budget controls. Type safety is the core differentiator ([AgentMail](https://www.agentmail.to/blog/best-ai-agent-frameworks-2026)).
- **Best use case**: Python teams building type-safe, structured-output agents where validation and correctness are critical.

### Mastra core (Apache 2.0)
- **Moat**: TypeScript-first, batteries-included — agents, graph-based workflows, memory, RAG, evals, guardrails, tracing, local visual Studio, suspend-and-resume workflows, human approvals, model routing across 600+ models and 40+ providers. Full-stack in one package ([AgentMail](https://www.agentmail.to/blog/best-ai-agent-frameworks-2026)).
- **Best use case**: TypeScript teams building production agent products (not demos) who want everything in one package.

### Vercel AI SDK (open source)
- **Moat**: Unified provider API, streaming chat UI hooks (React/Next.js), structured output, `ToolLoopAgent`, durable `WorkflowAgent`. Lightest install footprint. Deeply integrated with the JS/TS web ecosystem ([AgentMail](https://www.agentmail.to/blog/best-ai-agent-frameworks-2026)).
- **Best use case**: Product teams with existing Next.js/React web apps adding agent features incrementally.

### AutoGen / AG2 (open source)
- **Moat**: AutoGen pioneered conversation-driven multi-agent patterns (group chats, nested conversations, human proxies). AG2 is the active community fork by AutoGen's original creators — competitive tool-call rates and token overhead. Original AutoGen is in maintenance mode ([AgentMail](https://www.agentmail.to/blog/best-ai-agent-frameworks-2026)).
- **Best use case**: AG2 for researchers and teams maintaining/extending AutoGen-style systems. Original AutoGen for legacy/research use only — not recommended for new projects.

### LlamaIndex Workflows (MIT)
- **Moat**: Event-driven orchestration using typed events and event handlers with nested and parallel pipelines. Tight integration with LlamaIndex's document loading, parsing, and retrieval ecosystem ([LangChain](https://www.langchain.com/resources/ai-agent-frameworks)).
- **Best use case**: Document-centric, data-intensive multi-agent systems where retrieval is the core problem.

### smolagents (Hugging Face)
- **Moat**: Minimal, readable core agent loop (~1,000 lines). Code-first experimentation with Hugging Face model ecosystem integration. No heavy abstractions ([AgentMail](https://www.agentmail.to/blog/best-ai-agent-frameworks-2026)).
- **Best use case**: Code-first experimentation, research prototypes, and teams wanting maximum transparency into the agent loop.

### Haystack (deepset)
- **Moat**: Mature NLP/retrieval pipeline framework with agent capabilities. Strongest when the agent problem is primarily a retrieval and pipeline composition problem. Production-tested in enterprise search ([AgentMail](https://www.agentmail.to/blog/best-ai-agent-frameworks-2026)).
- **Best use case**: Retrieval-focused agents and enterprise search pipelines.

### n8n (open source)
- **Moat**: Visual workflow automation and integration glue with LLM/agent steps. No-code/low-code interface connecting 400+ integrations with AI agent capabilities ([AgentMail](https://www.agentmail.to/blog/best-ai-agent-frameworks-2026)).
- **Best use case**: Non-engineering teams or workflows primarily composed of integrations where visual orchestration matters more than code-level control.

### Flowise (open source)
- **Moat**: Visual drag-and-drop builder for constructing LLM workflows and agents. Lowers the barrier to agent development for non-developers ([AgentMail](https://www.agentmail.to/blog/best-ai-agent-frameworks-2026)).
- **Best use case**: Non-engineering teams or integration-oriented workflows needing visual construction of agent pipelines.

### LangChain (MIT)
- **Moat**: Broadest provider abstraction with 1,000+ integrations, composable primitives, and massive community/tutorials. The ecosystem from which LangGraph emerged ([LangChain](https://www.langchain.com/resources/ai-agent-frameworks)).
- **Best use case**: Rapid prototyping of complex agentic workflows, RAG pipelines, and tool-calling agents. Use LangGraph for production stateful agents; use LangChain for the broader integration ecosystem.

### LiteLLM (open source)
- **Moat**: Universal model-provider translation layer — lets any framework call any model with an OpenAI-compatible API. Used by OpenAI Agents SDK and Google ADK to access non-native models ([AgentMail](https://www.agentmail.to/blog/best-ai-agent-frameworks-2026)).
- **Best use case**: Model-provider portability — use when you want to swap between OpenAI, Anthropic, Gemini, local models, etc. without changing framework code.

---

## Quick Decision Guide

| You are... | You want... | Use this |
|---|---|---|
| Non-technical, want an agent worker | Out-of-the-box multi-model agent | **Perplexity Computer** |
| TypeScript team, shipping production | Full-stack framework with everything | **Mastra** |
| Python team, complex stateful agents | Durable graph orchestration | **LangGraph** |
| All-in on OpenAI models | Shortest path to working agent | **OpenAI Agents SDK** |
| All-in on Claude models | Pre-built computer-use harness | **Claude Agent SDK** |
| Google Cloud shop | Batteries-included GCP runtime | **Google ADK** |
| Microsoft/Azure enterprise | Unified .NET + Python orchestration | **Microsoft Agent Framework** |
| AWS-native enterprise | Containerized managed runtime | **AWS Bedrock AgentCore** |
| Salesforce-native enterprise | CRM-integrated agents | **Salesforce Agentforce** |
| Python team, type safety is key | Validated structured output | **Pydantic AI** |
| Next.js/React product team | Incremental agent features | **Vercel AI SDK** |
| Fast multi-agent prototyping | Role-based personas | **CrewAI** |
| Document/retrieval-centric | Event-driven data pipelines | **LlamaIndex Workflows** |
| Non-engineering, visual workflows | Drag-and-drop agent builder | **n8n** or **Flowise** |
| Researcher, want transparency | Minimal readable agent loop | **smolagents** |
| Enterprise, multiple harnesses | Centralized governance | **Fiddler Control Plane** |
| Need model portability | Universal provider translation | **LiteLLM** |
| Global edge deployment | Serverless edge inference | **Cloudflare Agents** |
| Enterprise observability | Framework-agnostic monitoring | **LangSmith** |

---

*Sources: [Fiddler AI](https://www.fiddler.ai/blog/what-is-an-agent-harness), [AgentMail](https://www.agentmail.to/blog/best-ai-agent-frameworks-2026), [LangChain](https://www.langchain.com/resources/ai-agent-frameworks), [Cloudflare](https://www.cloudflare.com/products/workers-ai/), [VentureBeat](https://venturebeat.com/technology/perplexity-launches-computer-ai-agent-that-coordinates-19-models-priced-at)*
