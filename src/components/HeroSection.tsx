"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/Button";

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

export function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center px-6 pt-32 pb-20 overflow-hidden bg-background">
            <div className="max-w-5xl mx-auto w-full relative z-10">
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={staggerContainer}
                    className="space-y-10 max-w-4xl"
                >
                    {/* Availability Badge */}
                    <motion.div variants={fadeUp} className="inline-block">
                        <div
                            className="inline-flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-3 pr-5 bg-muted/50 rounded-full border border-border/50 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted focus-within:ring-2 ring-accent"
                            tabIndex={0}
                            role="status"
                            aria-label="Availability Status"
                        >
                            <div className="flex items-center gap-2">
                                <span className="relative flex h-2.5 w-2.5 ml-1">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                                </span>
                                <span className="text-foreground font-semibold">Open for:</span>
                                <span>contract • advisory • enterprise</span>
                            </div>
                            <div className="hidden sm:block w-px h-3 bg-border" />
                            <div className="flex items-center gap-1.5 opacity-80">
                                <Clock className="w-3.5 h-3.5" />
                                <span>Response time: ~24 hours</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-foreground leading-[1.05]">
                        NexuM Labs.<br />
                        <span className="text-muted-foreground">Builder of scalable platforms.</span><br />
                        <span className="text-3xl md:text-5xl lg:text-5xl font-normal block mt-4 text-muted-foreground/80 font-sans">
                            Founded by Emmanuel Njenga.
                        </span>
                    </motion.h1>

                    {/* Subheading */}
                    <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                        We design cloud-native systems and AI-enabled products for startups and organisations.
                        <span className="block mt-2 text-foreground font-medium">
                            Personal approach. Company-grade delivery. Remote & on-site.
                        </span>
                    </motion.p>

                    {/* CTAs */}
                    <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 pt-4 items-start">
                        <Button size="lg" className="rounded-full text-base px-8 h-14 bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/20 transition-all hover:scale-[1.02]" asChild>
                            <Link href="#case-studies">
                                View Case Studies
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-full text-base px-8 h-14 border-border hover:bg-muted/50 transition-all" asChild>
                            <Link href="/contact">
                                Start a Conversation
                            </Link>
                        </Button>
                    </motion.div>

                    {/* Micro Link */}
                    <motion.div variants={fadeUp} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>New here?</span>
                        <ArrowRight className="w-3 h-3" />
                        <Link href="#projects" className="font-medium text-foreground underline decoration-border hover:decoration-accent underline-offset-4 transition-colors">
                            See Best Work
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Background Elements (Minimal) */}
            <div className="absolute top-0 right-0 p-20 opacity-[0.03] pointer-events-none select-none">
                <svg width="400" height="400" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M30 70 V30 L50 60 L70 30 V70" strokeWidth="2" stroke="currentColor" fill="none" />
                </svg>
            </div>
        </section>
    );
}
