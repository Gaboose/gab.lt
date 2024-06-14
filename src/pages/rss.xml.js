import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const comics = (await getCollection("comics")).filter((e) => !e.data.hidden);
  return rss({
    title: 'Astro Learner | Blog',
    description: 'My journey learning Astro',
    site: context.site,
    items: comics.map((comic) => ({
      title: comic.data.title,
      pubDate: comic.data.pubDate,
      description: comic.data.alt,
      link: `/${comic.slug}/`,
    })),
  });
}