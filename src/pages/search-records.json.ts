import { getBuildData } from '../content/build-data';
export async function GET() {
    const { searchRecords, buildId, base, version } = await getBuildData();
    return new Response(JSON.stringify({ records: searchRecords, buildId, base, version }), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
}
