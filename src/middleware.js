import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  console.log("middleware executed..");

  const authToken = request.cookies.get("authToken")?.value;

  //------------PUBLIC API---------
  if (
    request.nextUrl.pathname === "/api/login" ||
    request.nextUrl.pathname === "/api/users"
  ) {
    return;
  }

  const loggedInUserNotAccessPaths =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/signup";

  if (loggedInUserNotAccessPaths) {
    // user has opened login or signup page
    if (authToken) {
      //means user is loggedin then dont access login or signup page
      return NextResponse.redirect(new URL("/Profile/User", request.url));
    }
  } else {
    if (!authToken) {
      // console.log("unauthorized route worked..");
      if (request.nextUrl.pathname.startsWith("/api")) {
        return NextResponse.json(
          {
            message: "Access Denied !!",
            success: false,
          },
          {
            status: 401,
          }
        );
      }
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  console.log(authToken);
  //   return NextResponse.redirect(new URL("/home", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  // the routes on which this middleware is going to apply..
  matcher: [
    "/",
    "/login",
    "/signup",
    "/add-task",
    "/show-task",
    "/profile/:path*",
    "/api/:path*",
  ],
};
