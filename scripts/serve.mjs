import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
const root = resolve(process.env.BUILD_DIR || 'dist'); const port = Number(process.env.PORT || 4321);
const types = { '.html':'text/html; charset=utf-8', '.css':'text/css', '.js':'text/javascript', '.mjs':'text/javascript', '.json':'application/json', '.svg':'image/svg+xml', '.wasm':'application/wasm' };
createServer(async (req,res) => {
  try {
    const url = new URL(req.url || '/', 'http://localhost'); let pathname = decodeURIComponent(url.pathname); const base = process.env.SITE_BASE || '/';
    if (base !== '/' && pathname.startsWith(base)) pathname = pathname.slice(base.length);
    let file = resolve(root, `.${pathname.startsWith('/') ? pathname : `/${pathname}`}`);
    if (file !== root && !file.startsWith(root + sep)) { res.writeHead(403); res.end(); return; }
    try { if ((await stat(file)).isDirectory()) file = resolve(file,'index.html'); } catch { /* Missing paths use the site's 404. */ }
    try { const data = await readFile(file); res.writeHead(200, { 'Content-Type':types[extname(file)] || 'application/octet-stream', 'Cache-Control':'no-store' }); res.end(data); }
    catch { res.writeHead(404, { 'Content-Type':'text/html; charset=utf-8' }); res.end(await readFile(resolve(root,'404.html')).catch(() => 'Không tìm thấy trang.')); }
  } catch { res.writeHead(400); res.end('Địa chỉ không hợp lệ.'); }
}).listen(port,'127.0.0.1', () => console.log(`Local: http://127.0.0.1:${port}/`));
