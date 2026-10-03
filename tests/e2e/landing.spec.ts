import { expect, test } from '@playwright/test';

test('hero_is_compact_and_removes_the_selected_extra_controls', async ({ page }) => {
    await page.goto('/');
    const hero = page.locator('[data-construction-hero]');
    await page.setViewportSize({ width: 1440, height: 1178 });
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Từ thao tác đến thuật toán');
    await expect(page.getByRole('link', { name: 'Bắt đầu học', exact: true })).toBeVisible();
    expect((await hero.boundingBox())!.height).toBeLessThan(540);
    await expect(hero.getByRole('search')).toHaveCount(0);
    await expect(hero.getByRole('checkbox')).toHaveCount(0);
    await expect(hero.getByRole('link')).toHaveCount(1);
    await expect(hero.getByRole('link')).toHaveCSS('background-color', 'rgb(255, 210, 122)');
    await expect(hero.getByRole('link')).toHaveCSS('background-image', 'none');
    await expect(page.locator('.knowledge-bridge,.demo-bottom,[data-demo-replay]')).toHaveCount(0);
    await expect(page.getByRole('link', { name: 'Mở tìm kiếm', exact: true })).toHaveCount(0);
    await expect(page.getByRole('link', { name: 'Thuật ngữ kỹ thuật', exact: true })).toHaveCount(0);
    await expect(page.locator('.section-index,.hero-flow')).toHaveCount(0);
    await expect(page.locator('[data-continue]')).toHaveCount(0);
    await expect(page.getByText('CAD · BIM · Dữ liệu', { exact: true })).toHaveCount(0);
});

test('construction_scene_repeats_wireframe_growth_and_fade_in_a_stable_16_second_cycle', async ({ page }) => {
    await page.goto('/');
    const hero = page.locator('[data-construction-hero]');
    await expect(hero.locator('svg')).toHaveAttribute('preserveAspectRatio', 'xMidYMax slice');
    const timing = await hero.evaluate(element => element.getAnimations({ subtree: true }).map(animation => animation.effect!.getTiming()));
    expect(timing.filter(item => item.duration === 16000 && item.iterations === Infinity).length).toBeGreaterThan(5);
    const seek = async (time: number) => {
        await hero.evaluate((element, time) => { for (const animation of element.getAnimations({ subtree: true })) { animation.pause(); animation.currentTime = time; } }, time);
    };
    const bounds = await hero.boundingBox();
    await seek(1000);
    expect(Number(await hero.locator('[data-main-building]').evaluate(element => getComputedStyle(element).opacity))).toBeGreaterThan(0);
    await expect(hero.locator('[data-lit-window]').first()).toHaveCSS('opacity', '0');
    expect(Number(await hero.locator('[data-wireframe]').first().evaluate(element => parseFloat(getComputedStyle(element).strokeDashoffset)))).toBeGreaterThan(0);
    await seek(10000);
    await expect(hero.locator('[data-main-building]')).toHaveCSS('opacity', '1');
    await expect(hero.locator('[data-lit-window]').first()).toHaveCSS('opacity', '1');
    await seek(14000);
    expect(Number(await hero.locator('[data-main-building]').evaluate(element => getComputedStyle(element).opacity))).toBeLessThanOrEqual(.5);
    await seek(17000);
    expect(Number(await hero.locator('[data-main-building]').evaluate(element => getComputedStyle(element).opacity))).toBeGreaterThan(0);
    expect(await hero.boundingBox()).toEqual(bounds);
});

test('homepage_topics_are_available_without_javascript', async ({ browser }) => {
    const context = await browser.newContext({ javaScriptEnabled: false });
    try {
        const page = await context.newPage();
        await page.goto('http://127.0.0.1:4321/');
        await expect(page.getByRole('navigation', { name: 'Chủ đề học' }).getByRole('link', { name: 'GIS / Data Automation', exact: true })).toBeVisible();
        await expect(page.locator('[data-construction-hero] form,[data-construction-hero] input')).toHaveCount(0);
    } finally { await context.close(); }
});

test('demo_step_changes_code_and_visible_geometry_together', async ({ page }) => {
    await page.goto('/');
    const demo = page.locator('[data-code-demo]');
    await demo.scrollIntoViewIfNeeded();
    await demo.getByRole('button', { name: '01 Chọn tuyến', exact: true }).click();
    await expect(demo.locator('.contour-lines')).toHaveCSS('opacity', '0');
    await expect(demo.locator('[data-code-step="0"]')).toHaveAttribute('aria-current', 'step');
    await demo.getByRole('button', { name: '02 Nhập thông số', exact: true }).click();
    await expect(demo.locator('.contour-settings')).toHaveCSS('opacity', '1');
    await demo.getByRole('button', { name: '03 Tính đường', exact: true }).click();
    await expect(demo.locator('.contour-lines')).toHaveCSS('opacity', '1');
    await demo.getByRole('button', { name: '04 Lên cao độ', exact: true }).click();
    await expect(demo.locator('.contour-labels')).toHaveCSS('opacity', '1');
    await expect(demo.locator('[data-code-step="3"] pre')).toContainText('RCT:lwpolyline');
    await expect(demo.locator('[data-code-step="3"]')).toHaveAttribute('aria-current', 'step');
    await expect(demo.locator('[data-code-step]:visible')).toHaveCount(1);
});

test('reduced_motion_renders_final_scene_and_keeps_manual_demo_usable', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    const hero = page.locator('[data-construction-hero]');
    await expect(hero.locator('[data-main-building]')).toHaveCSS('opacity', '1');
    await expect(hero.locator('[data-lit-window]').first()).toHaveCSS('opacity', '1');
    expect(await hero.evaluate(element => element.getAnimations({ subtree: true }).filter(animation => animation.playState === 'running').length)).toBe(0);
    const demo = page.locator('[data-code-demo]');
    await demo.scrollIntoViewIfNeeded();
    await demo.getByRole('button', { name: '02 Nhập thông số', exact: true }).click();
    await expect(demo.locator('.contour-settings')).toHaveCSS('opacity', '1');
});

test('landing_fits_mobile_tablet_and_comment_viewport', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    for (const width of [360, 768, 843, 1440]) {
        await page.setViewportSize({ width, height: 900 });
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
        const heading = page.getByRole('heading', { level: 1 });
        expect(await heading.evaluate(element => element.scrollHeight <= element.clientHeight)).toBe(true);
    }
});
