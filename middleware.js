import { NextResponse } from "next/server";
import { readSessionFromRequest } from "./lib/auth";

export async function middleware(request) {
  const path = request.nextUrl.pathname;
  if (path.startsWith("/_next") || path === "/favicon.ico" || path === "/login" || path.startsWith("/api/")) {
    return NextResponse.next();
  }
  const session = await readSessionFromRequest(request);
  if (!session) return NextResponse.redirect(new URL("/login", request.url));
  if (path.startsWith("/simulado") && session.role !== "exam") {
    return NextResponse.redirect(new URL("/?aviso=senha-simulado", request.url));
  }
  return NextResponse.next();
}
export const config = { matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"] };