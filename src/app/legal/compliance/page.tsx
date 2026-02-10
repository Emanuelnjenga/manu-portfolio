import { Button } from "@/components/Button";
import Link from "next/link";
import { ArrowLeft, Shield, Lock, FileCheck } from "lucide-react";

export default function CompliancePage() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-24">
            <Button variant="ghost" asChild className="mb-8 -ml-4 text-muted-foreground hover:text-foreground">
                <Link href="/"><ArrowLeft className="w-4 h-4 mr-2" /> Back to Home</Link>
            </Button>

            <div className="mb-16">
                <p className="text-accent font-medium mb-4">Trust Center</p>
                <h1 className="text-5xl font-display font-bold mb-6">Security & Compliance</h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                    Verify our adherence to global standards for data protection and operational security.
                </p>
            </div>

            {/* Status Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {[
                    { title: "GDPR / CCPA", status: "Compliant", icon: Shield, color: "text-green-500" },
                    { title: "SOC2 Type 1", status: "In Progress", icon: Lock, color: "text-amber-500" },
                    { title: "ISO 27001", status: "Scheduled", icon: FileCheck, color: "text-muted-foreground" },
                ].map((item, i) => (
                    <div key={i} className="p-6 border border-border rounded-xl flex items-start gap-4">
                        <item.icon className={`w-6 h-6 ${item.color}`} />
                        <div>
                            <h3 className="font-bold mb-1">{item.title}</h3>
                            <div className="text-sm text-muted-foreground flex items-center gap-2">
                                <span className={`w-2 h-2 rounded-full ${item.status === 'Compliant' ? 'bg-green-500' : 'bg-amber-500'}`} />
                                {item.status}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Resources */}
            <section>
                <h2 className="text-2xl font-bold mb-6">Compliance Documents</h2>
                <div className="space-y-4">
                    <Link href="/legal/privacy" className="block p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors">
                        <div className="flex justify-between items-center">
                            <span className="font-medium">Privacy Policy</span>
                            <span className="text-sm text-muted-foreground">Updated Oct 2025</span>
                        </div>
                    </Link>
                    <Link href="/.well-known/security.txt" className="block p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors">
                        <div className="flex justify-between items-center">
                            <span className="font-medium">Security Contact (security.txt)</span>
                            <span className="text-sm text-muted-foreground">Standard RFC 9116</span>
                        </div>
                    </Link>
                    <div className="p-4 border border-border rounded-lg opacity-60 cursor-not-allowed">
                        <div className="flex justify-between items-center">
                            <span className="font-medium">Data Processing Agreement (DPA)</span>
                            <span className="text-sm text-muted-foreground">Request Access</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
