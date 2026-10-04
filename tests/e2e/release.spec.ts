import { expect, test } from '@playwright/test';
import { spawn, spawnSync, type ChildProcess } from 'node:child_process';
let server: ChildProcess;
const output = 'test-results/base-dist';
test.beforeAll(async () => {
    test.setTimeout(120000);
    const env = { ...process.env, BUILD_DIR: output, SITE_BASE: '/ptauto-docs/' };
    for (const args of [['scripts/astro.mjs', 'build'], ['scripts/build-search.mjs'], ['scripts/verify-artifact.mjs']]) {
        const result = spawnSync(process.execPath, args, { env, encoding: 'utf8', timeout: 60000 });
        if (result.status !== 0)
            throw new Error(result.stdout + result.stderr);
    }
    server = spawn(process.execPath, ['scripts/serve.mjs'], { env: { ...env, PORT: '4323' }, stdio: 'ignore' });
    await expect.poll(async () => { try {
        return (await fetch('http://127.0.0.1:4323/ptauto-docs/')).status;
    }
    catch {
        return 0;
    } }, { timeout: 8000 }).toBe(200);
});
test.afterAll(() => server?.kill());
test('search_and_reader_deep_links_work_under_base', async ({ page }) => {
    await page.goto('http://127.0.0.1:4323/ptauto-docs/hoc/autolisp/list-association-list/');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('List và cặp khóa');
    await page.getByRole('link', { name: 'List', exact: true }).first().click();
    await expect(page).toHaveURL(/4323\/ptauto-docs\/tra-cuu\/autolisp\/list\//);
    await page.goto('http://127.0.0.1:4323/ptauto-docs/tim-kiem/?q=danh%20sach');
    const link = page.getByRole('list', { name: 'Kết quả tìm kiếm' }).getByRole('link', { name: 'List', exact: true });
    await expect(link).toHaveAttribute('href', '/ptauto-docs/tra-cuu/autolisp/list/');
    await link.click();
    await page.getByRole('button', { name: 'Đánh dấu', exact: true }).click();
    await page.goto('http://127.0.0.1:4323/ptauto-docs/da-luu/');
    await expect(page.getByRole('link', { name: 'List', exact: true })).toHaveAttribute('href', '/ptauto-docs/tra-cuu/autolisp/list/');
});
test('all_published_links_resolve', async ({ request }) => {
    const response = await request.get('/search-records.json');
    const source = await response.json() as {
        records: {
            url: string;
        }[];
    };
    for (const record of source.records) {
        const result = await request.get(record.url);
        expect(result.status(), record.url).toBe(200);
    }
});
test('new_technical_lessons_link_to_projects_under_base', async ({ page, request }) => {
    const origin = 'http://127.0.0.1:4323/ptauto-docs';
    for (const path of ['/hoc/autocad-dotnet/cad-utility-geometry-civil/', '/hoc/civil3d-dotnet/plugin-civil-kiem-ke-qa-qc/']) {
        await page.goto(origin + path);
        const links = await page.locator('main a[href*="/du-an/"]').evaluateAll(els => els.map(element => (element as HTMLAnchorElement).href));
        expect(links.length, path).toBeGreaterThan(0);
        for (const link of links) {
            expect(link).toContain(origin + '/du-an/');
            expect((await request.get(link)).status()).toBe(200);
        }
    }
});
