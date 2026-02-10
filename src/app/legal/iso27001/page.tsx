"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function ISOPage() {
    return (
        <>
            <Header />
            <main className="pt-24 pb-20 px-6">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h1 className="text-4xl font-display font-bold">ISO 27001:2022 Certification</h1>
                    <p className="text-xl text-muted-foreground font-serif">
                        Our Information Security Management System (ISMS) governing the development and support of our software platforms is certified ISO 27001:2022 compliant.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li>Certificate Number: ISO-XXXXXXXX (Placeholder)</li>
                        <li>Auditor: Bureau Veritas (Placeholder)</li>
                        <li>Scope: Software Development and Cloud Infrastructure Management.</li>
                    </ul>
                </div>
            </main>
            <Footer />
        </>
    );
}
