import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/config';
import { cmsClient } from '@/lib/cms';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const routes = [
        '',
        '/about',
        '/process',
        '/faq',
        '/contact',
        '/legal/privacy',
        '/legal/terms',
    ].map((route) => ({
        url: `${siteConfig.url}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    const caseStudies = await cmsClient.getCaseStudies();
    const caseStudyRoutes = caseStudies.map((study) => ({
        url: `${siteConfig.url}/case-studies/${study.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }));

    return [...routes, ...caseStudyRoutes];
}
