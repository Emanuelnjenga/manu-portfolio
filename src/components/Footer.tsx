"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/Logo";

const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/yourprofile" },
    { name: "GitHub", href: "https://github.com/yourusername" },
    { name: "Twitter", href: "https://twitter.com/yourusername" },
];

export function Footer() {
    return (
        <footer className="bg-background border-t border-border/40 py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="md:col-span-2 space-y-6">
                    <Link href="/" className="inline-block">
                        <Logo />
                    </Link>
                    <p className="text-muted-foreground max-w-sm leading-relaxed">
                        NexuM Labs builds cloud-native systems and AI-enabled products for startups and enterprises.
                        <br />
                        <span className="opacity-75 text-sm mt-2 block">Founded by Emmanuel Njenga.</span>
                    </p>
                    <div className="flex gap-4">
                        {socialLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-medium text-foreground hover:text-accent transition-colors flex items-center gap-1"
                            >
                                {link.name} <ArrowUpRight className="w-3 h-3" />
                            </Link>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">Company</h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                        <li><Link href="/about" className="hover:text-foreground transition-colors">About Founder</Link></li>
                        <li><Link href="/#services" className="hover:text-foreground transition-colors">Services</Link></li>
                        <li><Link href="/#case-studies" className="hover:text-foreground transition-colors">Case Studies</Link></li>
                        <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">Legal</h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                        <li><Link href="/legal/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
                        <li><Link href="/legal/terms" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
                        <li><span className="opacity-50">Registered in Kenya (Placeholder)</span></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} NexuM Labs. All rights reserved.</p>
                <p>hello@nexumlabs.example</p>
            </div>
        </footer>
    );
}
