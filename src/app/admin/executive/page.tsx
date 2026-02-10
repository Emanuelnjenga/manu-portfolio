import { Button } from "@/components/Button";
import { TrendingUp, Users, DollarSign, Activity, AlertTriangle, FileCheck } from "lucide-react";

export default function ExecutivePage() {
    return (
        <div className="space-y-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                    { label: "ARR (Projected)", value: "$1.45M", change: "+12%", icon: DollarSign, color: "text-green-500" },
                    { label: "Active Clients", value: "8", change: "+2", icon: Users, color: "text-blue-500" },
                    { label: "Runway", value: "14 months", change: "-1mo", icon: Activity, color: "text-amber-500" },
                    { label: "Compliance", value: "98% Ready", change: "Audit Prep", icon: FileCheck, color: "text-purple-500" }
                ].map((stat, i) => (
                    <div key={i} className="p-6 bg-background border border-border rounded-xl">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-muted-foreground font-medium">{stat.label}</span>
                            <stat.icon className={`w-4 h-4 ${stat.color}`} />
                        </div>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <div className="text-xs text-green-600 mt-1 font-medium">{stat.change} vs last month</div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Revenue Chart Stub */}
                <div className="lg:col-span-2 p-6 bg-background border border-border rounded-xl">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="font-bold">Revenue Performance</h3>
                        <Button variant="outline" size="sm">Download Report</Button>
                    </div>
                    <div className="h-64 flex items-end justify-between gap-2 px-4">
                        {/* Dummy Bars */}
                        {[30, 45, 35, 60, 55, 75, 80, 95, 85, 90, 100, 110].map((h, i) => (
                            <div key={i} className="w-full bg-accent/20 hover:bg-accent transition-colors rounded-t-sm relative group" style={{ height: `${h}%` }}>
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                    ${h}k
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-4 text-xs text-muted-foreground uppercase">
                        <span>Jan</span><span>Dec</span>
                    </div>
                </div>

                {/* Live Activity Feed */}
                <div className="p-6 bg-background border border-border rounded-xl">
                    <h3 className="font-bold mb-4">Live Activity</h3>
                    <div className="space-y-4">
                        {[
                            { action: "New Lead Qualified", time: "2m ago", desc: "Enterprise Fintech (Tier 1)" },
                            { action: "Contract Signed", time: "1h ago", desc: "MSA #042 - Stealth Startup" },
                            { action: "System Alert", time: "3h ago", desc: "High API Latency (Resolved)" },
                            { action: "Document Uploaded", time: "5h ago", desc: "Q3 Financial Model.csv" },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-3 pb-3 border-b border-border last:border-0 last:pb-0">
                                <div className="w-2 h-2 mt-2 rounded-full bg-accent shrink-0" />
                                <div>
                                    <div className="text-sm font-medium">{item.action}</div>
                                    <div className="text-xs text-muted-foreground">{item.desc}</div>
                                    <div className="text-[10px] text-muted-foreground mt-1 opacity-60">{item.time}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Button variant="ghost" className="w-full mt-4 text-xs">View Full Audit Log</Button>
                </div>
            </div>

            {/* Compliance Status */}
            <div className="p-6 bg-background border border-border rounded-xl">
                <div className="flex items-center gap-2 mb-4">
                    <FileCheck className="w-5 h-5 text-green-500" />
                    <h3 className="font-bold">Compliance Readiness</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <div className="flex justify-between text-sm mb-2">
                            <span>SOC2 Type 1</span>
                            <span className="font-bold">85%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 w-[85%]" />
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-sm mb-2">
                            <span>GDPR Audit</span>
                            <span className="font-bold">100%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 w-full" />
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-sm mb-2">
                            <span>Tax Filings (KE/US)</span>
                            <span className="font-bold">Pending</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-amber-500 w-[40%]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
