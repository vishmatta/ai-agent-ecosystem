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
  - [LangSmith](https://www.langchain.com/langsmith/observability) (LangChain)
  - [Braintrust](https://www.braintrust.dev/)
  - [Weights & Biases Weave](https://wandb.ai/site/weave/)
  - [Datadog LLM Observability](https://www.datadoghq.com/product/llm-observability/)
  - [Honeycomb](https://www.honeycomb.io/use-cases/agent-observability)
  - [Langfuse](https://langfuse.com/)
    - Hosted commercial layer under the same brand
  - [Helicone](https://www.helicone.ai/)
    - Hosted commercial layer under the same brand
    - Distinct product from Helicone AI Gateway (§6) — same company, two separate product lines under one brand: this entry is the original observability/logging product; the Gateway is a separate routing/fallback product added later
  - [Arize AX](https://arize.com/)
    - Commercial platform under a separate brand name, built on Arize Phoenix
  - [Fiddler AI](https://www.fiddler.ai/)
    - Positions itself as a control plane across agents built on any framework — telemetry, evaluation, monitoring, and policy enforcement in one layer
- Open Source / Provider-agnostic
  - [Langfuse](https://github.com/langfuse/langfuse)
    - Self-hostable core; commercial layer under the same brand
  - [Helicone](https://github.com/Helicone/helicone)
    - Self-hostable core; commercial layer under the same brand
    - → distinct from Helicone AI Gateway; see §6
  - [Arize Phoenix](https://phoenix.arize.com/)
    - Commercial platform available under a separate brand, Arize AX

**Evaluation Tools**
- Commercial / Proprietary
  - [Confident AI](https://www.confident-ai.com/)
    - Hosted commercial layer under a separate brand name, built on DeepEval
- Open Source / Provider-agnostic
  - [promptfoo](https://www.promptfoo.dev/) (OpenAI)
    - Founded by Ian Webster and Michael D'Angelo; acquired by OpenAI in 2026, remains open source under continued independent development
  - [Ragas](https://docs.ragas.io/) (ExplodingGradients)
  - [DeepEval](https://deepeval.com/) (Confident AI)

**Code Review Tools**
- Commercial / Proprietary
  - [Macroscope](https://macroscope.com/)
  - [CodeRabbit](https://www.coderabbit.ai/)

**Benchmarks**
- Open Source / Provider-agnostic
  - [SWE-bench](https://www.swebench.com/)
  - [GAIA](https://huggingface.co/gaia-benchmark)
  - [AgentBench](https://github.com/THUDM/AgentBench)
  - [Terminal-Bench](https://www.tbench.ai/)
  - [τ-bench](https://www.taubench.com/)

## Changelog

**2026-09-14**
- Linked every Landscape entry to its official page, `[Name](url) (Creator)`, for the site's catalog port (#76). A dual-listed product links its hosted service from Commercial and its repository from Open Source. Benchmarks keep name-only attribution and link to their site, dataset or repository. No entries moved
- Bucketed the Benchmarks list under Open Source / Provider-agnostic, per the owner's decision on #67 (D5)
- Found while linking, left for the owner (#76): Mintlify acquired Helicone (March 3, 2026), which now runs in maintenance mode with customers helped to migrate, and no end date; Langfuse has been part of ClickHouse since January 2026; Ragas's maker ExplodingGradients now operates as Vibrant Labs. Entries unchanged pending those calls
- Checked while linking: Arize Phoenix is under the Elastic License 2.0 (source-available); Weights & Biases Weave's SDK is Apache 2.0; promptfoo's acquisition by OpenAI was announced March 9, 2026 as pending closing; Terminal-Bench 2.0 runs through the Harbor framework; τ-bench's site covers its successor, τ²-bench. None changes a placement

**2026-09-13**
- Split out of `ai-agent-ecosystem-v2.19.md` unchanged, when the taxonomy became one file per section. Earlier history is in [changelog.md](changelog.md).
