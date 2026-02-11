"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { trackEvent } from "@/lib/analytics";
import { Shield, ArrowRight, CheckCircle2, Building2, Users } from "lucide-react";

export default function EnterpriseConsultationPage() {
    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        trackEvent("form_submit", { label: "enterprise_consultation" });

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        setSubmitted(true);
        setIsLoading(false);
        trackEvent("form_success", { label: "enterprise_consultation" });
    };

    if (submitted) {
        return (
            <>
                <Header />
                <main className="pt-32 pb-24 px-6 min-h-[70vh] flex items-center justify-center">
                    <div className="max-w-xl text-center">
                        <div className="w-20 h-20 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-8">
                            <CheckCircle2 className="w-10 h-10" />
                        </div>
                        <h1 className="text-4xl font-display font-bold mb-4">Request Submitted</h1>
                        <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                            Thank you. Our executive team has received your request for an engineering audit. We will reach out via email within 24 hours to schedule your preliminary scan.
                        </p>
                        <Button asChild size="lg">
                            <a href="/enterprise">Back to Enterprise</a>
                        </Button>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <main className="pt-32 pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-6">
                                <Shield className="w-3 h-3" /> Enterprise Grade
                            </div>
                            <h1 className="text-5xl font-display font-bold mb-8 leading-tight">Book Engineering Consultation.</h1>
                            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                                For organizations requiring high-scale systems architecture, security audits, or fractional CTO capacity.
                            </p>

                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="shrink-0 w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                                        <Building2 className="w-6 h-6 text-foreground" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Architecture Review</h4>
                                        <p className="text-muted-foreground">Detailed scan of existing infrastructure, security gaps, and scaling bottlenecks.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="shrink-0 w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                                        <Users className="w-6 h-6 text-foreground" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Team Augmentation</h4>
                                        <p className="text-muted-foreground">Expert senior systems engineers embedded within your existing product teams.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="bg-muted/20 p-8 md:p-10 rounded-3xl border border-border/40 space-y-6">
                            <div className="grid grid-cols-1 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-bold uppercase tracking-wider">Name</label>
                                    <input required type="text" id="name" className="w-full bg-background border border-border/60 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider">Executive Email</label>
                                    <input required type="email" id="email" className="w-full bg-background border border-border/60 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent" />
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="budget" className="text-sm font-bold uppercase tracking-wider">Est. Budget</label>
                                        <select id="budget" className="w-full bg-background border border-border/60 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent">
                                            <option>$10k - $25k</option>
                                            <option>$25k - $100k</option>
                                            <option>$100k+</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="timeline" className="text-sm font-bold uppercase tracking-wider">Timeline</label>
                                        <select id="timeline" className="w-full bg-background border border-border/60 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent">
                                            <option>Immediate</option>
                                            <option>1-3 Months</option>
                                            <option>Planning</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="challenge" className="text-sm font-bold uppercase tracking-wider">Primary Challenge</label>
                                    <textarea id="challenge" rows={4} className="w-full bg-background border border-border/60 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent resize-none"></textarea>
                                </div>
                                <div className="flex items-start gap-3">
                                    <input required type="checkbox" id="nda" className="mt-1 w-4 h-4 accent-accent" />
                                    <label htmlFor="nda" className="text-xs text-muted-foreground whitespace-nowrap">Requires mutual NDA before discussion.</label>
                                </div>
                            </div>

                            <Button type="submit" size="lg" className="w-full h-14" disabled={isLoading}>
                                {isLoading ? "Sending..." : (
                                    <>Request Enterprise Audit <ArrowRight className="ml-2 w-5 h-5" /></>
                                )}
                            </Button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
