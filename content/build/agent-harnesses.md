---
title: Agent Harnesses
type: narrative
tags:
  - ADE
landscapes:
  - title: Harnesses Landscape
    href: /build/agent-harnesses-landscape
    stats:
      - { value: 22, label: harnesses catalogued }
      - { value: 9, label: commercial }
      - { value: 10, label: open source }
      - { value: 3, label: legacy }
deck: >-
  The wrapper around a model — the tool-calling loop, context and session management, safety rails, and the interface a person actually touches.
---


### What is an agent harness

An agent harness is the wrapper around a model — the tool-calling loop, context and session management, safety rails, and the interface a person actually touches.

Distinct from an agent framework ([[agent-frameworks|§2 Agent Frameworks]]): a framework is a library or toolkit for building your own harness, not a finished product itself.

### Why use an agent harness

Building your own agent loop from a raw model API means re-solving problems most teams don't need to re-solve — tool-calling, context and session management, safety rails.

A harness gives you that plumbing for free, so effort goes into the task rather than the infrastructure around it.

### When to leverage an existing harness vs. building your own

The real tradeoff is polish and support (commercial) versus model flexibility and inspectability (open source) — see the Harnesses Landscape below for the full split.

Vendor lock-in and continuity risk are part of that calculus too. Even established, widely-adopted harnesses can be discontinued or substantially changed with little notice — Windsurf's forced rebrand into Devin Desktop, and Gemini CLI's individual-tier shutdown in favor of Antigravity CLI, are both recent examples.

### How to use an agent harness

Harnesses run as a CLI, embedded in an IDE, or hosted in the cloud — and increasingly, as either a single-agent chat or a fleet-management control plane.

A traditional harness runs one agent loop you converse with. An Agentic Development Environment (ADE) is a control plane for supervising multiple agents in parallel across a workflow. Most ADEs are a mode within a product that also functions as a traditional harness, not a separate product — Cursor, Devin Desktop, and Warp all serve both roles depending on mode.

### Where agent harnesses are heading

2026 has seen a shift toward multi-agent fleet interfaces reshape what "harness" means, without necessarily changing the underlying company or product line.

ADE itself was coined by Warp with Warp 2.0 in June 2025, defined as a control plane for orchestrating multiple coding agents in parallel across the full SDLC. Cursor's Agents Window (Cursor 3, April 2026) and Devin Desktop's Agent Command Center are the same category.
