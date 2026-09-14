## 6. Model Infrastructure

### What is model infrastructure
*(not yet drafted)*

### Why this infrastructure layer exists
*(not yet drafted)*

### When to choose among these options
*(not yet drafted)*

### How model infrastructure is used
*(not yet drafted)*

### Where model infrastructure is heading
*(not yet drafted)*

### Model Infrastructure Landscape → (separate page)

**Inference Providers**
- Fireworks AI
- Together AI
- Groq
- Modal
  - → also see §12 Sandboxes (same product, dual capability)
- Replicate
- DeepInfra
- Cerebras
- Hugging Face Inference
- SambaNova
- Scaleway
- Baseten
- Lambda
- Workers AI (Cloudflare)
  - Serverless inference on Cloudflare's edge network. The same company's agent hosting, Cloudflare Agents, is listed in §13

**Model Serving**
- Commercial / Proprietary
  - NVIDIA NIM
- Open Source / Provider-agnostic
  - vLLM (UC Berkeley Sky Computing Lab)
  - TensorRT-LLM (NVIDIA)
  - Hugging Face TGI
  - SGLang (LMSYS)
  - llama.cpp server (Georgi Gerganov)

**Cloud AI Platforms**
- AWS Bedrock
- Google Gemini Enterprise Agent Platform
  - Formerly Google Vertex AI; rebranded April 22, 2026, with existing Vertex AI services continuing under the new name. Its managed agent runtime, Agent Engine, is listed in §13
- Microsoft Foundry
  - Formerly Azure AI Foundry; renamed November 2025
- Oracle AI Agent Studio
- Databricks Mosaic AI
- Snowflake Cortex
- **Resolved:** these platforms span build, run, and governance capabilities, not just connectivity. Canonical content splits by actual capability (model access → §4 Models, deployment infrastructure → §12 Run, governance controls → wherever the Control mapping sends them), plus a lightweight hub page cross-linking the pieces for readers thinking of the platform as one thing. See Open Items and site-content-plan-v2.md §8 item 1.

**Model Routers, Gateways and Proxies**
- Commercial / Proprietary
  - OpenRouter
  - Vercel AI Gateway
  - Nous Portal
  - LiteLLM (BerriAI)
    - Hosted commercial layer under the same brand
  - Portkey
    - Hosted commercial layer under the same brand
  - Helicone AI Gateway
    - Hosted commercial layer under the same brand
    - → distinct product from Helicone's original observability tool; see §15
- Open Source / Provider-agnostic
  - LiteLLM (BerriAI)
    - Self-hostable core; commercial layer under the same brand
  - Portkey
    - Self-hostable core; commercial layer under the same brand
  - Helicone AI Gateway
    - Self-hostable core; commercial layer under the same brand
    - → distinct product from Helicone's original observability tool; see §15

**Local Inference**
- Commercial / Proprietary
  - LM Studio
- Open Source / Provider-agnostic
  - Ollama
  - llama.cpp (Georgi Gerganov)
  - MLX (Apple)
  - Jan (Menlo Research)

## Changelog

**2026-09-13**
- Split out of `ai-agent-ecosystem-v2.19.md` unchanged, when the taxonomy became one file per section. Earlier history is in [changelog.md](changelog.md).
