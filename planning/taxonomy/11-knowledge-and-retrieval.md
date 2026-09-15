## 11. Knowledge and Retrieval

### What is knowledge and retrieval for agents
*(not yet drafted)*

### Why agents need external knowledge and retrieval
*(not yet drafted)*

### When to reach for which retrieval approach
*(not yet drafted)*

### How knowledge and retrieval is implemented
*(not yet drafted)*

### Where knowledge and retrieval is heading
*(not yet drafted)*

- RAG
- Vector databases
  - → tool list in Knowledge and Retrieval Landscape below
- Knowledge graphs
  - → tool list in Knowledge and Retrieval Landscape below
- Document stores
- Search/retrieval
- Embedding models
- Hybrid search
- Reranking
- Graph RAG
- Semantic layer over structured data
  - A third grounding representation alongside vector index and knowledge graph above — for structured data (e.g. customer records) rather than documents
  - → tool list in Knowledge and Retrieval Landscape below

### Knowledge and Retrieval Landscape → (separate page)

**Vector Databases**
- Commercial / Proprietary
  - [Pinecone](https://www.pinecone.io/)
  - [Weaviate](https://weaviate.io/deployment/shared)
    - Hosted commercial layer under the same brand
  - [Qdrant](https://qdrant.tech/cloud/)
    - Hosted commercial layer under the same brand
  - [Chroma](https://www.trychroma.com/)
    - Hosted commercial layer under the same brand
  - [Zilliz Cloud](https://zilliz.com/cloud)
    - Hosted layer for Milvus, under a separate brand name
- Open Source / Provider-agnostic
  - [Weaviate](https://github.com/weaviate/weaviate)
    - Self-hostable core; commercial layer under the same brand
  - [Qdrant](https://github.com/qdrant/qdrant)
    - Self-hostable core; commercial layer under the same brand
  - [Chroma](https://github.com/chroma-core/chroma)
    - Self-hostable core; commercial layer under the same brand
  - [Milvus](https://milvus.io/) (Zilliz)
    - Hosted commercially as Zilliz Cloud, under a separate brand name
  - [pgvector](https://github.com/pgvector/pgvector) (Andrew Kane)

**Knowledge Graphs**
- Commercial / Proprietary
  - [Neo4j AuraDB](https://neo4j.com/product/auradb/)
    - Hosted layer for Neo4j, under a separate brand name
- Open Source / Provider-agnostic
  - [Neo4j](https://github.com/neo4j/neo4j)
    - Hosted commercially as Neo4j AuraDB, under a separate brand name

**Semantic Layer Tools**
- Commercial / Proprietary
  - [dbt Semantic Layer](https://www.getdbt.com/product/semantic-layer) (dbt Labs)
    - Hosted commercial layer via dbt Cloud
    - dbt Labs merged with Fivetran in June 2026; the combined company operates as Fivetran + dbt Labs
  - [AtScale](https://www.atscale.com/)
  - [Cube](https://cube.dev/)
    - Hosted commercial layer under the same brand
- Open Source / Provider-agnostic
  - [dbt Semantic Layer](https://github.com/dbt-labs/metricflow) (dbt Labs)
    - Self-hostable core via dbt Core and MetricFlow; commercial layer via dbt Cloud
  - [Cube](https://github.com/cube-js/cube)
    - Self-hostable core; commercial layer under the same brand

## Changelog

**2026-09-15**
- Renamed Neo4j Aura to "Neo4j AuraDB", the name its product page uses

**2026-09-14**
- Linked every Landscape entry to its official page, `[Name](url) (Creator)`, for the site's catalog port (#72). A dual-listed product links its hosted service from Commercial and its repository from Open Source. dbt Semantic Layer's open-source listing links MetricFlow, the Apache 2.0 engine behind it. No entries moved
- Found while linking, left for the owner (#72): Fivetran completed its merger with dbt Labs on June 1, 2026, and the combined company is "initially operating as Fivetran + dbt Labs" ([announcement](https://www.getdbt.com/blog/fivetran-dbt-labs-complete-merger-to-create-the-data-infrastructure-for-trusted-ai-agents)). The "(dbt Labs)" attribution is unchanged pending that call
- Applied the owner's decision on #72: kept the "(dbt Labs)" attribution and added a note on the Fivetran merger
- Checked while linking: Weaviate's core stays BSD-3-Clause, but since August 2026 some features live in a separately licensed `wl/` directory, switched on by an environment variable. dbt Core's repository is now `dbt-labs/dbt`, whose main branch is the Apache 2.0 dbt v2.0 rewrite in Rust. Neither changes a placement

**2026-09-13**
- Split out of `ai-agent-ecosystem-v2.19.md` unchanged, when the taxonomy became one file per section. Earlier history is in [changelog.md](changelog.md).
