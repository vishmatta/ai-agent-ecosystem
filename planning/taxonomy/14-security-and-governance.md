## 14. Security and Governance

### What is agent security and governance
*(not yet drafted)*

### Why agents need dedicated security and governance
*(not yet drafted)*

### When these controls apply
*(not yet drafted)*

### How agent security and governance is implemented
*(not yet drafted)*

### Where agent security and governance is heading
*(not yet drafted)*

**Access and Authorization**
- Permissions
- Agent identity
  - → tool list in Security and Governance Landscape below
- Authentication
- Authorization
- Capability-based access

**Secrets management**
- Credential delegation
- → tool list in Security and Governance Landscape below

**Data Governance**
- Data classification
- PII protection
- Data-loss prevention
- Data access controls
- Data retention

**Agent and Prompt Governance**
- Prompt and instruction governance
  - System instructions
  - Agent instructions
  - Prompt versioning
  - Approval / review
  - Prompt testing
- Policies
  - Conceptual home for what policies are, why they exist, and their two content types; the rules themselves live in §5
  - Behavioral and Model/tool scope
    - → see §5 Policies for the actual rule content (conduct vs. capability)
  - Policy instructions
    - Authoring, review, and approval before a policy ships — applies generically to any policy regardless of type
    - Instruction hierarchy
    - Provenance / change tracking
  - Policy enforcement
    - Runtime application of a policy once approved — applies generically to any policy regardless of type
    - → runtime application of the Guardrails tooling listed in §5; canonical tool list lives there, not duplicated here
- Prompt-injection defenses
  - Content-level injection: untrusted text (web pages, emails, documents) manipulating model behavior
  - → tool list in Security and Governance Landscape below
- MCP-specific attack surface
  - Distinct from content-level prompt injection above — this is protocol/supply-chain trust: the server or its tool descriptions themselves are the untrusted party, not the content flowing through them
  - Tool poisoning
  - Tool-description injection
  - Confused-deputy problem
  - Rug-pull updates
    - A previously-approved server changing behavior after the fact

**Human Oversight**
- Approval Policies
- Human-in-the-loop
- Human oversight / Escalation

**Audit and Resource Controls**
- Audit logs
- Rate limiting
- Resource / budget limits
  - → runtime enforcement counterpart to §13's planning-level allocation

### Security and Governance Landscape → (separate page)

**Agent Identity Tools**
- Commercial / Proprietary
  - [WorkOS](https://workos.com/docs/authkit/agent-blueprints)
  - [Auth0](https://auth0.com/ai) (Okta)
  - [Amazon Bedrock AgentCore Identity](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/identity.html)
  - [Microsoft Entra Agent ID](https://learn.microsoft.com/en-us/entra/agent-id/what-are-agent-identities)
  - [Agent Identity](https://docs.cloud.google.com/gemini-enterprise-agent-platform/govern/agent-identity-overview) (Google)
    - A SPIFFE-formatted ID for each agent, in place of shared service accounts

**Secrets Management Tools**
- Commercial / Proprietary
  - [Doppler](https://www.doppler.com/)
  - [HashiCorp Vault](https://www.hashicorp.com/en/products/vault)
    - Hosted as HCP Vault; self-managed Vault is source-available under the Business Source License 1.1 since version 1.15, not open source
    - HashiCorp is part of IBM
  - [Infisical](https://infisical.com/)
    - Hosted commercial layer under the same brand
- Open Source / Provider-agnostic
  - [Infisical](https://github.com/Infisical/infisical)
    - Self-hostable core; commercial layer under the same brand

**Prompt-Injection Defense Tools**
- Commercial / Proprietary
  - [Lakera](https://www.lakera.ai/) (Check Point)
  - [F5 AI Guardrails](https://www.f5.com/products/ai-guardrails)
    - Formerly CalypsoAI, acquired by F5 in September 2025
  - [Model Armor](https://docs.cloud.google.com/model-armor/overview) (Google)
    - Inspects agent tool calls and responses, enforced through Gemini Enterprise Agent Platform's Agent Gateway
  - [Prompt Shields](https://learn.microsoft.com/en-us/azure/ai-services/content-safety/concepts/jailbreak-detection) (Microsoft)
    - Part of Azure AI Content Safety

## Changelog

**2026-09-15**
- Added the cloud vendors' agent services that fit this section's existing categories, per the owner's direction after the Cloud AI Platforms hub (#96): Amazon Bedrock AgentCore Identity; Microsoft Entra Agent ID; Agent Identity (Google); Model Armor (Google); Prompt Shields (Microsoft). Each name is the vendor's current one, checked at its product or documentation page, and each links there. New categories these vendors would need (tool gateways, managed retrieval, agent memory, policy planes, payments, document parsing) are a separate decision

**2026-09-14**
- Linked the Secrets Management Tools and Prompt-Injection Defense Tools entries to their official pages for §7's catalog port (#70), where both lists publish (#58, D4). No entries moved
- Applied the owner's decisions: HashiCorp Vault moved to Commercial only, with its Business Source License noted, per the rule on #88; Lakera is attributed to Check Point, and CalypsoAI renamed F5 AI Guardrails with a note (#70)
- Found while linking, left for the owner (#70): HashiCorp Vault is under the Business Source License since 1.15, with IBM as licensor, so its Open Source listing is source-available; Lakera is "a Check Point company"; F5 completed its acquisition of CalypsoAI on September 26, 2025, and calypsoai.com now redirects to F5 AI Guardrails. Entries unchanged pending those calls
- Linked the Agent Identity Tools entries to their official pages, `[Name](url) (Creator)`, for the site's catalog port (#75): WorkOS to its Agent Auth docs (it has no product page for agent identity), Auth0 to Auth0 for AI Agents. No entries moved. Secrets Management Tools and Prompt-Injection Defense Tools are linked by §7's port (#70), since their pages publish under §7

**2026-09-13**
- Split out of `ai-agent-ecosystem-v2.19.md` unchanged, when the taxonomy became one file per section. Earlier history is in [changelog.md](changelog.md).
