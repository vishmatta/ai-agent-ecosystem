---
title: Agent Frameworks
type: narrative
tags:
  - Framework
landscapes:
  - title: Code Frameworks
    href: /build/agent-frameworks/code-frameworks
    stats:
      - { value: 18, label: frameworks catalogued }
      - { value: 2, label: commercial }
      - { value: 15, label: open source }
      - { value: 2, label: legacy }
  - title: No-code / Low-code Builders
    href: /build/agent-frameworks/no-code-builders
    stats:
      - { value: 9, label: builders catalogued }
      - { value: 7, label: commercial }
      - { value: 1, label: open source }
      - { value: 1, label: legacy }
deck: >-
  Toolkits for building your own agent (code libraries and SDKs, or no-code builders) rather than a finished agent product.
---

### What is an agent framework

An agent framework is a toolkit for building your own agent rather than a finished agent product. It supplies the tool-calling loop, tool definitions, state, and multi-agent primitives, and you assemble them into something you ship.

Frameworks come in two forms: code frameworks, the libraries and SDKs a developer programs against, and no-code / low-code builders, visual or natural-language tools for assembling agents without writing the loop.

Distinct from an agent harness ([[build/agent-harnesses/index|Agent Harnesses]]): a harness is the finished wrapper you use; a framework is what you would build one with. The line can blur: the Claude Agent SDK is Claude Code's own harness, exposed as a library.

### Why use an agent framework

An agent embedded in your own product or workflow means owning its loop: which tools it can call, what it remembers, and when a person has to approve. A framework supplies that loop instead of re-implementing it from a raw model API.

Frameworks package the recurring hard parts: tool schemas, validated structured output, persisting and resuming state, handing work between agents, and tracing hooks.

### When to use a framework vs. a harness

A harness fits when the task is your own, such as coding or research, and a finished product already does it. A framework fits when the agent is part of something you are building for other people.

Choosing among code frameworks usually comes down to four criteria:

- **Language:** Python, TypeScript, .NET, Java, Go. Few frameworks cover more than two.
- **Model commitment:** a model vendor's own SDK is thinnest on that vendor's models; provider-agnostic frameworks trade some of that for portability.
- **How much state the agent keeps:** a simple tool loop, or durable, checkpointed graphs that pause for human input and resume.
- **Cloud alignment:** each hyperscaler's framework deploys most directly to its own managed runtime ([[run/agent-operations/index|Agent Operations and Deployment]]).

No-code / low-code builders fit when the people defining the agent aren't engineers, or when the work is mostly integration glue between existing systems. They run out of room as agent logic grows complex.

Continuity risk applies here too. Microsoft folded AutoGen and Semantic Kernel into Microsoft Agent Framework, and Flowise wound down entirely in 2026. Both are in the Landscapes' Legacy lists below.

### How agent frameworks are used

Common shapes are one agent in a tool-calling loop; an explicit graph or state machine with checkpoints between steps; teams of role-based agents with assigned goals; and event-driven workflows that react to typed events. Frameworks are where [[build/orchestration-patterns/index|Orchestration Patterns]] get implemented.

In production, a framework is usually paired with a managed runtime to host the agent ([[run/agent-operations/index|Agent Operations and Deployment]]), a gateway for model access ([[connect/model-infrastructure/index|Model Infrastructure]]), and an observability layer ([[control/observability-and-evaluation/index|Observability and Evaluation]]).

### Where agent frameworks are heading

Consolidation is under way. Microsoft Agent Framework 1.0 (April 2026) replaced AutoGen and Semantic Kernel; AutoGen now continues only as a community-managed codebase in maintenance mode, and AG2 carries its classic agent classes forward.

Model vendors' SDKs are absorbing harness features. The Claude Agent SDK ships Claude Code's file tools, permissions, subagents, and hooks as a library. Open-source frameworks increasingly come with a hosted commercial layer for deployment and observability, such as LangSmith Deployment for LangGraph and Mastra Platform for Mastra.

Low-code builders are under pressure from coding agents: Flowise's maintainers cited developers moving complex work to coding agents when they wound it down.
