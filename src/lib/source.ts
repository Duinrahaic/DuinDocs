import { docs, dollymanager, fitosc } from '@/.source';
import { loader } from 'fumadocs-core/source';

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  // it assigns a URL to your pages
  baseUrl: '/docs',
  source: docs.toFumadocsSource()
});

export const dollySource = loader({
  baseUrl: '/dollymanager',
  source: dollymanager.toFumadocsSource()
});

export const fitoscSource = loader({
  baseUrl: '/fitosc',
  source: fitosc.toFumadocsSource()
});

