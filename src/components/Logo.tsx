"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
    showTagline?: boolean;
}

export function Logo({ className, showTagline = true }: LogoProps) {
    return (
        <div className={cn("font-serif select-none", className)}>
            <div className="text-2xl font-bold tracking-tight text-foreground">
                NexuM Labs
            </div>
            {showTagline && (
                <div className="text-xs text-muted-foreground tracking-wide mt-0.5">
                    Where African innovation meets global tech.
                </div>
            )}
        </div>
    );
}
