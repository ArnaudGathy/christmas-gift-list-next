"use server";
import "server-only";

import { signIn, signOut } from "@/../auth";

export async function authenticate(formData: FormData) {
  await signIn("google", formData);
}

export async function logout() {
  await signOut({ redirectTo: "/auth/login" });
}
