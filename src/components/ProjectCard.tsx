"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";

interface ProjectCardProps {
    title: string;
    description: string;
    category: string;
    slug: string;
    thumbnail: string;
    className?: string;
}

export function ProjectCard({
    title,
    description,
    category,
    slug,
    thumbnail,
    video,
    className,
}: ProjectCardProps & { video?: string }) {
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (isHovered && videoRef.current) {
            videoRef.current.play().catch(() => { }); // catch play() interruption error
        } else if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    }, [isHovered]);

    return (
        <Link
            href={`/projects/${slug}`}
            className={cn(
                "group relative block overflow-hidden rounded-2xl bg-muted/20 border border-border/50 hover:border-border transition-all hover:shadow-lg",
                className
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="aspect-[16/10] overflow-hidden bg-muted relative">
                <Image
                    src={thumbnail}
                    alt={title}
                    width={800}
                    height={500}
                    className={cn(
                        "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 relative z-10",
                        isHovered && video ? "opacity-0" : "opacity-100"
                    )}
                />

                {video && (
                    <video
                        ref={videoRef}
                        src={video}
                        loop
                        muted
                        playsInline
                        className={cn(
                            "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
                            isHovered ? "opacity-100 z-20" : "opacity-0 z-0"
                        )}
                    />
                )}
            </div>
            <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium uppercase tracking-wider text-accent">
                        {category}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                    {title}
                </h3>
                <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed">
                    {description}
                </p>
            </div>
        </Link>
    );
}
