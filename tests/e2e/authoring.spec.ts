import { expect, test } from '@playwright/test';
test('knowledge_catalog_covers_the_six_original_technologies', async ({ page, request }) => {
    await page.goto('/');
    const catalog = await (await request.get('/catalog.json')).json() as { courses: { technology: string; title: string; lessonIds: string[] }[]; pages: { technology: string; kind: string; url: string }[] };
    expect(catalog.courses.map(course => course.technology)).toEqual(['autolisp', 'visual-lisp-activex', 'autocad-dotnet', 'civil3d-dotnet', 'dynamo-python', 'gis-data-automation']);
    const topics = page.getByRole('navigation', { name: 'Chủ đề học' });
    for (const course of catalog.courses) {
        await expect(topics.getByRole('link', { name: course.title, exact: true })).toBeVisible();
        expect(course.lessonIds.length, course.title).toBeGreaterThanOrEqual(5);
        expect(catalog.pages.filter(entry => entry.technology === course.technology && entry.kind === 'concept').length, course.title).toBeGreaterThanOrEqual(2);
        const project = catalog.pages.find(entry => entry.technology === course.technology && entry.kind === 'project');
        expect(project, course.title).toBeTruthy();
        expect((await request.get(project!.url)).status()).toBe(200);
    }
    await expect(page.locator('.knowledge-card h3 a')).toContainText(catalog.courses.map(course => course.title));
});
test('project_links_resolve_to_published_content', async ({ page }) => {
    await page.goto('/du-an/autolisp/cad-utility/');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('CAD Utility');
    const links = await page.locator('main a[href*="/hoc/"]').evaluateAll(els => els.map(e => (e as HTMLAnchorElement).href));
    expect(links.length).toBeGreaterThan(0);
    for (const link of links)
        expect((await page.request.get(link)).status()).toBe(200);
});
