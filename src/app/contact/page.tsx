import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { ManuAssistant } from "@/components/ManuAssistant";
import { Mail, Calendar, Clock, ArrowRight } from "lucide-react";

export default function ContactPage() {
    return (
        <>
            <Header />
            <ManuAssistant />

            <main className="flex-1 pt-24">
                <Section>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h1 className="text-5xl md:text-7xl font-serif mb-6">Let&apos;s Work Together</h1>
                            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                                I help companies built robust, scalable systems and integrate AI meaningfully. Whether you need a technical audit, a fractional CTO, or a full-stack architect, I&apos;m here to help.
                            </p>

                            <div className="space-y-8">
                                <div className="flex gap-4 items-start p-6 rounded-2xl border border-border hover:bg-muted/10 transition-colors">
                                    <div className="p-3 rounded-full bg-accent/10 text-accent">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2">30-Minute Consult</h3>
                                        <p className="text-muted-foreground text-sm mb-4">
                                            Perfect for quick architectural advice or reviewing a specific roadmap challenge.
                                        </p>
                                        <Button variant="link" className="p-0 text-accent h-auto">
                                            Book Now <ArrowRight className="w-4 h-4 ml-1" />
                                        </Button>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start p-6 rounded-2xl border border-border hover:bg-muted/10 transition-colors">
                                    <div className="p-3 rounded-full bg-accent/10 text-accent">
                                        <Calendar className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2">Technical Audit</h3>
                                        <p className="text-muted-foreground text-sm mb-4">
                                            Deep dive into your codebase, infrastructure, and team processes. Detailed report included.
                                        </p>
                                        <Button variant="link" className="p-0 text-accent h-auto">
                                            Inquire Availability <ArrowRight className="w-4 h-4 ml-1" />
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12">
                                <h3 className="font-serif text-2xl mb-4">Connect</h3>
                                <div className="flex gap-4 text-muted-foreground">
                                    <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
                                    <a href="#" className="hover:text-foreground transition-colors">Twitter / X</a>
                                    <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
                                    <a href="mailto:hello@manu.dev" className="hover:text-foreground transition-colors">Email</a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-muted/5 border border-border rounded-2xl p-8">
                            <h2 className="text-2xl font-serif mb-6">Send a message</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full bg-background border border-input rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-accent transition-all"
                                            placeholder="Jane Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full bg-background border border-input rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-accent transition-all"
                                            placeholder="jane@company.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                                    <select
                                        id="subject"
                                        className="w-full bg-background border border-input rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-accent transition-all"
                                    >
                                        <option>Project Inquiry</option>
                                        <option>Speaking Opportunity</option>
                                        <option>Recruiting / Hiring</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        rows={6}
                                        className="w-full bg-background border border-input rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-accent transition-all resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>
                                <Button size="lg" className="w-full">
                                    <Mail className="mr-2 w-4 h-4" /> Send Message
                                </Button>
                                <p className="text-xs text-muted-foreground text-center">
                                    Protected by standard reCAPTCHA. Privacy Policy applies.
                                </p>
                            </form>
                        </div>
                    </div>
                </Section>
            </main>

            <Footer />
        </>
    );
}
