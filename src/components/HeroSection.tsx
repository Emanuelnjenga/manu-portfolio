"use client";

import Link from "next/link";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";

const typingContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.1,
        },
    },
} as const;

const typingLetter = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 200 } },
} as const;

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: 1.5, // Wait for typing to finish roughly
            ease: "easeOut",
        },
    },
} as const;

export function HeroSection() {
    const line1 = "Emmanuel — Engineer,".split("");
    const line2 = "Systems Thinker,".split("");
    const line3 = "Product Builder.".split("");

    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center px-6 pt-20 overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/5 via-background to-background" />

            <div className="max-w-7xl mx-auto w-full">
                <div className="max-w-4xl">
                    <motion.h1
                        className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight leading-[1.1] mb-8"
                        variants={typingContainer}
                        initial="hidden"
                        animate="show"
                    >
                        <span className="block">
                            {line1.map((char, index) => (
                                <motion.span key={`l1-${index}`} variants={typingLetter}>
                                    {char}
                                </motion.span>
                            ))}
                        </span>
                        <span className="block">
                            {line2.map((char, index) => (
                                <motion.span key={`l2-${index}`} variants={typingLetter}>
                                    {char}
                                </motion.span>
                            ))}
                        </span>
                        <span className="block text-accent">
                            {line3.map((char, index) => (
                                <motion.span key={`l3-${index}`} variants={typingLetter}>
                                    {char}
                                </motion.span>
                            ))}
                        </span>
                    </motion.h1>

                    <motion.div variants={fadeUp} initial="hidden" animate="show">
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-10 font-light">
                            Designing scalable systems, intelligent products, and high-impact digital experiences. Focusing on the intersection of distributed systems and AI.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button size="lg" asChild className="rounded-full text-base">
                                <Link href="/projects">View Work</Link>
                            </Button>
                            <Button variant="outline" size="lg" asChild className="rounded-full text-base">
                                <Link href="/contact">Contact Emmanuel</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
