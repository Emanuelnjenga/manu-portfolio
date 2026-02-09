"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { RobotHumanHands } from "@/components/RobotHumanHands";
import { Magnetic } from "@/components/Magnetic";
import { useEffect } from "react";

const typingContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.3,
        },
    },
} as const;

const typingLetter = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 200 } },
} as const;

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
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

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [2, -2]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-2, 2]);

    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center px-6 pt-20 overflow-hidden perspective-1000">
            {/* Background Gradient Mesh - Subtle Premium Texture */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -z-10 opacity-60" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[100px] -z-10 opacity-60" />

            {/* Robot-Human Hands Visual */}
            <RobotHumanHands />

            <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="max-w-5xl mx-auto w-full relative z-10"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial="hidden"
                        animate="show"
                        className="space-y-8"
                    >
                        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/5 text-accent text-sm font-medium border border-accent/20 backdrop-blur-md shadow-[0_0_15px_rgba(0,122,255,0.15)]">
                            <span className="relative flex h-2 w-2">
                                <motion.span
                                    animate={{
                                        scale: [1, 1.05, 1],
                                        opacity: [0.8, 1, 0.8],
                                        transition: {
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }
                                    }}
                                    className="absolute inline-flex h-full w-full rounded-full bg-accent"
                                />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                            </span>
                            Available for new opportunities
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight leading-[1.0] lg:leading-[1.1]">
                            <span className="block text-muted-foreground text-3xl md:text-4xl lg:text-5xl mb-4 font-sans font-normal italic">
                                Engineer. Systems Thinker.
                            </span>
                            <motion.span variants={typingContainer} initial="hidden" animate="show" className="inline-block text-foreground drop-shadow-sm">
                                {Array.from("Builder").map((char, index) => (
                                    <motion.span key={index} variants={typingLetter} className="inline-block">
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.span>
                            <span className="text-accent inline-block animate-pulse">.</span>
                        </h1>

                        <motion.p variants={fadeUp} className="text-xl md:text-2xl text-muted-foreground max-w-xl leading-relaxed text-balance font-serif">
                            Designing scalable systems, intelligent products, and high-impact digital experiences.
                        </motion.p>

                        <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-4">
                            <Magnetic strength={40}>
                                <Button size="lg" className="rounded-full text-base px-8 h-12 shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all hover:scale-105" asChild>
                                    <Link href="/projects">
                                        View Projects <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </Button>
                            </Magnetic>
                            <Magnetic strength={20}>
                                <Button variant="outline" size="lg" className="rounded-full text-base px-8 h-12 hover:bg-accent/5 transition-all hover:scale-105 border-accent/20" asChild>
                                    <Link href="/contact">Contact Me</Link>
                                </Button>
                            </Magnetic>
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

                    {/* Visual Space for Hands */}
                    <div className="hidden lg:block h-full min-h-[400px]" />
                </div>
            </motion.div>
        </section>
    );
}
