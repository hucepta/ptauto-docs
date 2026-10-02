import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../', import.meta.url));
const commands = [
  ['scripts/astro.mjs', 'check'],
  ['node_modules/eslint/bin/eslint.js', '.'],
  ['node_modules/vitest/vitest.mjs', 'run'],
  ['scripts/astro.mjs', 'build'],
  ['scripts/build-search.mjs'],
  ['scripts/verify-artifact.mjs'],
  ['node_modules/@playwright/test/cli.js', 'test'],
  ['scripts/verify-artifact.mjs'],
];
for (const command of commands) {
  const result = spawnSync(process.execPath, command, { cwd: root, stdio: 'inherit', env: process.env });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status || 1);
}
