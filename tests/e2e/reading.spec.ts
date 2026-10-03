import { expect, test } from '@playwright/test';
test('learn_to_reference_and_back', async ({ page }) => {
    await page.goto('/hoc/autolisp/list-association-list/');
    await page.getByRole('link', { name: 'List', exact: true }).first().click();
    await expect(page).toHaveURL(/tra-cuu\/autolisp\/list\//);
    await page.getByRole('link', { name: 'List và cặp khóa', exact: true }).click();
    await expect(page).toHaveURL(/hoc\/autolisp\/list-association-list\//);
});
test('glossary_resolves_same_concept', async ({ page }) => {
    await page.goto('/thuat-ngu/');
    await page.getByRole('link', { name: 'List', exact: true }).click();
    await expect(page).toHaveURL(/tra-cuu\/autolisp\/list\//);
});
test('topic_navigation_has_no_chapter_prefix', async ({ page }) => {
    await page.goto('/hoc/autolisp/bieu-thuc-evaluation/');
    await expect(page.getByRole('navigation', { name: 'Nội dung lộ trình' })).toContainText('Ngôn ngữ cơ bản');
    await expect(page.getByRole('navigation', { name: 'Nội dung lộ trình' })).not.toContainText(/Chương\s*\d/);
});
test('keyboard_and_mobile_reader', async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 780 });
    await page.goto('/hoc/autolisp/bieu-thuc-evaluation/');
    await page.keyboard.press('Tab');
    await expect(page.getByRole('link', { name: 'Đến nội dung' })).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page.getByRole('main')).toBeFocused();
    await expect(page.getByRole('navigation', { name: 'Điều hướng chính' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Mở điều hướng' })).toHaveCount(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
});
test('reader_without_javascript', async ({ browser }) => {
    const context = await browser.newContext({ javaScriptEnabled: false });
    const page = await context.newPage();
    await page.goto('http://127.0.0.1:4321/hoc/autolisp/bieu-thuc-evaluation/');
    await expect(page.getByRole('heading', { name: 'Đọc biểu thức', exact: true })).toBeVisible();
    await page.getByRole('link', { name: 'Bài sau →', exact: true }).click();
    await expect(page).toHaveURL(/bien-kieu-du-lieu/);
    await context.close();
});
test('long_code_wraps_and_mobile_reader_starts_with_the_article', async ({ page }) => {
    for (const width of [1226, 390]) {
        await page.setViewportSize({ width, height: 890 });
        await page.goto('/hoc/autolisp/ham-dieu-kien-vong-lap/');
        const pre = page.locator('.code-example pre');
        await expect(pre).toBeVisible();
        expect(await pre.evaluate(element => element.scrollWidth <= element.clientWidth)).toBe(true);
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
        if (width === 390) await expect(page.locator('.course-nav')).not.toHaveAttribute('open', '');
    }
});
