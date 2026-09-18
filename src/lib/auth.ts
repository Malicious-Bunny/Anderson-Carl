import { createHash, createHmac, timingSafeEqual } from 'crypto';
import { NextRequest, NextResponse } from 'next/server';

export const SESSION_COOKIE = 'admin_session';
const SESSION_DURATION_SECONDS = 60 * 60 * 8;

// Signing key is separate from the password so that rotating one does not
// silently invalidate the other. Falls back to the password only for local dev.
function signingKey(): string | null {
  return process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD || null;
}

function sign(payload: string, key: string): string {
  return createHmac('sha256', key).update(payload).digest('hex');
}

// Hashing first gives both sides a fixed 32-byte length, so the comparison
// itself cannot leak the secret's length.
function constantTimeEquals(a: string, b: string): boolean {
  const ha = new Uint8Array(createHash('sha256').update(a).digest());
  const hb = new Uint8Array(createHash('sha256').update(b).digest());
  return timingSafeEqual(ha, hb);
}

export function verifyPassword(candidate: string): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  // Fail closed: an unset password must never mean "anyone may in".
  if (!expected) return false;
  if (typeof candidate !== 'string') return false;
  return constantTimeEquals(candidate, expected);
}

export function createSessionToken(): string | null {
  const key = signingKey();
  if (!key) return null;
  const expiresAt = Date.now() + SESSION_DURATION_SECONDS * 1000;
  const payload = String(expiresAt);
  return `${payload}.${sign(payload, key)}`;
}

export function verifySessionToken(token: string | undefined): boolean {
  const key = signingKey();
  if (!key || !token) return false;

  const separator = token.lastIndexOf('.');
  if (separator < 1) return false;

  const payload = token.slice(0, separator);
  const signature = token.slice(separator + 1);
  if (!constantTimeEquals(signature, sign(payload, key))) return false;

  const expiresAt = Number(payload);
  return Number.isFinite(expiresAt) && Date.now() < expiresAt;
}

export function isAuthenticated(request: NextRequest): boolean {
  return verifySessionToken(request.cookies.get(SESSION_COOKIE)?.value);
}

export function unauthorized() {
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
}

export function sessionCookieOptions(maxAge: number = SESSION_DURATION_SECONDS) {
  return {
    httpOnly: true,
    sameSite: 'strict' as const,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge,
  };
}
