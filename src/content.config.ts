import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
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

export const collections = { articles };
