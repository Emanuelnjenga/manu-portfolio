"use client";

import { Button } from "@/components/Button";
import { FileText, Download, Upload } from "lucide-react";

const documents = [
    { name: "Master Services Agreement (MSA)", type: "Contract", version: "v2.1", updated: "2026-02-08" },
    { name: "Statement of Work (SOW) Template", type: "Contract", version: "v1.8", updated: "2026-02-05" },
    { name: "Data Processing Agreement (DPA)", type: "Legal", version: "v1.0", updated: "2026-01-15" },
    { name: "Service Level Agreement (SLA)", type: "Contract", version: "v2.0", updated: "2026-02-10" },
    { name: "Non-Disclosure Agreement (NDA)", type: "Legal", version: "v1.5", updated: "2026-01-20" },
    { name: "Proposal Template", type: "Sales", version: "v3.2", updated: "2026-02-07" },
];

export default function Documents() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold font-display">Document Management</h1>
                    <p className="text-muted-foreground mt-2">Manage contracts, NDAs, SOWs, and proposals</p>
                </div>
                <Button className="gap-2">
                    <Upload className="w-4 h-4" />
                    Upload Document
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-6 bg-background border border-border rounded-xl">
                    <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-2">Total Documents</div>
                    <div className="text-3xl font-bold">48</div>
                </div>
                <div className="p-6 bg-background border border-border rounded-xl">
                    <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-2">Active Contracts</div>
                    <div className="text-3xl font-bold">8</div>
                </div>
                <div className="p-6 bg-background border border-border rounded-xl">
                    <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-2">Pending Signatures</div>
                    <div className="text-3xl font-bold">3</div>
                </div>
            </div>

            <div className="p-6 bg-background border border-border rounded-xl">
                <h2 className="text-xl font-bold mb-4">Document Library</h2>
                <div className="space-y-3">
                    {documents.map((doc, i) => (
                        <div key={i} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                            <div className="flex items-center gap-4">
                                <FileText className="w-5 h-5 text-muted-foreground" />
                                <div>
                                    <div className="font-medium">{doc.name}</div>
                                    <div className="text-sm text-muted-foreground flex items-center gap-4 mt-1">
                                        <span>{doc.type}</span>
                                        <span>•</span>
                                        <span>{doc.version}</span>
                                        <span>•</span>
                                        <span>Updated {doc.updated}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button variant="ghost" size="sm">Edit</Button>
                                <Button variant="outline" size="sm" className="gap-2">
                                    <Download className="w-4 h-4" />
                                    Download
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
