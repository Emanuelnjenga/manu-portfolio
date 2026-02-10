export interface CaseStudy {
    slug: string;
    title: string;
    client: string;
    role: string;
    coverImage?: string;
    problem: string;
    solution: string;
    impact: string;
    stack: string[];
    content?: string;
}

export interface Service {
    title: string;
    description: string;
    icon?: string;
}

// Mock Data Store
const CASE_STUDIES: CaseStudy[] = [
    {
        slug: "portfolio-platform",
        title: "Portfolio Platform — NexuM Personal Brand",
        client: "Internal Project",
        role: "Founder & Lead Engineer",
        problem: "Need for a high-performance, minimalist portfolio.",
        solution: "Built a Next.js 15 + Tailwind v4 application.",
        impact: "Reduced TTI by 40%.",
        stack: ["Next.js", "Tailwind CSS"]
    },
    {
        slug: "donation-platform",
        title: "Donation Platform — Sarepta Children’s Rescue Center",
        client: "Sarepta NGO",
        role: "Full Stack Engineer",
        problem: "Manual donation collection caused drop-off.",
        solution: "Implemented Stripe & PayPal webhooks.",
        impact: "Donation volume +28%.",
        stack: ["React", "Node.js"]
    }
];

// CMS Client Stub
export const cmsClient = {
    getCaseStudies: async (): Promise<CaseStudy[]> => {
        // Simulate network delay
        // await new Promise(resolve => setTimeout(resolve, 100));
        return CASE_STUDIES;
    },

    getCaseStudyBySlug: async (slug: string): Promise<CaseStudy | null> => {
        return CASE_STUDIES.find(cs => cs.slug === slug) || null;
    }
};
