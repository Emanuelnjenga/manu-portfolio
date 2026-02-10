"use client";

import { BarChart3, MousePointerClick, FileText, Eye } from "lucide-react";

const events = [
    { event: "Hero CTA Click", count: 847, trend: "+12%" },
    { event: "Contact Form Opened", count: 523, trend: "+8%" },
    { event: "Contact Form Submitted", count: 284, trend: "+15%" },
    { event: "Case Study View", count: 1243, trend: "+22%" },
    { event: "Pricing Page View", count: 687, trend: "+5%" },
    { event: "Enterprise Page View", count: 412, trend: "+45%" },
];

const recentActivity = [
    { time: "2m ago", event: "Contact form submission", details: "Enterprise tier inquiry - FinTech startup" },
    { time: "12m ago", event: "Hero CTA click", details: "User viewed case studies section" },
    { time: "24m ago", event: "Pricing page view", details: "Spent 3min 42s on page" },
    { time: "1h ago", event: "Document download", details: "SLA template downloaded" },
    { time: "2h ago", event: "Contact form submission", details: "Startup tier inquiry - E-commerce" },
];

export default function Analytics() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold font-display">Analytics & Events</h1>
                <p className="text-muted-foreground mt-2">Track user interactions and conversion metrics</p>
            </div>

            {/* Event Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {events.slice(0, 3).map((e, i) => (
                    <div key={i} className="p-6 bg-background border border-border rounded-xl">
                        <div className="flex items-center justify-between mb-3">
                            <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground">{e.event}</div>
                            <MousePointerClick className="w-4 h-4 text-accent" />
                        </div>
                        <div className="text-3xl font-bold">{e.count}</div>
                        <div className="text-sm text-green-600 font-medium mt-2">{e.trend} vs last week</div>
                    </div>
                ))}
            </div>

            {/* All Events Table */}
            <div className="p-6 bg-background border border-border rounded-xl">
                <h2 className="text-xl font-bold mb-4">Event Tracking (Last 7 Days)</h2>
                <div className="space-y-3">
                    {events.map((e, i) => (
                        <div key={i} className="flex items-center justify-between p-4 border border-border rounded-lg">
                            <div className="flex-1">
                                <div className="font-medium">{e.event}</div>
                            </div>
                            <div className="flex items-center gap-8">
                                <div className="text-2xl font-bold">{e.count}</div>
                                <div className="text-sm font-medium text-green-600 w-16 text-right">{e.trend}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Recent Activity Feed */}
            <div className="p-6 bg-background border border-border rounded-xl">
                <h2 className="text-xl font-bold mb-4">Live Activity Feed</h2>
                <div className="space-y-3">
                    {recentActivity.map((activity, i) => (
                        <div key={i} className="flex gap-4 p-3 border-b border-border last:border-0">
                            <div className="w-2 h-2 mt-2 rounded-full bg-accent shrink-0" />
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                    <div className="font-medium">{activity.event}</div>
                                    <div className="text-xs text-muted-foreground">{activity.time}</div>
                                </div>
                                <div className="text-sm text-muted-foreground">{activity.details}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-sm text-amber-900">
                    <strong>Note:</strong> Analytics are currently logging to console. Connect to PostHog, Mixpanel, or Google Analytics for production tracking.
                </p>
            </div>
        </div>
    );
}
