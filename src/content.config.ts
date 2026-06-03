import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

// Three-theme narrative (content-plan.md). A publication's theme is not always
// its raw research area — acceleration papers (STTM, SeaCache) live under
// "Efficient Generative AI" regardless of their underlying area.
const THEMES = [
  'Vision Understanding',
  'Efficient Generative AI',
  'Spatial Intelligence',
] as const;

const publications = defineCollection({
  loader: file('src/data/publications.yaml'),
  schema: z.object({
    title: z.string(),
    // accepted papers state the venue (e.g. "ICCV 2025", "CVPR 2026 (Oral)");
    // under-review/preprint use "preprint (arXiv:XXXX)".
    venue: z.string(),
    year: z.number(),
    status: z.enum(['accepted', 'preprint']),
    theme: z.enum(THEMES),
    date: z.coerce.date(), // for ordering (newest first)
    // Link priority: project page > conference official paper > arXiv.
    urlProject: z.string().url().optional(),
    urlPaper: z.string().url().optional(), // conference/journal official page
    urlPdf: z.string().url().optional(), // arXiv
    tags: z.array(z.string()).default([]),
  }),
});

const products = defineCollection({
  loader: file('src/data/products.yaml'),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    description: z.string(),
    order: z.number(),
    youtubeId: z.string().optional(), // related video to embed
    youtubeStart: z.number().optional(), // start offset in seconds
    image: z.string().optional(), // related image (path under /public)
    imageAlt: z.string().optional(),
    linkUrl: z.string().url().optional(), // related (product) page
    linkLabel: z.string().optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = { publications, products, pages };

export { THEMES };
