
export const PROJECTS = [
    {
        slug: "distributed-asset-platform",
        title: "Distributed Asset Platform",
        description: "High-frequency trading platform handling 50k+ transactions per second with <5ms latency.",
        category: "Systems Engineering",
        thumbnail: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=2070&auto=format&fit=crop",
        year: "2024",
        impact: "Reduced infrastructure costs by 40% while doubling throughput.",
        stack: ["Go", "Rust", "Kafka", "Kubernetes", "gRPC"],
        content: {
            problem: "The legacy monolithic matching engine struggled with concurrency during market peaks, leading to significant latency spikes (up to 500ms) and lost arbitrage opportunities for clients. Vertical scaling had hit a ceiling.",
            solution: "Architected a new event-driven microservices mesh. Implemented the core matching engine in Rust for memory safety and zero-cost abstractions, while using Go for high-concurrency API gateways. Deployed on Kubernetes with custom horizontal pod autoscalers based on queue depth.",
            architecture: "Client -> Global Load Balancer -> API Gateway (Go) -> Kafka (Order Events) -> Matching Engine (Rust) -> Settlement Service (Go) -> PostgreSQL (TimescaleDB)",
            tradeoffs: [
                { name: "Rust vs C++", decision: "Chose Rust for memory safety guarantees without a garbage collector, avoiding tail latency spikes common in managed languages." },
                { name: "Eventual Consistency", decision: "Trade execution is strictly consistent, but reporting and analytics are eventually consistent to ensure high availability of the trading path." },
                { name: "Custom Serialization", decision: "Abandoned JSON for Protobuf/gRPC to reduce payload size by 60% and CPU usage by 40%." }
            ]
        },
    },
    {
        slug: "neural-search-engine",
        title: "Neural Search Engine",
        description: "Semantic search engine for legal documents using hybrid interaction-based retrieval.",
        category: "AI & ML",
        thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop",
        year: "2023",
        impact: "Improved retrieval relevance by 65% for complex queries.",
        stack: ["Python", "PyTorch", "Pinecone", "Next.js", "FastAPI"],
        content: {
            problem: "Traditional keyword search (Elasticsearch) failed to capture context in lengthy legal contracts, wasting hours of review time. Lawyers needed to find clauses based on 'meaning', not just exact words.",
            solution: "Fine-tuned a BERT-based transformer model on 500k+ proprietary legal documents. Implemented a hybrid search strategy combining dense vector retrieval (for semantic understanding) with BM25 keyword matching (for precise entity lookup).",
            architecture: "User Query -> Query Encoder (BERT) -> Vector DB (Pinecone) + Keyword Index (ES) -> Reciprocal Rank Fusion -> Reranker Logits -> Results",
            tradeoffs: [
                { name: "Bi-Encoder vs Cross-Encoder", decision: "Used Bi-Encoders for fast retrieval of top 100 candidates, then a Cross-Encoder for high-precision reranking of the top 10. This balanced speed and accuracy." },
                { name: "Vector DB Hosting", decision: "Chose Pinecone (managed) over self-hosted Milvus to reduce operational overhead for the 3-person ML team." }
            ]
        },
    },
    {
        slug: "iot-fleet-manager",
        title: "IoT Fleet Manager",
        description: "Real-time monitoring dashboard for 10,000+ connected industrial sensors.",
        category: "Full Stack",
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        year: "2023",
        impact: "Zero-downtime deployment for 18 months running.",
        stack: ["TypeScript", "Node.js", "GraphQL", "TimescaleDB", "Redis"],
        content: {
            problem: "Operators lacked visibility into sensor health, leading to preventative maintenance scheduling inefficiencies. The previous polling-based architecture crashed under the load of 10k devices.",
            solution: "Built a reactive dashboard using GraphQL subscriptions and a time-series database (TimescaleDB). Implemented a Redis-based pub/sub layer to handle high-velocity telemetry data ingestion without overwhelming the primary DB.",
            architecture: "Sensors (MQTT) -> Ingestion Service (Node.js) -> Redis Pub/Sub -> TimescaleDB (Storage) + GraphQL Server -> React Client",
            tradeoffs: [
                { name: "GraphQL vs REST", decision: "GraphQL Subscriptions were essential for the real-time 'push' requirement without managing thousands of raw WebSocket connections manually." },
                { name: "Time-Series DB", decision: "TimescaleDB integration with Postgres meant we could join sensor data with relational asset data easily, unlike InfluxDB." }
            ]
        },
    },
    {
        slug: "autonomous-logistics-coordinator",
        title: "Autonomous Logistics Coordinator",
        description: "AI-driven route optimization system for last-mile delivery fleets.",
        category: "Systems & AI",
        thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
        year: "2022",
        impact: "Reduced fuel consumption by 15% and delivery times by 20%.",
        stack: ["Python", "OR-Tools", "Google Maps API", "Docker", "AWS Lambda"],
        content: {
            problem: "Manual routing was inefficient and didn't account for real-time traffic conditions, leading to late deliveries and high fuel costs.",
            solution: "Developed an automated routing engine using Google OR-Tools for the VRP (Vehicle Routing Problem). Integrated real-time traffic data to dynamically re-route drivers during the day.",
            architecture: "Order Service -> Route Solver (Lambda) -> Optimization Engine (OR-Tools) -> Driver App",
            tradeoffs: [
                { name: "Serverless vs Dedicated", decision: "Used AWS Lambda for the solver since routing batches happened only 4 times a day. This saved 90% on compute costs versus running idle EC2 instances." },
                { name: "Heuristic vs Exact", decision: "Used heuristic algorithms (Meta-heuristics) to find 'good enough' solutions in minutes rather than perfect solutions in hours." }
            ]
        },
    },
    {
        slug: "fintech-identity-vault",
        title: "Fintech Identity Vault",
        description: "Secure, compliant KYC/AML identity verification system.",
        category: "Security",
        thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop",
        year: "2022",
        impact: "Achieved SOC2 Type II compliance and reduced verification time to <2 minutes.",
        stack: ["Java", "Spring Boot", "AWS KMS", "React"],
        content: {
            problem: "Handling sensitive PII required strict compliance (GDPR/CCPA) and high security, which the previous vendor solution lacked.",
            solution: "Built an internal Identity Vault with field-level encryption using AWS KMS. Implemented strict access logs and automated data rotation policies.",
            architecture: "Client -> Secure Gateway -> Identity Service -> Encrypted Storage (KMS wrapped keys)",
            tradeoffs: [
                { name: "Build vs Buy", decision: "Built in-house to own the core compliance infrastructure and avoid vendor lock-in for critical user data." },
                { name: "Java vs Node", decision: "Chose Java/Spring for its mature security ecosystem and type safety in critical financial paths." }
            ]
        },
    },
    {
        slug: "developer-platform-cli",
        title: "Developer Platform CLI",
        description: "Internal CLI tool to standardize microservice scaffolding and deployment.",
        category: "DevEx",
        thumbnail: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2088&auto=format&fit=crop",
        year: "2021",
        impact: "Reduced new service setup time from 3 days to 15 minutes.",
        stack: ["Go", "Cobra", "Terraform", "GitHub Actions"],
        content: {
            problem: "Inconsistent service setups led to 'works on my machine' issues and fragmented CI/CD pipelines.",
            solution: "Created a centralized CLI (`devctl`) that generates standardized scaffolds (Go/Node/Python) with pre-configured Dockerfiles, Helm charts, and GitHub Actions workflows.",
            architecture: "Developer -> CLI -> Template Engine -> Git Repo -> CI/CD",
            tradeoffs: [
                { name: "Go vs Node", decision: "Go was chosen for the CLI to distribute a single static binary without requiring developers to manage Node versions." },
                { name: "Opinionated vs Flexible", decision: "Enforced strict opinions on directory structure to guarantee tooling compatibility, sacrificing some flexibility." }
            ]
        },
    }
];

