import { expect, test } from 'vitest';
import { buildReaderSteps } from '../../src/domain/content/reader-steps';

const html = '<p>Mở bài.</p><h2 id="tao-list">Tạo <code>list</code></h2><p>Dùng biến.</p><pre class="language-lisp"><code>(list x &quot;A&quot;)\n</code></pre><h2 id="kiem-tra">Kiểm tra</h2><blockquote><h2 id="trich-dan">Trích dẫn</h2><p>Giữ nguyên.</p></blockquote>';

test('pairs_code_with_its_section_and_preserves_nested_content_and_anchors', () => {
  const result = buildReaderSteps(html, [{ heading: 'kiem-tra', exampleIds: ['example.autolisp.test'] }], ['example.autolisp.test']);
  expect(result.introHtml).toBe('<p>Mở bài.</p>');
  expect(result.steps).toHaveLength(2);
  expect(result.steps[0].headingHtml).toContain('id="tao-list"');
  expect(result.steps[0].bodyHtml).toBe('<p>Dùng biến.</p>');
  expect(result.steps[0].codeBlocks[0]).toEqual({ code: '(list x "A")\n', language: 'lisp' });
  expect(result.steps[1].bodyHtml).toContain('<h2 id="trich-dan">');
  expect(result.steps[1].exampleIds).toEqual(['example.autolisp.test']);
  expect(result.remainingExampleIds).toEqual([]);
});

test('rejects_missing_sections_unknown_examples_and_repeated_placements', () => {
  expect(() => buildReaderSteps(html, [{ heading: 'missing', exampleIds: ['example.a'] }], ['example.a'])).toThrow(/missing/);
  expect(() => buildReaderSteps(html, [{ heading: 'tao-list', exampleIds: ['example.missing'] }], [])).toThrow(/example.missing/);
  expect(() => buildReaderSteps(html, [{ heading: 'tao-list', exampleIds: ['example.a'] }, { heading: 'kiem-tra', exampleIds: ['example.a'] }], ['example.a'])).toThrow(/lặp/);
});

test('keeps_unplaced_examples_and_heading_like_code_as_content', () => {
  const result = buildReaderSteps('<h2 id="doc">Đọc</h2><pre><code>## không phải tiêu đề\n</code></pre>', [], ['example.a']);
  expect(result.steps).toHaveLength(1);
  expect(result.steps[0].codeBlocks[0].code).toBe('## không phải tiêu đề\n');
  expect(result.remainingExampleIds).toEqual(['example.a']);
});
