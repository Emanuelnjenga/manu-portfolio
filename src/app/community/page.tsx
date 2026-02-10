"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { Calendar, Users, Mic, Mail } from "lucide-react";

export default function CommunityPage() {
    return (
        <>
            <Header />
            <main className="pt-24">
                <section className="py-20 px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-accent uppercase bg-accent/10 rounded-full">
                                Giving Back
                            </div>
                            <h1 className="text-5xl font-display font-bold mb-6">Community & Events</h1>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-serif">
                                Building the next generation of systems engineers and founders in Africa and beyond.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                            {/* Mentorship */}
                            <div className="p-8 border border-border/60 rounded-xl bg-muted/10">
                                <Users className="w-10 h-10 text-accent mb-6" />
                                <h2 className="text-2xl font-bold font-display mb-4">Mentorship Program</h2>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    I dedicate 4 hours/month to mentoring early-stage diverse founders and junior systems engineers.
                                    Slots open on the 1st of every month.
                                </p>
                                <Button variant="outline">Join Waitlist</Button>
                            </div>

                            {/* Speaking */}
                            <div className="p-8 border border-border/60 rounded-xl bg-muted/10">
                                <Mic className="w-10 h-10 text-accent mb-6" />
                                <h2 className="text-2xl font-bold font-display mb-4">Speaking & Workshops</h2>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    Available for keynotes and technical workshops on Scalable Architecture, AI Engineering, and Tech Leadership.
                                </p>
                                <Button variant="outline">Request Speaker Kit</Button>
                            </div>
                        </div>

                        {/* Events List */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold font-display border-b border-border/40 pb-4 mb-6">Upcoming Events</h3>
                            {[
                                { date: "Nov 15, 2026", title: "Nairobi Tech Week: Scaling AI Systems", loc: "Radisson Blu, Nairobi", role: "Keynote" },
                                { date: "Dec 02, 2026", title: "System Design Interview Prep", loc: "Virtual / Zoom", role: "Host" },
                                { date: "Jan 10, 2027", title: "Africa FinTech Summit", loc: "Lagos, Nigeria", role: "Panelist" }
                            ].map((event, i) => (
                                <div key={i} className="flex flex-col md:flex-row md:items-center justify-between py-4 border-b border-border/20 group hover:bg-muted/5 transition-colors px-2">
                                    <div className="flex items-center gap-6">
                                        <div className="flex flex-col items-center justify-center w-16 h-16 bg-muted/20 rounded-lg border border-border/40">
                                            <span className="text-xs font-bold uppercase text-accent">{event.date.split(" ")[0]}</span>
                                            <span className="text-xl font-bold font-display">{event.date.split(" ")[1].replace(",", "")}</span>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold font-display">{event.title}</h4>
                                            <div className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                                                <span>{event.loc}</span>
                                                <span className="w-1 h-1 rounded-full bg-border" />
                                                <span className="font-medium text-accent">{event.role}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <Button variant="ghost" size="sm" className="mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity">
                                        View Details
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
