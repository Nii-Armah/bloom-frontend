import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("access_token")?.value;
  const userRole = request.cookies.get("user_role")?.value;

  // Guard the Admin routes
  if (request.nextUrl.pathname.startsWith("/admin")) {
    if (!token || userRole !== "admin") {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Prevent logged-in users from hitting /login or /signup
  if (
    token &&
    (request.nextUrl.pathname === "/login" ||
      request.nextUrl.pathname.startsWith("/signup"))
  ) {
    const target = userRole === "admin" ? "/admin" : "/dashboard";
    return NextResponse.redirect(new URL(target, request.url));
  }

  return NextResponse.next();
}

// Only run middleware on these paths
export const config = {
  matcher: ["/admin/:path*", "/login", "/signup/:path*"],
};
