"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";

const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#about" },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [visible, setVisible] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                setVisible(false);
            } else {
                setVisible(true);
            }

            setScrolled(currentScrollY > 20);
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                scrolled ? "bg-background/80 backdrop-blur-md border-border/40" : "bg-transparent",
                visible ? "translate-y-0" : "-translate-y-full"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="hover:opacity-80 transition-opacity">
                    <Logo />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <nav className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                    <div className="h-6 w-px bg-border/60" />
                    <div className="flex items-center gap-4">
                        <span className="text-xs text-muted-foreground hidden lg:inline-block">
                            Emmanuel Njenga — Systems Engineer
                        </span>
                        <Link
                            href="/contact"
                            className="text-sm font-medium px-5 py-2.5 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all"
                        >
                            Start a Conversation
                        </Link>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 -mr-2 text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="fixed inset-0 top-20 bg-background border-t border-border/40 p-6 md:hidden flex flex-col gap-6 animate-in slide-in-from-top-5">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-2xl font-display font-medium text-foreground/90 py-2 border-b border-border/20 last:border-0"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="mt-4 pt-6 border-t border-border">
                        <Link
                            href="/contact"
                            className="flex items-center justify-center w-full text-lg font-medium py-4 rounded-xl bg-foreground text-background"
                            onClick={() => setIsOpen(false)}
                        >
                            Start a Conversation
                        </Link>
                        <p className="text-center text-xs text-muted-foreground mt-4">
                            Emmanuel Njenga — Systems Engineer & Founder
                        </p>
                    </div>
                </div>
            )}
        </header>
    );
}
