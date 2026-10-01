import { defineCollection } from 'astro:content';
import { mediumLoader } from './lib/medium';

const blog = defineCollection({
	loader: mediumLoader({ username: import.meta.env.MEDIUM_USERNAME }),
});

export const collections = { blog };
