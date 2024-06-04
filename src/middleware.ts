import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { authKey } from "./constants/auth-key";
import { jwtDecode } from "jwt-decode";
import { userPayload } from "./types";
import { toast } from "sonner";

const AuthRoutes = ["/login", "/register"];
const CommonPrivateRoutes = ["/dashboard"];
const RoleBasedPaths = {
  user: "/dashboard/user",
  admin: "/dashboard/admin",
  superAdmin: "/dashboard/super-admin",
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = cookies().get(authKey)?.value;

  if (!accessToken) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (accessToken && CommonPrivateRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  let decoded = null;
  if (accessToken) {
    decoded = jwtDecode(accessToken) as userPayload;
  }

  if (pathname === "/trip-post" && decoded?.role !== "user") {
    toast.error("Only a user access this page!");
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (pathname.startsWith("/travels/request") && decoded?.role !== "user") {
    toast.error("Only a user access this page!");
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (pathname.startsWith(RoleBasedPaths.user) && decoded?.role !== "user") {
    toast.error("Only a user access this page!");
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (pathname.startsWith(RoleBasedPaths.admin) && decoded?.role !== "admin") {
    toast.error("Only admin can access this page!");
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (
    pathname.startsWith(RoleBasedPaths.superAdmin) &&
    decoded?.role !== "super-admin"
  ) {
    toast.error("Only super admin can access this page!");
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/login",
    "/register",
    "/trip-post",
    "/travels/request/:id*",
    "/dashboard/:page*",
  ],
};
