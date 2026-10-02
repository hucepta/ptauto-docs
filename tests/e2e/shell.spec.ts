import { test, expect } from '@playwright/test';
test('shell_reads_without_javascript', async ({ browser }) => {
    const context = await browser.newContext({ javaScriptEnabled: false });
    const page = await context.newPage();
    await page.goto('http://127.0.0.1:4321/');
    await expect(page.locator('html')).toHaveAttribute('lang', 'vi');
    await expect(page.getByRole('main')).toHaveCount(1);
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Từ thao tác đến thuật toán.');
    await expect(page.getByRole('link', { name: 'AutoLISP', exact: true }).first()).toBeVisible();
    await context.close();
});
