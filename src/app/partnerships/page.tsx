import { Button } from "@/components/Button";
import Link from "next/link";
import { ArrowLeft, Handshake, Cpu, Network } from "lucide-react";

export default function PartnershipsPage() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-24">
            <Button variant="ghost" asChild className="mb-8 -ml-4 text-muted-foreground hover:text-foreground">
                <Link href="/"><ArrowLeft className="w-4 h-4 mr-2" /> Back to Home</Link>
            </Button>

            <div className="mb-16">
                <p className="text-accent font-medium mb-4">Ecosystem</p>
                <h1 className="text-5xl font-display font-bold mb-6">Partner Network</h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                    Collaborating with best-in-class technology providers to deliver integrated, scalable solutions.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                {/* Tech Partners */}
                <div className="p-8 border border-border rounded-2xl bg-muted/10">
                    <Cpu className="w-8 h-8 text-accent mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Technology Partners</h3>
                    <p className="text-muted-foreground mb-6">
                        We maintain certified expertise with leading infrastructure and AI platforms.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {["Vercel", "AWS", "Supabase", "OpenAI", "Stripe"].map((brand) => (
                            <span key={brand} className="px-3 py-1 bg-background border border-border rounded-full text-sm font-medium">
                                {brand}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Integration Partners */}
                <div className="p-8 border border-border rounded-2xl bg-muted/10">
                    <Handshake className="w-8 h-8 text-accent mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Solution Partners</h3>
                    <p className="text-muted-foreground mb-6">
                        Joint go-to-market strategies with digital agencies and system integrators.
                    </p>
                    <Button variant="outline" asChild><Link href="mailto:partners@nexumlabs.example">Become a Partner</Link></Button>
                </div>
            </div>

            {/* Reseller Program Stub */}
            <section className="p-12 bg-accent/5 rounded-3xl text-center">
                <h2 className="text-3xl font-display font-bold mb-4">Channel Partner Program</h2>
                <p className="text-muted-foreground max-w-lg mx-auto mb-8">
                    White-label NexuM Labs' engineering capabilities for your agency.
                    <span className="block mt-2 font-medium text-foreground">Coming Q3 2026.</span>
                </p>
                <Button disabled>Join Waitlist</Button>
            </section>
        </main>
    );
}
