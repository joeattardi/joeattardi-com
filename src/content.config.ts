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
        publishedDate: z.string(),
        tags: z.array(z.string()),
        featured: z.boolean().optional()
    })
});

const books = defineCollection({
    loader: glob({ base: './src/content/books', pattern: '*.md' }),
    schema: z.object({
        title: z.string(),
        cover: z.string(),
        publisher: z.string(),
        year: z.number(),
        href: z.url(),
        summary: z.string()
    })
});

export const collections = { articles, books };
