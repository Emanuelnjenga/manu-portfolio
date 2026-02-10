"use client";

import { motion } from "framer-motion";

const services = [
    {
        title: "Web & SaaS Development",
        description: "Production-ready applications and APIs."
    },
    {
        title: "System Architecture",
        description: "Cloud, reliability, observability, and scaling."
    },
    {
        title: "AI Automation",
        description: "Prompt engineering, agent workflows & integrations."
    },
    {
        title: "Technical Consulting",
        description: "Roadmaps, audits, and engineering leadership."
    }
];

const packages = [
    { name: "Startup", price: "$3k–$10k", detail: "MVP & core product" },
    { name: "Scale", price: "$10k–$50k", detail: "Architecture, reliability, infra" },
    { name: "Enterprise", price: "Custom", detail: "Integrations, SLAs, long-term engagements" }
];

export function ServicesSection() {
    return (
        <section id="services" className="py-20 px-6 border-b border-border/40">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

                {/* Services List */}
                <div className="space-y-8">
                    <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Services</h2>
                    <ul className="space-y-6">
                        {services.map((s, i) => (
                            <li key={i} className="group">
                                <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-accent transition-colors">
                                    • {s.title}
                                </h3>
                                <p className="text-muted-foreground ml-4 mt-1">
                                    {s.description}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Packages List */}
                <div className="space-y-8">
                    <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Packages (Sample)</h2>
                    <ul className="space-y-6">
                        {packages.map((p, i) => (
                            <li key={i} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between border-b border-border/40 pb-4 last:border-0">
                                <div>
                                    <span className="text-lg font-medium text-foreground block sm:inline">{p.name}</span>
                                    <span className="text-sm text-muted-foreground sm:ml-2 block sm:inline">{p.detail}</span>
                                </div>
                                <span className="text-sm font-mono font-medium text-accent mt-1 sm:mt-0">{p.price}</span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
}
