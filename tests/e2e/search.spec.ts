import { expect, test } from '@playwright/test';
test('home_query_reaches_search', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('searchbox').fill('danh sach');
    await page.getByRole('button', { name: 'Tìm kiếm', exact: true }).click();
    await expect(page.getByRole('list', { name: 'Kết quả tìm kiếm' }).getByRole('link', { name: 'List', exact: true })).toBeVisible();
});
test('published_queries_and_filters', async ({ page }) => {
    await page.goto('/tim-kiem/?q=doi%20tuong');
    await expect(page.getByRole('list', { name: 'Kết quả tìm kiếm' })).toContainText('ssget');
    await page.getByRole('searchbox').fill('vl-load-com');
    await expect(page.getByRole('list', { name: 'Kết quả tìm kiếm' })).toContainText('vl-load-com');
    await page.getByLabel('Mảng kiến thức').selectOption('autolisp');
    await expect(page.getByRole('status', { name: 'Trạng thái tìm kiếm' })).toContainText('Không có kết quả');
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
