import { Button } from "@/components/Button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function TeamPage() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-24">
            <Button variant="ghost" asChild className="mb-8 -ml-4 text-muted-foreground hover:text-foreground">
                <Link href="/"><ArrowLeft className="w-4 h-4 mr-2" /> Back to Home</Link>
            </Button>

            <div className="mb-16">
                <h1 className="text-4xl font-display font-bold mb-4">The Team</h1>
                <p className="text-xl text-muted-foreground">
                    A hybrid team of full-time leadership and specialized contractors.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Founder */}
                <div className="group">
                    <div className="aspect-square bg-muted/20 rounded-2xl mb-6 relative overflow-hidden">
                        {/* Placeholder for Headshot */}
                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-bold text-4xl bg-muted/10">
                            EN
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold">{siteConfig.founder}</h3>
                    <p className="text-accent font-medium mb-3">{siteConfig.role}</p>
                    <p className="text-muted-foreground leading-relaxed">
                        10+ years of experience in distributed systems and product engineering. Ex-Lead at [Previous Companies]. Focuses on architecture and technical strategy.
                    </p>
                </div>

                {/* Placeholder Role */}
                <div className="group opacity-70">
                    <div className="aspect-square bg-muted/10 rounded-2xl mb-6 relative border border-dashed border-border flex items-center justify-center">
                        <span className="text-muted-foreground">Hiring</span>
                    </div>
                    <h3 className="text-2xl font-bold">Product Designer</h3>
                    <p className="text-muted-foreground font-medium mb-3">Partner / Contractor</p>
                    <p className="text-muted-foreground leading-relaxed">
                        We partner with top-tier product designers for specific engagements to ensure world-class UX/UI.
                    </p>
                </div>
            </div>
        </main>
    );
}
