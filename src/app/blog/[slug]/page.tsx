import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { ManuAssistant } from "@/components/ManuAssistant";
import { StickyCTA } from "@/components/StickyCTA";
import { ARTICLES } from "@/lib/data";
import { ArrowLeft } from "lucide-react";
import Markdown from "react-markdown";

interface Props {
    params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: Props) {
    const resolvedParams = await params;
    const article = ARTICLES.find((a) => a.slug === resolvedParams.slug);

    if (!article) {
        notFound();
    }

    return (
        <>
            <Header />
            <ManuAssistant />
            <StickyCTA />

            <main className="flex-1 pt-24">
                <Section className="max-w-3xl">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Writing
                    </Link>

                    <header className="mb-12">
                        <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">{article.title}</h1>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <time>{article.date}</time>
                            <span>•</span>
                            <span>{article.readTime}</span>
                            <span>•</span>
                            <span className="text-accent">Manu</span>
                        </div>
                    </header>

                    <article className="prose prose-lg prose-neutral dark:prose-invert max-w-none font-serif prose-headings:font-serif prose-a:text-accent prose-a:no-underline hover:prose-a:underline">
                        <Markdown>{article.content}</Markdown>
                    </article>
                </Section>
            </main>

            <Footer />
        </>
    );
}
