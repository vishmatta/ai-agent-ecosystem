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
  - Pinecone
  - Weaviate
    - Hosted commercial layer under the same brand
  - Qdrant
    - Hosted commercial layer under the same brand
  - Chroma
    - Hosted commercial layer under the same brand
  - Zilliz Cloud
    - Hosted layer for Milvus, under a separate brand name
- Open Source / Provider-agnostic
  - Weaviate
    - Self-hostable core; commercial layer under the same brand
  - Qdrant
    - Self-hostable core; commercial layer under the same brand
  - Chroma
    - Self-hostable core; commercial layer under the same brand
  - Milvus (Zilliz)
    - Hosted commercially as Zilliz Cloud, under a separate brand name
  - pgvector (Andrew Kane)

**Knowledge Graphs**
- Commercial / Proprietary
  - Neo4j Aura
    - Hosted layer for Neo4j, under a separate brand name
- Open Source / Provider-agnostic
  - Neo4j
    - Hosted commercially as Neo4j Aura, under a separate brand name

**Semantic Layer Tools**
- Commercial / Proprietary
  - dbt Semantic Layer (dbt Labs)
    - Hosted commercial layer via dbt Cloud
  - AtScale
  - Cube
    - Hosted commercial layer under the same brand
- Open Source / Provider-agnostic
  - dbt Semantic Layer (dbt Labs)
    - Self-hostable core via dbt Core; commercial layer via dbt Cloud
  - Cube
    - Self-hostable core; commercial layer under the same brand

## Changelog

**2026-09-13**
- Split out of `ai-agent-ecosystem-v2.19.md` unchanged, when the taxonomy became one file per section. Earlier history is in [changelog.md](changelog.md).
