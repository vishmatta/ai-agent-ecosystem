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

## Changelog

**2026-09-13**
- Split out of `ai-agent-ecosystem-v2.19.md` unchanged, when the taxonomy became one file per section. Earlier history is in [changelog.md](changelog.md).
