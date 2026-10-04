import { test, expect } from '@playwright/test';
test('phone_header_keeps_brand_and_menu_in_one_row', async ({ page }) => {
  for (const width of [320,390,585]) {
    await page.setViewportSize({width,height:844});
    await page.goto('/hoc/autolisp/');
    const brand = await page.locator('.brand').boundingBox();
    const nav = await page.locator('.primary-nav').boundingBox();
    expect(Math.abs(brand!.y-nav!.y)).toBeLessThan(20);
    expect(brand!.x+brand!.width).toBeLessThanOrEqual(nav!.x+1);
    expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  }
});
test('accordion_animates_both_directions_and_survives_fast_clicks', async ({page}) => {
  await page.goto('/hoc/autolisp/');
  const box=page.locator('.map-section').nth(1);
  await box.locator('summary').click();
  await expect(box).toHaveAttribute('open','');
  await expect.poll(()=>box.evaluate(el=>el.getAnimations().length)).toBeGreaterThan(0);
  await page.waitForTimeout(350);
  await box.locator('summary').click();
  expect(await box.evaluate(el=>el.getAnimations().length)).toBeGreaterThan(0);
  await expect(box).not.toHaveAttribute('open','');
  await box.locator('summary').click();
  await box.locator('summary').click();
  await expect(box).not.toHaveAttribute('open','');
  expect(await box.evaluate(el=>el.style.height)).toBe('');
});
test('cached_catalog_enables_reader_without_a_second_fetch', async ({page}) => {
  await page.goto('/hoc/autolisp/bieu-thuc-evaluation/');
  await expect(page.locator('[data-completed]')).toBeEnabled();
  await page.route('**/catalog.json',route=>route.abort());
  await page.goto('/hoc/autolisp/bien-kieu-du-lieu/');
  await expect(page.locator('[data-completed]')).toBeEnabled();
  await page.locator('[data-completed]').click();
  await expect(page.locator('[data-completed]')).toHaveAttribute('aria-pressed','true');
});
test('reduced_motion_keeps_accordion_usable_without_animation', async ({page})=>{
  await page.emulateMedia({reducedMotion:'reduce'});
  await page.goto('/hoc/autolisp/');
  const box=page.locator('.map-section').nth(1);
  await box.locator('summary').click();
  await expect(box).toHaveAttribute('open','');
  expect(await box.evaluate(el=>el.getAnimations().length)).toBe(0);
});

test('resizing_during_disclosure_does_not_restore_the_old_panel_state', async ({page})=>{
  await page.setViewportSize({width:390,height:844});
  await page.goto('/hoc/autolisp/command-line-file-lsp/');
  const panel=page.locator('.course-nav');
  await page.getByRole('button',{name:'Nội dung học'}).click();
  await panel.locator('summary').click();
  await page.setViewportSize({width:1226,height:844});
  await expect(panel).toHaveAttribute('open','');
  await page.waitForTimeout(300);
  expect(await panel.evaluate(el=>el.getAnimations().length)).toBe(0);
  await page.setViewportSize({width:390,height:844});
  await expect(panel).not.toHaveAttribute('open','');
});

test('renamed_sections_keep_old_deep_links_and_course_starts_with_setup', async({page})=>{
  await page.goto('/hoc/autolisp/vlide-ide-extension-debug/#ide-là-gì');
  await expect(page.locator('[id="ide-là-gì"]')).toHaveCount(1);
  await expect(page.getByRole('heading',{name:'Môi trường IDE'})).toHaveAttribute('id','môi-trường-ide');
  for(const tech of ['autolisp','visual-lisp-activex','autocad-dotnet','civil3d-dotnet','dynamo-python','gis-data-automation']){
    await page.evaluate(()=>localStorage.clear());
    await page.goto('/hoc/'+tech+'/');
    await expect(page.locator('[data-course-start]')).toHaveAttribute('href','/hoc/'+tech+'/chuan-bi-cong-cu/');
    await page.locator('[data-course-start]').click();
    expect(await page.locator('.teaching-image').count()).toBeGreaterThan(0);
  }
});
