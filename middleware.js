import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isSellerRoute = createRouteMatcher(['/seller(.*)']);

export default clerkMiddleware((auth, req) => {
    if (isSellerRoute(req)) auth().protect();
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};