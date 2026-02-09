"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { useEffect } from "react";

const typingContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.5,
        },
    },
} as const;

const typingLetter = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 200 } },
} as const;

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
} as const;

export function HeroSection() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 50, damping: 20 });
    const mouseY = useSpring(y, { stiffness: 50, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { innerWidth, innerHeight } = window;
            const xPct = e.clientX / innerWidth - 0.5;
            const yPct = e.clientY / innerHeight - 0.5;
            x.set(xPct);
            y.set(yPct);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [x, y]);

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);

    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center px-6 pt-20 overflow-hidden perspective-1000">
            {/* Background Gradient Mesh */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-background to-background opacity-70" />
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse" />

            <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="max-w-5xl mx-auto w-full relative z-10"
            >
                <motion.div
                    initial="hidden"
                    animate="show"
                    className="space-y-8"
                >
                    <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                        </span>
                        Available for new opportunities
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight leading-[1.1]">
                        <span className="block text-muted-foreground text-3xl md:text-4xl lg:text-5xl mb-4 font-sans font-normal">
                            Hello, I&apos;m
                        </span>
                        <motion.span variants={typingContainer} initial="hidden" animate="show" className="inline-block text-foreground drop-shadow-sm">
                            {Array.from("Emmanuel").map((char, index) => (
                                <motion.span key={index} variants={typingLetter} className="inline-block">
                                    {char}
                                </motion.span>
                            ))}
                        </motion.span>
                        <span className="text-accent">.</span>
                    </h1>

                    <motion.p variants={fadeUp} className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                        Full-Stack Engineer &amp; Systems Architect.
                        I build <span className="text-foreground font-medium">high-performance</span> digital experiences and scalable backend systems.
                    </motion.p>

                    <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-4">
                        <Button size="lg" className="rounded-full text-base px-8 h-12 shadow-lg shadow-accent/20 hover:shadow-accent/30 transition-all" asChild>
                            <Link href="/projects">
                                View Projects <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-full text-base px-8 h-12 hover:bg-muted/50" asChild>
                            <Link href="/contact">Contact Me</Link>
                        </Button>
                    </motion.div>

                    <motion.div variants={fadeUp} className="flex items-center gap-6 pt-8 text-muted-foreground">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors transform hover:scale-110 duration-200">
                            <Github className="w-6 h-6" />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors transform hover:scale-110 duration-200">
                            <Linkedin className="w-6 h-6" />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a href="mailto:hello@manu.dev" className="hover:text-foreground transition-colors transform hover:scale-110 duration-200">
                            <Mail className="w-6 h-6" />
                            <span className="sr-only">Email</span>
                        </a>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
