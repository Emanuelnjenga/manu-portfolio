"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
}

export function Logo({ className }: LogoProps) {
    return (
        <div className={cn("font-serif select-none", className)}>
            <div className="text-2xl font-bold tracking-tight text-foreground">
                NexuM Labs
            </div>
            <div className="text-xs text-muted-foreground tracking-wide mt-0.5">
                Where African innovation meets global tech.
            </div>
        </div>
    );
}
