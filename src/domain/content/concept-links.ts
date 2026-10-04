import { parseFragment, serialize, type DefaultTreeAdapterTypes as Tree } from 'parse5';

export interface LinkableConcept {
  title: string;
  url: string;
  technology: string;
}

const excluded = new Set(['a', 'code', 'pre', 'script', 'style', 'h1', 'h2', 'h3', 'h4', 'button', 'svg']);
const escapePattern = (value: string) => value.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');

export function linkConceptMentions(html: string, concepts: LinkableConcept[], technology: string): string {
  const matches = new Map<string, LinkableConcept>();
  for (const concept of [...concepts].sort((a, b) => Number(b.technology === technology) - Number(a.technology === technology))) {
    // Only canonical titles are safe to link automatically; aliases like "đúng" also occur in ordinary prose.
    const term = concept.title.trim();
    if (term.length < 2 || term.length > 60 || /[\n\r<>`]/.test(term)) continue;
    const key = term.toLocaleLowerCase('vi');
    if (!matches.has(key)) matches.set(key, concept);
  }
  if (!matches.size) return html;
  const words = [...matches.keys()].sort((a, b) => b.length - a.length);
  const pattern = new RegExp('(?<![\\p{L}\\p{N}_])(?:' + words.map(escapePattern).join('|') + ')(?![\\p{L}\\p{N}_])', 'giu');
  const fragment = parseFragment(html);
  const visit = (node: Tree.Node): void => {
    if (!('childNodes' in node)) return;
    if ('tagName' in node && excluded.has(node.tagName)) return;
    node.childNodes = node.childNodes.flatMap(child => {
      if (child.nodeName !== '#text') {
        visit(child);
        return [child];
      }
      const value = (child as Tree.TextNode).value;
      pattern.lastIndex = 0;
      const parts: Tree.ChildNode[] = [];
      let cursor = 0;
      for (const match of value.matchAll(pattern)) {
        const at = match.index;
        const concept = matches.get(match[0].toLocaleLowerCase('vi'));
        if (!concept) continue;
        if (at > cursor) parts.push({ ...child, value: value.slice(cursor, at) } as Tree.TextNode);
        const link = parseFragment('<a class="concept-link" href="' + concept.url + '"></a>').childNodes[0] as Tree.Element;
        link.childNodes = [{ ...child, value: match[0], parentNode: link } as Tree.TextNode];
        parts.push(link);
        cursor = at + match[0].length;
      }
      if (!parts.length) return [child];
      if (cursor < value.length) parts.push({ ...child, value: value.slice(cursor) } as Tree.TextNode);
      return parts;
    });
  };
  visit(fragment);
  return serialize(fragment);
}
