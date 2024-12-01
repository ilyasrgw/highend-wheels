import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt"; // Import getToken for verifying JWT

export async function middleware(request) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET, // Ensure you have this in your .env
  });

  // Redirect to /signin if the user is not authenticated
  if (!token && request.nextUrl.pathname === "/account") {
    const signInUrl = new URL("/api/auth/signin", request.url);
    signInUrl.searchParams.set("callbackUrl", "/account");
    return NextResponse.redirect(signInUrl);
  }

  // Allow the request to proceed
  return NextResponse.next();
}

export const config = {
  matcher: ["/account"], // Only apply middleware to this route
};
