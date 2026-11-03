import { next } from '@vercel/functions';
import { createHmac, timingSafeEqual } from 'node:crypto';

export const config = { runtime: 'nodejs', matcher: '/:path*' };
const cookieName = '__Host-kingdom-demo';
const headers = { 'Cache-Control': 'private, no-store', 'X-Robots-Tag': 'noindex, nofollow, noarchive' };
function equal(a, b) {
  const left = Buffer.from(a), right = Buffer.from(b);
  return left.length === right.length && timingSafeEqual(left, right);
}
function signature(value, secret) {
  return createHmac('sha256', secret).update(value).digest('hex');
}
function gate(error = false) {
  return new Response(`<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Kingdom Education · Private demo</title><style> *{box-sizing:border-box}body{margin:0;min-height:100svh;display:grid;place-items:center;background:#f7f5fa;color:#241a33;font-family:system-ui;padding:24px}main{width:min(100%,420px);padding:40px;background:white;border-radius:24px;box-shadow:0 16px 60px #3420470d}small{color:#7850a4}h1{font-size:32px;letter-spacing:-1px}p{color:#706778;line-height:1.6}label{display:block;margin:24px 0 8px}input,button{width:100%;padding:15px;border-radius:12px;font:inherit}input{border:1px solid #dcd3e5}button{margin-top:16px;border:0;background:#7544b5;color:white;cursor:pointer}input:focus-visible,button:focus-visible{outline:3px solid #bc9de5;outline-offset:3px}</style><main><small>KINGDOM EDUCATION</small><h1>A private preview.</h1><p>Enter the demo password to explore the website.</p>${error ? '<p role="alert">Incorrect password. Please try again.</p>' : ''}<form method="post" action="/__demo_login"><label for="password">Password</label><input id="password" name="password" type="password" autocomplete="current-password" required autofocus maxlength="256"><button>Open demo</button></form></main></html>`, { status: error ? 401 : 200, headers: { ...headers, 'Content-Type': 'text/html; charset=utf-8', 'Content-Security-Policy': "default-src 'none'; style-src 'unsafe-inline'; form-action 'self'; frame-ancestors 'none'; base-uri 'none'" } });
}
export default async function middleware(request) {
  const password = process.env.DEMO_PASSWORD;
  const secret = process.env.DEMO_SESSION_SECRET;
  if (!password || !secret) return new Response('Private demo is not configured.', { status: 503, headers });
  const url = new URL(request.url);
  if (url.pathname === '/__demo_login' && request.method === 'POST') {
    if (request.headers.get('origin') !== url.origin) return new Response('Forbidden', { status: 403, headers });
    if (Number(request.headers.get('content-length')) > 2048) return new Response('Request too large', { status: 413, headers });
    const form = await request.formData().catch(() => null);
    if (!equal(String(form?.get('password') ?? ''), password)) return gate(true);
    const expiry = String(Date.now() + 8 * 60 * 60 * 1000);
    return new Response(null, { status: 303, headers: { ...headers, Location: '/', 'Set-Cookie': `${cookieName}=${expiry}.${signature(expiry, secret)}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=28800` } });
  }
  const token = request.headers.get('cookie')?.split(';').map(part => part.trim()).find(part => part.startsWith(`${cookieName}=`))?.slice(cookieName.length + 1) ?? '';
  const [expiry, signed] = token.split('.');
  if (expiry && signed && /^\d+$/.test(expiry) && Number(expiry) > Date.now() && Number(expiry) <= Date.now() + 28800000 && equal(signed, signature(expiry, secret))) {
    const response = next();
    for (const [key, value] of Object.entries(headers)) response.headers.set(key, value);
    return response;
  }
  return gate();
}
