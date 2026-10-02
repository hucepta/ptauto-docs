import { expect, test } from '@playwright/test';
test('draft_catalog_not_exposed_as_lessons', async ({ page }) => {
    await page.goto('/hoc/');
    await expect(page.getByText('AutoCAD .NET', { exact: true })).toBeVisible();
    await expect(page.locator('a[href$="/hoc/autocad-dotnet/"]')).toHaveCount(0);
    await expect(page.getByText('Đang biên soạn', { exact: true })).toHaveCount(4);
});
test('project_links_resolve_to_published_content', async ({ page }) => {
    await page.goto('/du-an/autolisp/cad-utility/');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('CAD Utility');
    const links = await page.locator('main a[href*="/hoc/"]').evaluateAll(els => els.map(e => (e as HTMLAnchorElement).href));
    expect(links.length).toBeGreaterThan(0);
    for (const link of links)
        expect((await page.request.get(link)).status()).toBe(200);
});
