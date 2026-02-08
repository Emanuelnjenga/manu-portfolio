import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { ManuAssistant } from "@/components/ManuAssistant";
import { StickyCTA } from "@/components/StickyCTA";
import { ARTICLES } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export default function BlogPage() {
    return (
        <>
            <Header />
            <ManuAssistant />
            <StickyCTA />

            <main className="flex-1 pt-24">
                <Section className="pb-8">
                    <h1 className="text-5xl md:text-7xl font-serif mb-6">Writing</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                        Thoughts on software engineering, distributed systems, and the future of AI. I write to clarify my thinking and share lessons from the trenches.
                    </p>
                </Section>

                <Section>
                    <div className="grid grid-cols-1 gap-12">
                        {ARTICLES.map((article) => (
                            <Link key={article.slug} href={`/blog/${article.slug}`} className="group block last:border-0 border-b border-border/40 pb-12">
                                <article className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                                    <div className="md:col-span-3">
                                        <span className="text-sm text-muted-foreground font-mono">{article.date}</span>
                                    </div>
                                    <div className="md:col-span-9">
                                        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3 group-hover:text-accent transition-colors flex items-center gap-2">
                                            {article.title}
                                            <ArrowUpRight className="w-5 h-5 opacity-0 -translate-y-1translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all text-accent" />
                                        </h2>
                                        <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                                            {article.excerpt}
                                        </p>
                                        <div className="flex gap-4 items-center text-sm">
                                            <span className="text-accent font-medium">{article.readTime}</span>
                                            <span className="text-muted-foreground/50">•</span>
                                            <span className="text-muted-foreground">Engineering</span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </Section>
            </main>

            <Footer />
        </>
    );
}
