import "server-only";

import prisma from "@/lib/prisma";
import { getCurrentUserEmail } from "@/../auth";
import { groupBy } from "remeda";
import { unstable_noStore as noStore } from "next/cache";

export const getMyGiftsAddedByMe = async () => {
  try {
    const currentUser = await getCurrentUserEmail();

    return prisma.gift.findMany({
      where: {
        ownedBy: { email: currentUser },
        addedBy: { email: currentUser },
      },
      include: {
        ownedBy: true,
        addedBy: true,
        selectedBy: true,
        backings: {
          include: {
            user: {
              select: { id: true, name: true, email: true },
            },
          },
        },
      },
      orderBy: { name: "asc" },
    });
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch gifts.");
  }
};

export const getOtherPeoplesGiftsAddedByMe = async () => {
  try {
    const currentUser = await getCurrentUserEmail();

    return prisma.gift.findMany({
      where: {
        ownedBy: { email: { not: currentUser } },
        addedBy: { email: currentUser },
      },
      include: {
        ownedBy: true,
        addedBy: true,
        selectedBy: true,
        backings: {
          include: {
            user: {
              select: { id: true, name: true, email: true },
            },
          },
        },
      },
      orderBy: { name: "asc" },
    });
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch gifts.");
  }
};

export const getMySelectedGifts = async () => {
  try {
    const currentUser = await getCurrentUserEmail();

    return prisma.gift.findMany({
      where: {
        OR: [
          { selectedBy: { email: currentUser } },
          { backings: { some: { user: { email: currentUser } } } },
        ],
      },
      include: {
        ownedBy: true,
        addedBy: true,
        selectedBy: true,
        backings: {
          include: {
            user: {
              select: { id: true, name: true, email: true },
            },
          },
        },
      },
      orderBy: { name: "asc" },
    });
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch gifts.");
  }
};

export const getGiftsByUsersExceptMine = async (unclaimedOnly: boolean) => {
  noStore();
  try {
    const currentUser = await getCurrentUserEmail();
    const selectByClause = unclaimedOnly ? { selectedBy: null } : {};

    const gifts = await prisma.gift.findMany({
      where: { ownedBy: { email: { not: currentUser } }, ...selectByClause },
      include: {
        ownedBy: true,
        addedBy: true,
        selectedBy: true,
        backings: {
          include: {
            user: {
              select: { id: true, name: true, email: true },
            },
          },
        },
      },
      orderBy: [
        { selectedById: { sort: "asc", nulls: "first" } },
        { name: "asc" },
      ],
    });

    return groupBy(gifts, (gift) => gift.ownedBy.name);
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch gifts.");
  }
};
