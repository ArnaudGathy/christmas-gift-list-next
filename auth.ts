import NextAuth, { DefaultSession } from "next-auth";
import { authConfig } from "@/../auth.config";
import Google from "@auth/core/providers/google";

declare module "next-auth" {
  interface Session {
    user: {
      email: string;
    } & DefaultSession["user"];
  }
}

export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,
  providers: [Google],
});

export const getCurrentUserEmail = async () => {
  const session = await auth();
  return session?.user.email;
};
