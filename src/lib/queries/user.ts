import "server-only";

import prisma from "@/lib/prisma";

export const getUserByEmail = async (email: string) => {
  try {
    return prisma.user.findUnique({
      select: { email: true, id: true },
      where: { email },
      cacheStrategy: { ttl: 3600, swr: 3600 },
    });
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch user by email.");
  }
};

export const getAllUsers = async () => {
  try {
    return prisma.user.findMany({
      orderBy: { name: "asc" },
      cacheStrategy: { ttl: 3600, swr: 3600 },
    });
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch users.");
  }
};
