import { expect, test } from '@playwright/test';

test('course_entry_and_reader_controls_follow_the_new_learning_flow', async ({ page }) => {
  await page.goto('/hoc/autolisp/');
  await expect(page.locator('[data-course-progress]')).toBeVisible();
  await expect(page.locator('[data-course-start]')).toHaveText('Bắt đầu học');
  await expect(page.getByText('Kết quả đầu tiên:')).toHaveCount(0);
  await page.locator('[data-course-start]').click();
  await expect(page.getByRole('heading', { name: 'Tổng quan', exact: true })).toBeVisible();
  await expect(page.locator('.article-actions-end > *')).toHaveCount(3);
});

test('project_catalog_groups_all_six_tracks_with_guides', async ({ page, request }) => {
  const catalog = await (await request.get('/catalog.json')).json() as { pages: { kind: string; url: string }[] };
  await page.goto('/du-an/');
  await expect(page.locator('.project-group')).toHaveCount(6);
  const projects = catalog.pages.filter(p => p.kind === 'project');
  expect(projects).toHaveLength(19);
  for (const project of projects) {
    await page.goto(project.url);
    await expect(page.getByRole('heading', { name: 'Hướng dẫn giải' })).toBeVisible();
    await expect(page.locator('.project-flowchart')).toBeVisible();
    await expect(page.locator('.project-aspect')).toHaveCount(9);
    await expect(page.getByText('Kết quả cần đối chiếu:')).toBeVisible();
  }
});

test('home_saved_preview_uses_real_bookmarks', async ({ page }) => {
  await page.goto('/hoc/autolisp/bat-dau-autolisp/');
  await page.locator('[data-bookmark]').click();
  await page.goto('/');
  await expect(page.locator('[data-home-bookmarks-list] li')).toHaveCount(1);
  await expect(page.locator('[data-home-bookmarks-list]')).toContainText('Từ thao tác lặp đến lệnh AutoLISP đầu tiên');
});

test('toc_tracks_the_visible_section', async ({ page }) => {
  await page.goto('/hoc/autolisp/vlide-ide-extension-debug/');
  const target = page.getByRole('heading', { name: 'IDE là gì?' });
  await target.evaluate(element => window.scrollTo(0, window.scrollY + element.getBoundingClientRect().top - 140));
  await expect(page.locator('[data-toc-link][aria-current="location"]')).toHaveAttribute('href', '#ide-là-gì');
});
