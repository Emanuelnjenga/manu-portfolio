import { Button } from "@/components/Button";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";

export default function PressPage() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-24">
            <Button variant="ghost" asChild className="mb-8 -ml-4 text-muted-foreground hover:text-foreground">
                <Link href="/"><ArrowLeft className="w-4 h-4 mr-2" /> Back to Home</Link>
            </Button>

            <div className="mb-16">
                <p className="text-accent font-medium mb-4">Newsroom</p>
                <h1 className="text-5xl font-display font-bold mb-6">Press & Media</h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                    Latest announcements, brand assets, and resources for journalists.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                {/* Brand Assets */}
                <div>
                    <h2 className="text-2xl font-bold mb-6">Brand Assets</h2>
                    <div className="space-y-4">
                        <div className="p-6 border border-border rounded-xl flex items-center justify-between">
                            <div>
                                <h3 className="font-bold">Logo Pack</h3>
                                <p className="text-sm text-muted-foreground">SVG, PNG (Light/Dark)</p>
                            </div>
                            <Button variant="outline" size="sm"><Download className="w-4 h-4 mr-2" /> Download</Button>
                        </div>
                        <div className="p-6 border border-border rounded-xl flex items-center justify-between">
                            <div>
                                <h3 className="font-bold">Founder Headshots</h3>
                                <p className="text-sm text-muted-foreground">High-res photography</p>
                            </div>
                            <Button variant="outline" size="sm"><Download className="w-4 h-4 mr-2" /> Download</Button>
                        </div>
                    </div>
                </div>

                {/* Media Contact */}
                <div className="p-8 bg-muted/20 rounded-2xl h-fit">
                    <h3 className="text-xl font-bold mb-4">Media Contact</h3>
                    <p className="text-muted-foreground mb-6">
                        For press inquiries, speaking engagements, and official statements.
                    </p>
                    <a href="mailto:press@nexumlabs.example" className="text-accent hover:underline font-medium">press@nexumlabs.example</a>
                </div>
            </div>

            {/* Releases */}
            <section>
                <h2 className="text-2xl font-bold mb-8">Latest Announcements</h2>
                <div className="space-y-8">
                    {[
                        { date: "Oct 2025", title: "NexuM Labs Launches Institutional-Grade Digital Infrastructure Platform" },
                        { date: "Aug 2025", title: "Emmanuel Njenga Appointed as Lead Architect for Regional FinTech Consortium" },
                        { date: "May 2025", title: "NexuM Labs Achieves SOC2 Type 1 Compliance Readiness" },
                    ].map((news, i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className="text-sm text-accent mb-1 font-mono">{news.date}</div>
                            <h3 className="text-xl font-bold group-hover:text-accent transition-colors">{news.title}</h3>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
