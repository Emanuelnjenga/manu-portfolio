"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/Button";
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
        <section className="relative min-h-[90vh] flex flex-col justify-center px-6 pt-20 overflow-hidden">



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

                        <motion.div variants={fadeUp} className="inline-block">
                            <span className="inline-flex items-center gap-2 text-sm font-serif text-accent tracking-wide uppercase">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                                </span>
                                Available for new opportunities
                            </span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight leading-[1.0] lg:leading-[1.1]">
                            <span className="block text-muted-foreground text-3xl md:text-4xl lg:text-5xl mb-4 font-serif font-normal">
                                Engineer. Systems Thinker.
                            </span>
                            <motion.span variants={typingContainer} initial="hidden" animate="show" className="inline-block text-foreground">
                                {Array.from("Builder").map((char, index) => (
                                    <motion.span key={index} variants={typingLetter} className="inline-block">
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.span>
                            <span className="text-accent inline-block">.</span>
                        </h1>

                        <motion.p variants={fadeUp} className="text-xl md:text-2xl text-muted-foreground max-w-xl leading-relaxed font-serif">
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




                        {/* Visual Space for Image */}
                    </motion.div>
                    <div className="hidden lg:block h-full min-h-[400px]" />
                </div>
            </motion.div>
        </section>
    );
}
