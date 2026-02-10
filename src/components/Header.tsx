"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Github, Linkedin, ChevronDown } from "lucide-react";
import { Logo } from "@/components/Logo";
import { NAVIGATION, UTILITY_LINKS, PRIMARY_CTA } from "@/lib/navigation";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [visible, setVisible] = useState(true);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const lastScrollY = useRef(0);
    const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                setVisible(false);
                setActiveDropdown(null); // Close dropdowns on scroll down
            } else {
                setVisible(true);
            }

            setScrolled(currentScrollY > 20);
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleMouseEnter = (title: string) => {
        if (dropdownTimeout.current) {
            clearTimeout(dropdownTimeout.current);
        }
        setActiveDropdown(title);
    };

    const handleMouseLeave = () => {
        dropdownTimeout.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 150);
    };

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
                            <div
                                key={item.title}
                                className="relative"
                                onMouseEnter={() => handleMouseEnter(item.title)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "group text-sm font-medium text-muted-foreground hover:text-foreground transition-colors",
                                        "focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded px-2 py-1",
                                        "flex items-center gap-1 relative"
                                    )}
                                    prefetch={item.href.startsWith("/enterprise") || item.href.startsWith("/#") ? true : false}
                                >
                                    {item.title}
                                    {item.children && item.children.length > 0 && (
                                        <ChevronDown className="w-3 h-3" />
                                    )}
                                    {/* Sliding blue line */}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                                </Link>

                                {/* Dropdown Menu */}
                                {item.children && item.children.length > 0 && activeDropdown === item.title && (
                                    <div className="absolute top-full left-0 mt-2 w-56 bg-background border border-border/40 rounded-lg shadow-xl py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.href}
                                                href={child.href}
                                                className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                                            >
                                                {child.title}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
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
                    className="fixed inset-0 top-16 bg-background z-40 p-6 lg:hidden flex flex-col overflow-y-auto animate-in slide-in-from-top-5 duration-300"
                >
                    <div className="flex-1 space-y-8 pb-6">
                        {NAVIGATION.map((group) => (
                            <div key={group.title} className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <h3 className="text-xs font-bold uppercase tracking-widest text-accent">
                                        {group.title}
                                    </h3>
                                    <div className="flex-1 h-px bg-border/40" />
                                </div>
                                <div className="space-y-1 pl-2">
                                    {group.children?.map((child) => (
                                        <Link
                                            key={child.href}
                                            href={child.href}
                                            className={cn(
                                                "block text-base font-medium text-foreground py-3 px-4 rounded-lg",
                                                "hover:bg-accent/10 hover:text-accent active:bg-accent/20 transition-all",
                                                "focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",
                                                "min-h-[48px] flex items-center" // Accessibility: 48px touch target
                                            )}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {child.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile CTA - Sticky Footer */}
                    <div className="sticky bottom-0 pt-6 pb-2 bg-background border-t border-border/40 mt-auto">
                        <Link
                            href={PRIMARY_CTA.href}
                            className="flex items-center justify-center w-full text-base font-semibold py-4 px-6 rounded-xl bg-foreground text-background hover:bg-foreground/90 active:scale-[0.98] transition-all shadow-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 min-h-[56px]"
                            onClick={() => setIsOpen(false)}
                        >
                            {PRIMARY_CTA.title}
                        </Link>
                        <p className="text-center text-xs text-muted-foreground mt-3 leading-relaxed">
                            Replies within 24h · Working from Nairobi (EAT/UTC+3)
                        </p>
                    </div>
                </div>
            )}
        </header>
    );
}
