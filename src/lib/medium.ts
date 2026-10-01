import type { Loader } from 'astro/loaders';
import { z } from 'astro/zod';
import { XMLParser } from 'fast-xml-parser';

const feedUrl = (username: string) => `https://medium.com/feed/@${username.replace(/^@/, '')}`;

export const mediumPostSchema = z.object({
	title: z.string(),
	url: z.string().url(),
	pubDate: z.coerce.date(),
	updatedDate: z.coerce.date().optional(),
	author: z.string().optional(),
	categories: z.array(z.string()),
	thumbnail: z.string().optional(),
	excerpt: z.string(),
	readingTime: z.number(),
});

export type MediumPost = z.infer<typeof mediumPostSchema>;

type RssItem = {
	title: string;
	link: string;
	guid?: string | { '#text': string };
	category?: string | string[];
	'dc:creator'?: string;
	pubDate: string;
	'atom:updated'?: string;
	'content:encoded'?: string;
};

const slugFromUrl = (url: string) => new URL(url).pathname.split('/').filter(Boolean).pop() ?? url;

const cleanUrl = (url: string) => {
	const u = new URL(url);
	u.search = '';
	return u.toString();
};

const cleanContent = (html: string) => html.replace(/<img[^>]+medium\.com\/_\/stat[^>]*>/g, '');

const stripHtml = (html: string) =>
	html
		.replace(/<(figure|figcaption|pre|h[1-6])[\s\S]*?<\/\1>/g, ' ')
		.replace(/<[^>]+>/g, ' ')
		.replace(/&nbsp;/g, ' ')
		.replace(/&amp;/g, '&')
		.replace(/&#39;|&#x27;/g, "'")
		.replace(/&quot;/g, '"')
		.replace(/\s+/g, ' ')
		.trim();

const excerptOf = (text: string, max = 180) => (text.length <= max ? text : `${text.slice(0, max).replace(/\s+\S*$/, '')}…`);

const firstImage = (html: string) => html.match(/<img[^>]+src="([^"]+)"/)?.[1];

export function mediumLoader({ username }: { username: string | undefined }): Loader {
	return {
		name: 'medium-loader',
		schema: mediumPostSchema,
		async load({ store, logger, parseData, generateDigest }) {
			if (!username) {
				logger.warn('MEDIUM_USERNAME belum diset di .env — koleksi blog dibiarkan kosong.');
				store.clear();
				return;
			}

			let xml: string;
			try {
				const res = await fetch(feedUrl(username), { headers: { 'User-Agent': 'Mozilla/5.0 (compatible; astro-medium-loader)' } });
				if (!res.ok) throw new Error(`HTTP ${res.status}`);
				xml = await res.text();
			} catch (err) {
				logger.warn(`Gagal mengambil feed Medium @${username}: ${(err as Error).message}`);
				return;
			}

			const parser = new XMLParser({ ignoreAttributes: false, isArray: (name) => name === 'item' || name === 'category' });
			const items: RssItem[] = parser.parse(xml)?.rss?.channel?.item ?? [];

			store.clear();
			for (const item of items) {
				const content = cleanContent(item['content:encoded'] ?? '');
				const text = stripHtml(content);
				const id = slugFromUrl(item.link);

				const data = await parseData({
					id,
					data: {
						title: item.title,
						url: cleanUrl(item.link),
						pubDate: item.pubDate,
						updatedDate: item['atom:updated'],
						author: item['dc:creator'],
						categories: [item.category ?? []].flat(),
						thumbnail: firstImage(content),
						excerpt: excerptOf(text),
						readingTime: Math.max(1, Math.round(text.split(' ').length / 200)),
					},
				});

				store.set({ id, data, rendered: { html: content }, digest: generateDigest(content) });
			}

			logger.info(`Memuat ${items.length} artikel dari Medium @${username}`);
		},
	};
}
