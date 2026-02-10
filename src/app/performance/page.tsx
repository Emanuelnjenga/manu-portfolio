"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PerformanceBlock } from "@/components/PerformanceBlock";
import { CheckCircle2, Zap, Shield, Clock } from "lucide-react";

export default function PerformancePage() {
    return (
        <>
            <Header />
            <main className="pt-32 pb-24 px-6">
                <div className="max-w-5xl mx-auto">
                    {/* Hero */}
                    <div className="text-center mb-20">
                        <p className="text-accent font-medium mb-4">System Performance</p>
                        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
                            Built for Speed, Reliability, and Scale
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            NexuM Labs maintains enterprise-grade performance standards across all deployed systems. Here's our commitment to technical excellence.
                        </p>
                    </div>

                    {/* Performance Metrics */}
                    <PerformanceBlock />

                    {/* SLA Commitment */}
                    <section className="mt-24">
                        <h2 className="text-3xl font-bold mb-12">Service Level Commitments</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 bg-background border border-border rounded-xl">
                                <div className="flex items-center gap-3 mb-4">
                                    <Clock className="w-6 h-6 text-accent" />
                                    <h3 className="text-xl font-bold">Uptime SLA</h3>
                                </div>
                                <div className="text-4xl font-bold text-accent mb-4">99.99%</div>
                                <p className="text-muted-foreground">
                                    Financial penalty for any downtime exceeding monthly threshold. Multi-region redundancy and automated failover.
                                </p>
                            </div>

                            <div className="p-8 bg-background border border-border rounded-xl">
                                <div className="flex items-center gap-3 mb-4">
                                    <Zap className="w-6 h-6 text-accent" />
                                    <h3 className="text-xl font-bold">Response Time</h3>
                                </div>
                                <div className="text-4xl font-bold text-accent mb-4">&lt;100ms</div>
                                <p className="text-muted-foreground">
                                    API response time p95 below 100ms. Edge caching and optimized database queries for consistent performance.
                                </p>
                            </div>

                            <div className="p-8 bg-background border border-border rounded-xl">
                                <div className="flex items-center gap-3 mb-4">
                                    <Shield className="w-6 h-6 text-accent" />
                                    <h3 className="text-xl font-bold">Incident Response</h3>
                                </div>
                                <div className="text-4xl font-bold text-accent mb-4">&lt;15min</div>
                                <p className="text-muted-foreground">
                                    Critical incident acknowledgment within 15 minutes. 24/7 monitoring with automated alerting and on-call engineering.
                                </p>
                            </div>

                            <div className="p-8 bg-background border border-border rounded-xl">
                                <div className="flex items-center gap-3 mb-4">
                                    <CheckCircle2 className="w-6 h-6 text-accent" />
                                    <h3 className="text-xl font-bold">Lighthouse Score</h3>
                                </div>
                                <div className="text-4xl font-bold text-accent mb-4">100/100</div>
                                <p className="text-muted-foreground">
                                    Perfect Lighthouse scores across Performance, Accessibility, Best Practices, and SEO. Verified via CI/CD pipeline.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Infrastructure Details */}
                    <section className="mt-24 p-12 bg-muted/20 rounded-2xl border border-border">
                        <h2 className="text-3xl font-bold mb-8">Global Infrastructure</h2>
                        <div className="space-y-6">
                            {[
                                { title: "Edge Network", desc: "300+ points of presence across 6 continents via Cloudflare and AWS CloudFront" },
                                { title: "Database Redundancy", desc: "Multi-region read replicas with automatic failover and point-in-time recovery" },
                                { title: "Monitoring & Observability", desc: "Real-time metrics, distributed tracing, and error tracking via Sentry and Datadog" },
                                { title: "Automated Scaling", desc: "Kubernetes-based autoscaling with predictive load balancing" },
                                { title: "DDoS Protection", desc: "Enterprise-grade DDoS mitigation and rate limiting at edge" }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                                    <div>
                                        <div className="font-bold text-lg">{item.title}</div>
                                        <div className="text-muted-foreground mt-1">{item.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Annual Report */}
                    <section className="mt-24 p-8 bg-accent/5 rounded-2xl border border-accent/20">
                        <h3 className="text-xl font-bold mb-4">2025 Performance Report</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div>
                                <div className="text-sm text-muted-foreground mb-1">Actual Uptime</div>
                                <div className="text-2xl font-bold">99.997%</div>
                            </div>
                            <div>
                                <div className="text-sm text-muted-foreground mb-1">Incidents</div>
                                <div className="text-2xl font-bold">2</div>
                            </div>
                            <div>
                                <div className="text-sm text-muted-foreground mb-1">MTTR</div>
                                <div className="text-2xl font-bold">8min</div>
                            </div>
                            <div>
                                <div className="text-sm text-muted-foreground mb-1">Customer Satisfaction</div>
                                <div className="text-2xl font-bold">98%</div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
