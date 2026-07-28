import { auth } from "@/auth"
import { NextResponse } from "next/server"
import { signOut } from "@/auth"

export const proxy = auth(async (req) => {
    const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");

    if (isAdminRoute && !req.auth) {
        const loginUrl = new URL("/signin", req.nextUrl);
        loginUrl.searchParams.set("callbackUrl", req.nextUrl.pathname);
        return NextResponse.redirect(loginUrl);
    }

    if (isAdminRoute && req.auth?.user?.role !== "admin") {
        const response = NextResponse.redirect(new URL("/signin", req.nextUrl));
        response.cookies.delete("authjs.session-token");
        response.cookies.delete("__Secure-authjs.session-token");
        return response;
    }
})

export const config = {
    matcher: ["/admin/:path*"],
}