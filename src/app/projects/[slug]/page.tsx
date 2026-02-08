import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { ManuAssistant } from "@/components/ManuAssistant";
import { StickyCTA } from "@/components/StickyCTA";
import { PROJECTS } from "@/lib/data";
import { ArrowLeft, Github, Globe, Server, Database, Cloud } from "lucide-react";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return PROJECTS.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectDetailPage({ params }: Props) {
    const resolvedParams = await params;
    const project = PROJECTS.find((p) => p.slug === resolvedParams.slug);

    if (!project) {
        notFound();
    }

    return (
        <>
            <Header />
            <ManuAssistant />
            <StickyCTA />

            <main className="flex-1 pt-24">
                {/* Project Hero */}
                <Section className="pb-8">
                    <Link
                        href="/projects"
                        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Projects
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-12">
                        <div>
                            <span className="text-accent font-medium tracking-wide text-sm uppercase mb-4 block">
                                {project.category} — {project.year}
                            </span>
                            <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
                                {project.title}
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                                {project.description}
                            </p>
                        </div>
                        <div className="flex gap-4 lg:justify-end">
                            <Button size="lg" asChild className="rounded-full">
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <Globe className="mr-2 w-4 h-4" /> Live Demo
                                </a>
                            </Button>
                            <Button variant="outline" size="lg" asChild className="rounded-full">
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <Github className="mr-2 w-4 h-4" /> Source Code
                                </a>
                            </Button>
                        </div>
                    </div>

                    <div className="aspect-[16/9] w-full relative rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src={project.thumbnail}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </Section>

                {/* Content */}
                <Section>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        {/* Sidebar / Metadata */}
                        <div className="lg:col-span-1 space-y-10">
                            <div>
                                <h3 className="font-serif text-xl mb-4 text-foreground">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-muted/20 border border-border rounded-full text-sm font-medium text-muted-foreground"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="font-serif text-xl mb-4 text-foreground">Impact</h3>
                                <div className="p-5 bg-accent/5 rounded-xl border border-accent/20">
                                    <p className="text-accent font-medium leading-relaxed">
                                        {project.impact}
                                    </p>
                                </div>
                            </div>

                            <div className="p-6 bg-muted/10 rounded-xl">
                                <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-3">My Role</h4>
                                <p className="text-sm leading-relaxed">
                                    Lead Architect & Primary Developer. Responsible for system design, database schema, and core API implementation.
                                </p>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            <div>
                                <h2 className="text-3xl font-serif mb-4">The Challenge</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {project.content.problem}
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-serif mb-4">The Solution</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                    {project.content.solution}
                                </p>

                                {project.content.architecture && (
                                    <div className="mt-8">
                                        <h3 className="font-serif text-xl mb-4">System Architecture</h3>
                                        <div className="aspect-[16/9] bg-muted/20 border-2 border-dashed border-border rounded-xl flex items-center justify-center flex-col text-muted-foreground p-8 text-center">
                                            <Server className="w-12 h-12 mb-4 opacity-50" />
                                            <code className="text-sm bg-background p-4 rounded-lg border border-border block w-full overflow-x-auto whitespace-pre-wrap">
                                                {project.content.architecture}
                                            </code>
                                            <span className="text-xs mt-4 opacity-70">(Simplified Textual Representation)</span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {project.content.tradeoffs && (
                                <div>
                                    <h2 className="text-3xl font-serif mb-4">Key Decisions & Trade-offs</h2>
                                    <ul className="space-y-4">
                                        {project.content.tradeoffs.map((tradeoff, idx) => (
                                            <li key={idx} className="flex gap-4 items-start">
                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                                                <p className="text-muted-foreground leading-relaxed">
                                                    <strong className="text-foreground">{tradeoff.name}:</strong> {tradeoff.decision}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
