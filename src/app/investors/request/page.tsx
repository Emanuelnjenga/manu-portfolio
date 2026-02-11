"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { trackEvent } from "@/lib/analytics";
import { FileText, Lock, ArrowRight, CheckCircle2 } from "lucide-react";

export default function InvestorRequestPage() {
    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        trackEvent("form_submit", { label: "investor_materials_request" });

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setSubmitted(true);
        setIsLoading(false);
        trackEvent("form_success", { label: "investor_materials_request" });
    };

    if (submitted) {
        return (
            <>
                <Header />
                <main className="pt-32 pb-24 px-6 min-h-[70vh] flex items-center justify-center">
                    <div className="max-w-xl text-center">
                        <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                            <CheckCircle2 className="w-10 h-10" />
                        </div>
                        <h1 className="text-4xl font-display font-bold mb-4">Request Received</h1>
                        <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                            Thank you for your interest. We've sent a Non-Disclosure Agreement (NDA) to your email. Once signed, you will receive instance access to the Pitch Deck and Data Room.
                        </p>
                        <Button asChild size="lg">
                            <a href="/">Return Home</a>
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
                <div className="max-w-3xl mx-auto">
                    <div className="mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-6">
                            <Lock className="w-3 h-3" /> Secure Data Room
                        </div>
                        <h1 className="text-5xl font-display font-bold mb-6">Request Investor Materials</h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Access our full pitch deck, financial models, and technical due diligence reports. Access requires a signed NDA.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8 bg-muted/20 p-8 md:p-12 rounded-3xl border border-border/40">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-bold uppercase tracking-wider">Full Name</label>
                                <input
                                    required
                                    type="text"
                                    id="name"
                                    placeholder="John Doe"
                                    className="w-full bg-background border border-border/60 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider">Work Email</label>
                                <input
                                    required
                                    type="email"
                                    id="email"
                                    placeholder="john@venture-capital.com"
                                    className="w-full bg-background border border-border/60 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="org" className="text-sm font-bold uppercase tracking-wider">Organization / Fund</label>
                            <input
                                required
                                type="text"
                                id="org"
                                placeholder="Global Ventures"
                                className="w-full bg-background border border-border/60 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                            />
                        </div>

                        <div className="flex items-start gap-4 p-4 bg-background/50 rounded-xl border border-border/40">
                            <div className="pt-1">
                                <input
                                    required
                                    type="checkbox"
                                    id="nda"
                                    className="w-4 h-4 accent-accent"
                                />
                            </div>
                            <label htmlFor="nda" className="text-sm text-muted-foreground leading-relaxed">
                                I agree to the <span className="text-foreground font-semibold">Standard Confidentiality Terms (NDA)</span>. I understand that materials provided are for due diligence purposes only and may not be shared without prior written consent.
                            </label>
                        </div>

                        <Button type="submit" size="lg" className="w-full h-14" disabled={isLoading}>
                            {isLoading ? "Processing..." : (
                                <>Request Access <ArrowRight className="ml-2 w-5 h-5" /></>
                            )}
                        </Button>

                        <p className="text-center text-xs text-muted-foreground">
                            Materials are typically approved within 12-24 hours.
                        </p>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    );
}
