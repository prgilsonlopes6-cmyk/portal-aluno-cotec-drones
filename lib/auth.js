const encoder = new TextEncoder();
const decoder = new TextDecoder();
const cookieName = "cotec_session";
function toB64Url(bytes) {
  let binary = "";
  for (const b of bytes) binary += String.fromCharCode(b);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}
function fromB64Url(value) {
  const padded = value.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((value.length + 3) % 4);
  const binary = atob(padded);
  return Uint8Array.from(binary, c => c.charCodeAt(0));
}
async function key() {
  const value = process.env.SESSION_SECRET;
  if (!value || value.length < 32) throw new Error("Configure SESSION_SECRET com pelo menos 32 caracteres.");
  return crypto.subtle.importKey("raw", encoder.encode(value), { name: "HMAC", hash: "SHA-256" }, false, ["sign", "verify"]);
}
export async function createSession(role) {
  const body = toB64Url(encoder.encode(JSON.stringify({ role, exp: Date.now() + 1000 * 60 * 60 * 12 })));
  const mac = await crypto.subtle.sign("HMAC", await key(), encoder.encode(body));
  return `${body}.${toB64Url(new Uint8Array(mac))}`;
}
async function verify(token) {
  if (!token) return null;
  const [body, mac] = token.split(".");
  if (!body || !mac) return null;
  try {
    const valid = await crypto.subtle.verify("HMAC", await key(), fromB64Url(mac), encoder.encode(body));
    if (!valid) return null;
    const payload = JSON.parse(decoder.decode(fromB64Url(body)));
    return payload.exp > Date.now() ? payload : null;
  } catch { return null; }
}
export async function readSessionFromRequest(request) {
  return verify(request.cookies.get(cookieName)?.value);
}
export const SESSION_COOKIE = cookieName;