export const SKILLS = [
    { category: "Frontend", items: ["React / Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion", "Web accessibility (WCAG)"] },
    { category: "Backend", items: ["Node.js", "Go (Golang)", "Python", "PostgreSQL", "Redis", "GraphQL", "gRPC"] },
    { category: "Systems & DevOps", items: ["Docker / Kubernetes", "AWS (Lambda, ECS, S3)", "Terraform", "CI/CD (GitHub Actions)"] },
    { category: "AI & Data", items: ["PyTorch", "LangChain", "Vector Databases (Pinecone)", "RAG Pipelines", "Data Engineering"] },
];

export const ARTICLES = [
    {
        slug: "scaling-websocket-servers",
        title: "Scaling WebSocket Servers to 1M+ Connections",
        excerpt: "Lessons learned from optimizing ephemeral port usage and memory allocation in Node.js.",
        date: "Oct 12, 2024",
        readTime: "8 min read",
        content: `
## The C10k Problem is Dead. Long Live C1M.

Scaling real-time applications is no longer just about handling concurrent connections—it's about managing resources efficiently at the edge. In this post, I detail how we tuned a Node.js cluster to handle over 1 million active WebSocket connections.

### The Bottleneck: Ephemeral Ports

The first wall we hit wasn't CPU or RAM; it was TCP IP ports. By default, a Linux server has a range of ~28k ephemeral ports.

\`\`\`bash
sysctl -w net.ipv4.ip_local_port_range="1024 65535"
\`\`\`

But simply opening the range isn't enough when you have multiple load balancers. We had to enable \`SO_REUSEPORT\` to allow multiple processes to bind to the same port.

### User Space Memory Management

Node.js buffers are great, but for 1M connections, a 4KB buffer per connection equals 4GB of RAM just for idle sockets. We implemented a custom zero-copy buffer strategy...
        `
    },
    {
        slug: "pragmatic-systems-design",
        title: "Pragmatic Systems Design: Boring is Better",
        excerpt: "Why choosing 'boring' technology is often the most innovative choice you can make for long-term stability.",
        date: "Sep 28, 2024",
        readTime: "6 min read",
        content: `
## Innovation Tokens

Every company has a limited amount of "innovation tokens". You should spend them on your core business logic, not your infrastructure.

### Why Postgres is (Almost) Always the Answer

Unless you have Google-scale data or very specific graph requirements, Postgres can handle it. JSONB columns typically outperform Mongo for document storage in mixed workloads.

> "Premature optimization is the root of all evil." - Donald Knuth

We migrated our "cutting edge" NoSQL setup back to Postgres and saw a 30% latency reduction and 50% cost savings.
        `
    },
    {
        slug: "ai-engineering-patterns",
        title: "Patterns for Robust AI Engineering",
        excerpt: "Moving beyond Jupyter notebooks: how to productionize LLM applications with evaluation frameworks.",
        date: "Aug 15, 2024",
        readTime: "12 min read",
        content: `
## From Notebook to Production

Jupyter notebooks are great for experimentation, but they are terrible for production. They lack version control, testing, and reproducibility.

### The RAG Flywheel

Retrieval Augmented Generation (RAG) is fragile. To make it robust, you need an evaluation loop. We use a "Golden Dataset" of Q&A pairs to test our retrieval quality every time we update the embedding model.

1. **Retrieval Metric**: diverse_retrieval_k
2. **Generation Metric**: factual_consistency (using LLM-as-a-judge)
        `
    },
    {
        slug: "distributed-tracing",
        title: "Distributed Tracing: Seeing the Invisible",
        excerpt: "Implementing OpenTelemetry across a polyglot microservices architecture.",
        date: "Jul 10, 2024",
        readTime: "10 min read",
        content: `
## The Black Box

As we split our monolith into microservices, we lost visibility. A request would fail, and we'd have to grep through logs on 5 different servers.

### Adopting OpenTelemetry

We chose OpenTelemetry (OTel) for its vendor-neutral standard. The challenge was instrumenting our legacy Java services alongside our new Go services.

**Key Learnings:**
- Always propagate context headers (W3C trace context).
- Sample intelligently (100% sampling kills performance; 1% is often enough).
        `
    },
    {
        slug: "career-growth-engineering",
        title: "The Senior Engineer's Mindset",
        excerpt: "Transitioning from writing code to building systems and mentoring teams.",
        date: "May 22, 2024",
        readTime: "7 min read",
        content: `
## Code is a Liability

Junior engineers think their job is to write code. Senior engineers know their job is to solve problems, ideally with *less* code.

### Multiplying Impact

As you grow, your output shouldn't just be linear. You need to be a force multiplier. This means:
- Writing RFCs that clarify thinking for the whole team.
- Building internal tools (like our CLI) that save everyone time.
- Mentoring juniors to become independent contributors.
        `
    }
];

