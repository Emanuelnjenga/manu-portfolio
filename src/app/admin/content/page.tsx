"use client";

import { Button } from "@/components/Button";
import Link from "next/link";
import { Calendar, Users, DollarSign, BarChart3, FileText } from "lucide-react";

export default function Content() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold font-display">Content Management</h1>
                    <p className="text-muted-foreground mt-2">Manage brand information, pricing, and site content</p>
                </div>
                <Button>Save Changes</Button>
            </div>

            {/* Brand Information */}
            <div className="p-6 bg-background border border-border rounded-xl">
                <h2 className="text-xl font-bold mb-4">Company Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium mb-2">Company Name</label>
                        <input type="text" defaultValue="NexuM Labs" className="w-full px-4 py-2 border border-border rounded-lg" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Tagline</label>
                        <input type="text" defaultValue="Builder of scalable platforms and AI products" className="w-full px-4 py-2 border border-border rounded-lg" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Founder Name</label>
                        <input type="text" defaultValue="Emmanuel Njenga" className="w-full px-4 py-2 border border-border rounded-lg" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Location</label>
                        <input type="text" defaultValue="Nairobi, Kenya" className="w-full px-4 py-2 border border-border rounded-lg" />
                    </div>
                </div>
            </div>

            {/* Pricing Tiers */}
            <div className="p-6 bg-background border border-border rounded-xl">
                <h2 className="text-xl font-bold mb-4">Pricing Tiers</h2>
                <div className="space-y-4">
                    {[
                        { name: "MVP Accelerator", price: "$25,000", desc: "4-8 week launch package" },
                        { name: "Platform Build", price: "$75,000", desc: "Complex platform development" },
                        { name: "Enterprise Retainer", price: "$15,000/mo", desc: "Ongoing engineering support" }
                    ].map((tier, i) => (
                        <div key={i} className="flex items-center justify-between p-4 border border-border rounded-lg">
                            <div>
                                <div className="font-bold">{tier.name}</div>
                                <div className="text-sm text-muted-foreground">{tier.desc}</div>
                            </div>
                            <div className="text-xl font-bold text-accent">{tier.price}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Version History */}
            <div className="p-6 bg-background border border-border rounded-xl">
                <h2 className="text-xl font-bold mb-4">Content Version History</h2>
                <div className="space-y-3">
                    {[
                        { date: "2026-02-10", change: "Added /enterprise and /startups pages", author: "Emmanuel" },
                        { date: "2026-02-09", change: "Updated pricing tiers", author: "Emmanuel" },
                        { date: "2026-02-08", change: "Refined company messaging", author: "Emmanuel" }
                    ].map((log, i) => (
                        <div key={i} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                            <div className="flex-1">
                                <div className="text-sm font-medium">{log.change}</div>
                                <div className="text-xs text-muted-foreground mt-1">by {log.author}</div>
                            </div>
                            <div className="text-xs text-muted-foreground">{log.date}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
