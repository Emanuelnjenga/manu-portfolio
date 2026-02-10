"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function GDPRPage() {
    return (
        <>
            <Header />
            <main className="pt-24 pb-20 px-6">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h1 className="text-4xl font-display font-bold">GDPR Compliance</h1>
                    <p className="text-xl text-muted-foreground font-serif">
                        NexuM Labs is committed to the protection of personal data in accordance with the General Data Protection Regulation (GDPR).
                    </p>
                    <div className="p-6 bg-muted/20 border-l-4 border-accent rounded-r-lg">
                        <h2 className="text-lg font-bold mb-2">Data Controller</h2>
                        <p>NexuM Labs, Nairobi, Kenya.</p>
                        <p>DPO Contact: dpo@nexumlabs.com (Placeholder)</p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
