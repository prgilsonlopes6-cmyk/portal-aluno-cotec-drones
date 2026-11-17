import { NextResponse } from "next/server";
import { createSession, SESSION_COOKIE } from "../../../lib/auth";
export async function POST(request) {
  try {
    const { password, scope } = await request.json();
    const expected = scope === "exam" ? process.env.SIMULADO_PASSWORD : process.env.PORTAL_PASSWORD;
    if (!expected || typeof password !== "string" || password.length > 200 || password !== expected) {
      return NextResponse.json({ error: "Acesso não autorizado." }, { status: 401 });
    }
    const response = NextResponse.json({ ok: true });
    response.cookies.set(SESSION_COOKIE, await createSession(scope === "exam" ? "exam" : "portal"), {
      httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax",
      path: "/", maxAge: 60 * 60 * 12
    });
    return response;
  } catch {
    return NextResponse.json({ error: "Solicitação inválida." }, { status: 400 });
  }
}