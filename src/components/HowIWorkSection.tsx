"use client";

import { CheckCircle2 } from "lucide-react";

const processes = [
    "Clear scope & milestones",
    "Weekly synchronous updates (or async if preferred)",
    "Transparent estimates & invoicing",
    "Post-launch support & maintenance"
];

export function HowIWorkSection() {
    return (
        <section id="process" className="py-20 px-6 bg-muted/30">
            <div className="max-w-3xl mx-auto text-center space-y-10">
                <h2 className="text-3xl font-display font-bold text-foreground">How I Work</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                    {processes.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border/50 shadow-sm">
                            <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                            <span className="text-foreground font-medium">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
