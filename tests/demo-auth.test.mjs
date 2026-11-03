import test from 'node:test';
import assert from 'node:assert/strict';
import middleware from '../middleware.js';
process.env.DEMO_PASSWORD = 'test-password';
process.env.DEMO_SESSION_SECRET = 'test-session-secret';
const origin = 'https://demo.example';
test('pages and assets require authentication', async () => {
  for (const path of ['/', '/courses', '/assets/app.js', '/about.jpg']) {
    const response = await middleware(new Request(origin + path));
    assert.match(await response.text(), /A private preview/);
    assert.equal(response.headers.get('cache-control'), 'private, no-store');
  }
});
test('login rejects wrong password and cross-origin requests', async () => {
  for (const [source, password, status] of [[origin, 'wrong', 401], ['https://other.example', 'test-password', 403]]) {
    const response = await middleware(new Request(origin + '/__demo_login', { method: 'POST', headers: { origin: source }, body: new URLSearchParams({ password }) }));
    assert.equal(response.status, status);
  }
});
test('valid login grants access; altered cookies do not', async () => {
  const response = await middleware(new Request(origin + '/__demo_login', { method: 'POST', headers: { origin }, body: new URLSearchParams({ password: 'test-password' }) }));
  assert.equal(response.status, 303);
  const cookie = response.headers.get('set-cookie');
  assert.match(cookie, /HttpOnly; Secure; SameSite=Strict/);
  const token = cookie.split(';')[0];
  const allowed = await middleware(new Request(origin + '/courses', { headers: { cookie: token } }));
  assert.equal(allowed.headers.get('x-middleware-next'), '1');
  const denied = await middleware(new Request(origin + '/courses', { headers: { cookie: token + 'x' } }));
  assert.match(await denied.text(), /A private preview/);
});
test('missing configuration fails closed', async () => {
  const secret = process.env.DEMO_SESSION_SECRET;
  delete process.env.DEMO_SESSION_SECRET;
  assert.equal((await middleware(new Request(origin))).status, 503);
  process.env.DEMO_SESSION_SECRET = secret;
});
