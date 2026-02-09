import { PROJECTS, SKILLS } from './data';

export interface PersonSchema {
    '@context': string;
    '@type': string;
    name: string;
    jobTitle: string;
    url: string;
    email: string;
    sameAs: string[];
    knowsAbout: string[];
    alumniOf?: {
        '@type': string;
        name: string;
    };
}

export interface ProfilePageSchema {
    '@context': string;
    '@type': string;
    dateCreated: string;
    dateModified: string;
    mainEntity: PersonSchema;
}

export function generatePersonSchema(): PersonSchema {
    const skills = SKILLS.flatMap(s => s.items);

    return {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Manu',
        jobTitle: 'Senior Software Engineer',
        url: 'https://manu.dev',
        email: 'hello@manu.dev',
        sameAs: [
            'https://github.com/manu',
            'https://linkedin.com/in/manu',
            'https://twitter.com/manu'
        ],
        knowsAbout: skills,
    };
}

export function generateProfilePageSchema(): ProfilePageSchema {
    return {
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        dateCreated: '2024-01-01',
        dateModified: new Date().toISOString().split('T')[0],
        mainEntity: generatePersonSchema(),
    };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}

export function generateArticleSchema(article: {
    title: string;
    description: string;
    publishedDate: string;
    modifiedDate?: string;
    author: string;
    url: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.description,
        datePublished: article.publishedDate,
        dateModified: article.modifiedDate || article.publishedDate,
        author: {
            '@type': 'Person',
            name: article.author,
            url: 'https://manu.dev',
        },
        publisher: {
            '@type': 'Person',
            name: article.author,
            url: 'https://manu.dev',
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': article.url,
        },
    };
}
