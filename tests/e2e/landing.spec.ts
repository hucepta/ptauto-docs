import { expect, test } from '@playwright/test';

test('hero_animation_finishes_without_blocking_search_or_navigation', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Từ thao tác đến thuật toán.');
    await expect(page.getByRole('link', { name: 'Bắt đầu học', exact: true })).toBeVisible();
    await page.keyboard.press('/');
    await expect(page.getByRole('searchbox')).toBeFocused();
    await expect(page.locator('[data-hero]')).toHaveAttribute('data-phase', 'complete', { timeout: 8000 });
    for (const entity of await page.locator('[data-hero] [data-intro-draw]').all()) {
        await expect(entity).toHaveCSS('stroke-dashoffset', '0px');
    }
    await expect(page.locator('.cad-layer-shift')).toHaveCSS('stroke', 'rgb(8, 126, 135)');
    await expect(page.locator('[data-continue]')).toHaveCount(0);
    await expect(page.getByText('CAD · BIM · Dữ liệu', { exact: true })).toHaveCount(0);
});

test('demo_step_changes_code_and_visible_geometry_together', async ({ page }) => {
    await page.goto('/');
    const demo = page.locator('[data-code-demo]');
    await demo.scrollIntoViewIfNeeded();
    await demo.getByRole('button', { name: '01 LINE', exact: true }).click();
    await expect(demo.locator('[data-demo-circle]')).toHaveCSS('opacity', '0');
    await expect(demo.locator('[data-code-step="0"]')).toHaveAttribute('aria-current', 'step');
    await demo.getByRole('button', { name: '02 CIRCLE', exact: true }).click();
    await expect(demo.locator('[data-demo-circle]')).toHaveCSS('opacity', '1');
    await demo.getByRole('button', { name: '03 Chọn đối tượng', exact: true }).click();
    await expect(demo.locator('[data-demo-selection]')).toHaveCSS('opacity', '1');
    await demo.getByRole('button', { name: '04 Chuyển layer', exact: true }).click();
    await expect(demo.locator('[data-demo-layer]')).toHaveCSS('stroke', 'rgb(8, 126, 135)');
    await expect(demo.locator('[data-code-step="3"]')).toHaveAttribute('aria-current', 'step');
});

test('reduced_motion_renders_final_scene_and_keeps_manual_demo_usable', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.locator('[data-hero]')).toHaveAttribute('data-phase', 'complete');
    expect(await page.locator('[data-hero]').evaluate(element => element.getAnimations({ subtree: true }).filter(animation => animation.playState === 'running').length)).toBe(0);
    const demo = page.locator('[data-code-demo]');
    await demo.scrollIntoViewIfNeeded();
    await demo.getByRole('button', { name: '02 CIRCLE', exact: true }).click();
    await expect(demo.locator('[data-demo-circle]')).toHaveCSS('opacity', '1');
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
