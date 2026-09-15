---
title: Tool Gateways
type: landscape
---

## Commercial / Proprietary

- [Amazon Bedrock AgentCore Gateway](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/gateway.html)
  - One managed entry point for agent traffic: converts APIs, Lambda functions, and existing services into MCP tools, fronts other agents (including A2A traffic), and routes model requests across providers
  - AgentCore Policy enforces its rules at this gateway (see [[control/security-and-governance/agent-governance-tools|Agent Governance Tools]])
- [Agent Gateway](https://docs.cloud.google.com/gemini-enterprise-agent-platform/govern/gateways/agent-gateway-overview) (Google)
  - Part of Gemini Enterprise Agent Platform: secures and governs traffic between users, agents, and tools, and enforces the platform's IAM and semantic governance policies
- [Toolbox in Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/toolbox-overview)
  - Manages and shares the tools, APIs, and MCP servers that Foundry agents call, in one place instead of per agent

## Open Source / Provider-agnostic

No open-source tool gateways are catalogued in this category yet.

## Legacy / Decommissioned

No legacy or decommissioned tool gateways are catalogued in this category.
