---
title: Control
---

Control is not a fourth stage after Build, Connect, and Run. Security, governance, observability, and evaluation are not concerns that arrive at one point in that sequence: they touch every stage, so folding them into a fourth step would either scatter the same tools across pages or force each one into a stage it only partly belongs to.

This hub resolves that by splitting placement from browsability. Each governed concern gets one canonical page under the stage that actually operates it, and the hub links out to those pages rather than holding a second copy of them. Prompt and instruction governance, and model and tool policies, live in Build alongside [[build/agent-behavior/index|Agent Behavior and Configuration]]. Access and authorization, secrets management, and prompt injection defenses, including the MCP specific attack surface, live in Connect alongside [[connect/tools-and-environments/index|Tools and Environment Interfaces]]. Rate limiting and resource and budget limits live in Run alongside [[run/agent-operations/index|Agent Operations and Deployment]].

A handful of concerns do not attach cleanly to a single stage even after that split, so their content stays here: data governance, since data is handled at connectors, at context assembly, and in logs alike; agent identity, issued at deploy time but presented and audited elsewhere; audit logs and human oversight; the Policies hub, covering how policies are authored and enforced regardless of subject; and observability, evaluation, and debugging together, since they share the same tooling.
