"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/Logo";
import { VerificationBlock } from "@/components/TrustSignals";
import { FOOTER_SECTIONS, UTILITY_LINKS } from "@/lib/navigation";

export function Footer() {
    return (
        <footer className="bg-background border-t border-border/40 py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
                {/* Brand Column */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <Logo />
                        </Link>
                        <p className="text-muted-foreground max-w-sm leading-relaxed">
                            NexuM Labs builds cloud-native systems and AI-enabled products for startups and enterprises.
                            <br />
                            <span className="opacity-75 text-sm mt-2 block">Founded by Emmanuel Njenga.</span>
                        </p>
                        <div className="flex gap-4">
                            {UTILITY_LINKS.map((link) => (
                                <Link
                                    key={link.title}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-medium text-foreground hover:text-accent transition-colors flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
                                >
                                    {link.title} <ArrowUpRight className="w-3 h-3" />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <VerificationBlock />
                </div>

                {/* Navigation Columns */}
                {FOOTER_SECTIONS.map((section) => (
                    <div key={section.title}>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">
                            {section.title}
                        </h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            {section.links.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="hover:text-foreground hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} NexuM Labs. All rights reserved.</p>
                <div className="flex items-center gap-6">
                    <span className="opacity-75">Working globally from Nairobi, Kenya</span>
                    <span className="font-mono">EAT/UTC+3</span>
                </div>
            </div>
        </footer>
    );
}
