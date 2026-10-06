import { test, expect } from '@playwright/test';

for (const width of [390, 1280]) {
  test(`path menus allow outside page scrolling and contain their list at ${width}px`, async ({ page }) => {
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
      const list = picker.locator('.path-panel-scroll');
      if (await list.evaluate(el => el.scrollHeight > el.clientHeight)) {
        await list.hover();
        const beforePageScroll = await page.evaluate(() => window.scrollY);
        await page.mouse.wheel(0, 300);
        await expect.poll(() => list.evaluate(el => el.scrollTop)).toBeGreaterThan(0);
        expect(await page.evaluate(() => window.scrollY)).toBe(beforePageScroll);
      }
      const scrollY = await page.evaluate(() => window.scrollY);
      await page.mouse.move(width - 10, 100);
      await page.mouse.wheel(0, 600);
      await expect.poll(() => page.evaluate(() => window.scrollY)).toBeGreaterThan(scrollY);
      await page.keyboard.press('Escape');
      await expect(picker).not.toHaveAttribute('open');
      await page.evaluate(() => window.scrollTo(0, 0));
    }
  });
}
