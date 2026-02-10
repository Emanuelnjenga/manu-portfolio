"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PartnersSection } from "@/components/PartnersSection";
import { Button } from "@/components/Button";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function PartnersPage() {
    return (
        <>
            <Header />
            <main className="pt-32 pb-24 px-6">
                <div className="max-w-5xl mx-auto">
                    {/* Hero */}
                    <div className="text-center mb-20">
                        <p className="text-accent font-medium mb-4">Technology Ecosystem</p>
                        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
                            Built on Best-in-Class Infrastructure
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            NexuM Labs leverages enterprise-grade technology partnerships to deliver scalable, secure, and high-performance solutions to our clients.
                        </p>
                    </div>

                    {/* Partners Section */}
                    <PartnersSection />

                    {/* Certifications */}
                    <section className="mt-24 p-12 bg-muted/20 rounded-2xl border border-border">
                        <h2 className="text-3xl font-bold mb-8">Certifications & Partner Status</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { name: "AWS Advanced Tier", desc: "Serverless & container specialty consulting partner" },
                                { name: "Vercel Partner", desc: "Next.js and Edge deployment expertise" },
                                { name: "Stripe Partner", desc: "Payment infrastructure integration" },
                                { name: "Auth0 Certified", desc: "Identity and access management implementation" }
                            ].map((cert, i) => (
                                <div key={i} className="flex gap-4">
                                    <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                                    <div>
                                        <div className="font-bold text-lg">{cert.name}</div>
                                        <div className="text-muted-foreground mt-1">{cert.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Reseller Program */}
                    <section className="mt-24">
                        <div className="p-12 bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl border border-accent/20">
                            <h2 className="text-3xl font-bold mb-4">Become a Partner</h2>
                            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                                We work with technology partners, system integrators, and agencies to bring NexuM Labs engineering expertise to their clients.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                {["White-label services", "Revenue share model", "Co-marketing opportunities"].map((benefit, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-accent" />
                                        <span className="font-medium">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                            <Button asChild className="gap-2">
                                <Link href="/contact">
                                    Apply to Partner Program <ArrowRight className="w-4 h-4" />
                                </Link>
                            </Button>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
