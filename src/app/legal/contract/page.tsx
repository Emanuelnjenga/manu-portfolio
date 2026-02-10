import { Button } from "@/components/Button";
import Link from "next/link";
import { ArrowLeft, FileText, Lock } from "lucide-react";

export default function ContractPage() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-24 text-center">
            <Button variant="ghost" asChild className="mb-8 -ml-4 text-muted-foreground hover:text-foreground">
                <Link href="/"><ArrowLeft className="w-4 h-4 mr-2" /> Back to Home</Link>
            </Button>

            <div className="max-w-md mx-auto p-12 border border-border rounded-2xl bg-muted/10">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                    <Lock className="w-8 h-8 text-muted-foreground" />
                </div>
                <h1 className="text-2xl font-bold mb-4">Secure Contract Access</h1>
                <p className="text-muted-foreground mb-8">
                    Please enter the unique access token provided in your email to view your personalized agreement.
                </p>
                <div className="space-y-4">
                    <input
                        type="password"
                        placeholder="Enter Access Token"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 ring-accent outline-none"
                    />
                    <Button className="w-full">View Document</Button>
                </div>
                <p className="text-xs text-muted-foreground mt-6">
                    Protected by 256-bit encryption. Session expires in 24h.
                </p>
            </div>
        </main>
    );
}
