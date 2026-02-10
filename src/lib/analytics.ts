"use client";

type EventName =
    | "hero_cta_click"
    | "contact_open"
    | "form_submit"
    | "case_study_view"
    | "pricing_view"
    | "scroll_depth";

interface EventProperties {
    [key: string]: string | number | boolean;
}

export const analytics = {
    track: (name: EventName, properties?: EventProperties) => {
        // In production, this would send to Google Analytics, Mixpanel, or PostHog
        if (process.env.NEXT_PUBLIC_ANALYTICS_ID) {
            // Example: window.gtag('event', name, properties);
            console.log(`[Analytics] Sending to ${process.env.NEXT_PUBLIC_ANALYTICS_ID}: ${name}`, properties);
        }

        if (process.env.NODE_ENV === "development") {
            console.groupCollapsed(`[Analytics] ${name}`);
            console.log(properties);
            console.groupEnd();
        }
    },

    identify: (userId: string, traits?: EventProperties) => {
        if (process.env.NODE_ENV === "development") {
            console.log(`[Analytics] Identify: ${userId}`, traits);
        }
    }
};
