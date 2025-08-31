import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

// Helper to verify token
async function verifyToken(token: string) {
  try {
    return await jwtVerify(token, secret);
  } catch (err) {
    console.error("JWT verification failed:", err);
    return null;
  }
}

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  // Protect dashboard pages and API routes
  if (
    req.nextUrl.pathname.startsWith("/dashboard") ||
    req.nextUrl.pathname.startsWith("/api")
  ) {
    if (!token) {
      console.log("No token found, redirecting to login...");
      return NextResponse.redirect(new URL("/login", req.url));
    }

    const verified = await verifyToken(token);

    if (!verified) {
      console.log("Invalid or expired token, redirecting...");
      return NextResponse.redirect(new URL("/login", req.url));
    }

    // Optional: Attach user payload to request headers (for API routes)
    const response = NextResponse.next();
    response.headers.set("x-user", JSON.stringify(verified.payload));
    return response;
  }

  return NextResponse.next();
}

// Match both dashboard and API routes
export const config = {
  matcher: ["/dashboard/:path*", "/api/blog/:path*"],
};
