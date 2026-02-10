"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";
import { Magnetic } from "@/components/Magnetic";
import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";

export function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-white relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="inline-block mb-6 hover:opacity-80 transition-opacity">
                            <Logo />
                        </Link>
                        <p className="text-muted-foreground max-w-sm text-lg leading-relaxed text-pretty">
                            Designing scalable systems, intelligent products, and high-impact digital experiences.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-6 text-foreground tracking-tight">Navigation</h4>
                        <ul className="space-y-3">
                            {[
                                { name: "Selected Work", href: "/projects" },
                                { name: "About Me", href: "/about" },
                                { name: "System Design", href: "/system-design" },
                                { name: "AI Experiments", href: "/ai" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-muted-foreground hover:text-accent transition-colors hover:translate-x-1 inline-block duration-200">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>


                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
                    <p>© {currentYear} NexuM Labs. All rights reserved.</p>

                    <div className="flex items-center gap-8">
                        <div className="flex gap-6">
                            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                            <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
                        </div>

                        <Button variant="ghost" size="icon" onClick={scrollToTop} className="rounded-full hover:bg-accent/10 hover:text-accent" aria-label="Back to top">
                            <ArrowUp className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
