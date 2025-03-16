import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher([
	'/root',
	'/root/courses',
	'/root/course/:slug',
	'/root/blogs',
	'/root/blogs/:slug',
	'/root/contacts',
	'/root/instructors',
	'/root/instructors/:instructorId',
	'/root/shopping/cart',
	'/root/sign-in',
	'/root/sign-up',
	'/root/ai',
])

export default clerkMiddleware((auth, req) => {
	if (isPublicRoute(req)) {
		return
	}
	auth()
})

export const config = {
	matcher: ['/((?!_next).*)', '/(api|trpc)(.*)'],
}
