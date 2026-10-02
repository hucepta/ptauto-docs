import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
for (const route of ['/', '/hoc/autolisp/list-association-list/', '/tra-cuu/autolisp/assoc/', '/tim-kiem/?q=list', '/da-luu/']) {
    test('reader_has_no_serious_accessibility_violations ' + route, async ({ page }) => {
        await page.goto(route);
        const result = await new AxeBuilder({ page }).analyze();
        expect(result.violations.filter(v => v.impact === 'serious' || v.impact === 'critical')).toEqual([]);
        await expect(page.locator('main')).toHaveCount(1);
        await expect(page.locator('h1')).toHaveCount(1);
    });
}
test('responsive_reader_and_visual_evidence', async ({ page }) => {
    await page.goto('/');
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.screenshot({ path: 'test-results/visual/home-desktop.png', fullPage: true });
    await page.goto('/hoc/autolisp/list-association-list/');
    await page.screenshot({ path: 'test-results/visual/reader-desktop.png', fullPage: true });
    for (const width of [360, 768, 1024]) {
        await page.setViewportSize({ width, height: 900 });
        await page.reload();
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    }
    await page.setViewportSize({ width: 360, height: 780 });
    await page.reload();
    await page.screenshot({ path: 'test-results/visual/reader-mobile.png', fullPage: true });
});
