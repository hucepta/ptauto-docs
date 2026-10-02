import { parseFragment, serializeOuter, type DefaultTreeAdapterTypes as Tree } from 'parse5';

export interface ExamplePlacement { heading: string; exampleIds: string[] }
export interface ReaderStep {
  headingHtml: string;
  bodyHtml: string;
  codeBlocks: { code: string; language?: string }[];
  exampleIds: string[];
}
function textContent(node: Tree.Node): string {
  if (node.nodeName === '#text') return (node as Tree.TextNode).value;
  return 'childNodes' in node ? node.childNodes.map(textContent).join('') : '';
}

export function buildReaderSteps(html: string, placements: ExamplePlacement[], exampleIds: string[]) {
  const steps: ReaderStep[] = [];
  const byHeading = new Map<string, ReaderStep>();
  let introHtml = '';
  let current: ReaderStep | undefined;

  for (const node of parseFragment(html).childNodes) {
    if ('tagName' in node && node.tagName === 'h2') {
      current = { headingHtml: serializeOuter(node), bodyHtml: '', codeBlocks: [], exampleIds: [] };
      const id = node.attrs.find(a => a.name === 'id')?.value;
      if (id) byHeading.set(id, current);
      steps.push(current);
    } else if (current && 'tagName' in node && node.tagName === 'pre') {
      const code = node.childNodes.find(n => 'tagName' in n && n.tagName === 'code');
      const attrs = [...node.attrs, ...(code && 'attrs' in code ? code.attrs : [])];
      const classes = attrs.filter(a => a.name === 'class').map(a => a.value).join(' ');
      current.codeBlocks.push({ code: textContent(code || node), language: attrs.find(a => a.name === 'data-language')?.value || classes.match(/language-([\w-]+)/)?.[1] });
    } else if (current) {
      current.bodyHtml += serializeOuter(node);
    } else {
      introHtml += serializeOuter(node);
    }
  }

  const placed = new Set<string>();
  const usedHeadings = new Set<string>();
  for (const placement of placements) {
    const step = byHeading.get(placement.heading);
    if (!step) throw new Error(`Không tìm thấy mục cho ví dụ: ${placement.heading}`);
    if (usedHeadings.has(placement.heading)) throw new Error(`Mục đặt ví dụ bị lặp: ${placement.heading}`);
    usedHeadings.add(placement.heading);
    for (const id of placement.exampleIds) {
      if (!exampleIds.includes(id)) throw new Error(`Ví dụ chưa khai báo trong exampleIds: ${id}`);
      if (placed.has(id)) throw new Error(`Ví dụ bị lặp trong bài: ${id}`);
      placed.add(id);
      step.exampleIds.push(id);
    }
  }
  return { introHtml, steps, remainingExampleIds: exampleIds.filter(id => !placed.has(id)) };
}
