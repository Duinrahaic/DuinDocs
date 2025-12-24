import { dollySource, fitoscSource } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

// Create a wrapper that combines all sources
const combinedSource = {
  ...dollySource,
  getPages: () => [
    ...dollySource.getPages(),
    ...fitoscSource.getPages()
  ],
};

export const { GET } = createFromSource(combinedSource, {
  // https://docs.orama.com/docs/orama-js/supported-languages
  language: 'english',
});
