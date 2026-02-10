import { Button } from "@/components/Button";
import Link from "next/link";
import { ArrowLeft, ChevronDown } from "lucide-react";

export default function FAQPage() {
    return (
        <main className="max-w-3xl mx-auto px-6 py-24">
            <Button variant="ghost" asChild className="mb-8 -ml-4 text-muted-foreground hover:text-foreground">
                <Link href="/"><ArrowLeft className="w-4 h-4 mr-2" /> Back to Home</Link>
            </Button>

            <h1 className="text-4xl font-display font-bold mb-10">Frequently Asked Questions</h1>

            <div className="space-y-6">
                {[
                    { q: "Do you work with startups in early stages?", a: "Yes. I specialize in taking technical responsibility for early-stage products, often acting as a fractional CTO." },
                    { q: "What is your typical hourly rate?", a: "My engagements are usually project-based/fixed-price. For pure consulting, my rate is $150/hr." },
                    { q: "Can you sign an NDA?", a: "Absolutely. I am happy to sign a standard NDA before we discuss proprietary details." },
                    { q: "How do you handle timezones?", a: "I am based in Nairobi (EAT / UTC+3). I overlap 4-6 hours with European business hours and 2-3 hours with US East Coast mornings." },
                    { q: "Do you do design?", a: "I am an engineer first, but I can implement clean, professional UI systems (like this website). For complex branding, I partner with specialist designers." }
                ].map((item, i) => (
                    <div key={i} className="pb-6 border-b border-border/40 last:border-0">
                        <h3 className="text-lg font-bold text-foreground mb-2">{item.q}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.a}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}
