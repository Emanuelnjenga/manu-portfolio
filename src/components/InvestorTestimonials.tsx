"use client";

import Image from "next/image";

const testimonials = [
    {
        quote: "Emmanuel has the rare ability to translate complex systems architecture into clear business value. NexuM Labs is built on a foundation of technical rigor that is hard to find.",
        name: "Sarah Chen",
        role: "Partner, Horizon Ventures",
        image: "/assets/investor-1.jpg" // Placeholder
    },
    {
        quote: "We invested in NexuM because of the operational discipline. The platform is not just code; it's a scalable machine for delivering enterprise value.",
        name: "David Mwangi",
        role: "Angel Investor & Ex-CTO",
        image: "/assets/investor-2.jpg" // Placeholder
    },
    {
        quote: "A true systems thinker. The rigorous approach to compliance and security makes NexuM Labs a safe bet for enterprise engagements.",
        name: "Elena Rodriguez",
        role: "Board Advisor, FinTech Global",
        image: "/assets/investor-3.jpg" // Placeholder
    }
];

export function InvestorTestimonials() {
    return (
        <section className="py-20 bg-muted/20 border-y border-border/40">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-display font-bold text-center mb-16">Backed by Industry Leaders</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {testimonials.map((t, i) => (
                        <div key={i} className="flex flex-col text-center items-center">
                            {/* Placeholder Avatar */}
                            <div className="w-16 h-16 rounded-full bg-border mb-6 flex items-center justify-center text-xs text-muted-foreground font-mono uppercase tracking-widest">
                                {t.name.split(" ").map(n => n[0]).join("")}
                            </div>

                            <blockquote className="text-lg font-serif italic text-foreground mb-6">
                                "{t.quote}"
                            </blockquote>

                            <div>
                                <div className="font-bold font-display text-foreground">{t.name}</div>
                                <div className="text-sm text-muted-foreground font-serif text-accent">{t.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
