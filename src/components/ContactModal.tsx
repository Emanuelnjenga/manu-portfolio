"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { X, Loader2, Send, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { createPortal } from "react-dom";
import { trackEvent } from "@/lib/analytics";

export function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        type: "MVP Development",
        budget: "$5k – $20k",
        goals: "",
        nda: false
    });

    if (!isOpen) return null;

    const handleNext = () => {
        setStep((prev) => prev + 1);
        trackEvent("modal_open", { label: `contact_modal_step_${step + 1}` });
    };

    const handleBack = () => setStep((prev) => prev - 1);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        trackEvent("form_submit", { label: "contact_modal", type: formData.type, budget: formData.budget });

        try {
            if (process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT) {
                await fetch(process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });
            } else {
                // Fallback simulation for dev/demo
                await new Promise(resolve => setTimeout(resolve, 1500));
                console.warn("No CONTACT_FORM_ENDPOINT configured. Simulating success.");
            }

            setLoading(false);
            setSuccess(true);
            trackEvent("form_success", { label: "contact_modal" });
            setTimeout(() => {
                setSuccess(false);
                setStep(1);
                onClose();
            }, 3000);
        } catch (error) {
            console.error("Form submission error:", error);
            setLoading(false);
            alert("Something went wrong. Please try again or email directly.");
        }
    };

    return createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />
            <div className="relative w-full max-w-lg bg-background border border-border rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">

                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-border/50">
                    <div>
                        <h2 className="text-xl font-display font-bold">Start a Conversation</h2>
                        <div className="flex items-center gap-2 mt-1">
                            {[1, 2, 3].map((s) => (
                                <div key={s} className={`h-1.5 w-8 rounded-full transition-colors ${step >= s ? "bg-accent" : "bg-muted"}`} />
                            ))}
                        </div>
                    </div>
                    <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-6">
                    {success ? (
                        <div className="flex flex-col items-center justify-center py-8 text-center text-green-600 space-y-3">
                            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                <Send className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold">Request Received</h3>
                            <p className="text-muted-foreground text-sm max-w-xs">
                                Thanks {formData.name.split(" ")[0]}. I'll review your project details and reply to {formData.email} within 24 hours.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">

                            {/* Step 1: Basics */}
                            {step === 1 && (
                                <div className="space-y-4 animate-in slide-in-from-right-8 duration-300">
                                    <div className="space-y-1.5">
                                        <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Name</label>
                                        <input
                                            autoFocus
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            id="name"
                                            className="w-full px-3 py-2 rounded-lg bg-muted/30 border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                                            placeholder="Jane Doe"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Work Email</label>
                                        <input
                                            required
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            id="email"
                                            className="w-full px-3 py-2 rounded-lg bg-muted/30 border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                                            placeholder="jane@company.com"
                                        />
                                    </div>
                                    <div className="pt-4">
                                        <Button type="button" onClick={handleNext} disabled={!formData.name || !formData.email} className="w-full h-11">
                                            Next Step <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {/* Step 2: Project Scope */}
                            {step === 2 && (
                                <div className="space-y-4 animate-in slide-in-from-right-8 duration-300">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Engagement Type</label>
                                        <div className="grid grid-cols-2 gap-2">
                                            {["MVP Development", "System Arch", "AI Integration", "Consulting"].map((t) => (
                                                <button
                                                    key={t}
                                                    type="button"
                                                    onClick={() => setFormData({ ...formData, type: t })}
                                                    className={`text-sm px-3 py-2 rounded-lg border text-left transition-all ${formData.type === t ? "border-accent bg-accent/5 text-accent font-medium" : "border-border hover:border-accent/50"}`}
                                                >
                                                    {t}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label htmlFor="budget" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Est. Budget (USD)</label>
                                        <select
                                            value={formData.budget}
                                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                            id="budget"
                                            className="w-full px-3 py-2 rounded-lg bg-muted/30 border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all appearance-none cursor-pointer"
                                        >
                                            <option>&lt; $5k (Micro)</option>
                                            <option>$5k – $20k (Small)</option>
                                            <option>$20k – $50k (Medium)</option>
                                            <option>$50k+ (Enterprise)</option>
                                        </select>
                                    </div>
                                    <div className="pt-4 flex gap-3">
                                        <Button type="button" variant="outline" onClick={handleBack} className="flex-1 h-11">Back</Button>
                                        <Button type="button" onClick={handleNext} className="flex-1 h-11">
                                            Next Step <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {/* Step 3: Context */}
                            {step === 3 && (
                                <div className="space-y-4 animate-in slide-in-from-right-8 duration-300">
                                    <div className="space-y-1.5">
                                        <label htmlFor="goals" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Primary Goal / Timeline</label>
                                        <textarea
                                            required
                                            value={formData.goals}
                                            onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                                            id="goals"
                                            rows={3}
                                            className="w-full px-3 py-2 rounded-lg bg-muted/30 border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"
                                            placeholder="e.g. Launching in 3 months, need to scale to 10k users..."
                                        />
                                    </div>

                                    <label className="flex items-start gap-3 p-3 rounded-lg border border-border/50 cursor-pointer hover:bg-muted/30 transition-colors">
                                        <div className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 ${formData.nda ? "bg-accent border-accent text-white" : "border-muted-foreground"}`}>
                                            {formData.nda && <CheckCircle2 className="w-3.5 h-3.5" />}
                                        </div>
                                        <input type="checkbox" className="hidden" checked={formData.nda} onChange={(e) => setFormData({ ...formData, nda: e.target.checked })} />
                                        <span className="text-xs text-muted-foreground">
                                            <span className="font-medium text-foreground block mb-0.5">Require Manual NDA?</span>
                                            I need NexuM Labs to sign a Non-Disclosure Agreement before initial call.
                                        </span>
                                    </label>

                                    <div className="pt-4 flex gap-3">
                                        <Button type="button" variant="outline" onClick={handleBack} className="flex-1 h-11">Back</Button>
                                        <Button disabled={loading} type="submit" className="flex-[2] h-11 font-bold">
                                            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Submit Request"}
                                        </Button>
                                    </div>
                                </div>
                            )}

                        </form>
                    )}
                </div>
            </div>
        </div>,
        document.body
    );
}
