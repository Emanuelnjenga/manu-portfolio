import { Button } from "@/components/Button";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function CompanyPage() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-24">
            <Button variant="ghost" asChild className="mb-8 -ml-4 text-muted-foreground hover:text-foreground">
                <Link href="/"><ArrowLeft className="w-4 h-4 mr-2" /> Back to Home</Link>
            </Button>

            {/* Header */}
            <div className="mb-16">
                <p className="text-accent font-medium mb-4">About NexuM Labs</p>
                <h1 className="text-5xl font-display font-bold mb-6">Building the Infrastructure for the AI Era.</h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                    NexuM Labs is a distributed technology firm specializing in high-performance platforms, autonomous systems, and strategic engineering for the digital economy.
                </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                <div className="p-8 bg-muted/20 rounded-2xl border border-border">
                    <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                    <p className="text-muted-foreground">
                        To empower visionary organizations with the scalable systems and autonomous capabilities needed to thrive in a post-digital world.
                    </p>
                </div>
                <div className="p-8 bg-muted/20 rounded-2xl border border-border">
                    <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                    <p className="text-muted-foreground">
                        A world where complex technology is invisible, reliable, and universally accessible to those who build the future.
                    </p>
                </div>
            </div>

            {/* Core Values */}
            <section className="mb-24">
                <h2 className="text-3xl font-display font-bold mb-12">Core Principles</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                        { title: "Radical Transparency", desc: "We default to open communication in code, contracts, and collaboration." },
                        { title: "First-Principles Thinking", desc: "We ignore trends. We engineer solutions based on fundamental truths and physics." },
                        { title: "Long-Term Games", desc: "We optimize for decade-long reliability, not quarterly shortcuts." },
                        { title: "Extreme Ownership", desc: "We take full responsibility for the outcomes of our systems." }
                    ].map((val, i) => (
                        <div key={i} className="flex gap-4">
                            <div className="mt-1"><CheckCircle2 className="w-5 h-5 text-accent" /></div>
                            <div>
                                <h4 className="font-bold text-lg">{val.title}</h4>
                                <p className="text-muted-foreground mt-1">{val.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Governance */}
            <section className="mb-24 pt-12 border-t border-border">
                <h2 className="text-3xl font-display font-bold mb-8">Governance & Compliance</h2>
                <p className="text-muted-foreground mb-8">
                    NexuM Labs operates under strict ethical and operational guidelines to ensure security, privacy, and reliability for our enterprise partners.
                </p>
                <div className="flex gap-4 flex-wrap">
                    <Button variant="outline" asChild><Link href="/legal/privacy">Privacy Policy</Link></Button>
                    <Button variant="outline" asChild><Link href="/legal/terms">Terms of Service</Link></Button>
                    <Button variant="outline" asChild><Link href="/.well-known/security.txt">Security Contact</Link></Button>
                </div>
            </section>
        </main>
    );
}
