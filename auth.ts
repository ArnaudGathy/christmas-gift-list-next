import NextAuth from "next-auth";
import { authConfig } from "@/../auth.config";
import Google from "@auth/core/providers/google";

export const { signIn, signOut, handlers } = NextAuth({
  ...authConfig,
  providers: [Google],
});
