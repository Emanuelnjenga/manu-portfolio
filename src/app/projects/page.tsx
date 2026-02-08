import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { ManuAssistant } from "@/components/ManuAssistant";
import { StickyCTA } from "@/components/StickyCTA";
import { PROJECTS } from "@/lib/data";

export default function ProjectsPage() {
    return (
        <>
            <Header />
            <ManuAssistant />
            <StickyCTA />

            <main className="flex-1 pt-24">
                <Section>
                    <div className="max-w-3xl mb-16">
                        <h1 className="text-5xl md:text-7xl font-serif mb-6">Selected Projects</h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            A curation of work that bridges the gap between complex backend systems and intuitive user experiences. Each project represents a specific challenge in scale, performance, or intelligence.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                        {PROJECTS.map((project) => (
                            <ProjectCard key={project.slug} {...project} />
                        ))}
                    </div>

                    <div className="bg-muted/10 rounded-2xl p-8 md:p-12 text-center">
                        <h2 className="text-2xl font-serif mb-4">Want to see more code?</h2>
                        <p className="text-muted-foreground mb-8">
                            Check out my GitHub for open-source contributions and experiments.
                        </p>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-foreground hover:bg-foreground/90 transition-colors"
                        >
                            Visit GitHub Profile
                        </a>
                    </div>
                </Section>
            </main>

            <Footer />
        </>
    );
}
