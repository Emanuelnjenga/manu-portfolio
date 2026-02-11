"use client";

/**
 * NexuM Labs Analytics Utility
 * 
 * Provides a unified data layer for event tracking across the platform.
 * Supports GA4 fallback and console logging in development.
 */

export type AnalyticsEvent =
    | "cta_click"
    | "form_submit"
    | "form_success"
    | "modal_open"
    | "case_study_view"
    | "pricing_click"
    | "scroll_depth"
    | "hero_variant_view";

interface EventProperties {
    label?: string;
    category?: string;
    value?: number;
    path?: string;
    variant?: "A" | "B";
    [key: string]: any;
}

export const trackEvent = (eventName: AnalyticsEvent, props: EventProperties = {}) => {
    const isDev = process.env.NODE_ENV === "development";
    const gaId = process.env.NEXT_PUBLIC_GA_ID;

    const eventData = {
        ...props,
        path: typeof window !== "undefined" ? window.location.pathname : undefined,
        timestamp: new Date().toISOString(),
    };

    // 1. Console Log (Dev/Fallback)
    if (isDev || !gaId) {
        console.groupCollapsed(`[Analytics] ${eventName}`);
        console.log(eventData);
        console.groupEnd();
    }

    // 2. Google Analytics (GA4)
    if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", eventName, eventData);
    }
};
