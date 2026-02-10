import { Button } from "@/components/Button";
import Link from "next/link";
import {
    LayoutDashboard,
    PieChart,
    Briefcase,
    FileText,
    Users,
    ShieldAlert,
    LogOut,
    Settings
} from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen bg-muted/20">
            {/* Sidebar */}
            <aside className="w-64 bg-background border-r border-border hidden md:flex flex-col">
                <div className="p-6 border-b border-border">
                    <div className="font-display font-bold text-xl flex items-center gap-2">
                        <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white text-lg">M</div>
                        <span>Admin</span>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">NexuM Labs OS v1.0</div>
                </div>

                <nav className="flex-1 p-4 space-y-1">
                    <p className="px-2 text-xs font-semibold text-muted-foreground mb-2 mt-4 uppercase">Command Center</p>
                    <Link href="/admin/executive" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg bg-accent/10 text-accent">
                        <LayoutDashboard className="w-4 h-4" /> Executive View
                    </Link>
                    <Link href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors">
                        <PieChart className="w-4 h-4" /> Financials
                    </Link>
                    <Link href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors">
                        <Briefcase className="w-4 h-4" /> Sales Pipeline
                    </Link>

                    <p className="px-2 text-xs font-semibold text-muted-foreground mb-2 mt-6 uppercase">Legal & Ops</p>
                    <Link href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors">
                        <FileText className="w-4 h-4" /> Contracts (VDR)
                    </Link>
                    <Link href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors">
                        <Users className="w-4 h-4" /> HR & Recruiting
                    </Link>
                    <Link href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors">
                        <ShieldAlert className="w-4 h-4" /> Risk Register
                    </Link>
                </nav>

                <div className="p-4 border-t border-border">
                    <Link href="/" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:bg-red-50 hover:text-red-500 transition-colors">
                        <LogOut className="w-4 h-4" /> Exit to Site
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <header className="h-16 border-b border-border bg-background flex items-center justify-between px-6">
                    <h1 className="font-semibold">Executive Dashboard</h1>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-sm font-mono text-muted-foreground">System Healthy</span>
                        </div>
                        <Button variant="ghost" size="icon"><Settings className="w-4 h-4" /></Button>
                        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold">EN</div>
                    </div>
                </header>
                <main className="flex-1 p-6 overflow-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
