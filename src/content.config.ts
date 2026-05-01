import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articles = defineCollection({
    loader: glob({ base: './src/content/articles', pattern: '*.json' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        url: z.url(),
        publication: z.string(),
        icon: z.string().optional(),
        publishedDate: z.string(),
        tags: z.array(z.string()),
        featured: z.boolean().optional()
    })
});

const books = defineCollection({
    loader: glob({ base: './src/content/books', pattern: '*.md' }),
    schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        cover: z.string(),
        publisher: z.string(),
        year: z.number(),
        websiteUrl: z.url().optional(),
        summary: z.string(),
        amazonUrl: z.url(),
        buyLinks: z.array(z.object({
            name: z.string(),
            href: z.url()
        })).optional(),
        contents: z.array(z.object({
            title: z.string(),
            description: z.string()
        }))
    })
});

const projects = defineCollection({
    loader: glob({ base: './src/content/projects', pattern: '*.md' }),
    schema: z.object({
        name: z.string(),
        icon: z.string().optional(),
        image: z.string().optional(),
        description: z.string(),
        publisher: z.string().optional(),
        publisherIcon: z.string(),
        tags: z.array(z.string()),
        url: z.url().optional(),
        githubUrl: z.url().optional(),
        featured: z.boolean().optional()
    })
});

export const collections = { articles, books, projects };
