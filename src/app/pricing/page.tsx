import { Button } from "@/components/Button";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function PricingPage() {
    return (
        <main className="max-w-5xl mx-auto px-6 py-24">
            <Button variant="ghost" asChild className="mb-8 -ml-4 text-muted-foreground hover:text-foreground">
                <Link href="/"><ArrowLeft className="w-4 h-4 mr-2" /> Back to Home</Link>
            </Button>

            <div className="text-center max-w-2xl mx-auto mb-16">
                <h1 className="text-4xl font-display font-bold mb-4">Investment Options</h1>
                <p className="text-lg text-muted-foreground">
                    Transparent pricing for standardized engagements. Complex projects require custom scoping.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Starter */}
                <div className="p-8 rounded-2xl border border-border bg-background hover:border-accent/30 transition-colors">
                    <h3 className="font-bold text-xl mb-2">Startup MVP</h3>
                    <div className="text-3xl font-display font-bold mb-6">$5,000<span className="text-sm font-sans font-normal text-muted-foreground">/project</span></div>
                    <ul className="space-y-3 mb-8 text-sm text-muted-foreground">
                        <li className="flex gap-2"><Check className="w-4 h-4 text-accent" /> Core feature implementation</li>
                        <li className="flex gap-2"><Check className="w-4 h-4 text-accent" /> Next.js + Supabase stack</li>
                        <li className="flex gap-2"><Check className="w-4 h-4 text-accent" /> 2 weeks development</li>
                        <li className="flex gap-2"><Check className="w-4 h-4 text-accent" /> Basic analytics & SEO</li>
                    </ul>
                    <Button variant="outline" className="w-full" asChild><Link href="/contact">Get Started</Link></Button>
                </div>

                {/* Growth */}
                <div className="p-8 rounded-2xl border-2 border-accent bg-accent/5 relative">
                    <div className="absolute top-0 right-0 bg-accent text-white text-[10px] uppercase font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">Most Popular</div>
                    <h3 className="font-bold text-xl mb-2">Growth Scale</h3>
                    <div className="text-3xl font-display font-bold mb-6">$12,000<span className="text-sm font-sans font-normal text-muted-foreground">/project</span></div>
                    <ul className="space-y-3 mb-8 text-sm text-muted-foreground">
                        <li className="flex gap-2"><Check className="w-4 h-4 text-accent" /> Full-stack SaaS Platform</li>
                        <li className="flex gap-2"><Check className="w-4 h-4 text-accent" /> Payment & Subscriptions</li>
                        <li className="flex gap-2"><Check className="w-4 h-4 text-accent" /> AI/LLM Integration</li>
                        <li className="flex gap-2"><Check className="w-4 h-4 text-accent" /> 4-6 weeks timeline</li>
                    </ul>
                    <Button className="w-full" asChild><Link href="/contact">Get Started</Link></Button>
                </div>

                {/* Enterprise */}
                <div className="p-8 rounded-2xl border border-border bg-background hover:border-accent/30 transition-colors">
                    <h3 className="font-bold text-xl mb-2">Enterprise Retainer</h3>
                    <div className="text-3xl font-display font-bold mb-6">{siteConfig.pricing.retainerStart}<span className="text-sm font-sans font-normal text-muted-foreground"></span></div>
                    <ul className="space-y-3 mb-8 text-sm text-muted-foreground">
                        <li className="flex gap-2"><Check className="w-4 h-4 text-accent" /> Dedicated engineering hours</li>
                        <li className="flex gap-2"><Check className="w-4 h-4 text-accent" /> System architecture audits</li>
                        <li className="flex gap-2"><Check className="w-4 h-4 text-accent" /> Team leadership & mentoring</li>
                        <li className="flex gap-2"><Check className="w-4 h-4 text-accent" /> Priority SLA support</li>
                    </ul>
                    <Button variant="outline" className="w-full" asChild><Link href="/contact">Discuss Needs</Link></Button>
                </div>
            </div>

            <div className="mt-16 text-center text-sm text-muted-foreground">
                <p>Standard hourly rate for out-of-scope work: <strong>{siteConfig.pricing.hourlyRate}</strong></p>
            </div>
        </main>
    );
}
