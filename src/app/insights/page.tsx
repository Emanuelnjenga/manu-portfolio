"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function InsightsPage() {
    return (
        <>
            <Header />
            <main className="pt-24 min-h-screen">
                <section className="py-20 px-6">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-5xl font-display font-bold mb-8">Insights</h1>
                        <p className="text-xl text-muted-foreground font-serif leading-relaxed mb-16">
                            Thoughts on systems architecture, AI scaling, and the engineering of business value.
                        </p>

                        <div className="space-y-12">
                            {[
                                {
                                    title: "The 8-Week MVP Playbook: From Zero to Traction",
                                    date: "Oct 12, 2026",
                                    cat: "Startup Strategy",
                                    desc: "Why most startups fail at technical execution, and how to build a throw-away MVP that actually scales."
                                },
                                {
                                    title: "Architecting for Zero-Trust: A Practical Guide",
                                    date: "Sep 28, 2026",
                                    cat: "Security",
                                    desc: "Implementing BeyondCorp principles in a post-VPN world. A deep dive into Auth0 and tailscale integrations."
                                },
                                {
                                    title: "LLM Orchestration Patterns for Enterprise",
                                    date: "Sep 15, 2026",
                                    cat: "AI Engineering",
                                    desc: "Beyond the chat interface. How to build reliable agentic workflows using LangChain and Vercel AI SDK."
                                }
                            ].map((post, i) => (
                                <article key={i} className="group cursor-pointer border-b border-border/40 pb-12">
                                    <div className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
                                        {post.cat} • {post.date}
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 group-hover:text-accent transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-muted-foreground font-serif text-lg leading-relaxed mb-4">
                                        {post.desc}
                                    </p>
                                    <div className="flex items-center text-sm font-bold text-foreground group-hover:underline">
                                        Read Essay <ArrowUpRight className="w-4 h-4 ml-1" />
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
