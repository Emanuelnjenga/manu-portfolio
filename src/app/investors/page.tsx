import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import Link from "next/link";
import { Lock, TrendingUp, Globe, ShieldCheck } from "lucide-react";

export default function InvestorsPage() {
    return (
        <>
            <Header />
            <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
                <Breadcrumbs items={[
                    { label: "Company", href: "/company" },
                    { label: "Investors", href: "/investors" }
                ]} />

                <div className="mb-16">
                    <p className="text-accent font-medium mb-4">Investor Relations</p>
                    <h1 className="text-5xl font-display font-bold mb-6">NexuM Labs Holdings</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                        Invest in the next generation of digital infrastructure. We are building the operating system for the autonomous enterprise.
                    </p>
                </div>

                {/* Metrics (Placeholders) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {[
                        { label: "YoY Growth", value: "240%", icon: TrendingUp },
                        { label: "Active Markets", value: "3 Continents", icon: Globe },
                        { label: "Client Retention", value: "100%", icon: ShieldCheck },
                    ].map((stat, i) => (
                        <div key={i} className="p-6 bg-muted/20 border border-border rounded-xl">
                            <stat.icon className="w-6 h-6 text-accent mb-4" />
                            <div className="text-3xl font-display font-bold mb-1">{stat.value}</div>
                            <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Data Room Gate */}
                <div className="p-12 border border-border rounded-2xl bg-muted/10 text-center">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                        <Lock className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <h2 className="text-2xl font-bold mb-3">Accredited Investor Access</h2>
                    <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                        Access our Virtual Data Room (VDR) for detailed financials, cap table, and due diligence materials. Access requires NDA.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Button asChild><Link href="/contact">Request Access</Link></Button>
                        <Button variant="outline" disabled>View Pitch Deck (PDF)</Button>
                    </div>
                </div>

                <div className="mt-24 text-sm text-muted-foreground text-center">
                    <p>
                        Disclaimer: This page is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy securities.
                    </p>
                </div>
            </main>
            <Footer />
        </>
    );
}
