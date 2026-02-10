import { Button } from "@/components/Button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CareersPage() {
    return (
        <main className="max-w-3xl mx-auto px-6 py-24">
            <Button variant="ghost" asChild className="mb-8 -ml-4 text-muted-foreground hover:text-foreground">
                <Link href="/"><ArrowLeft className="w-4 h-4 mr-2" /> Back to Home</Link>
            </Button>

            <h1 className="text-4xl font-display font-bold mb-6">Join NexuM Labs</h1>
            <p className="text-xl text-muted-foreground mb-12">
                We are currently a small, high-impact team. We are not hiring full-time roles at this moment, but we are always looking for reliable contractors.
            </p>

            <div className="space-y-8">
                <section className="p-8 border border-border rounded-2xl">
                    <h3 className="text-xl font-bold mb-2">Freelance React/Next.js Engineer</h3>
                    <p className="text-muted-foreground mb-6">Remote • Project-based</p>
                    <p className="text-sm text-foreground/80 mb-6">
                        Looking for a senior frontend engineer to help with overflow work on client projects. Must have strong TypeScript and Tailwind skills.
                    </p>
                    <Button variant="outline" asChild><Link href="mailto:careers@nexumlabs.example">Apply via Email</Link></Button>
                </section>
            </div>
        </main>
    );
}
