import { spawnSync } from 'node:child_process';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../', import.meta.url));
async function readCredential() {
  if (process.stdin.isTTY) process.stdin.setRawMode(true);
  process.stdin.setEncoding('utf8');
  process.stdin.resume();
  console.log('Ready for credential JSON on stdin (input is not echoed).');
  return await new Promise((resolve, reject) => {
    let input = '';
    const onData = chunk => {
      input += chunk;
      if (!input.includes('\n')) return;
      process.stdin.off('data', onData);
      process.stdin.pause();
      try { resolve(JSON.parse(input.trim())); } catch { reject(new Error('Credential JSON không hợp lệ.')); }
    };
    process.stdin.on('data', onData);
    process.stdin.once('end', () => reject(new Error('Thiếu credential.')));
  });
}
function git(args, env = process.env) {
  const result = spawnSync('git', ['-c', 'safe.directory=' + resolve(root), ...args], { cwd: root, env, encoding: 'utf8', timeout: 120000 });
  if (result.error || result.status !== 0) throw new Error('Git không hoàn tất thao tác ' + args[0] + '. Kiểm tra kết nối, quyền repo và credential.');
  return result.stdout.trim();
}
try {
  const credential = await readCredential();
  if (credential.auth_mode !== 'http_extra_header' || !credential.token || !credential.branch) throw new Error('Credential không hỗ trợ phương thức Git dự kiến.');
  const url = new URL(credential.remote_url);
  if (url.protocol !== 'https:' || url.username || url.password) throw new Error('Remote Git phải là HTTPS không chứa credential.');
  git(['check-ref-format', '--branch', credential.branch]);
  if (git(['status', '--porcelain'])) throw new Error('Nguồn chưa được commit đầy đủ.');
  const sha = git(['rev-parse', 'HEAD']);
  if (sha !== credential.commit_sha) throw new Error('HEAD thay đổi sau kiểm tra phát hành.');
  const env = { ...process.env, GIT_TERMINAL_PROMPT: '0', GIT_CONFIG_COUNT: '2', GIT_CONFIG_KEY_0: 'http.extraHeader', GIT_CONFIG_VALUE_0: 'Authorization: Bearer ' + credential.token, GIT_CONFIG_KEY_1: 'credential.helper', GIT_CONFIG_VALUE_1: '' };
  git(['push', credential.remote_url, 'HEAD:refs/heads/' + credential.branch], env);
  const remote = git(['ls-remote', credential.remote_url, 'refs/heads/' + credential.branch], env).split(/\s+/)[0];
  if (remote !== sha) throw new Error('Remote HEAD không khớp nguồn được đóng gói.');
  console.log(JSON.stringify({ pushed: true, commitSha: sha, branch: credential.branch }));
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
