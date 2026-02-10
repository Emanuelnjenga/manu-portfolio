"use client";

import { CheckCircle, Zap, Globe, Shield } from "lucide-react";

const metrics = [
    {
        label: "Uptime SLA",
        value: "99.99%",
        icon: Globe,
        detail: "Global CDN Redundancy"
    },
    {
        label: "Lighthouse Score",
        value: "100/100",
        icon: Zap,
        detail: "Performance & Accessibility"
    },
    {
        label: "Security",
        value: "Zero Trust",
        icon: Shield,
        detail: "ISO 27001 Aligned"
    },
    {
        label: "Avg. Response",
        value: "< 100ms",
        icon: CheckCircle,
        detail: "Edge Computing"
    }
];

export function PerformanceBlock() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12 border-t border-border/40">
            {metrics.map((m) => (
                <div key={m.label} className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-muted/10 transition-colors">
                    <m.icon className="w-6 h-6 text-accent mb-3" />
                    <div className="text-2xl font-bold font-display text-foreground">{m.value}</div>
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mt-1 mb-2">{m.label}</div>
                    <div className="text-[10px] text-muted-foreground/80 font-mono">{m.detail}</div>
                </div>
            ))}
        </div>
    );
}
