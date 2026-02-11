"use client";


import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TrustBar } from "@/components/TrustBar";
import { PerformanceBlock } from "@/components/PerformanceBlock";
import { PartnersSection } from "@/components/PartnersSection";
import { Button } from "@/components/Button";
import Link from "next/link";
import { Shield, Lock, Activity, Users, FileText, ArrowRight } from "lucide-react";

export default function EnterprisePage() {
    return (
        <>
            <Header />
            <main className="pt-32">
                <div className="max-w-7xl mx-auto px-6">
                    <Breadcrumbs items={[
                        { label: "Solutions", href: "/enterprise" },
                        { label: "Enterprise", href: "/enterprise" }
                    ]} />
                </div>
                {/* Hero */}
                <section className="py-16 px-6 bg-background">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-accent uppercase bg-accent/10 rounded-full">
                            Enterprise Grade
                        </div>
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-8">
                            Scale Without Compromise.
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-serif">
                            Secure, compliant, and performant systems architecture for organizations that cannot afford downtime.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/enterprise/consultation">
                                <Button size="lg">Book Engineering Audit</Button>
                            </Link>
                            <Link href="/documents/nexum-capabilities.pdf" target="_blank">
                                <Button variant="outline" size="lg">Download Capabilities (PDF)</Button>
                            </Link>
                        </div>
                    </div>
                </section>

                <TrustBar />

                {/* Solutions Grid */}
                <section className="py-24 px-6 bg-muted/10">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-display font-bold mb-16 text-center">Enterprise Capabilities</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { icon: Shield, title: "Security & Compliance", desc: "ISO 27001, SOC 2 Type II, and GDPR ready architectures. Automated compliance monitoring." },
                                { icon: Activity, title: "High-Scale Infrastructure", desc: "Multi-region deployments on AWS/GCP with 99.99% uptime SLAs and auto-scaling." },
                                { icon: Users, title: "Team Augmentation", desc: "Integrate senior systems engineers into your workflow. we adapt to your Jira/CI/CD processes." },
                                { icon: Lock, title: "Identity & Access", desc: "Enterprise SSO (Okta/Auth0), SCIM provisioning, and RBAC implementation." },
                                { icon: FileText, title: "Audit & Governance", desc: "Comprehensive audit logging, change management, and architectural decision records (ADRs)." },
                                { icon: Activity, title: "Observability", desc: "Full-stack tracing, centralized logging, and proactive incident response dashboards." }
                            ].map((item, i) => (
                                <div key={i} className="p-8 bg-background border border-border/40 rounded-xl hover:shadow-md transition-shadow">
                                    <item.icon className="w-8 h-8 text-accent mb-6" />
                                    <h3 className="text-xl font-bold font-display mb-3">{item.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <PerformanceBlock />
                <PartnersSection />

                {/* Engagement Models */}
                <section className="py-24 px-6 bg-background border-t border-border/40">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-display font-bold mb-12 text-center">Engagement Models</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Dedicated Team", desc: "Long-term capacity. We become part of your engineering org.", price: "Retainer" },
                                { title: "Strategic Consulting", desc: "Architecture review, modernization roadmaps, and due diligence.", price: "Fixed / Weekly" },
                                { title: "Project Delivery", desc: "End-to-end execution of specific modules or platforms.", price: "Fixed Bid" }
                            ].map((model, i) => (
                                <div key={i} className="flex flex-col p-8 border border-border/60 rounded-xl">
                                    <h3 className="text-xl font-bold font-display mb-2">{model.title}</h3>
                                    <p className="text-muted-foreground flex-1 mb-8">{model.desc}</p>
                                    <div className="mt-auto pt-6 border-t border-border/40 flex items-center justify-between">
                                        <span className="font-mono text-sm font-bold text-accent">{model.price}</span>
                                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 px-6 bg-foreground text-background text-center">
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to scale?</h2>
                    <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
                        Schedule a confidential consultation to discuss your architectural challenges.
                    </p>
                    <Link href="/enterprise/consultation">
                        <Button size="lg" className="bg-background text-foreground hover:bg-gray-100">
                            Book Enterprise Consultation
                        </Button>
                    </Link>
                </section>
            </main>
            <Footer />
        </>
    );
}
