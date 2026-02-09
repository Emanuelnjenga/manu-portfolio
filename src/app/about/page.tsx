"use client";

import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { ManuAssistant } from "@/components/ManuAssistant";
import { StickyCTA } from "@/components/StickyCTA";
import { GitHubGraph } from "@/components/GitHubGraph";
import { Reveal } from "@/components/Reveal";
import { SKILLS } from "@/lib/data";

const EXPERIENCE = [
    {
        role: "Senior Systems Architect",
        company: "TechFlow Systems",
        period: "2022 - Present",
        description: "Leading a team of 12 engineers migrating a monolithic financial platform to a distributed event-driven architecture."
    },
    {
        role: "Lead Full Stack Engineer",
        company: "AlphaStream",
        period: "2019 - 2022",
        description: "Built and verified the core trading engine, processing $500M+ in daily volume throughout the 2021 bull run."
    },
    {
        role: "Software Engineer",
        company: "Innovate Labs",
        period: "2016 - 2019",
        description: "Developed AI-powered recommendation algorithms for e-commerce clients, improving conversion rates by 15% on average."
    }
];

export default function AboutPage() {
    return (
        <>
            <Header />
            <ManuAssistant />
            <StickyCTA />

            <main className="flex-1 pt-20">
                <Section className="pb-8">
                    <Reveal>
                        <h1 className="text-5xl md:text-7xl font-serif mb-8">About Manu</h1>
                    </Reveal>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <Reveal delay={0.2}>
                            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    I am a product-minded engineer with a passion for complex systems. My journey began in competitive programming, but I quickly fell in love with the art of building software that solves real human problems.
                                </p>
                                <p>
                                    Over the past 8 years, I&apos;ve worked across the stack, from fine-tuning database queries to crafting pixel-perfect user interfaces. I believe that the best software connects technical excellence with intuitive design.
                                </p>
                                <p>
                                    My philosophy is simple: <strong>Simplicity is the ultimate sophistication.</strong> whether I&apos;m architecting a distributed system or designing a landing page, I strive to remove the unnecessary so the necessary may speak.
                                </p>
                            </div>
                        </Reveal>
                        <Reveal delay={0.4}>
                            <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                                <Image
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                                    alt="Manu Portrait"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </Reveal>
                    </div>
                </Section>

                <Section className="bg-muted/10">
                    <Reveal>
                        <h2 className="text-3xl md:text-4xl font-serif mb-12">Career Timeline</h2>
                    </Reveal>
                    <div className="space-y-12 relative border-l border-border/50 ml-3 pl-8 md:ml-6 md:pl-12">
                        {EXPERIENCE.map((exp, idx) => (
                            <Reveal key={idx} delay={idx * 0.1}>
                                <div className="relative">
                                    <span className="absolute -left-[39px] md:-left-[55px] top-1.5 w-5 h-5 rounded-full border-4 border-background bg-accent" />
                                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                                        <h3 className="text-xl font-bold font-serif">{exp.role}</h3>
                                        <span className="text-sm font-medium text-accent">{exp.period}</span>
                                    </div>
                                    <div className="text-base font-medium text-foreground/80 mb-2">{exp.company}</div>
                                    <p className="text-muted-foreground max-w-2xl">{exp.description}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </Section>

                <Section>
                    <Reveal>
                        <h2 className="text-3xl md:text-4xl font-serif mb-12">Skills & Technologies</h2>
                    </Reveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {SKILLS.map((group, idx) => (
                            <Reveal key={group.category} delay={idx * 0.1}>
                                <div className="p-6 rounded-2xl border border-border/50 bg-background hover:shadow-sm transition-shadow">
                                    <h3 className="text-lg font-bold mb-4 text-accent">{group.category}</h3>
                                    <ul className="space-y-2">
                                        {group.items.map((item) => (
                                            <li key={item} className="text-muted-foreground text-sm">{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </Section>

                <Section className="bg-muted/10">
                    <Reveal>
                        <h2 className="text-3xl md:text-4xl font-serif mb-8">Development Activity</h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <GitHubGraph />
                    </Reveal>
                </Section>
            </main>

            <Footer />
        </>
    );
}
