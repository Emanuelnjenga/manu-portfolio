"use client";

import { motion } from "framer-motion";

const complianceBadges = [
    { name: "ISO 27001", color: "bg-blue-900" },
    { name: "SOC 2 Type II", color: "bg-green-900" },
    { name: "GDPR Compliant", color: "bg-yellow-900" },
    { name: "PCI DSS", color: "bg-red-900" },
];

const partners = [
    "AWS Partner",
    "Google Cloud",
    "Microsoft for Startups",
    "GitHub Enterprise",
    "Stripe Verified"
];

export function TrustBar() {
    return (
        <section className="py-10 border-b border-border/40 bg-muted/10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                    {/* Compliance Badges */}
                    <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
                        {complianceBadges.map((badge) => (
                            <div key={badge.name} className={`px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-wider text-white ${badge.color}`}>
                                {badge.name}
                            </div>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block h-8 w-px bg-border/60" />

                    {/* Partners / Tech Stack */}
                    <div className="flex items-center gap-6 flex-wrap justify-center md:justify-end text-muted-foreground grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                        {partners.map((partner) => (
                            <span key={partner} className="text-sm font-semibold font-serif whitespace-nowrap">
                                {partner}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
