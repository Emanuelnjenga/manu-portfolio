import { Button } from "@/components/Button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProcessPage() {
    return (
        <main className="max-w-3xl mx-auto px-6 py-24">
            <Button variant="ghost" asChild className="mb-8 -ml-4 text-muted-foreground hover:text-foreground">
                <Link href="/"><ArrowLeft className="w-4 h-4 mr-2" /> Back to Home</Link>
            </Button>

            <h1 className="text-4xl font-display font-bold mb-6">How Projects Work</h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Transparency and communication are the foundation of my process. Here is what you can expect when we work together.
            </p>

            <div className="space-y-12">
                {[
                    { title: "1. Discovery & Audit", desc: "We start with a deep dive into your current metrics, codebases, and business goals. I produce a roadmap document before writing a single line of code." },
                    { title: "2. Architecture & Design", desc: "I design the system architecture, database schema, and API contracts. We review these together to ensure alignment with your long-term vision." },
                    { title: "3. Implementation Sprints", desc: "I work in weekly sprints with clear deliverables. You get a deployed preview URL every Friday to track progress visually." },
                    { title: "4. Handoff & Training", desc: "I don't just ship code; I ship documentation. I provide recorded loom videos and technical docs so your team can take over confidently." }
                ].map((step, i) => (
                    <div key={i} className="pl-6 border-l-2 border-border/50">
                        <h3 className="text-xl font-bold font-display text-foreground">{step.title}</h3>
                        <p className="mt-2 text-muted-foreground">{step.desc}</p>
                    </div>
                ))}
            </div>

            <div className="mt-16 p-6 bg-accent/5 rounded-2xl border border-accent/20">
                <h3 className="text-lg font-bold text-accent mb-2">My "No-Surprise" Guarantee</h3>
                <p className="text-sm text-foreground/80">
                    I believe in fixed-price engagements for clearly defined projects. You will never receive a surprise invoice. Any scope creep is discussed and approved in writing before work begins.
                </p>
            </div>
        </main>
    );
}
