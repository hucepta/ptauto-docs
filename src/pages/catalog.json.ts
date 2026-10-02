import { getBuildData } from '../content/build-data';
export async function GET() {
    const { pages, courses, buildId, base, version } = await getBuildData();
    return new Response(JSON.stringify({ pages, courses, buildId, base, version }), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
}
