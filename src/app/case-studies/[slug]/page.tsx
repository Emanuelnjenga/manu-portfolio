import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cmsClient } from "@/lib/cms";

type CaseStudyParams = Promise<{ slug: string }>;

export default async function CaseStudyPage({ params }: { params: CaseStudyParams }) {
    const { slug } = await params;
    const study = await cmsClient.getCaseStudyBySlug(slug);

    if (!study) {
        return notFound();
    }

    return (
        <main className="max-w-4xl mx-auto px-6 py-24">
            <Button variant="ghost" asChild className="mb-8 -ml-4 text-muted-foreground hover:text-foreground">
                <Link href="/"><ArrowLeft className="w-4 h-4 mr-2" /> Back to Home</Link>
            </Button>

            <header className="mb-16 space-y-6">
                <div className="flex flex-wrap gap-3 text-sm font-mono text-accent">
                    <span>{study.client}</span>
                    <span>•</span>
                    <span>{study.role}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight text-foreground">
                    {study.title}
                </h1>
                <div className="flex flex-wrap gap-2 pt-2">
                    {study.stack.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-muted/30 rounded-full text-xs font-medium text-muted-foreground border border-border/50">
                            {tech}
                        </span>
                    ))}
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-span-2 space-y-12">
                    <section className="space-y-4">
                        <h2 className="text-xl font-bold font-display">The Problem</h2>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                            {study.problem}
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold font-display">The Solution</h2>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                            {study.solution}
                        </p>
                        <div className="p-6 bg-muted/20 border border-border/50 rounded-xl my-6">
                            <p className="italic text-sm text-muted-foreground text-center">
                                [Placeholder for Process / Architecture Diagram or Screenshot]
                            </p>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            {study.content || "Case study content loading..."}
                        </p>
                    </section>
                </div>

                <div className="space-y-8">
                    <div className="p-6 bg-accent/5 border border-accent/20 rounded-2xl">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-accent mb-4">Impact</h3>
                        <p className="text-2xl font-bold text-foreground">{study.impact}</p>
                    </div>
                </div>
            </div>

            <div className="mt-20 pt-10 text-center">
                <h3 className="text-2xl font-display font-bold mb-6">Have a similar challenge?</h3>
                <Button size="lg" className="rounded-full px-8 h-12" asChild>
                    <Link href="/contact">Start a Conversation</Link>
                </Button>
            </div>
        </main>
    );
}
