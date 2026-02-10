"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";

const caseStudies = [
    {
        title: "Portfolio Platform — NexuM Personal Brand",
        problem: "Needed a fast, modular portfolio to present work and hire clients.",
        solution: "Built a Next.js + Tailwind modular portfolio with CMS integration.",
        impact: "Reduced page load time by 63%. Increased contacts by 45%.",
        link: "/case-studies/portfolio-platform",
        metrics: { value: "63%", label: "Faster Load" }
    },
    {
        title: "Donation Platform — Sarepta Children’s Rescue Center",
        problem: "Manual donation process; poor donor retention.",
        solution: "Launched a lightweight donation flow with webhooks & analytics.",
        impact: "Donor conversions +28%; monthly donors increased 18%.",
        link: "/case-studies/donation-platform",
        metrics: { value: "+28%", label: "Conversions" }
    },
    {
        title: "AI Prompt Builder — PromptLab (internal)",
        problem: "Slow prompt testing for teams.",
        solution: "Built an internal prompt creation & testing UI with versioning.",
        impact: "Reduced iteration time 4×; team productivity +32%.",
        link: "/case-studies/ai-prompt-builder",
        metrics: { value: "4x", label: "Faster Iteration" }
    }
];

export function CaseStudyTeasers() {
    return (
        <section id="case-studies" className="py-20 px-6 bg-background">
            <div className="max-w-5xl mx-auto space-y-12">
                <div className="flex items-end justify-between">
                    <div>
                        <h2 className="text-3xl font-display font-bold text-foreground">Selected Work</h2>
                        <p className="text-muted-foreground mt-2">Deep dives into complex problems.</p>
                    </div>
                    <Button variant="link" asChild className="hidden sm:inline-flex">
                        <Link href="/projects">View all projects <ArrowRight className="ml-2 w-4 h-4" /></Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {caseStudies.map((study, i) => (
                        <Link key={i} href={study.link} className="group block h-full">
                            <article className="flex flex-col h-full justify-between p-6 rounded-2xl bg-muted/20 border border-border/50 hover:border-accent/50 hover:bg-muted/40 transition-all">
                                <div>
                                    <div className="text-sm font-mono text-accent mb-4">{study.metrics.value} {study.metrics.label}</div>
                                    <h3 className="text-xl font-bold font-display text-foreground mb-3 group-hover:text-accent transition-colors">
                                        {study.title.split("—")[0].trim()}
                                    </h3>
                                    <div className="text-sm text-muted-foreground mb-4 line-clamp-3">
                                        <span className="font-semibold text-foreground/80">Problem:</span> {study.problem}
                                    </div>
                                    <div className="text-sm text-muted-foreground line-clamp-3">
                                        <span className="font-semibold text-foreground/80">Solution:</span> {study.solution}
                                    </div>
                                </div>
                                <div className="mt-6 pt-4 border-t border-border/40 flex items-center text-sm font-medium text-foreground group-hover:text-accent">
                                    Read case study <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
