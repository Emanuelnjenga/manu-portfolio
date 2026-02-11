"use client";

import { useEffect, useState } from "react";
import { HeroSection } from "./HeroSection";
import { trackEvent } from "@/lib/analytics";

/**
 * HeroAB Component
 * 
 * Implements a simple A/B testing framework for the Hero section.
 * Variant A: Founder-first / Serif (Existing)
 * Variant B: Company-first / Sans (New)
 */

export function HeroAB() {
    const [variant, setVariant] = useState<"A" | "B" | null>(null);

    useEffect(() => {
        // 1. Check for existing variant in localStorage
        const savedVariant = localStorage.getItem("hero_variant") as "A" | "B";

        if (savedVariant && (savedVariant === "A" || savedVariant === "B")) {
            setVariant(savedVariant);
            trackEvent("hero_variant_view", { variant: savedVariant });
        } else {
            // 2. Assign a new random variant
            const newVariant = Math.random() > 0.5 ? "A" : "B";
            localStorage.setItem("hero_variant", newVariant);
            setVariant(newVariant);
            trackEvent("hero_variant_view", { variant: newVariant });
        }
    }, []);

    // While loading variant (prevents cumulative layout shift)
    if (!variant) return <div className="min-h-[90vh]" />;

    if (variant === "B") {
        return <HeroVariantB />;
    }

    return <HeroSection />;
}

// Variant B: Company-first / Sans
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/Button";

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

function HeroVariantB() {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center px-6 pt-32 pb-20 overflow-hidden bg-background">
            <div className="max-w-5xl mx-auto w-full relative z-10">
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={staggerContainer}
                    className="space-y-10 max-w-4xl"
                >
                    <motion.div variants={fadeUp} className="inline-block">
                        <div className="inline-flex items-center gap-2 p-3 pr-5 bg-accent/5 rounded-full border border-accent/20 text-xs font-medium text-accent">
                            <span className="relative flex h-2 w-2 ml-1">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                            </span>
                            <span className="font-bold uppercase tracking-widest">Enterprise Ready</span>
                        </div>
                    </motion.div>

                    <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-sans font-black tracking-tighter text-foreground leading-[0.95] uppercase">
                        Scale Massive.<br />
                        <span className="text-accent">Systems & AI.</span><br />
                        <span className="text-3xl md:text-5xl lg:text-5xl font-medium block mt-4 text-muted-foreground/80 lowercase italic font-serif">
                            Digital Infrastructure by NexuM Labs.
                        </span>
                    </motion.h1>

                    <motion.p variants={fadeUp} className="text-lg md:text-xl font-sans text-muted-foreground max-w-2xl leading-relaxed">
                        We build the technical foundation for the world's most ambitious companies. Cloud-native architecture, LLM integration, and high-availability systems.
                    </motion.p>

                    <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 pt-4 items-start">
                        <Button size="lg" className="rounded-xl text-base px-8 h-14 bg-foreground text-background hover:bg-foreground/90 transition-all font-bold" asChild>
                            <Link href="/enterprise">
                                Explore Enterprise Solutions
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-xl text-base px-8 h-14 border-border hover:bg-muted/50 transition-all font-bold" asChild>
                            <Link href="/contact">
                                Consultation
                            </Link>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
