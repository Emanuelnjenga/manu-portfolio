"use client";

import { siteConfig } from "@/lib/config";
import { CheckCircle2, ShieldCheck, Globe2 } from "lucide-react";

export function VerificationBlock() {
    return (
        <div className="p-6 bg-muted/20 border border-border/50 rounded-lg space-y-4">
            <div className="flex items-center gap-2 text-sm font-bold text-foreground">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <span>Verified Entity</span>
            </div>
            <div className="space-y-2 text-xs text-muted-foreground">
                <div className="flex justify-between">
                    <span>Business Name:</span>
                    <span className="font-mono text-foreground">{siteConfig.name}</span>
                </div>
                <div className="flex justify-between">
                    <span>Registration:</span>
                    <span className="font-mono text-foreground">{siteConfig.business.registrationNumber}</span>
                </div>
                <div className="flex justify-between">
                    <span>Founder:</span>
                    <span className="font-medium text-foreground">{siteConfig.founder}</span>
                </div>
                <div className="flex justify-between">
                    <span>Location:</span>
                    <span className="flex items-center gap-1">
                        <Globe2 className="w-3 h-3" /> {siteConfig.location.city}, {siteConfig.location.country}
                    </span>
                </div>
            </div>
        </div>
    );
}

export function MicroTestimonials() {
    const quotes = [
        "delivered beyond expectations",
        "moved from prototype to production in 8 weeks",
        "critical system architecture audit"
    ];

    return (
        <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center opacity-80">
            {quotes.map((quote, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground/80">
                    <CheckCircle2 className="w-3 h-3 text-accent/60" />
                    <span>"{quote}"</span>
                </div>
            ))}
        </div>
    );
}
