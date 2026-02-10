"use client";

const partners = [
    {
        name: "Amazon Web Services",
        type: "Infrastructure",
        desc: "Advanced tier consulting partner. Serverless & Container specialty.",
        logo: "AWS"
    },
    {
        name: "Google Cloud",
        type: "AI & Data",
        desc: "Vertex AI integration and BigQuery data warehousing.",
        logo: "GCP"
    },
    {
        name: "Vercel",
        type: "Frontend Cloud",
        desc: "Enterprise edge deployment and Next.js optimization.",
        logo: "▼"
    },
    {
        name: "Stripe",
        type: "Payments",
        desc: "Complex billing logic, marketplaces, and subscription models.",
        logo: "S"
    },
    {
        name: "Auth0 / Okta",
        type: "Security",
        desc: "Enterprise SSO, MFA, and user management implementation.",
        logo: "A"
    },
    {
        name: "Sentry",
        type: "Observability",
        desc: "Real-time error tracking and performance monitoring.",
        logo: "●"
    }
];

export function PartnersSection() {
    return (
        <section className="py-24 px-6 bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl font-display font-bold mb-4">Technology Partners & Integrations</h2>
                    <p className="text-muted-foreground max-w-2xl">
                        We build on battle-tested ecosystem standards. Our solutions integrate seamlessly with your existing enterprise stack.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {partners.map((p) => (
                        <div key={p.name} className="p-6 border border-border/40 hover:border-accent/40 rounded-lg transition-colors group">
                            <div className="flex items-center justify-between mb-4">
                                <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground">{p.type}</div>
                                <div className="w-8 h-8 flex items-center justify-center bg-muted/30 rounded font-serif font-bold text-foreground/70">
                                    {p.logo}
                                </div>
                            </div>
                            <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                                {p.name}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {p.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
