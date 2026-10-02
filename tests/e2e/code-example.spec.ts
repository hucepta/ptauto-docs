import { test, expect } from '@playwright/test';
import { readFile } from 'node:fs/promises';
test('copy_preserves_raw_code', async ({ page, context }) => {
    await context.grantPermissions(['clipboard-read', 'clipboard-write']);
    await page.addInitScript(() => {
        const write = navigator.clipboard.writeText.bind(navigator.clipboard);
        navigator.clipboard.writeText = (code: string) => {
            (window as Window & {
                copiedCode?: string;
            }).copiedCode = code;
            return write(code);
        };
    });
    await page.goto('/hoc/autolisp/list-association-list/');
    await page.locator('#example-autolisp-tao-list').getByRole('button', { name: 'Sao chép code' }).click();
    const code = await readFile('src/content/examples/code/tao-list.lsp', 'utf8');
    expect(await page.evaluate(() => (window as Window & {
        copiedCode?: string;
    }).copiedCode)).toBe(code);
    // Windows' system clipboard converts LF to CRLF; the app passes the raw source.
    expect((await page.evaluate(() => navigator.clipboard.readText())).replaceAll('\r\n', '\n')).toBe(code.replaceAll('\r\n', '\n'));
});
test('copy_denied_shows_action', async ({ page }) => {
    await page.addInitScript(() => { Object.defineProperty(navigator, 'clipboard', { value: { writeText: () => Promise.reject(new Error('denied')) } }); });
    await page.goto('/hoc/autolisp/list-association-list/');
    await page.locator('#example-autolisp-tao-list').getByRole('button', { name: 'Sao chép code' }).click();
    await expect(page.locator('#example-autolisp-tao-list')).toContainText('Không sao chép được. Hãy chọn và sao chép đoạn code.');
});
