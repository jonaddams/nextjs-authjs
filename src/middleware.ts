import { auth } from "@/src/app/auth/auth-js";

// protected routes
// https://nextjs.org/docs/pages/building-your-application/routing/middleware
export const config = {
  matcher: ["/dashboard"],
  runtime: "nodejs", // Ensure the middleware runs in Node.js environment
};

export default auth((req) => {
  if (!req.auth) {
    return Response.redirect(new URL("/auth/sign-in", req.url));
  }
});
