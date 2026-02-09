"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
}

export function Logo({ className }: LogoProps) {
    return (
        <div className={cn("font-serif font-bold tracking-tighter flex items-baseline select-none", className)}>
            <span className="text-3xl italic">M</span>
            <span className="text-3xl">anu</span>
            <span className="text-4xl text-accent leading-none">.</span>
        </div>
    );
}
