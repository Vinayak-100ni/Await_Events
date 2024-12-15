import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
 '/sign-in(.*)',
 '/sign-up(.*)',
 '/',
 '/events/:id',
 '/api/webhook/clerk',
 'api/webhook/stripe',
 '/api/uploadthing'
])

export default clerkMiddleware((auth, request) => {
 if (!isPublicRoute(request)) {
  auth().protect()
 }
})

// export default clerkMiddleware((auth, req) => {
//  const { userId } = auth();
//  const currentUrl = new URL(req.url);
//  const isAccessingDashboard = currentUrl.pathname === '/';
//  const isApiRequest = currentUrl.pathname.startsWith("/api");

//  if (userId && isPublicRoute(req) && !isAccessingDashboard) {
//   return NextResponse.redirect(new URL('/', req.url));
//  }
//  //not logged in
//  if (!userId) {
//   if (!isPublicRoute(req)) {
//    return NextResponse.redirect(new URL('/sign-in', req.url));
//   }
//  }
//  return NextResponse.next()
// })

export const config = {
 matcher: [
  // Skip Next.js internals and all static files, unless found in search params
  '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
  // Always run for API routes
  '/(api|trpc)(.*)',
 ],
};