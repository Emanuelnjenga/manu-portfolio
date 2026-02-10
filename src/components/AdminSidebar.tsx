"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, FileText, BarChart3, Settings, Home } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Executive Dashboard", href: "/admin/executive", icon: LayoutDashboard },
    { name: "Content Management", href: "/admin/content", icon: FileText },
    { name: "Documents", href: "/admin/documents", icon: FileText },
    { name: "Analytics & Events", href: "/admin/analytics", icon: BarChart3 },
];

export function AdminSidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 bg-background border-r border-border/40 min-h-screen p-6 space-y-8">
            <div className="space-y-2">
                <Link href="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <Home className="w-4 h-4" />
                    Back to Site
                </Link>
                <h2 className="text-2xl font-bold font-display">Admin</h2>
                <p className="text-xs text-muted-foreground">NexuM Labs Internal</p>
            </div>

            <nav className="space-y-2">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                                isActive
                                    ? "bg-accent/10 text-accent font-medium"
                                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                            )}
                        >
                            <item.icon className="w-5 h-5" />
                            <span className="text-sm">{item.name}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="pt-6 border-t border-border/40">
                <div className="text-xs text-muted-foreground space-y-1">
                    <p>Logged in as:</p>
                    <p className="font-bold text-foreground">Emmanuel Njenga</p>
                    <p>Founder & CEO</p>
                </div>
            </div>
        </aside>
    );
}
