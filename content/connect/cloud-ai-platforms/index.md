---
title: Cloud AI Platforms
type: hub
---

A cloud AI platform bundles several kinds of agent tooling under one name: access to models, frameworks for building agents, and a managed runtime for deploying them. This site catalogs each piece where it operates, so a platform's model line sits in the [[build/models/landscape|Models Landscape]] and its agent runtime in the [[run/agent-operations/landscape|Operations and Deployment Landscape]], rather than under the platform as a single entry. This page puts the pieces back together for readers who think of a platform, such as Amazon Bedrock, as one thing, along with the same vendor's related agent services. Each piece links to the catalog that lists it.

- [Amazon Bedrock](https://aws.amazon.com/bedrock/)
  - Models: Amazon's [Nova line](https://aws.amazon.com/bedrock/), in the [[build/models/landscape|Models Landscape]]
  - Agent framework: Strands Agents, AWS's open-source SDK, in [[build/agent-frameworks/code-frameworks|Code Frameworks]]
  - Agent runtime: Amazon Bedrock AgentCore, in the [[run/agent-operations/landscape|Operations and Deployment Landscape]]
  - AgentCore services: Gateway, in [[connect/tools-and-environments/tool-gateways|Tool Gateways]]; Browser, in [[connect/tools-and-environments/browser-automation|Browser Automation]]; Code Interpreter, in the [[run/runtime-and-execution/landscape|Runtime and Execution Infrastructure Landscape]]; Identity, in [[control/security-and-governance/agent-identity-tools|Agent Identity Tools]]; Policy, in [[control/security-and-governance/agent-governance-tools|Agent Governance Tools]]; Observability, in [[control/observability-and-evaluation/observability-tools|Observability Tools]]; Evaluations, in [[control/observability-and-evaluation/evaluation-tools|Evaluation Tools]]; payments, in [[connect/agent-communication/agentic-payments|Agentic Payments]]; and AWS Agent Registry, in [[connect/tools-and-environments/mcp-registries|MCP Registries]]
  - Retrieval: Amazon Bedrock Knowledge Bases, in [[connect/knowledge-and-retrieval/managed-retrieval|Managed Retrieval Services]]
  - Document parsing: Amazon Bedrock Data Automation, in [[connect/knowledge-and-retrieval/document-parsing-tools|Document Parsing Tools]]
  - Guardrails: Amazon Bedrock Guardrails, in the [[build/agent-behavior/landscape|Behavior and Configuration Landscape]]
  - Model routing: Amazon Bedrock Intelligent Prompt Routing, in [[connect/model-infrastructure/routers-gateways-and-proxies|Model Routers, Gateways and Proxies]]
- [Gemini Enterprise Agent Platform](https://cloud.google.com/products/gemini-enterprise-agent-platform) (Google)
  - Formerly Google Vertex AI, renamed April 22, 2026
  - Models: Google's [Gemini line](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models), in the [[build/models/landscape|Models Landscape]]
  - Building agents: Agent Development Kit, in [[build/agent-frameworks/code-frameworks|Code Frameworks]]; Agent Studio, in [[build/agent-frameworks/no-code-builders|No-code / Low-code Builders]]
  - Running agents: Agent Runtime and the Managed Agents API, in the [[run/agent-operations/landscape|Operations and Deployment Landscape]]
  - Governance: Agent Gateway, in [[connect/tools-and-environments/tool-gateways|Tool Gateways]]; Agent Identity, in [[control/security-and-governance/agent-identity-tools|Agent Identity Tools]]; Agent Registry, in [[connect/tools-and-environments/mcp-registries|MCP Registries]]; Model Armor, in [[connect/tools-and-environments/prompt-injection-defense-tools|Prompt-Injection Defense Tools]]
  - Retrieval: Vector Search, in [[connect/knowledge-and-retrieval/vector-databases|Vector Databases]]; RAG Engine, in [[connect/knowledge-and-retrieval/managed-retrieval|Managed Retrieval Services]]
  - Evaluation: GenAI Evaluation Service, in [[control/observability-and-evaluation/evaluation-tools|Evaluation Tools]]
- [Microsoft Foundry](https://azure.microsoft.com/en-us/products/ai-foundry)
  - Formerly Azure AI Foundry, renamed November 2025
  - Models: Microsoft's [MAI line](https://microsoft.ai/news/building-a-hillclimbing-machine-launching-seven-new-mai-models/) and its open-weight [Phi line](https://azure.microsoft.com/en-us/products/phi), both in the [[build/models/landscape|Models Landscape]]
  - Running agents: Microsoft Foundry Agent Service, in the [[run/agent-operations/landscape|Operations and Deployment Landscape]]
  - Tools: Toolbox in Microsoft Foundry, in [[connect/tools-and-environments/tool-gateways|Tool Gateways]]
  - Retrieval: Foundry IQ, in [[connect/knowledge-and-retrieval/managed-retrieval|Managed Retrieval Services]]
  - Governance: Microsoft Foundry Control Plane, in [[control/security-and-governance/agent-governance-tools|Agent Governance Tools]]
  - Safety: Azure AI Content Safety, in the [[build/agent-behavior/landscape|Behavior and Configuration Landscape]], and its Prompt Shields, in [[connect/tools-and-environments/prompt-injection-defense-tools|Prompt-Injection Defense Tools]]
  - Observability: Foundry Observability, in [[control/observability-and-evaluation/observability-tools|Observability Tools]]
  - On device: Foundry Local, in [[connect/model-infrastructure/local-inference|Local Inference]]
  - Related Microsoft services: Microsoft Copilot Studio, in [[build/agent-frameworks/no-code-builders|No-code / Low-code Builders]]; Azure AI Search, in [[connect/knowledge-and-retrieval/vector-databases|Vector Databases]]; Azure Container Apps dynamic sessions, in the [[run/runtime-and-execution/landscape|Runtime and Execution Infrastructure Landscape]]; Microsoft Entra Agent ID, in [[control/security-and-governance/agent-identity-tools|Agent Identity Tools]]; Microsoft Agent 365, in [[control/security-and-governance/agent-governance-tools|Agent Governance Tools]]
- [Oracle AI Agent Studio for Fusion Applications](https://www.oracle.com/applications/dawn-of-ai-enterprise-agent-workforce/)
  - The platform itself, in [[build/agent-frameworks/no-code-builders|No-code / Low-code Builders]]
  - Related Oracle services: OCI Enterprise AI, in [[connect/model-infrastructure/inference-providers|Inference Providers]]; Oracle AI Vector Search, in [[connect/knowledge-and-retrieval/vector-databases|Vector Databases]]
- [Agent Bricks](https://www.databricks.com/product/artificial-intelligence/agent-bricks) (Databricks)
  - Formerly Mosaic AI
  - The platform itself, in [[build/agent-frameworks/no-code-builders|No-code / Low-code Builders]]
  - Its services: Model Serving, in [[connect/model-infrastructure/model-serving|Model Serving]]; Unity Gateway, in [[connect/model-infrastructure/routers-gateways-and-proxies|Model Routers, Gateways and Proxies]]; AI Search, in [[connect/knowledge-and-retrieval/vector-databases|Vector Databases]]; MLflow, in [[control/observability-and-evaluation/observability-tools|Observability Tools]]
  - Related Databricks work: Document Intelligence, in [[connect/knowledge-and-retrieval/document-parsing-tools|Document Parsing Tools]]; Omnigent, an open-source meta-harness, in the [[run/agent-operations/landscape|Operations and Deployment Landscape]]
- [Snowflake Cortex AI](https://www.snowflake.com/en/product/features/cortex/)
  - Agents you use: Snowflake CoCo, a coding agent, and Snowflake CoWork, an agent for business users, both in the [[build/agent-harnesses/landscape|Harnesses Landscape]]
  - Agents: Cortex Agents, in the [[run/agent-operations/landscape|Operations and Deployment Landscape]]
  - Natural language to SQL: Cortex Analyst, in [[connect/knowledge-and-retrieval/semantic-layer-tools|Semantic Layer Tools]]
  - Retrieval: Cortex Search, in [[connect/knowledge-and-retrieval/managed-retrieval|Managed Retrieval Services]]
