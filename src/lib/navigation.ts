/**
 * Navigation Configuration for NexuM Labs
 * 
 * This file defines the single source of truth for site navigation.
 * Organized by primary audience flows: Work → Solutions → Insights → Company
 */

export interface NavItem {
    title: string;
    href: string;
    description?: string;
    children?: NavItem[];
    external?: boolean;
}

export const NAVIGATION: NavItem[] = [
    {
        title: "Work",
        href: "/#services",
        description: "Services and projects we deliver",
        children: [
            { title: "Services", href: "/#services" },
            { title: "Case Studies", href: "/#case-studies" },
            { title: "AI & Automation", href: "/ai-automation" },
            { title: "System Design", href: "/system-design" },
        ]
    },
    {
        title: "Solutions",
        href: "/enterprise",
        description: "Packaged offerings for different needs",
        children: [
            { title: "Enterprise", href: "/enterprise" },
            { title: "Startups", href: "/startups" },
            { title: "Partners", href: "/partnerships" },
            { title: "Pricing", href: "/pricing" },
        ]
    },
    {
        title: "Insights",
        href: "/insights",
        description: "Thought leadership and community",
        children: [
            { title: "Blog", href: "/insights" },
            { title: "Community", href: "/community" },
        ]
    },
    {
        title: "Company",
        href: "/company",
        description: "About us, governance, and credibility",
        children: [
            { title: "About", href: "/company" },
            { title: "Investors", href: "/investors" },
            { title: "Press", href: "/press" },
            { title: "Careers", href: "/careers" },
            { title: "Legal", href: "/legal/privacy" },
        ]
    },
];

export const UTILITY_LINKS = [
    { title: "GitHub", href: "https://github.com/yourusername", external: true },
    { title: "LinkedIn", href: "https://linkedin.com/in/yourprofile", external: true },
];

export const PRIMARY_CTA = {
    title: "Start a Conversation",
    href: "/contact",
    trackingEvent: "header_cta_click",
};

export const FOOTER_SECTIONS = [
    {
        title: "Work",
        links: [
            { title: "Services", href: "/#services" },
            { title: "Case Studies", href: "/#case-studies" },
            { title: "AI & Automation", href: "/ai-automation" },
            { title: "System Design", href: "/system-design" },
        ]
    },
    {
        title: "Solutions",
        links: [
            { title: "Enterprise", href: "/enterprise" },
            { title: "Startups", href: "/startups" },
            { title: "Partners", href: "/partnerships" },
            { title: "Pricing", href: "/pricing" },
        ]
    },
    {
        title: "Insights",
        links: [
            { title: "Blog", href: "/insights" },
            { title: "Community", href: "/community" },
            { title: "Global Reach", href: "/global" },
            { title: "Performance", href: "/performance" },
        ]
    },
    {
        title: "Company",
        links: [
            { title: "About", href: "/company" },
            { title: "Investors", href: "/investors" },
            { title: "Press", href: "/press" },
            { title: "Careers", href: "/careers" },
            { title: "Legal", href: "/legal/privacy" },
            { title: "Security", href: "/legal/security" },
        ]
    },
];
