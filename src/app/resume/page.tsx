"use client";

import { Section } from "@/components/Section";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ManuAssistant } from "@/components/ManuAssistant";
import { StickyCTA } from "@/components/StickyCTA";
import { Button } from "@/components/Button";
import { Download, Printer, Mail, MapPin, Globe } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
    return (
        <>
            <Header />
            <ManuAssistant />
            <StickyCTA />

            <main className="flex-1 pt-24 pb-16">
                <Section className="max-w-4xl">
                    <div className="flex justify-between items-center mb-8 print:hidden">
                        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            &larr; Back to Portfolio
                        </Link>
                        <div className="flex gap-4">
                            <Button variant="outline" onClick={() => window.print()}>
                                <Printer className="w-4 h-4 mr-2" /> Print
                            </Button>
                            <Button>
                                <Download className="w-4 h-4 mr-2" /> Download PDF
                            </Button>
                        </div>
                    </div>

                    <div className="bg-background border border-border rounded-xl p-8 md:p-12 shadow-sm print:border-none print:shadow-none print:p-0">
                        {/* Resume Header */}
                        <header className="border-b border-border pb-8 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                            <div>
                                <h1 className="text-4xl font-serif font-bold mb-2">Manu</h1>
                                <p className="text-xl text-muted-foreground">Senior Systems Engineer & Product Architect</p>
                            </div>
                            <div className="text-sm text-muted-foreground space-y-1 text-right">
                                <div className="flex items-center justify-end gap-2">
                                    <MapPin className="w-3 h-3" /> San Francisco, CA (Remote)
                                </div>
                                <div className="flex items-center justify-end gap-2">
                                    <Mail className="w-3 h-3" /> hello@manu.dev
                                </div>
                                <div className="flex items-center justify-end gap-2">
                                    <Globe className="w-3 h-3" /> manu.dev
                                </div>
                            </div>
                        </header>

                        {/* Summary */}
                        <section className="mb-10">
                            <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">Professional Summary</h2>
                            <p className="text-foreground leading-relaxed">
                                Systems engineer with 8+ years of experience in distributed systems, fintech, and AI. Proven track record of scaling high-frequency trading platforms and architecting robust ML pipelines. I bridge the gap between complex infrastructure and product value, focusing on simplicity, observability, and developer experience.
                            </p>
                        </section>

                        {/* Experience */}
                        <section className="mb-10">
                            <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-6">Experience</h2>

                            <div className="space-y-8">
                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold font-serif">Staff Engineer, Core Infrastructure</h3>
                                        <span className="text-sm text-muted-foreground font-mono">2022 — Present</span>
                                    </div>
                                    <div className="text-accent text-sm font-medium mb-3">FinTech Global • Series C</div>
                                    <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-muted-foreground/90 leading-relaxed">
                                        <li>Architected the <strong>Distributed Asset Platform</strong>, handling 50k+ TPS with &lt;5ms latency using Rust and Go.</li>
                                        <li>Reduced AWS infrastructure costs by 40% ($1.2M/year) by optimizing Kubernetes autoscaling policies and spot instance usage.</li>
                                        <li>Led the migration from a monolithic Rails app to event-driven microservices, improving deployment frequency from weekly to daily.</li>
                                        <li>Mentored 4 senior engineers and established the "Systems Design Review" process adopted by the entire engineering org.</li>
                                    </ul>
                                </div>

                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold font-serif">Senior Full Stack Engineer</h3>
                                        <span className="text-sm text-muted-foreground font-mono">2019 — 2022</span>
                                    </div>
                                    <div className="text-accent text-sm font-medium mb-3">LogisticsAI • Acquired by Uber</div>
                                    <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-muted-foreground/90 leading-relaxed">
                                        <li>Built the <strong>Autonomous Logistics Coordinator</strong>, reducing delivery times by 20% using OR-Tools and real-time traffic data.</li>
                                        <li>Designed and implemented the driver mobile app using React Native, achieving a 4.8/5 star rating on the App Store.</li>
                                        <li>Created a comprehensive design system ("Compass") that standardized UI across 5 internal products.</li>
                                    </ul>
                                </div>

                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold font-serif">Founding Engineer</h3>
                                        <span className="text-sm text-muted-foreground font-mono">2017 — 2019</span>
                                    </div>
                                    <div className="text-accent text-sm font-medium mb-3">Nebula Data • Seed Stage</div>
                                    <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-muted-foreground/90 leading-relaxed">
                                        <li>Employee #1. Built the MVP of a real-time analytics dashboard for IoT sensors from scratch using Node.js and TimescaleDB.</li>
                                        <li>Scaled the platform to handle 10k+ concurrent device connections using a custom WebSocket gateway.</li>
                                        <li>Handled all DevOps responsibilities, setting up the initial CI/CD pipelines and Terraform infrastructure.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Education */}
                        <section className="mb-10 page-break-avoid">
                            <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-6">Education</h2>
                            <div>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="text-base font-bold font-serif">University of California, Berkeley</h3>
                                    <span className="text-sm text-muted-foreground font-mono">2013 — 2017</span>
                                </div>
                                <div className="text-sm text-muted-foreground">B.S. Computer Science • Graduated cum laude</div>
                            </div>
                        </section>

                        {/* Skills */}
                        <section className="page-break-avoid">
                            <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-6">Technical Skills</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                <div>
                                    <h4 className="font-bold text-foreground mb-1">Languages</h4>
                                    <p className="text-muted-foreground">TypeScript, Rust, Go, Python, SQL</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground mb-1">Infrastructure</h4>
                                    <p className="text-muted-foreground">Kubernetes, AWS, Terraform, Docker</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground mb-1">Data & AI</h4>
                                    <p className="text-muted-foreground">Postgres, Redis, Kafka, PyTorch, Pinecone</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground mb-1">Frontend</h4>
                                    <p className="text-muted-foreground">React, Next.js, Tailwind CSS, Framer Motion</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </Section>
            </main>

            <Footer />
        </>
    );
}
