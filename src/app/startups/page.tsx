"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import Link from "next/link";
import { Rocket, Target, Code2, Users, ArrowRight, BookOpen } from "lucide-react";

export default function StartupsPage() {
    return (
        <>
            <Header />
            <main className="pt-24">
                {/* Hero */}
                <section className="py-24 px-6 bg-background">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-accent-warm uppercase bg-orange-100 text-orange-800 rounded-full">
                            For Founders
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-8">
                            From Zero to One,<br />Engineered Right.
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-serif">
                            Stop building technical debt. We help founders validate ideas, ship MVPs, and scale technical teams with discipline.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact">
                                <Button size="lg">Book Founder Consultation</Button>
                            </Link>
                            <Link href="/documents/startup-checklist.pdf" target="_blank">
                                <Button variant="ghost" size="lg" className="gap-2">
                                    <BookOpen className="w-4 h-4" /> Download Checklist
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Founder Services */}
                <section className="py-20 px-6 bg-muted/20">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-display font-bold mb-6">Built by a Founder.</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Emmanuel Njenga brings 8+ years of startup experience, having built and scaled systems for FinTech, EdTech, and AI ventures. We understand that speed is life, but stability is survival.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Technical Co-founder as a Service",
                                    "MVP Development (4-8 weeks)",
                                    "Investor Due Diligence Prep",
                                    "Hiring & Culture Setup"
                                ].map(item => (
                                    <li key={item} className="flex items-center gap-3 font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { icon: Rocket, label: "MVP Build", desc: "Rapid prototyping & launch." },
                                { icon: Target, label: "Tech Strategy", desc: "Roadmap validation." },
                                { icon: Code2, label: "Code Audit", desc: "Fix scaling bottlenecks." },
                                { icon: Users, label: "Mentorship", desc: "Guidance for new CTOs." }
                            ].map((card, i) => (
                                <div key={i} className="p-6 bg-background rounded-xl shadow-sm border border-border/50">
                                    <card.icon className="w-8 h-8 text-accent-warm mb-4" />
                                    <h3 className="font-bold font-display text-lg">{card.label}</h3>
                                    <p className="text-sm text-muted-foreground mt-2">{card.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Community & Events Stub */}
                <section className="py-24 px-6 border-t border-border/40">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex items-center justify-between mb-12">
                            <h2 className="text-3xl font-display font-bold">Community & Insights</h2>
                            <Link href="/insights" className="text-accent hover:underline flex items-center gap-2">
                                View all <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { tag: "Event", title: "Scale-up Systems Architectures", date: "Oct 24, 2026", type: "Webinar" },
                                { tag: "Article", title: "The 8-Week MVP Playbook", date: "Read 5 min", type: "Guide" },
                                { tag: "Resource", title: "Pre-Seed Tech Due Diligence Checklist", date: "PDF Download", type: "Tool" }
                            ].map((item, i) => (
                                <div key={i} className="group cursor-pointer">
                                    <div className="aspect-video bg-muted mb-4 rounded-lg relative overflow-hidden">
                                        <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="absolute top-4 left-4 bg-background/90 px-2 py-1 text-[10px] font-bold uppercase rounded backdrop-blur">
                                            {item.tag}
                                        </div>
                                    </div>
                                    <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">{item.title}</h3>
                                    <div className="text-sm text-muted-foreground">{item.date} • {item.type}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
