"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/Button";
import Link from "next/link";
import { X } from "lucide-react";

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            setTimeout(() => setIsVisible(true), 2000);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setIsVisible(false);
    };

    const rejectCookies = () => {
        localStorage.setItem("cookie-consent", "rejected");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50 animate-in slide-in-from-bottom-5">
            <div className="bg-background border-2 border-border rounded-xl shadow-2xl p-6">
                <div className="flex items-start justify-between mb-4">
                    <h3 className="font-bold text-lg">Cookie Preferences</h3>
                    <button
                        onClick={rejectCookies}
                        className="p-1 hover:bg-muted rounded-lg transition-colors"
                        aria-label="Close"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                    We use essential cookies to ensure our site works properly and analytics cookies to understand how you use our site. Read our{" "}
                    <Link href="/legal/privacy" className="text-accent hover:underline">
                        Privacy Policy
                    </Link>
                    .
                </p>
                <div className="flex gap-3">
                    <Button onClick={acceptCookies} size="sm" className="flex-1">
                        Accept All
                    </Button>
                    <Button onClick={rejectCookies} variant="outline" size="sm" className="flex-1">
                        Essential Only
                    </Button>
                </div>
            </div>
        </div>
    );
}
