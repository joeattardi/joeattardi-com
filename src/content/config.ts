import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        author: z.string().optional(),
        // tags: z.array(z.string()),
        image: z.string().optional(),
        imageCredit: z.string().optional(),
        pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional()
    })
});

export const collections = {
    blog: blogCollection
};
