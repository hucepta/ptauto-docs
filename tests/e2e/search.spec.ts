import { expect, test } from '@playwright/test';
test('search_page_remains_available_without_header_search', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('navigation', { name: 'Điều hướng chính' }).getByRole('link', { name: 'Tìm kiếm', exact: true })).toHaveCount(0);
    await page.goto('/tim-kiem/');
    await page.getByRole('searchbox').fill('danh sach');
    await page.getByRole('button', { name: 'Tìm kiếm', exact: true }).click();
    await expect(page.getByRole('list', { name: 'Kết quả tìm kiếm' }).getByRole('link', { name: 'List', exact: true })).toBeVisible();
});
test('slash_shortcut_does_not_open_removed_header_search', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('/');
    await expect(page).toHaveURL(/\/$/);
});
test('published_queries_and_filters', async ({ page }) => {
    await page.goto('/tim-kiem/?q=doi%20tuong');
    await expect(page.getByRole('list', { name: 'Kết quả tìm kiếm' })).toContainText('ssget');
    await page.getByRole('searchbox').fill('vl-load-com');
    await expect(page.getByRole('list', { name: 'Kết quả tìm kiếm' })).toContainText('vl-load-com');
    await page.getByLabel('Mảng kiến thức').selectOption('autolisp');
    await page.getByRole('searchbox').fill('ssget');
    await page.getByRole('button', { name: 'Tìm kiếm', exact: true }).click();
    await expect(page.getByRole('list', { name: 'Kết quả tìm kiếm' }).getByRole('link', { name: 'ssget', exact: true })).toBeVisible();
    const kinds = await page.locator('.result-kind').allTextContents();
    expect(kinds.length).toBeGreaterThan(0);
    expect(kinds.every(kind => kind.endsWith(' · autolisp'))).toBe(true);
});
test('each_technology_can_find_its_canonical_reference', async ({ page, request }) => {
    const catalog = await (await request.get('/catalog.json')).json() as { pages: { id: string; title: string; url: string }[] };
    const queries = [
        ['autolisp', 'trans', 'concept.autolisp.trans'],
        ['visual-lisp-activex', 'Variant SafeArray', 'concept.visual-lisp-activex.variant-safearray'],
        ['autocad-dotnet', 'Transaction', 'concept.autocad-dotnet.transaction'],
        ['civil3d-dotnet', 'TinSurface', 'concept.civil3d-dotnet.tinsurface'],
        ['dynamo-python', 'IN OUT', 'concept.dynamo-python.in-out'],
        ['gis-data-automation', 'GeoJSON GeoPackage', 'concept.gis-data-automation.geojson-geopackage'],
    ];
    for (const [technology, query, id] of queries) {
        const reference = catalog.pages.find(entry => entry.id === id);
        expect(reference, id).toBeTruthy();
        await page.goto('/tim-kiem/');
        await page.getByLabel('Mảng kiến thức').selectOption(technology);
        await page.getByRole('searchbox').fill(query);
        await page.getByRole('button', { name: 'Tìm kiếm', exact: true }).click();
        await expect(page.getByRole('list', { name: 'Kết quả tìm kiếm' }).getByRole('link', { name: reference!.title, exact: true })).toHaveAttribute('href', reference!.url);
    }
});
for (const [query, title] of [['toa do', 'List'], ['dong bang', 'ssget']]) {
    test('unaccented_query_' + query + '_finds_canonical_production_content', async ({ page }) => {
        await page.goto('/tim-kiem/');
        await page.getByRole('searchbox').fill(query);
        await page.getByRole('button', { name: 'Tìm kiếm', exact: true }).click();
        await expect(page.getByRole('list', { name: 'Kết quả tìm kiếm' }).getByRole('link', { name: title, exact: true })).toBeVisible();
    });
}
test('index_load_error_can_retry', async ({ page }) => {
    let block = true;
    await page.route('**/pagefind/**', route => block ? route.abort() : route.continue());
    await page.goto('/tim-kiem/?q=list');
    await expect(page.getByRole('button', { name: 'Thử lại' })).toBeVisible();
    block = false;
    await page.getByRole('button', { name: 'Thử lại' }).click();
    await expect(page.getByRole('list', { name: 'Kết quả tìm kiếm' })).toContainText('List');
});
test('excerpt_does_not_execute_markup', async ({ page }) => {
    await page.goto('/tim-kiem/?q=%3Cimg%20src%3Dx%20onerror%3Dalert(1)%3E');
    await expect(page.getByRole('status', { name: 'Trạng thái tìm kiếm' })).not.toContainText('Đang tìm');
    await expect(page.locator('[data-search-results] img')).toHaveCount(0);
});
