"use client";

import Link from "next/link";
import { Mail, Calendar } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function StickyCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling down 300px
            setIsVisible(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={cn(
                "fixed bottom-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-500",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
            )}
        >
            <div className="flex items-center gap-2 p-1.5 bg-foreground text-background rounded-full shadow-xl border border-border/20 backdrop-blur-sm pr-2">
                <Link
                    href="/contact"
                    className="flex items-center gap-2 px-4 py-2 bg-background text-foreground rounded-full text-sm font-medium hover:bg-accent hover:text-white transition-colors"
                >
                    <Mail className="w-4 h-4" />
                    <span>Hire Manu</span>
                </Link>
                <div className="h-4 w-[1px] bg-background/20" />
                <Link
                    href="/contact"
                    className="px-3 py-2 text-sm font-medium text-background hover:text-accent transition-colors flex items-center gap-2"
                >
                    <Calendar className="w-4 h-4" />
                    <span className="hidden sm:inline">Book Audit</span>
                </Link>
            </div>
        </div>
    );
}
