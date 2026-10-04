import { expect, test } from 'vitest';
import { linkConceptMentions } from '../../src/domain/content/concept-links';

test('links matching technical terms in lesson prose without changing code or existing links', () => {
  const html = '<h2>Đọc ObjectId</h2><p>ObjectId trỏ tới LINE. <a href="/old/">LINE</a> không phải ONLINE.</p><pre><code>ObjectId LINE</code></pre><p><code>ObjectId</code> rồi đọc ObjectId.</p>';
  const result = linkConceptMentions(html, [
    { title: 'ObjectId', url: '/tra-cuu/dotnet/objectid/', technology: 'autocad-dotnet' },
    { title: 'LINE', url: '/tra-cuu/autolisp/line/', technology: 'autolisp' },
  ], 'autocad-dotnet');
  expect(result).toContain('<a class="concept-link" href="/tra-cuu/dotnet/objectid/">ObjectId</a>');
  expect(result).toContain('<a class="concept-link" href="/tra-cuu/autolisp/line/">LINE</a>');
  expect(result).toContain('<h2>Đọc ObjectId</h2>');
  expect(result).toContain('<a href="/old/">LINE</a>');
  expect(result).toContain('<pre><code>ObjectId LINE</code></pre>');
  expect(result).toContain('ONLINE');
  expect(result).not.toContain('ON<a');
});

test('prefers the current course when a term exists in several references', () => {
  const result = linkConceptMentions('<p>Layer</p>', [
    { title: 'Layer', url: '/other/', technology: 'autolisp' },
    { title: 'Layer', url: '/current/', technology: 'visual-lisp-activex' },
  ], 'visual-lisp-activex');
  expect(result).toContain('href="/current/"');
});
