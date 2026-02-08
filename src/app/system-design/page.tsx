"use client";

import { Section } from "@/components/Section";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ManuAssistant } from "@/components/ManuAssistant";
import { StickyCTA } from "@/components/StickyCTA";
import { SYSTEM_DESIGN_CASE_STUDIES } from "@/lib/data";
import { ArrowRight, Server, Shield, Zap, Lock } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/Button";

export default function SystemDesignPage() {
    // If no case studies, fallback to empty array or handle gracefully
    // But data.ts should have them.
    const [activeCase, setActiveCase] = useState(SYSTEM_DESIGN_CASE_STUDIES[0]);

    if (!activeCase) return null;

    return (
        <>
            <Header />
            <ManuAssistant />
            <StickyCTA />

            <main className="flex-1 pt-24">
                <Section className="pb-8">
                    <h1 className="text-5xl md:text-7xl font-serif mb-6">System Design</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-12">
                        Deconstructing complex distributed systems. These case studies explore the trade-offs between consistency, availability, and latency in real-world scenarios.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Sidebar Navigation */}
                        <div className="lg:col-span-3 space-y-2">
                            {SYSTEM_DESIGN_CASE_STUDIES.map((study) => (
                                <button
                                    key={study.id}
                                    onClick={() => setActiveCase(study)}
                                    className={cn(
                                        "w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 border-l-2",
                                        activeCase.id === study.id
                                            ? "bg-accent/5 border-l-accent text-accent"
                                            : "border-l-transparent text-muted-foreground hover:bg-muted/10 hover:text-foreground"
                                    )}
                                >
                                    {study.title}
                                </button>
                            ))}
                        </div>

                        {/* Content Area */}
                        <div className="lg:col-span-9">
                            <div className="bg-background border border-border rounded-2xl p-6 md:p-10 shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-300" key={activeCase.id}>
                                <div className="mb-8">
                                    <h2 className="text-3xl font-serif mb-4">{activeCase.title}</h2>
                                    <div className="p-4 bg-muted/10 rounded-xl border border-border/50">
                                        <p className="font-medium text-foreground mb-2">Scenario:</p>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{activeCase.scenario}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                                    <div>
                                        <h3 className="flex items-center gap-2 font-serif text-xl mb-4">
                                            <Zap className="w-5 h-5 text-accent" /> Requirements
                                        </h3>
                                        <ul className="space-y-3">
                                            {activeCase.deepDive.requirements.map((req, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 shrink-0" />
                                                    {req}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="flex items-center gap-2 font-serif text-xl mb-4">
                                            <Lock className="w-5 h-5 text-accent" /> Constraints
                                        </h3>
                                        <ul className="space-y-3">
                                            {activeCase.deepDive.constraints.map((cons, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 shrink-0" />
                                                    {cons}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="mb-10">
                                    <h3 className="flex items-center gap-2 font-serif text-xl mb-4">
                                        <Server className="w-5 h-5 text-accent" /> High-Level Architecture
                                    </h3>
                                    <div className="bg-foreground text-background p-6 rounded-xl font-mono text-sm overflow-x-auto shadow-inner border border-foreground/10">
                                        {activeCase.deepDive.architecture}
                                    </div>
                                </div>

                                <div className="mb-10">
                                    <h3 className="flex items-center gap-2 font-serif text-xl mb-4">
                                        <Shield className="w-5 h-5 text-accent" /> Trade-off Matrix
                                    </h3>
                                    <div className="grid grid-cols-1 gap-4">
                                        {activeCase.deepDive.tradeoffs.map((t, i) => (
                                            <div key={i} className="group p-5 bg-muted/5 border border-border rounded-xl hover:border-accent/30 transition-colors">
                                                <h4 className="font-bold text-foreground mb-2 text-sm">{t.name}</h4>
                                                <p className="text-sm text-muted-foreground leading-relaxed">{t.decision}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex justify-end pt-6 border-t border-border">
                                    <Button variant="outline">
                                        Download Architecture PDF <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
            </main>

            <Footer />
        </>
    );
}
