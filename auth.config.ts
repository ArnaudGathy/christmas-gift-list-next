import type { NextAuthConfig } from "next-auth";
import { routes } from "@/lib/constants/routes";
import { getUserByEmail } from "@/lib/queries/user";

const isUserAuthorized = async (
  auth: { user?: { email?: string | null } } | null,
) => {
  if (!auth?.user?.email) {
    return false;
  }
  const user = await getUserByEmail(auth.user.email);
  return !!user;
};

export const authConfig = {
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  callbacks: {
    async signIn(auth) {
      return isUserAuthorized(auth);
    },
    // async authorized({ auth, request: { nextUrl } }) {
    //   const isAllowed = await isUserAuthorized(auth);
    //
    //   const shouldRedirect = ["/", "/auth/login"].includes(nextUrl.pathname);
    //   if (isAllowed && shouldRedirect) {
    //     return Response.redirect(new URL(routes.mylist.href, nextUrl));
    //   }
    //
    //   return isAllowed;
    // },
  },
  providers: [],
} satisfies NextAuthConfig;
