"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TrustBar } from "@/components/TrustBar";
import { Shield, Lock, FileText, CheckCircle } from "lucide-react";

export default function SecurityPage() {
    return (
        <>
            <Header />
            <main className="pt-24">
                <section className="py-20 px-6 bg-background">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Security & Trust Center</h1>
                        <p className="text-xl text-muted-foreground font-serif leading-relaxed">
                            Security is not an afterthought; it is the foundation of our architecture.
                            We maintain rigorous compliance standards to ensure your data is protected.
                        </p>
                    </div>

                    <TrustBar />

                    <div className="max-w-5xl mx-auto mt-20 space-y-20">
                        {/* ISO 27001 */}
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                                <Shield className="w-8 h-8 text-blue-700" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold font-display mb-4">ISO 27001:2022 Certified</h2>
                                <p className="text-muted-foreground mb-4 leading-relaxed">
                                    NexuM Labs operates under a certified Information Security Management System (ISMS).
                                    We undergo annual third-party audits to ensure continuous improvement of our security controls.
                                </p>
                                <ul className="space-y-2 text-sm text-foreground/80 font-medium">
                                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Physical Security Controls</li>
                                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Access Control Policies</li>
                                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Incident Response Planning</li>
                                </ul>
                            </div>
                        </div>

                        {/* SOC 2 */}
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                                <Lock className="w-8 h-8 text-green-700" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold font-display mb-4">SOC 2 Type II Compliant</h2>
                                <p className="text-muted-foreground mb-4 leading-relaxed">
                                    We align with AICPA Trust Services Criteria for Security, Availability, and Confidentiality.
                                    Our infrastructure providers (AWS/Vercel) are SOC 2 audited.
                                </p>
                            </div>
                        </div>

                        {/* GDPR */}
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-16 h-16 bg-yellow-50 rounded-xl flex items-center justify-center shrink-0">
                                <FileText className="w-8 h-8 text-yellow-700" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold font-display mb-4">GDPR & Data Privacy</h2>
                                <p className="text-muted-foreground mb-4 leading-relaxed">
                                    We are fully compliant with GDPR and the Kenya Data Protection Act.
                                    Data processing agreements (DPAs) are available for all enterprise clients.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
