import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const token = request.cookies.get("access_token")?.value;
  const userRole = request.cookies.get("user_role")?.value;
  const { pathname } = request.nextUrl;

  const isPublicPath = pathname === "/login" || pathname.startsWith("/signup");

  if (!token && !isPublicPath) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (token && isPublicPath) {
    const target = userRole === "admin" ? "/admin" : "/";
    return NextResponse.redirect(new URL(target, request.url));
  }

  if (
    token &&
    userRole === "admin" &&
    !pathname.startsWith("/admin") &&
    !isPublicPath
  ) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  if (pathname.startsWith("/admin") && userRole !== "admin") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// Include everything except static files
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
