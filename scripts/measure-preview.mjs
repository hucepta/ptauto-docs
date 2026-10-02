import { chromium } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
const origin = process.env.PREVIEW_URL || 'http://127.0.0.1:4321';
const output = resolve(process.env.QA_DIR || '../PTAUTO_DOCS_QA');
await mkdir(output, { recursive: true });
const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
await context.addInitScript(() => {
  window.ptautoMetrics = { lcp: 0, cls: 0 };
  new PerformanceObserver(list => { for (const item of list.getEntries()) window.ptautoMetrics.lcp = item.startTime; }).observe({ type: 'largest-contentful-paint', buffered: true });
  new PerformanceObserver(list => { for (const item of list.getEntries()) if (!item.hadRecentInput) window.ptautoMetrics.cls += item.value; }).observe({ type: 'layout-shift', buffered: true });
});
const page = await context.newPage();
const pages = [];
try {
  for (const [route, name] of [['/', 'home-desktop'], ['/hoc/autolisp/list-association-list/', 'reader-desktop'], ['/tra-cuu/', 'reference-desktop']]) {
    await page.goto(origin + route);
    await page.getByRole('heading', { level: 1 }).waitFor();
    await page.screenshot({ path: resolve(output, name + '.png'), fullPage: true });
    pages.push({ route, ...await page.evaluate(() => window.ptautoMetrics) });
  }
  await page.goto(origin + '/tim-kiem/?q=list');
  const results = page.getByRole('list', { name: 'Kết quả tìm kiếm' });
  await results.getByRole('link', { name: 'List', exact: true }).waitFor();
  const start = await page.evaluate(() => performance.now());
  await page.getByRole('searchbox').fill('assoc');
  await page.waitForFunction(() => new URL(location.href).searchParams.get('q') === 'assoc' && document.querySelector('[data-search-status]')?.textContent !== 'Đang tìm…');
  await results.getByRole('link', { name: 'assoc', exact: true }).waitFor();
  const searchMs = (await page.evaluate(() => performance.now())) - start;
  await page.setViewportSize({ width: 360, height: 780 });
  await page.goto(origin + '/hoc/autolisp/list-association-list/');
  await page.screenshot({ path: resolve(output, 'reader-mobile.png'), fullPage: true });
  await page.goto(origin + '/');
  await page.screenshot({ path: resolve(output, 'home-mobile.png'), fullPage: true });
  const corpus = await (await page.request.get(origin + '/catalog.json')).json();
  const report = { measuredAt: new Date().toISOString(), browser: browser.version(), viewport: '1440 x 1000', network: 'localhost, không giới hạn CPU/network', corpus: { articles: corpus.pages.length, courses: corpus.courses.length }, pages, warmSearchInputToResultMs: Math.round(searchMs), note: 'Một lượt đo lab trên máy hiện tại; không phải dữ liệu người dùng thực.' };
  await writeFile(resolve(output, 'metrics.json'), JSON.stringify(report, null, 2) + '\n');
  console.log(JSON.stringify(report));
} finally {
  await browser.close();
}
