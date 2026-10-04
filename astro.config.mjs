import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  outDir: process.env.BUILD_DIR || './dist',
  site: process.env.SITE_URL || 'http://localhost:4321',
  base: process.env.SITE_BASE || '/',
  trailingSlash: 'always',
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  markdown: { shikiConfig: { theme: 'github-light' } },
});
