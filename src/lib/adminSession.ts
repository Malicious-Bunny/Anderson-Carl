// Client-side helpers. The session itself lives in an HttpOnly cookie that
// JavaScript cannot read, so the server is the only authority on whether a
// session is valid. These calls are for UX (what to render / where to
// redirect) — every admin API route enforces auth independently.

export async function checkSession(): Promise<boolean> {
  try {
    const res = await fetch('/api/admin/auth');
    if (!res.ok) return false;
    const data = await res.json();
    return data.authenticated === true;
  } catch {
    return false;
  }
}

export async function logout(): Promise<void> {
  await fetch('/api/admin/auth', { method: 'DELETE' });
}
