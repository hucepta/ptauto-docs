import { test, expect } from '@playwright/test';

test('compact_reader_keeps_content_space_and_visible_navigation', async ({ page }) => {
  for (const width of [320, 390, 768, 845]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto('/hoc/visual-lisp-activex/object-model-collections/');
    await expect(page.locator('.toc details')).not.toHaveAttribute('open', '');
    expect(await page.locator('.reader-article').evaluate(el => el.getBoundingClientRect().width)).toBeGreaterThan(width * .85);
    expect(await page.locator('.primary-nav').evaluate(el => el.scrollWidth <= el.clientWidth)).toBe(true);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.locator('.toc summary').click();
    await expect(page.locator('.toc details')).toHaveAttribute('open', '');
    const link = page.locator('.toc a[href^="#"]').nth(2);
    const hash = await link.getAttribute('href');
    await link.click();
    await expect(page.locator('.toc details')).not.toHaveAttribute('open', '');
    await expect.poll(async () => page.locator(hash!).evaluate(el => el.getBoundingClientRect().top)).toBeGreaterThan(await page.locator('.toc').evaluate(el => el.getBoundingClientRect().bottom));
  }
});

test('home_boxes_have_spacing_rounding_and_author_contact', async ({ page }) => {
  await page.goto('/');
  for (const selector of ['.knowledge-card', '.home-project-grid a', '.reference-groups a']) {
    for (const box of await page.locator(selector).all()) expect(await box.evaluate(el => parseFloat(getComputedStyle(el).borderRadius))).toBeGreaterThan(0);
  }
  expect(await page.locator('.reference-groups').evaluate(el => parseFloat(getComputedStyle(el).gap))).toBeGreaterThan(0);
  await expect(page.locator('.home-footer')).not.toContainText('Tôi xây trang web');
  await expect(page.locator('.home-footer')).toContainText('Email:');
  await expect(page.locator('.home-footer')).toContainText('SĐT: 0973203858');
});

test('all_page_templates_fit_small_and_tablet_screens', async ({ page }) => {
  test.setTimeout(90000);
  const routes=['/', '/hoc/autolisp/', '/hoc/autolisp/bat-dau-autolisp/', '/tra-cuu/', '/tra-cuu/autolisp/', '/tra-cuu/autolisp/ssget/', '/thuat-ngu/', '/du-an/', '/du-an/autolisp/cad-utility-bao-cao/', '/da-luu/', '/tim-kiem/?q=list'];
  for(const width of [320,390,768,845,1280]){
    await page.setViewportSize({width,height:900});
    for(const route of routes){
      const response = await page.goto(route);
      expect(response?.ok(), route).toBe(true);
      expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),width+' '+route).toBe(true);
      for(const box of await page.locator('.project-group, .project-aspect, .lesson-overview, .exercise, .teaching-image, .code-example, .article-end, .map-section, .reference-course-card').all()){
        expect(await box.evaluate(el=>parseFloat(getComputedStyle(el).borderRadius)),route).toBeGreaterThan(0);
      }
    }
  }
});
