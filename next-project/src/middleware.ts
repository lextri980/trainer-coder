import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  let cookie = request.cookies.get("token");
  const path = request.nextUrl.pathname;
  
  if (!cookie && path !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  } else {
    return NextResponse.next();
  }
}

export const config = {};
