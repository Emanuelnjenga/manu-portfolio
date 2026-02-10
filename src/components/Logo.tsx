"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoProps {
    className?: string;
    showTagline?: boolean;
}

export function Logo({ className, showTagline = true }: LogoProps) {
    return (
        <div className={cn("flex items-center gap-3 select-none", className)}>
            <div className="relative w-8 h-8 md:w-10 md:h-10">
                <Image
                    src="/assets/logo-m.svg"
                    alt="NexuM Labs Mark"
                    fill
                    className="object-contain"
                />
            </div>
            <div className="hidden sm:block">
                <div className="font-display text-xl md:text-2xl font-bold tracking-tight text-foreground leading-none">
                    NexuM Labs
                </div>
                {showTagline && (
                    <div className="text-[10px] md:text-xs text-muted-foreground font-medium tracking-wider uppercase mt-1">
                        Founded by Emmanuel Njenga
                    </div>
                )}
            </div>
        </div>
    );
}
