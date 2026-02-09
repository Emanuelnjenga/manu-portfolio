"use client";

import { useState, useRef, useEffect } from "react";
import { Bot, Send, X, Sparkles, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { PROJECTS, SKILLS, ARTICLES } from "@/lib/data";

interface Message {
    role: "assistant" | "user";
    content: string;
    source?: { title: string; url: string };
}

const INITIAL_MESSAGE: Message = {
    role: "assistant",
    content: "Hi, I'm Manu Assistant. I can answer questions about Manu's engineering philosophy, projects (like the Distributed Asset Platform), or availability. How can I help?",
};

const STATIC_KNOWLEDGE_BASE = [
    { keywords: ["hiring", "hire", "contact", "email", "reach out", "available"], response: "Manu is currently open to discussing new opportunities, particularly in systems architecture and product engineering. You can reach him via the Contact page or email at hello@manu.dev." },
    { keywords: ["experience", "background", "work", "history", "years"], response: "Manu has over 8 years of experience building scalable products. He has worked with top-tier tech companies and high-growth startups, specializing in distributed systems and AI." },
    { keywords: ["rate", "cost", "price", "salary"], response: "For rates and engagement details, please contact Manu directly to discuss your project requirements." },
];

export function ManuAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [privacyOptIn, setPrivacyOptIn] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isOpen]);

    const findBestResponse = (query: string): { content: string; source?: { title: string; url: string } } => {
        const lowerInput = query.toLowerCase();

        // 1. Check Projects (Simulated RAG)
        for (const project of PROJECTS) {
            if (lowerInput.includes(project.title.toLowerCase()) ||
                lowerInput.includes(project.slug.replace(/-/g, " ")) ||
                (project.stack.some(tech => lowerInput.includes(tech.toLowerCase()) && lowerInput.includes("project")))
            ) {
                return {
                    content: `Regarding the ${project.title}: ${project.content.problem} The solution involved ${project.content.solution.toLowerCase()} using ${project.stack.join(", ")}.`,
                    source: { title: project.title, url: `/projects/${project.slug}` }
                };
            }
        }

        // 2. Check Articles
        for (const article of ARTICLES) {
            if (lowerInput.includes(article.title.toLowerCase()) || lowerInput.includes("blog") || lowerInput.includes("article")) {
                if (lowerInput.includes(article.title.toLowerCase())) {
                    return {
                        content: `In "${article.title}", Manu discusses: ${article.excerpt} Key concepts include ${article.readTime} reading time.`,
                        source: { title: article.title, url: `/blog/${article.slug}` }
                    };
                }
            }
        }

        // 3. Check Skills
        if (lowerInput.includes("skill") || lowerInput.includes("stack") || lowerInput.includes("technology")) {
            const allSkills = SKILLS.flatMap(s => s.items).join(", ");
            return { content: `Manu's technical arsenal includes: ${allSkills}. He chooses the right tool for the job, favoring stability over hype.` };
        }

        // 4. Check Static Knowledge
        const found = STATIC_KNOWLEDGE_BASE.find(k => k.keywords.some(kw => lowerInput.includes(kw)));
        if (found) {
            return { content: found.response };
        }

        return { content: "I don't have that specific information in my context. Please ask Manu directly via the Contact page." };
    };

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage: Message = { role: "user", content: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsTyping(true);

        // Hypothetical logging if opted in
        if (privacyOptIn) {
            console.log("Logging transcript for training/qa...");
        }

        // Simulate AI processing and retrieval
        setTimeout(() => {
            const response = findBestResponse(userMessage.content);
            setMessages((prev) => [...prev, { role: "assistant", ...response }]);
            setIsTyping(false);
        }, 1000);
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className={cn(
                    "fixed bottom-6 right-6 z-50 p-4 bg-foreground text-background rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group",
                    isOpen && "hidden"
                )}
                aria-label="Open Assistant"
            >
                <Bot className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            </button>

            {isOpen && (
                <div className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[400px] h-[550px] bg-background border border-border/50 rounded-2xl shadow-2xl flex flex-col animate-in slide-in-from-bottom-5 fade-in duration-300 overflow-hidden">
                    <div className="p-4 border-b border-border bg-muted/30 flex items-center justify-between shrink-0">
                        <div className="flex items-center gap-2">
                            <div className="p-1.5 bg-accent/10 rounded-lg">
                                <Sparkles className="w-4 h-4 text-accent" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-sm">Manu Assistant</h3>
                                <p className="text-xs text-muted-foreground">Ask me about projects or skills</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-1 hover:bg-muted rounded-full transition-colors"
                            aria-label="Close Assistant"
                        >
                            <X className="w-5 h-5 text-muted-foreground" />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-4" ref={scrollRef}>
                        <div className="p-3 bg-accent/5 rounded-lg border border-accent/10 text-xs text-muted-foreground mb-4">
                            <p><strong>Note:</strong> This is a demo. Responses are generated from local project data.</p>
                        </div>
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={cn(
                                    "flex flex-col gap-1 max-w-[85%]",
                                    msg.role === "user" ? "ml-auto items-end" : "items-start"
                                )}
                            >
                                <div className={cn(
                                    "flex gap-3",
                                    msg.role === "user" ? "flex-row-reverse" : ""
                                )}>
                                    <div className={cn(
                                        "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                                        msg.role === "user" ? "bg-muted text-foreground" : "bg-foreground text-background"
                                    )}>
                                        {msg.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                                    </div>
                                    <div className={cn(
                                        "p-3 rounded-2xl text-sm leading-relaxed shadow-sm",
                                        msg.role === "user"
                                            ? "bg-muted text-foreground rounded-tr-sm"
                                            : "bg-background border border-border rounded-tl-sm"
                                    )}>
                                        {msg.content}
                                    </div>
                                </div>
                                {msg.source && (
                                    <Link
                                        href={msg.source.url}
                                        className="ml-11 text-xs text-accent hover:underline flex items-center gap-1 mt-1 bg-accent/5 px-2 py-1 rounded-md w-fit"
                                    >
                                        View Source: {msg.source.title} <ArrowRight className="w-3 h-3" />
                                    </Link>
                                )}
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex gap-3 max-w-[85%]">
                                <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center shrink-0">
                                    <Bot className="w-4 h-4" />
                                </div>
                                <div className="p-4 bg-background border border-border rounded-2xl rounded-tl-sm flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                    <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                    <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce" />
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="p-4 border-t border-border bg-background shrink-0">
                        <form
                            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                            className="relative"
                        >
                            <input
                                type="text"
                                placeholder="Ask about distributed systems..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="w-full bg-muted/30 border border-input rounded-full py-3 pl-4 pr-12 text-sm focus:outline-none focus:ring-1 focus:ring-accent transition-all"
                                aria-label="Chat input"
                            />
                            <Button
                                size="icon"
                                className="absolute right-1 top-1 h-8 w-8 rounded-full"
                                type="submit"
                                disabled={!input.trim() || isTyping}
                                aria-label="Send message"
                            >
                                <Send className="w-4 h-4" />
                            </Button>
                        </form>
                        <div className="mt-2 flex items-center justify-center gap-2">
                            <input
                                type="checkbox"
                                id="privacy-opt-in"
                                checked={privacyOptIn}
                                onChange={(e) => setPrivacyOptIn(e.target.checked)}
                                className="w-3 h-3 accent-accent rounded-sm"
                            />
                            <label htmlFor="privacy-opt-in" className="text-[10px] text-muted-foreground cursor-pointer select-none">
                                Allow transcript logging for quality assurance.
                            </label>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
