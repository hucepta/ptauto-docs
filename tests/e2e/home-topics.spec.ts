import { expect, test } from '@playwright/test';

test('homepage_is_the_entry_to_every_published_learning_topic', async ({ page, request }) => {
    await page.goto('/');
    await expect(page.getByRole('navigation', { name: 'Điều hướng chính' }).getByRole('link', { name: 'Học', exact: true })).toHaveCount(0);
    await page.getByRole('link', { name: 'Bắt đầu học', exact: true }).click();
    await expect(page).toHaveURL(/\/#chu-de$/);
    const catalog = await (await request.get('/catalog.json')).json() as { courses: { title: string; url: string }[] };
    for (const course of catalog.courses) {
        await page.goto('/#chu-de');
        const topic = page.getByRole('navigation', { name: 'Chủ đề học' }).getByRole('link', { name: course.title, exact: true });
        await expect(topic).toHaveAttribute('href', course.url);
        await topic.click();
        await expect(page).toHaveURL(new RegExp(course.url + '$'));
        await expect(page.locator('main h1')).toBeVisible();
    }
});

test('old_learning_catalog_redirects_to_home_topics_without_javascript', async ({ browser }) => {
    const context = await browser.newContext({ javaScriptEnabled: false });
    try {
        const page = await context.newPage();
        await page.goto('http://127.0.0.1:4321/hoc/');
        await expect(page).toHaveURL('http://127.0.0.1:4321/#chu-de');
        await expect(page.getByRole('navigation', { name: 'Chủ đề học' })).toBeVisible();
    } finally { await context.close(); }
});

test('learning_breadcrumbs_return_to_the_homepage', async ({ page }) => {
    for (const route of ['/hoc/autolisp/', '/hoc/autolisp/chu-de/ngon-ngu-co-ban/', '/hoc/autolisp/bieu-thuc-evaluation/']) {
        await page.goto(route);
        const breadcrumbs = page.getByRole('navigation', { name: 'Đường dẫn' });
        await expect(breadcrumbs.getByRole('link', { name: 'Trang chủ', exact: true })).toHaveAttribute('href', '/');
        await expect(breadcrumbs.getByRole('link', { name: 'Học', exact: true })).toHaveCount(0);
    }
});
