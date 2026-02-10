import Link from "next/link";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { ProjectCard } from "@/components/ProjectCard";
import { ManuAssistant } from "@/components/ManuAssistant";
import { StickyCTA } from "@/components/StickyCTA";
import { PROJECTS, SKILLS, ARTICLES } from "@/lib/data";
import { ArrowRight, Download } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Header />
      <ManuAssistant />
      <StickyCTA />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* About Preview */}
        <Section className="border-t border-border/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Bridging the gap between complexity and clarity.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                With over 8 years of engineering experience, I specialize in building robust platforms that scale. I don't just write code; I design systems that solve real business problems. My approach is rooted in pragmatism, performance, and user-centricity.
              </p>
              <Button variant="link" asChild className="p-0 text-base">
                <Link href="/about" className="group">
                  Read full biography <ArrowRight className="inline-block w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </Reveal>
            <div className="grid grid-cols-2 gap-4">
              <Reveal delay={0.4} className="space-y-4">
                <div className="p-6 bg-background rounded-2xl shadow-sm border border-border/50">
                  <div className="text-3xl font-serif text-accent mb-2">8+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="p-6 bg-background rounded-2xl shadow-sm border border-border/50">
                  <div className="text-3xl font-serif text-accent mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
              </Reveal>
              <Reveal delay={0.6} className="space-y-4 pt-8">
                <div className="p-6 bg-background rounded-2xl shadow-sm border border-border/50">
                  <div className="text-3xl font-serif text-accent mb-2">$20M</div>
                  <div className="text-sm text-muted-foreground">Value Created</div>
                </div>
                <div className="p-6 bg-gradient-to-br from-accent to-blue-600 rounded-2xl shadow-sm text-white">
                  <div className="text-lg font-medium mb-1">Open for work</div>
                  <div className="text-sm opacity-90">Systems & AI Roles</div>
                </div>
              </Reveal>
            </div>
          </div>
        </Section>

        {/* Featured Projects */}
        <Section className="border-t border-border/20">
          <div className="flex items-end justify-between mb-12">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Selected Work</h2>
              <p className="text-muted-foreground max-w-xl">
                A collection of projects demonstrating expertise in full-stack engineering, AI integration, and high-performance infrastructure.
              </p>
            </Reveal>
            <Reveal delay={0.3} className="hidden md:inline-flex">
              <Button variant="ghost" asChild>
                <Link href="/projects" className="group">
                  View all projects <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.1}>
                <ProjectCard {...project} />
              </Reveal>
            ))}
          </div>
          <div className="mt-8 md:hidden text-center">
            <Button variant="ghost" asChild>
              <Link href="/projects">View all projects</Link>
            </Button>
          </div>
        </Section>

        {/* Skills Snapshot */}
        <Section className="bg-foreground text-background border-t border-border/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-white">Technical Arsenal</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                My toolbox is vast, but I choose the right tool for the job. I prioritize stability, maintainability, and developer experience over hype.
              </p>
              <Button asChild variant="outline" className="text-foreground bg-white hover:bg-gray-100 border-none">
                <Link href="/resume">
                  <Download className="mr-2 w-4 h-4" /> Download Resume
                </Link>
              </Button>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {SKILLS.map((group, index) => (
                <Reveal key={group.category} delay={0.2 + index * 0.1}>
                  <h3 className="text-accent text-lg font-medium mb-4">{group.category}</h3>
                  <ul className="space-y-2">
                    {group.items.map((skill) => (
                      <li key={skill} className="text-gray-300 text-sm">{skill}</li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>

        {/* Latest Insights */}
        <Section className="border-t border-border/20">
          <Reveal>
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl md:text-4xl font-serif">Engineering Insights</h2>
              <Button variant="link" asChild>
                <Link href="/blog">Read all articles</Link>
              </Button>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ARTICLES.map((article, index) => (
              <Reveal key={article.slug} delay={index * 0.1} className="h-full">
                <Link href={`/blog/${article.slug}`} className="group block h-full">
                  <article className="h-full flex flex-col justify-between p-6 rounded-2xl hover:bg-muted/30 transition-colors border border-transparent hover:border-border/50">
                    <div>
                      <div className="text-xs text-accent font-medium mb-3">{article.readTime}</div>
                      <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-accent transition-colors">{article.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{article.excerpt}</p>
                    </div>
                    <div className="text-xs text-muted-foreground border-t border-border/40 pt-4 mt-4">
                      {article.date}
                    </div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
