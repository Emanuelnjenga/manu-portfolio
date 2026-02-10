"use client";

const locations = [
    { city: "Nairobi", type: "HQ", left: "55%", top: "60%" },
    { city: "London", type: "Client", left: "48%", top: "25%" },
    { city: "San Francisco", type: "Client", left: "15%", top: "35%" },
    { city: "Singapore", type: "Node", left: "80%", top: "50%" },
    { city: "Berlin", type: "Node", left: "52%", top: "22%" },
    { city: "New York", type: "Client", left: "28%", top: "32%" },
];

export function GlobalMap() {
    return (
        <section className="py-24 px-6 bg-background overflow-hidden relative">
            <div className="max-w-5xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-display font-bold mb-4">Global Reach, Local Expertise</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Headquartered in Nairobi with a distributed client base across 3 continents.
                    Our infrastructure runs on a multi-region edge network ensuring low latency worldwide.
                </p>
            </div>

            {/* Map Container - Abstract Representation */}
            <div className="relative w-full max-w-4xl mx-auto aspect-[16/9] bg-muted/10 rounded-3xl border border-border/40">
                {/* World Map Background Placeholder */}
                <div className="absolute inset-0 opacity-10 bg-[url('/assets/world-map-dots.svg')] bg-contain bg-no-repeat bg-center" />

                {locations.map((loc) => (
                    <div
                        key={loc.city}
                        className="absolute flex flex-col items-center group cursor-pointer"
                        style={{ left: loc.left, top: loc.top }}
                    >
                        <div className={`w-3 h-3 rounded-full ${loc.type === "HQ" ? "bg-accent" : "bg-foreground"} ring-4 ring-background shadow-lg transition-transform group-hover:scale-125`} />
                        <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity absolute top-4 bg-foreground text-background text-[10px] uppercase font-bold px-2 py-1 rounded whitespace-nowrap">
                            {loc.city} • {loc.type}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center gap-8 mt-12 text-sm text-muted-foreground font-serif italic">
                <span>• Multi-Region AWS Infrastructure</span>
                <span>• 24/7 Async Support</span>
                <span>• GDPR & ISO Compliant Operations</span>
            </div>
        </section>
    );
}
