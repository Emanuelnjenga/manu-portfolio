"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";

const navLinks = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "System Design", href: "/system-design" },
    { name: "AI & Automation", href: "/ai" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [visible, setVisible] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Determine scroll direction and visibility
            if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                // Scrolling DOWN and not at very top
                setVisible(false);
            } else {
                // Scrolling UP
                setVisible(true);
            }

            // Glassmorphism state
            setScrolled(currentScrollY > 20);

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent",
                scrolled ? "bg-background/90 backdrop-blur-xl border-border/40 shadow-sm supports-[backdrop-filter]:bg-background/75" : "bg-transparent",
                visible ? "translate-y-0" : "-translate-y-full"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
                <Link href="/" className="hover:opacity-80 transition-opacity">
                    <Logo />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors relative group font-serif italic"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                    <Link
                        href="/resume"
                        className="text-base font-medium px-6 py-2 rounded-full border border-foreground/10 hover:bg-foreground hover:text-background transition-all hover:scale-105 active:scale-95 duration-200 font-serif"
                    >
                        Resume
                    </Link>
                </nav>

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
                <div className="absolute top-16 left-0 right-0 bg-background border-b border-border p-6 md:hidden flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-2 h-screen">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-2xl font-serif italic py-3 hover:text-accent border-b border-border/40 last:border-0"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/resume"
                        className="text-2xl font-serif py-3 hover:text-accent"
                        onClick={() => setIsOpen(false)}
                    >
                        Resume
                    </Link>
                </div>
            )}
        </header>
    );
}
