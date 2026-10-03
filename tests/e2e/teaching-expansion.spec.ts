import { expect, test } from '@playwright/test';

test('reference_sections_show_links_and_substantial_catalogs', async ({ page }) => {
  await page.goto('/tra-cuu/');
  const groups = page.locator('.reference-course-card');
  await expect(groups).toHaveCount(6);
  for (const group of await groups.all()) {
    await expect(group.locator('.reference-preview a')).toHaveCount(7);
    const count = Number((await group.locator('.reference-all').innerText()).match(/\d+/)?.[0]);
    expect(count).toBeGreaterThanOrEqual(60);
  }
});

test('home_author_badges_and_navigation', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.primary-nav [aria-current="page"]')).toHaveCount(0);
  await expect(page.locator('.knowledge-badge')).toHaveCount(6);
  await expect(page.locator('.knowledge-status')).toHaveCount(6);
  await expect(page.locator('.home-footer')).toContainText('Phạm Tuấn Anh');
  await expect(page.locator('.home-footer a[href="mailto:0103466@st.huce.edu.vn"]')).toHaveCount(1);
});

test('lesson_has_real_image_caption_below_and_unified_footer', async ({ page }) => {
  await page.goto('/hoc/autolisp/list-association-list/');
  const figure = page.locator('.teaching-image').first();
  await expect(figure.locator('img')).toBeVisible();
  expect(await figure.locator('img').evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 100)).toBe(true);
  const imageBox = await figure.locator('img').boundingBox();
  const captionBox = await figure.locator('figcaption').boundingBox();
  expect(captionBox!.y).toBeGreaterThan(imageBox!.y + imageBox!.height);
  await expect(page.locator('.lesson-end [data-bookmark]')).toHaveCount(1);
  await expect(page.locator('.lesson-end .lesson-pager')).toHaveCount(1);
  await expect(page.locator('.lesson-end a[href="/"]').first()).toHaveText('Về trang chủ');
});
