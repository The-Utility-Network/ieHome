import type { MetadataRoute } from 'next';
import { LOCATIONS, INITIATIVES, COMPARISONS } from '@/data/seo';
import { CHAPTERS } from '@/data/chapters';
import { storylineChapters } from '@/data/storyline';

const baseUrl = 'https://ie.theutilityfoundation.org';

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/docs`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/storyline`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/locations`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/initiatives`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/comparisons`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ];

    // Location pages
    const locationPages: MetadataRoute.Sitemap = LOCATIONS.map((loc) => ({
        url: `${baseUrl}/locations/${loc.slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    // Initiative pages
    const initiativePages: MetadataRoute.Sitemap = INITIATIVES.map((init) => ({
        url: `${baseUrl}/initiatives/${init.slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    // Comparison pages
    const comparisonPages: MetadataRoute.Sitemap = COMPARISONS.map((comp) => ({
        url: `${baseUrl}/comparisons/${comp.slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.5,
    }));

    return [
        ...staticPages,
        ...locationPages,
        ...initiativePages,
        ...comparisonPages,
    ];
}
