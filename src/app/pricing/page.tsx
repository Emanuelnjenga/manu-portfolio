import { Button } from "@/components/Button";
import Link from "next/link";
import { ArrowLeft, Check, Zap, Shield, Crown } from "lucide-react";

export default function PricingPage() {
    return (
        <main className="max-w-6xl mx-auto px-6 py-24">
            <Button variant="ghost" asChild className="mb-8 -ml-4 text-muted-foreground hover:text-foreground">
                <Link href="/"><ArrowLeft className="w-4 h-4 mr-2" /> Back to Home</Link>
            </Button>

            <div className="text-center max-w-3xl mx-auto mb-20">
                <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-accent uppercase bg-accent/10 rounded-full">
                    Limited Availability: Q4 2026
                </div>
                <h1 className="text-5xl font-display font-bold mb-6">Strategic Engineering Partners.</h1>
                <p className="text-xl text-muted-foreground">
                    We don't sell hours. We sell outcome-certainty for high-stakes initiatives.
                    <br className="hidden md:block" /> Choose the engagement model that fits your risk profile.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* 1. Decoy / Lower Anchor */}
                <div className="p-8 rounded-2xl border border-border bg-background hover:border-accent/30 transition-all opacity-80 hover:opacity-100">
                    <div className="flex items-center gap-3 mb-4">
                        <Zap className="w-6 h-6 text-muted-foreground" />
                        <h3 className="font-bold text-xl">The "MVP" Sprint</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6 h-10">
                        Rapid validation for pre-seed startups. Pure execution, minimal strategy.
                    </p>
                    <div className="text-3xl font-display font-bold mb-2">$15,000<span className="text-sm font-sans font-normal text-muted-foreground"> / sprint</span></div>
                    <div className="text-xs text-muted-foreground mb-8">4-week fixed scope</div>

                    <ul className="space-y-4 mb-8 text-sm">
                        <li className="flex gap-3"><Check className="w-4 h-4 text-foreground shrink-0" /> React/Next.js Core</li>
                        <li className="flex gap-3"><Check className="w-4 h-4 text-foreground shrink-0" /> Supabase Backend</li>
                        <li className="flex gap-3"><Check className="w-4 h-4 text-foreground shrink-0" /> Basic Analytics</li>
                        <li className="flex gap-3 opacity-50"><Check className="w-4 h-4 text-muted-foreground shrink-0" /> No Architecture Review</li>
                        <li className="flex gap-3 opacity-50"><Check className="w-4 h-4 text-muted-foreground shrink-0" /> No SLA Support</li>
                    </ul>
                    <Button variant="outline" className="w-full" asChild><Link href="/contact">Apply for Sprint</Link></Button>
                </div>

                {/* 2. Target / Value Optmized */}
                <div className="p-8 rounded-2xl border-2 border-accent bg-accent/5 relative transform scale-105 shadow-2xl z-10">
                    <div className="absolute -top-5 inset-x-0 flex justify-center">
                        <span className="bg-accent text-white text-xs uppercase font-bold px-4 py-1.5 rounded-full shadow-lg">
                            Most High-Growth Choice
                        </span>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                        <Shield className="w-6 h-6 text-accent" />
                        <h3 className="font-bold text-xl text-accent">Growth Platform</h3>
                    </div>
                    <p className="text-sm text-foreground/80 mb-6 h-10">
                        End-to-end product engineering for Series A+ scaling. Security, compliance, and scale included.
                    </p>
                    <div className="text-4xl font-display font-bold mb-2">$45,000<span className="text-sm font-sans font-normal text-muted-foreground"> / qtr</span></div>
                    <div className="text-xs text-accent font-medium mb-8">Limited to 2 clients per quarter</div>

                    <ul className="space-y-4 mb-8 text-sm font-medium">
                        <li className="flex gap-3"><Check className="w-4 h-4 text-accent shrink-0" /> <strong>Full-Stack Architecture</strong> (System Design)</li>
                        <li className="flex gap-3"><Check className="w-4 h-4 text-accent shrink-0" /> <strong>AI/LLM Integration</strong> (RAG Pipelines)</li>
                        <li className="flex gap-3"><Check className="w-4 h-4 text-accent shrink-0" /> <strong>Enterprise Security</strong> (SOC2 Ready)</li>
                        <li className="flex gap-3"><Check className="w-4 h-4 text-accent shrink-0" /> <strong>Design System</strong> Implementation</li>
                        <li className="flex gap-3"><Check className="w-4 h-4 text-accent shrink-0" /> Weekly Strategic Consulting</li>
                    </ul>
                    <div className="space-y-3">
                        <Button className="w-full h-12 text-base font-bold shadow-accent/20 shadow-lg" asChild><Link href="/contact">Secure Growth Slot</Link></Button>
                        <p className="text-[10px] text-center text-muted-foreground">30-day money-back guarantee on initial audit.</p>
                    </div>
                </div>

                {/* 3. High Anchor / Enterprise */}
                <div className="p-8 rounded-2xl border border-border bg-background hover:border-accent/30 transition-all">
                    <div className="flex items-center gap-3 mb-4">
                        <Crown className="w-6 h-6 text-muted-foreground" />
                        <h3 className="font-bold text-xl">Fractional CTO</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6 h-10">
                        Executive technical leadership for non-technical founders or enterprise divisions.
                    </p>
                    <div className="text-3xl font-display font-bold mb-2">$12k<span className="text-sm font-sans font-normal text-muted-foreground"> / mo</span></div>
                    <div className="text-xs text-muted-foreground mb-8">Min. 6 month retainer</div>

                    <ul className="space-y-4 mb-8 text-sm">
                        <li className="flex gap-3"><Check className="w-4 h-4 text-foreground shrink-0" /> Hiring & Team Management</li>
                        <li className="flex gap-3"><Check className="w-4 h-4 text-foreground shrink-0" /> Vendor Selection & Audit</li>
                        <li className="flex gap-3"><Check className="w-4 h-4 text-foreground shrink-0" /> Investor Due Diligence Prep</li>
                        <li className="flex gap-3"><Check className="w-4 h-4 text-foreground shrink-0" /> Board Meeting attendance</li>
                        <li className="flex gap-3"><Check className="w-4 h-4 text-foreground shrink-0" /> Crisis Response SLA</li>
                    </ul>
                    <Button variant="outline" className="w-full" asChild><Link href="/contact">Inquire Availability</Link></Button>
                </div>
            </div>

            {/* Social Proof / Reassurance Block */}
            <div className="mt-24 border-t border-border pt-12">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                    <div>
                        <h4 className="text-lg font-bold mb-2">Why these rates?</h4>
                        <p className="text-sm text-muted-foreground max-w-md">
                            We invest heavily in R&D, security tools, and senior talent. Our pricing reflects the
                            <span className="text-foreground font-medium"> cost of getting it right the first time</span> versus the infinite cost of rewriting it later.
                        </p>
                    </div>
                    <div className="flex gap-8 opacity-70 grayscale">
                        {/* Placeholder Client Logos */}
                        <div className="h-8 w-24 bg-foreground/10 rounded"></div>
                        <div className="h-8 w-24 bg-foreground/10 rounded"></div>
                        <div className="h-8 w-24 bg-foreground/10 rounded"></div>
                    </div>
                </div>
            </div>

            <div className="mt-16 text-center text-sm text-muted-foreground">
                <p>Need a custom enterprise agreement? <Link href="/contact" className="underline underline-offset-4 hover:text-foreground">Contact Legal Sales</Link>.</p>
            </div>
        </main>
    );
}
