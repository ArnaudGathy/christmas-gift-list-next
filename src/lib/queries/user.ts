import "server-only";

import prisma from "@/lib/prisma";

export const getUserByEmail = (userEmail: string) => {
  if (process.env.NODE_ENV === "production") {
    return prisma.user.findUnique({
      select: { email: true },
      where: { email: userEmail },
      cacheStrategy: { ttl: 3600, swr: 3600 },
    });
  }
  return { email: "arno.firefox@gmail.com" };
};
