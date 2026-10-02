import { expect, test } from '@playwright/test';
import * as pagefind from 'pagefind';
import { readFile, mkdir } from 'node:fs/promises';
import { resolve, relative } from 'node:path';
import { indexContent } from '../../scripts/search-content.mjs';
const records = [
    ['list', 'Danh sách', 'danh sách List'],
    ['doi-tuong', 'Đối tượng', 'đối tượng'],
    ['toa-do', 'Tọa độ', 'tọa độ'],
    ['dong-bang', 'Đóng băng', 'đóng băng'],
    ['ssget', 'ssget', 'ssget'],
    ['vl-load-com', 'vl-load-com', 'vl-load-com'],
    ['editor', 'Editor.GetSelection', 'Editor.GetSelection'],
    ['csharp', 'C#', 'C#'],
    ['error', '*error*', '*error*']
];
const root = resolve('test-results/search-fixtures/pagefind');
test.beforeAll(async () => {
    await mkdir(root, { recursive: true });
    const { index, errors } = await pagefind.createIndex({ forceLanguage: 'vi', includeCharacters: '.-_#*' });
    if (!index || errors.length)
        throw new Error(errors.join(','));
    for (const [id, title, content] of records) {
        const result = await index.addCustomRecord({ url: '/fixture/' + id + '/', content: indexContent(content), language: 'vi', meta: { id, title, description: '<img src=x onerror=alert(1)>', kind: 'concept', technology: 'autolisp', target: '/fixture/' + id + '/' }, filters: { kind: ['concept'], technology: ['autolisp'] } });
        if (result.errors.length)
            throw new Error(result.errors.join(','));
    }
    const result = await index.writeFiles({ outputPath: root });
    if (result.errors.length)
        throw new Error(result.errors.join(','));
    await pagefind.close();
});
test('technical_punctuation_and_vietnamese_queries', async ({ page }) => {
    let dialogs = 0;
    page.on('dialog', async (dialog) => { dialogs++; await dialog.dismiss(); });
    await page.route('**/pagefind/**', async (route) => {
        const path = new URL(route.request().url()).pathname.split('/pagefind/')[1];
        const file = resolve(root, decodeURIComponent(path));
        if (relative(root, file).startsWith('..'))
            throw new Error('Fixture path');
        const type = file.endsWith('.js') ? 'text/javascript' : file.endsWith('.wasm') ? 'application/wasm' : 'application/octet-stream';
        await route.fulfill({ body: await readFile(file), contentType: type });
    });
    await page.goto('/tim-kiem/');
    for (const [query, title] of [['list', 'Danh sách'], ['danh sách', 'Danh sách'], ['danh sach', 'Danh sách'], ['đối tượng', 'Đối tượng'], ['doi tuong', 'Đối tượng'], ['toa do', 'Tọa độ'], ['dong bang', 'Đóng băng'], ['ssget', 'ssget'], ['vl-load-com', 'vl-load-com'], ['Editor.GetSelection', 'Editor.GetSelection'], ['C#', 'C#'], ['*error*', '*error*']]) {
        await page.getByRole('searchbox').fill(query);
        await page.getByRole('button', { name: 'Tìm kiếm', exact: true }).click();
        await expect(page.getByRole('list', { name: 'Kết quả tìm kiếm' }).getByRole('link', { name: title, exact: true })).toBeVisible();
    }
    await expect(page.locator('[data-search-results] img')).toHaveCount(0);
    expect(dialogs).toBe(0);
    await expect(page.getByRole('list', { name: 'Kết quả tìm kiếm' })).toContainText('<img src=x onerror=alert(1)>');
});
