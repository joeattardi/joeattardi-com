import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const blog = await getCollection('blog');

    return rss({
        title: "Joe Attardi's Blog",
        description: 'Thoughts on technology and software development',
        site: context.site,
        items: blog.map((post) => ({
            title: post.data.title,
            author: 'Joe Attardi',
            pubDate: post.data.pubDate,
            description: post.data.description,
            link: `/blog/${post.slug}`
        }))
    });
}
