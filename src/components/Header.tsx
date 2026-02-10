"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { Logo } from "@/components/Logo";
import { NAVIGATION, UTILITY_LINKS, PRIMARY_CTA } from "@/lib/navigation";

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
                scrolled || isOpen ? "bg-background/95 backdrop-blur-md border-border/40 h-16" : "bg-transparent h-24",
                visible ? "translate-y-0" : "-translate-y-full"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
                    aria-label="NexuM Labs Home"
                >
                    <Logo />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-10">
                    <nav className="flex items-center gap-10" aria-label="Primary navigation">
                        {NAVIGATION.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                className={cn(
                                    "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors",
                                    "focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded px-2 py-1"
                                )}
                                prefetch={item.href.startsWith("/enterprise") || item.href.startsWith("/#") ? true : false}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </nav>

                    {/* Utility Icons */}
                    <div className="flex items-center gap-3">
                        {UTILITY_LINKS.map((link) => (
                            <Link
                                key={link.title}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded p-1"
                                aria-label={link.title}
                            >
                                {link.title === "GitHub" && <Github className="w-4 h-4" />}
                                {link.title === "LinkedIn" && <Linkedin className="w-4 h-4" />}
                            </Link>
                        ))}
                    </div>

                    {/* Primary CTA */}
                    <Link
                        href={PRIMARY_CTA.href}
                        className={cn(
                            "text-sm font-medium px-6 py-2.5 rounded-full",
                            "bg-foreground text-background hover:bg-foreground/90 transition-all",
                            "focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                        )}
                        onClick={() => {
                            if (typeof window !== "undefined" && (window as any).gtag) {
                                (window as any).gtag("event", PRIMARY_CTA.trackingEvent);
                            }
                        }}
                    >
                        {PRIMARY_CTA.title}
                    </Link>
                </div>

                {/* Mobile: Hamburger + CTA Icon */}
                <div className="lg:hidden flex items-center gap-4">
                    <Link
                        href={PRIMARY_CTA.href}
                        className="text-xs font-medium px-4 py-2 rounded-full bg-foreground text-background"
                        aria-label={PRIMARY_CTA.title}
                    >
                        Contact
                    </Link>
                    <button
                        className="p-2 text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Fullscreen Drawer */}
            {isOpen && (
                <div
                    id="mobile-menu"
                    className="fixed inset-0 top-16 bg-background border-t border-border/40 p-6 lg:hidden flex flex-col gap-8 overflow-y-auto animate-in slide-in-from-top-5"
                >
                    {NAVIGATION.map((group) => (
                        <div key={group.title} className="space-y-3">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                {group.title}
                            </h3>
                            <div className="space-y-2">
                                {group.children?.map((child) => (
                                    <Link
                                        key={child.href}
                                        href={child.href}
                                        className={cn(
                                            "block text-lg font-medium text-foreground/90 py-2",
                                            "hover:text-accent transition-colors",
                                            "focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
                                        )}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {child.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Mobile CTA */}
                    <div className="mt-4 pt-6 border-t border-border">
                        <Link
                            href={PRIMARY_CTA.href}
                            className="flex items-center justify-center w-full text-lg font-medium py-4 rounded-xl bg-foreground text-background focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                            onClick={() => setIsOpen(false)}
                        >
                            {PRIMARY_CTA.title}
                        </Link>
                        <p className="text-center text-xs text-muted-foreground mt-4">
                            Replies within 24h · Working from Nairobi (EAT/UTC+3)
                        </p>
                    </div>
                </div>
            )}
        </header>
    );
}
