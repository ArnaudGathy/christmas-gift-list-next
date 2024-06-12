import type { NextAuthConfig } from "next-auth";
import { routes } from "@/lib/constants/routes";
import { getUserByEmail } from "@/lib/queries/user";

const isUserAuthorized = async (email?: string | null) => {
  if (!email) {
    return false;
  }
  const user = await getUserByEmail(email);
  return !!user;
};

export const authConfig = {
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  callbacks: {
    async signIn(auth) {
      return isUserAuthorized(auth?.user?.email);
    },
    authorized({ auth, request: { nextUrl } }) {
      const isConnected = !!auth?.user?.email;

      const shouldRedirect = ["/", "/auth/login"].includes(nextUrl.pathname);
      if (isConnected && shouldRedirect) {
        return Response.redirect(new URL(routes.mylist.href, nextUrl));
      }

      return isConnected;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
