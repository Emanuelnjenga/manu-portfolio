"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GlobalMap } from "@/components/GlobalMap";
import { Globe, MapPin, Users, Building2 } from "lucide-react";

export default function GlobalPage() {
    return (
        <>
            <Header />
            <main className="pt-32 pb-24 px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Hero */}
                    <div className="text-center mb-20">
                        <p className="text-accent font-medium mb-4">Global Presence</p>
                        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
                            Building for the World
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            NexuM Labs operates globally with clients across 6 continents. Remote-first, time-zone aware, and culturally adaptive.
                        </p>
                    </div>

                    {/* Global Map */}
                    <GlobalMap />

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
                        <div className="text-center p-8 bg-background border border-border rounded-xl">
                            <Globe className="w-8 h-8 text-accent mx-auto mb-4" />
                            <div className="text-4xl font-bold mb-2">24</div>
                            <div className="text-sm text-muted-foreground">Countries Served</div>
                        </div>
                        <div className="text-center p-8 bg-background border border-border rounded-xl">
                            <MapPin className="w-8 h-8 text-accent mx-auto mb-4" />
                            <div className="text-4xl font-bold mb-2">6</div>
                            <div className="text-sm text-muted-foreground">Continents</div>
                        </div>
                        <div className="text-center p-8 bg-background border border-border rounded-xl">
                            <Users className="w-8 h-8 text-accent mx-auto mb-4" />
                            <div className="text-4xl font-bold mb-2">300+</div>
                            <div className="text-sm text-muted-foreground">CDN Points of Presence</div>
                        </div>
                        <div className="text-center p-8 bg-background border border-border rounded-xl">
                            <Building2 className="w-8 h-8 text-accent mx-auto mb-4" />
                            <div className="text-4xl font-bold mb-2">HQ</div>
                            <div className="text-sm text-muted-foreground">Nairobi, Kenya</div>
                        </div>
                    </div>

                    {/* Regional Capabilities */}
                    <section className="mt-24">
                        <h2 className="text-3xl font-bold mb-12">Regional Capabilities</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    region: "Africa",
                                    desc: "Headquartered in Nairobi with deep knowledge of East African fintech, e-commerce, and agritech sectors."
                                },
                                {
                                    region: "North America",
                                    desc: "Serving U.S. and Canadian clients with expertise in SaaS, enterprise platforms, and AI/ML products."
                                },
                                {
                                    region: "Europe",
                                    desc: "GDPR-compliant solutions for European clients with focus on privacy-first architecture."
                                },
                                {
                                    region: "Asia-Pacific",
                                    desc: "Experience with high-scale systems for Asian markets with multi-language and multi-currency support."
                                }
                            ].map((item, i) => (
                                <div key={i} className="p-6 bg-background border border-border rounded-xl">
                                    <h3 className="text-xl font-bold mb-3">{item.region}</h3>
                                    <p className="text-muted-foreground">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Time Zone Coverage */}
                    <section className="mt-24 p-12 bg-muted/20 rounded-2xl border border-border">
                        <h2 className="text-3xl font-bold mb-6">Always-On Support</h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            Operating from <strong>EAT (UTC+3)</strong>, we provide overlap with European, Asian, and North American business hours.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <div className="font-bold mb-2">Europe Coverage</div>
                                <div className="text-muted-foreground">Full overlap with CET/GMT working hours</div>
                            </div>
                            <div>
                                <div className="font-bold mb-2">US East Coast</div>
                                <div className="text-muted-foreground">4+ hours of real-time collaboration daily</div>
                            </div>
                            <div>
                                <div className="font-bold mb-2">Asia-Pacific</div>
                                <div className="text-muted-foreground">Morning overlap with Singapore, Dubai, Mumbai</div>
                            </div>
                        </div>
                    </section>

                    {/*  Localization */}
                    <section className="mt-24 p-8 bg-accent/5 rounded-2xl border border-accent/20">
                        <h3 className="text-xl font-bold mb-4">Multi-Currency & Localization Ready</h3>
                        <p className="text-muted-foreground mb-4">
                            NexuM Labs builds globally-aware systems with support for:
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {["USD", "EUR", "GBP", "KES", "Multi-language UI", "Right-to-Left (RTL)", "Timezone-aware", "Regional compliance"].map((item, i) => (
                                <span key={i} className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
