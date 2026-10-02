import { spawnSync } from 'node:child_process';
import { mkdir, cp, writeFile, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { verifyArtifact } from './verify-artifact.mjs';
const root = fileURLToPath(new URL('../', import.meta.url));
function run(command, args, env = process.env) {
  const result = spawnSync(command, args, { cwd: root, env, encoding: 'utf8' });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(result.stderr || result.stdout || 'Lệnh đóng gói thất bại.');
  return result.stdout.trim();
}
const git = args => run('git', ['-c', 'safe.directory=' + resolve(root), ...args]);
if (git(['status', '--porcelain']).length) throw new Error('Commit mọi thay đổi trước khi đóng gói.');
const sha = git(['rev-parse', 'HEAD']);
if (!process.env.SITE_URL) throw new Error('Cần SITE_URL là origin HTTPS của bản phát hành.');
const origin = new URL(process.env.SITE_URL);
if (origin.protocol !== 'https:') throw new Error('SITE_URL của bản phát hành phải dùng HTTPS.');
const env = { ...process.env, SITE_BASE: '/', BUILD_DIR: 'dist' };
for (const args of [['scripts/astro.mjs', 'build'], ['scripts/build-search.mjs'], ['scripts/verify-artifact.mjs']]) {
  const output = run(process.execPath, args, env);
  console.log(output);
}
const artifact = await verifyArtifact(resolve(root, 'dist'));
const release = JSON.parse(await readFile(resolve(root, 'dist/release.json'), 'utf8'));
release.sourceCommit = sha;
await writeFile(resolve(root, 'dist/release.json'), JSON.stringify(release, null, 2) + '\n');
const stage = resolve(root, '.sites-runtime', 'package-' + sha + '-' + Date.now());
await mkdir(resolve(stage, '.openai'), { recursive: true });
await cp(resolve(root, '.openai/hosting.json'), resolve(stage, '.openai/hosting.json'));
await cp(resolve(root, 'dist'), resolve(stage, 'dist'), { recursive: true });
const archive = resolve(root, '.sites-runtime', 'ptauto-docs-' + sha + '.tar');
run('tar', ['-cf', archive, '-C', stage, '.openai/hosting.json', 'dist']);
console.log(JSON.stringify({ sourceCommit: sha, buildId: artifact.buildId, archive }));
