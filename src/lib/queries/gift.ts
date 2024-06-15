import "server-only";

import prisma from "@/lib/prisma";
import { getCurrentUserEmail } from "@/../auth";
import { groupBy } from "remeda";
import { unstable_noStore as noStore } from "next/cache";

export const getMyGiftsAddedByMe = async () => {
  noStore();
  const currentUser = await getCurrentUserEmail();

  return prisma.gift.findMany({
    where: { ownedBy: { email: currentUser }, addedBy: { email: currentUser } },
    include: { ownedBy: true, addedBy: true, selectedBy: true },
    orderBy: { name: "asc" },
  });
};

export const getOtherPeoplesGiftsAddedByMe = async () => {
  noStore();
  const currentUser = await getCurrentUserEmail();

  return prisma.gift.findMany({
    where: {
      ownedBy: { email: { not: currentUser } },
      addedBy: { email: currentUser },
    },
    include: { ownedBy: true, addedBy: true, selectedBy: true },
    orderBy: { name: "asc" },
  });
};

export const getMySelectedGifts = async () => {
  noStore();
  const currentUser = await getCurrentUserEmail();

  return prisma.gift.findMany({
    where: { selectedBy: { email: currentUser } },
    include: { ownedBy: true, addedBy: true, selectedBy: true },
    orderBy: { name: "asc" },
  });
};

export const getGiftsByUsersExceptMine = async (unclaimedOnly: boolean) => {
  noStore();
  const currentUser = await getCurrentUserEmail();
  const selectByClause = unclaimedOnly ? { selectedBy: null } : {};

  const gifts = await prisma.gift.findMany({
    where: { ownedBy: { email: { not: currentUser } }, ...selectByClause },
    include: { ownedBy: true, addedBy: true, selectedBy: true },
    orderBy: [
      { selectedById: { sort: "asc", nulls: "first" } },
      { name: "asc" },
    ],
  });

  return groupBy(gifts, (gift) => gift.ownedBy.name);
};
