import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from 'fumadocs-mdx/config';
import { z } from 'zod';

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.dev/docs/mdx/collections#define-docs
export const dollymanager = defineDocs({
  dir: 'content/dollymanager',
  docs: {
    schema: frontmatterSchema.extend({
      hideTitle: z.boolean().optional(),
      hideDescription: z.boolean().optional(),
    }),
  },
  meta: {
    schema: metaSchema.extend({
      pages: z.array(
        z.union([
          z.string(),
          z.object({
            title: z.string(),
            pages: z.array(z.string()),
          }),
          z.literal('---'),
        ])
      ).optional(),
    }),
  },
});

export const fitosc = defineDocs({
  dir: 'content/fitosc',
  docs: {
    schema: frontmatterSchema.extend({
      hideTitle: z.boolean().optional(),
      hideDescription: z.boolean().optional(),
    }),
  },
  meta: {
    schema: metaSchema,
  },
});

export default defineConfig({
  mdxOptions: {
    // MDX options
  },
});
