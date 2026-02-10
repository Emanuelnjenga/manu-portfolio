"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { X, Loader2, Send } from "lucide-react";
import { createPortal } from "react-dom";

export function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call to process.env.CONTACT_FORM_ENDPOINT
        await new Promise(resolve => setTimeout(resolve, 1500));
        setLoading(false);
        setSuccess(true);
        // Reset after success
        setTimeout(() => {
            setSuccess(false);
            onClose();
        }, 2000);
    };

    return createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />
            <div className="relative w-full max-w-lg bg-background border border-border rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                <div className="flex items-center justify-between p-6 border-b border-border/50">
                    <h2 className="text-xl font-display font-bold">Start a Conversation</h2>
                    <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-6">
                    {success ? (
                        <div className="flex flex-col items-center justify-center py-12 text-center text-green-600 space-y-3">
                            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                <Send className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold">Message Sent!</h3>
                            <p className="text-muted-foreground text-sm">I'll get back to you within 24 hours.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Name</label>
                                    <input required id="name" className="w-full px-3 py-2 rounded-lg bg-muted/30 border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="Jane Doe" />
                                </div>
                                <div className="space-y-1.5">
                                    <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</label>
                                    <input required type="email" id="email" className="w-full px-3 py-2 rounded-lg bg-muted/30 border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="jane@example.com" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label htmlFor="type" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Project Type</label>
                                    <select id="type" className="w-full px-3 py-2 rounded-lg bg-muted/30 border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all appearance-none cursor-pointer">
                                        <option>MVP Development</option>
                                        <option>System Architecture</option>
                                        <option>AI Automation</option>
                                        <option>Consulting / Audit</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="space-y-1.5">
                                    <label htmlFor="budget" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Budget Range</label>
                                    <select id="budget" className="w-full px-3 py-2 rounded-lg bg-muted/30 border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all appearance-none cursor-pointer">
                                        <option>&lt; $5k</option>
                                        <option>$5k – $20k</option>
                                        <option>$20k – $100k</option>
                                        <option>$100k+</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Project Details</label>
                                <textarea required id="message" rows={4} className="w-full px-3 py-2 rounded-lg bg-muted/30 border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none" placeholder="Tell me about your project goals, timeline, and requirements..."></textarea>
                            </div>

                            <div className="pt-2">
                                <Button disabled={loading} type="submit" className="w-full font-bold text-base h-11">
                                    {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Send Message"}
                                </Button>
                                <p className="text-center text-[10px] text-muted-foreground mt-3">
                                    Typical response time: 24–48 hours. Protected by NDA where applicable.
                                </p>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>,
        document.body
    );
}
