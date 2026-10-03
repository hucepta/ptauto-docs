import { expect, test } from '@playwright/test';
test('reload_restores_progress_and_bookmark', async ({ page }) => {
    await page.goto('/hoc/autolisp/bieu-thuc-evaluation/');
    await page.getByRole('button', { name: 'Lưu bài', exact: true }).click();
    await page.getByRole('button', { name: 'Đánh dấu hoàn thành', exact: true }).click();
    await page.reload();
    await expect(page.getByRole('button', { name: 'Đã lưu', exact: true })).toHaveAttribute('aria-pressed', 'true');
    await expect(page.getByRole('button', { name: 'Đã hoàn thành', exact: true })).toHaveAttribute('aria-pressed', 'true');
    await page.goto('/da-luu/');
    await expect(page.getByRole('link', { name: 'Biểu thức và evaluation', exact: true })).toBeVisible();
    await page.goto('/tiep-tuc-hoc/');
    await expect(page.getByRole('link', { name: 'Tiếp tục: Biến và kiểu dữ liệu', exact: true })).toBeVisible();
});
test('explicit_completion_only', async ({ page }) => {
    await page.goto('/hoc/autolisp/list-association-list/');
    await expect(page.getByRole('button', { name: 'Đánh dấu hoàn thành', exact: true })).toHaveAttribute('aria-pressed', 'false');
    await page.goto('/hoc/autolisp/');
    await expect(page.locator('[data-course-progress]')).toContainText(/^0 \/ \d+ bài/);
});
test('two_tabs_update_different_lessons', async ({ page, context }) => {
    await page.goto('/hoc/autolisp/bieu-thuc-evaluation/');
    const other = await context.newPage();
    await other.goto('/hoc/autolisp/bien-kieu-du-lieu/');
    await page.getByRole('button', { name: 'Đánh dấu hoàn thành', exact: true }).click();
    await other.getByRole('button', { name: 'Đánh dấu hoàn thành', exact: true }).click();
    await page.goto('/hoc/autolisp/');
    await expect(page.locator('[data-course-progress]')).toContainText(/^2 \/ \d+ bài/);
    await other.close();
});
test('corrupt_or_denied_storage_keeps_reader', async ({ page }) => {
    await page.addInitScript(() => { Object.defineProperty(window, 'localStorage', { get() { throw new Error('denied'); } }); });
    await page.goto('/hoc/autolisp/bieu-thuc-evaluation/');
    await page.getByRole('button', { name: 'Đánh dấu hoàn thành', exact: true }).click();
    await expect(page.locator('[data-storage-status]')).toContainText('Chưa lưu được trên thiết bị');
    await expect(page.getByRole('heading', { name: 'Biểu thức và evaluation', exact: true })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Đã hoàn thành', exact: true })).toHaveAttribute('aria-pressed', 'true');
});
