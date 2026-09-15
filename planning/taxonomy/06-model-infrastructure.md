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
- Commercial / Proprietary
  - [Fireworks AI](https://fireworks.ai/)
  - [Together AI](https://www.together.ai/)
  - [Groq](https://groq.com/)
  - [Modal](https://modal.com/products/inference)
    - → also see §12 Sandboxes (same product, dual capability)
  - [Replicate](https://replicate.com/) (Cloudflare)
    - Part of Cloudflare since the acquisition announced November 2025; the same company's Workers AI is listed below
  - [DeepInfra](https://deepinfra.com/)
  - [Cerebras](https://www.cerebras.ai/)
  - [Hugging Face Inference Providers](https://huggingface.co/docs/inference-providers/index)
  - [SambaNova](https://sambanova.ai/)
  - [Scaleway](https://www.scaleway.com/en/generative-apis/)
  - [Baseten](https://www.baseten.co/)
  - [Workers AI](https://developers.cloudflare.com/workers-ai/) (Cloudflare)
    - Serverless inference on Cloudflare's edge network. The same company's agent hosting, Cloudflare Agents, is listed in §13
- Legacy / Decommissioned
  - [Lambda](https://lambda.ai/inference)
    - Inference API shut down September 25, 2025; Lambda still rents GPU instances

**Model Serving**
- Commercial / Proprietary
  - [NVIDIA NIM](https://www.nvidia.com/en-us/ai-data-science/products/nim-microservices/)
- Open Source / Provider-agnostic
  - [vLLM](https://vllm.ai/) (UC Berkeley Sky Computing Lab)
  - [TensorRT-LLM](https://github.com/NVIDIA/TensorRT-LLM) (NVIDIA)
  - [SGLang](https://www.sglang.io/) (LMSYS)
  - [llama.cpp server](https://github.com/ggml-org/llama.cpp/tree/master/tools/server) (Georgi Gerganov)
    - ggml.ai, its company, was acquired by Hugging Face in 2026
- Legacy / Decommissioned
  - [Text Generation Inference](https://github.com/huggingface/text-generation-inference) (Hugging Face)
    - Repository archived after TGI entered maintenance mode; its maintainers recommend vLLM, SGLang, llama.cpp, or MLX instead

**Cloud AI Platforms**
- [Amazon Bedrock](https://aws.amazon.com/bedrock/)
- [Gemini Enterprise Agent Platform](https://cloud.google.com/products/gemini-enterprise-agent-platform) (Google)
  - Formerly Google Vertex AI; rebranded April 22, 2026, with existing Vertex AI services continuing under the new name. Its managed agent runtime, Agent Runtime (formerly Agent Engine), is listed in §13
- [Microsoft Foundry](https://azure.microsoft.com/en-us/products/ai-foundry)
  - Formerly Azure AI Foundry; renamed November 2025
- [Oracle AI Agent Studio for Fusion Applications](https://www.oracle.com/applications/dawn-of-ai-enterprise-agent-workforce/)
- [Agent Bricks](https://www.databricks.com/product/artificial-intelligence/agent-bricks) (Databricks)
  - Formerly Mosaic AI; Databricks' product pages now present Agent Bricks as its platform to build and govern AI agents
- [Snowflake Cortex AI](https://www.snowflake.com/en/product/features/cortex/)
- **Resolved:** these platforms span build, run, and governance capabilities, not just connectivity. Canonical content splits by actual capability (model access → §4 Models, deployment infrastructure → §12 Run, governance controls → wherever the Control mapping sends them), plus a lightweight hub page cross-linking the pieces for readers thinking of the platform as one thing. See Open Items and site-content-plan-v2.md §8 item 1.

**Model Routers, Gateways and Proxies**
- Commercial / Proprietary
  - [OpenRouter](https://openrouter.ai/)
  - [AI Gateway](https://vercel.com/ai-gateway) (Vercel)
  - [Nous Portal](https://portal.nousresearch.com/)
  - [LiteLLM](https://www.litellm.ai/) (BerriAI)
    - Hosted commercial layer under the same brand
  - [Portkey](https://portkey.ai/)
    - Hosted commercial layer under the same brand
  - [Helicone AI Gateway](https://docs.helicone.ai/gateway/overview)
    - Hosted commercial layer under the same brand
    - → distinct product from Helicone's original observability tool; see §15
    - Acquired by Mintlify with Helicone, March 2026; in maintenance mode, with customers encouraged to migrate
- Open Source / Provider-agnostic
  - [LiteLLM](https://github.com/BerriAI/litellm) (BerriAI)
    - Self-hostable core; commercial layer under the same brand
  - [Portkey](https://github.com/Portkey-AI/gateway)
    - Self-hostable core; commercial layer under the same brand
  - [Helicone AI Gateway](https://github.com/Helicone/ai-gateway)
    - Self-hostable core; commercial layer under the same brand
    - → distinct product from Helicone's original observability tool; see §15
    - Acquired by Mintlify with Helicone, March 2026; in maintenance mode, with customers encouraged to migrate

**Local Inference**
- Commercial / Proprietary
  - [LM Studio](https://lmstudio.ai/download)
- Open Source / Provider-agnostic
  - [Ollama](https://ollama.com/)
  - [llama.cpp](https://github.com/ggml-org/llama.cpp) (Georgi Gerganov)
    - ggml.ai, its company, was acquired by Hugging Face in 2026
  - [MLX](https://github.com/ml-explore/mlx) (Apple)
  - [Jan](https://www.jan.ai/)

## Changelog

**2026-09-15**
- Renamed entries to their current official names: Hugging Face Inference Providers (its docs' name), Text Generation Inference (Hugging Face), and AI Gateway (Vercel)
- Cloud AI Platforms entries now lead with their current official names, per the owner's rule (#77) and `CONTRIBUTING.md`: Amazon Bedrock (not AWS Bedrock), Gemini Enterprise Agent Platform (Google), Oracle AI Agent Studio for Fusion Applications, Agent Bricks (Databricks; formerly Mosaic AI, whose name Databricks' product pages no longer use), and Snowflake Cortex AI. Agent Bricks links its own product page

**2026-09-14**
- Linked every Landscape entry to its official page, `[Name](url) (Creator)`, for the site's catalog port (#69), including the Cloud AI Platforms list for the hub (#77), which isn't published as a Landscape page. A dual-listed product links its hosted service from Commercial and its repository from Open Source. No entries moved
- Bucketed Inference Providers under Commercial / Proprietary per the owner's decision on #67 (D5): each is a hosted, paid API service
- Found while linking, left for the owner (#69): Lambda's Inference API was shut down on September 25, 2025 (announced by Lambda staff; lambda.ai/inference now says it "winds down"), so Lambda no longer sells inference; Hugging Face TGI's repository is archived and its README says it's in maintenance mode, recommending vLLM and SGLang; Cloudflare acquired Replicate ("Replicate is now officially part of Cloudflare", announced November 17, 2025); Hugging Face acquired ggml.ai, llama.cpp's company, in 2026; Jan's GitHub organization was renamed from menloresearch to janhq ("Jan"); Helicone, including its AI Gateway, is in maintenance mode after Mintlify's acquisition (March 2026; see #76). Entries unchanged pending those calls
- Applied the owner's decisions on #69: Lambda and Hugging Face TGI moved to Legacy / Decommissioned, since both shutdowns have completed; Replicate is attributed to Cloudflare, with a note; llama.cpp and its server keep Georgi Gerganov as creator, with a note on ggml.ai's acquisition; Jan's creator is dropped, since its maker now shares its name; Helicone AI Gateway keeps both listings with a maintenance-mode note. The Cloud AI Platforms note now names Agent Runtime, matching §13
- Checked while linking: Groq stays independent after a non-exclusive licensing agreement with NVIDIA (December 2025), and GroqCloud continues; LM Studio's homepage now leads with Bionic, its agent, while the LM Studio app is still offered; Databricks' AI page no longer uses the name "Mosaic AI", leading with Agent Bricks (for the hub, #77); the llama.cpp repository is now `ggml-org/llama.cpp`

**2026-09-13**
- Split out of `ai-agent-ecosystem-v2.19.md` unchanged, when the taxonomy became one file per section. Earlier history is in [changelog.md](changelog.md).
