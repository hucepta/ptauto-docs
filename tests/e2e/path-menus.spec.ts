import { test, expect } from '@playwright/test';

for (const width of [390, 1280]) {
  test(`path menus keep their backdrop and contain scrolling at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 800 });
    await page.goto('/hoc/autolisp/autolisp-trong-autocad/');
    const pickers = page.locator('[data-path-picker]');
    for (const index of [0, 1]) {
      const picker = pickers.nth(index);
      await picker.locator('summary').click();
      await expect(picker).toHaveAttribute('open', '');
      await expect(picker).not.toHaveAttribute('style', /overflow: hidden/);
      const backdrop = picker.locator('.path-backdrop');
      const before = await backdrop.evaluate(el => getComputedStyle(el).backgroundColor);
      await page.mouse.move(width - 10, 100);
      await expect(backdrop).toHaveCSS('background-color', before);
      await expect(page.locator('html')).toHaveCSS('overflow', 'hidden');
      await expect(picker.locator('.path-panel')).toHaveCSS('overscroll-behavior', 'contain');
      const scrollY = await page.evaluate(() => window.scrollY);
      await page.mouse.wheel(0, 600);
      await page.waitForTimeout(100);
      expect(await page.evaluate(() => window.scrollY)).toBe(scrollY);
      await picker.locator('.path-panel-head button').click();
      await expect(picker).not.toHaveAttribute('open');
      await expect(page.locator('html')).not.toHaveCSS('overflow', 'hidden');
    }
  });
}
