import type { NextAuthConfig } from "next-auth";
import { routes } from "@/lib/constants/routes";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnRoot = nextUrl.pathname === "/";
      const isOnLogin = nextUrl.pathname.endsWith("/login");

      if ((isOnRoot || isOnLogin) && isLoggedIn) {
        return Response.redirect(new URL(routes.mylist.href, nextUrl));
      }

      return isLoggedIn;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
