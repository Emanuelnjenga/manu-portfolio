"use client";

import { Section } from "@/components/Section";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ManuAssistant } from "@/components/ManuAssistant";
import { StickyCTA } from "@/components/StickyCTA";
import { Button } from "@/components/Button";
import { useState } from "react";
import { Bot, Sparkles, Brain, Cpu, Database, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AIPage() {
    const [sentimentInput, setSentimentInput] = useState("The new deployment architecture significantly reduced latency.");
    const [sentimentResult, setSentimentResult] = useState<{ score: number; label: string } | null>(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    const analyzeSentiment = () => {
        setIsAnalyzing(true);
        // Simulate API call
        setTimeout(() => {
            const score = sentimentInput.toLowerCase().includes("reduced") || sentimentInput.toLowerCase().includes("good") ? 0.9 : 0.2;
            setSentimentResult({
                score,
                label: score > 0.5 ? "Positive" : "Negative"
            });
            setIsAnalyzing(false);
        }, 800);
    };

    return (
        <>
            <Header />
            <ManuAssistant />
            <StickyCTA />

            <main className="flex-1 pt-24">
                <Section className="pb-8">
                    <h1 className="text-5xl md:text-7xl font-serif mb-6">AI Engineering</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-12">
                        I build practical, robust AI systems. Moving beyond the "demo" phase to production-grade reliability using evaluations, guardrails, and efficient retrieval pipelines.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                        <div className="p-8 bg-muted/5 border border-border rounded-3xl relative overflow-hidden group hover:border-accent/30 transition-colors">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Brain className="w-32 h-32" />
                            </div>
                            <h3 className="text-2xl font-serif mb-4 flex items-center gap-2">
                                <Bot className="w-6 h-6 text-accent" /> LLM Orchestration
                            </h3>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                Experience building agentic workflows using LangChain and custom state machines. I focus on deterministic control flow for critical business logic while leveraging LLMs for reasoning.
                            </p>
                            <ul className="space-y-2 mb-8 text-sm text-foreground/80">
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Custom Tool Definitions</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Structural Output Validation (Pydantic)</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Latency Optimization (Streaming)</li>
                            </ul>
                        </div>

                        <div className="p-8 bg-muted/5 border border-border rounded-3xl relative overflow-hidden group hover:border-accent/30 transition-colors">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Database className="w-32 h-32" />
                            </div>
                            <h3 className="text-2xl font-serif mb-4 flex items-center gap-2">
                                <Cpu className="w-6 h-6 text-accent" /> RAG Pipelines
                            </h3>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                Architecting high-recall retrieval systems using hybrid search (Vector + Keyword) and re-ranking. I treat context windows as a scarce resource.
                            </p>
                            <ul className="space-y-2 mb-8 text-sm text-foreground/80">
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Hybrid Search (Pinecone + BM25)</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Cross-Encoder Reranking</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Evaluation Frameworks (Ragas)</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-foreground text-background rounded-3xl p-8 md:p-12 mb-20 overflow-hidden relative">
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-white text-xs font-bold uppercase tracking-wider mb-6">
                                    Interactive Demo
                                </div>
                                <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
                                    Deterministic Guardrails
                                </h2>
                                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                    AI models are probabilistic. Engineering is deterministic. I build "guardrails" that force model outputs to strictly adhere to schemas, preventing hallucinations in production.
                                </p>
                                <p className="text-sm text-gray-500">
                                    Try the sentiment classifier below. It runs locallly (simulated) to demonstrate instant feedback loops.
                                </p>
                            </div>

                            <div className="bg-background text-foreground rounded-xl p-6 shadow-2xl border border-white/10">
                                <div className="mb-4">
                                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 block">Input Text</label>
                                    <textarea
                                        value={sentimentInput}
                                        onChange={(e) => setSentimentInput(e.target.value)}
                                        className="w-full bg-muted/20 border border-border rounded-lg p-3 text-sm focus:ring-1 focus:ring-accent outline-none resize-none h-24"
                                    />
                                </div>

                                <div className="flex items-center justify-between">
                                    <Button
                                        onClick={analyzeSentiment}
                                        disabled={isAnalyzing || !sentimentInput}
                                        className="rounded-full"
                                    >
                                        {isAnalyzing ? <Sparkles className="w-4 h-4 mr-2 animate-spin" /> : <Sparkles className="w-4 h-4 mr-2" />}
                                        Run Classifier
                                    </Button>

                                    {sentimentResult && (
                                        <div className="flex items-center gap-3 animate-in fade-in slide-in-from-right-4">
                                            <span className="text-sm text-muted-foreground">Confidence: <span className="text-foreground font-mono">{(sentimentResult.score * 100).toFixed(0)}%</span></span>
                                            <span className={cn(
                                                "px-3 py-1 rounded-full text-xs font-bold uppercase",
                                                sentimentResult.label === "Positive" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                                            )}>
                                                {sentimentResult.label}
                                            </span>
                                        </div>
                                    )}
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
