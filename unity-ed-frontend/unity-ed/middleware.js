// middleware.js
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

// Define which routes require authentication
const protectedRoutes = ["/dashboard", "/admin", "/teacher"];

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  // Allow next-auth routes and static files
  if (
    pathname.startsWith("/api/auth") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico")
  ) {
    return NextResponse.next();
  }

  // If not logged in and trying to access protected route
  if (!token && protectedRoutes.some((path) => pathname.startsWith(path))) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Optional: role-based redirect
  if (pathname.startsWith("/admin") && token?.role !== "ADMIN") {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  if (pathname.startsWith("/teacher") && token?.role !== "TEACHER") {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  return NextResponse.next();
}

// Limit middleware scope for better performance
export const config = {
  matcher: [
    "/dashboard/:path*", 
    "/admin/:path*", 
    "/teacher/:path*",
  ],
};