export const SYSTEM_DESIGN_CASE_STUDIES = [
    {
        id: "global-payments",
        title: "Global Payments Architecture",
        scenario: "Design a payment gateway supporting 50 currencies and 10k TPS.",
        preview: "Focuses on idempotency, consistency, and multi-region failover.",
        deepDive: {
            requirements: ["10k Transactions Per Second (TPS)", "Zero data loss (Acid compliance)", "99.999% Availability", "Idempotency key support"],
            constraints: ["Regulatory compliance (PCI-DSS)", "Latency < 2s for settlement"],
            architecture: "API Gateway -> Idempotency Service (Redis) -> Ledger Service (Postgres) -> Payment Rails Adapter",
            bottlenecks: ["Database write locks on hot wallets", "Third-party gateway latency"],
            tradeoffs: [
                { name: "Sync vs Async", decision: "Async processing for settlement to avoid holding connections, but Sync for initial validation." },
                { name: "Sharding Strategy", decision: "Sharded by User ID to localize ledger locks." }
            ]
        }
    },
    {
        id: "realtime-collab",
        title: "Real-time Collaboration (Google Docs style)",
        scenario: "Design a collaborative text editor for 100 concurrent users per doc.",
        preview: "Operational Transformation (OT) vs CRDTs.",
        deepDive: {
            requirements: ["Real-time updates (<100ms)", "Offline support", "Conflict resolution"],
            constraints: ["Browser memory limits", "Network partition tolerance"],
            architecture: "Client (CRDT logic) -> WebSocket Gateway -> Session State (Redis) -> Persistance Worker -> S3 (Snapshots)",
            bottlenecks: ["Memory usage of CRDT history", "WebSocket connection limits"],
            tradeoffs: [
                { name: "OT vs CRDT", decision: "CRDT (Yjs) for decentralized conflict resolution and offline capabilities, despite higher memory overhead than OT." }
            ]
        }
    }
];
