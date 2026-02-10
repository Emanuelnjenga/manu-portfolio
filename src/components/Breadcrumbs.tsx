"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
    return (
        <nav
            aria-label="Breadcrumb"
            className={cn("flex items-center gap-2 text-sm text-muted-foreground mb-8", className)}
        >
            <Link
                href="/"
                className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
                aria-label="Breadcrumb: go to Home"
            >
                Home
            </Link>
            {items.map((item, index) => {
                const isLast = index === items.length - 1;
                return (
                    <div key={item.href} className="flex items-center gap-2">
                        <ChevronRight className="w-3 h-3" />
                        {isLast ? (
                            <span className="text-foreground font-medium" aria-current="page">
                                {item.label}
                            </span>
                        ) : (
                            <Link
                                href={item.href}
                                className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
                                aria-label={`Breadcrumb: go to ${item.label}`}
                            >
                                {item.label}
                            </Link>
                        )}
                    </div>
                );
            })}
        </nav>
    );
}
