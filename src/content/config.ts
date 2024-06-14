// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// Define a `type` and `schema` for each collection
const comicsCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
      title: z.string(),
      alt: z.string(),
      pubDate: z.date(),
      hidden: z.boolean().optional(),
    })
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  comics: comicsCollection,
};