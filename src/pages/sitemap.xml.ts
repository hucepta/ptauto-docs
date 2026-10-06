import { getContent } from '../content/catalog';
import { getContentUrl } from '../domain/content/graph';

const xmlEscape = (value: string) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;');

export async function GET() {
  const { graph } = await getContent();
  const paths = new Set([
    '/', '/hoc/', '/tra-cuu/', '/thuat-ngu/', '/du-an/',
    ...graph.courses.map(course => getContentUrl(graph, course.id)),
    ...graph.chapters.map(chapter => getContentUrl(graph, chapter.id)),
    ...graph.lessons.map(lesson => getContentUrl(graph, lesson.id)),
    ...graph.concepts.map(concept => getContentUrl(graph, concept.id)),
    ...graph.projects.map(project => getContentUrl(graph, project.id)),
    ...graph.courses.map(course => `/tra-cuu/${course.technology}/`),
    ...graph.courses.map(course => `/du-an/${course.technology}/`),
  ]);
  const site = new URL(import.meta.env.SITE);
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const entries = [...paths].map(path => `  <url><loc>${xmlEscape(new URL(`${base}${path}`, site).href)}</loc></url>`).join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
