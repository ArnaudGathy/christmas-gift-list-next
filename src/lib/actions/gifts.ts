"use server";
import "server-only";

import prisma from "@/lib/prisma";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getUserByEmail } from "@/lib/queries/user";

export async function addGift(addedById: string, formData: FormData) {
  const validation = z
    .object({
      ownedById: z.string().length(25),
      addedById: z.string().length(25),
      name: z.string().min(1),
      link: z.union([z.literal("").transform(() => null), z.string().url()]),
    })
    .safeParse({
      addedById,
      ownedById: formData.get("ownedById"),
      name: formData.get("name"),
      link: formData.get("link"),
    });

  if (!validation.success) {
    console.error(validation.error);
    throw new Error("Could not validate gift form data");
  }

  try {
    await prisma.gift.create({ data: validation.data });
  } catch (error) {
    console.error(error);
    throw new Error("Database Error: Failed to create gift.");
  }

  revalidatePath("/mylist");
  redirect("/mylist");
}

const validateItemId = (itemId: string, action: string) => {
  const validation = z
    .object({
      itemId: z.string().length(25),
    })
    .safeParse({
      itemId,
    });

  if (!validation.success) {
    console.error(validation.error);
    throw new Error(`Could not validate gift ${action}`);
  }

  return validation;
};

export async function claimGift(itemId: string, currentUserEmail: string) {
  const validation = validateItemId(itemId, "claim");

  try {
    const user = await getUserByEmail(currentUserEmail);
    await prisma.gift.update({
      where: {
        id: validation.data.itemId,
      },
      data: { selectedById: user?.id },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Database Error: Failed to claim gift.");
  }

  revalidatePath("/others");
}

export async function unClaimGift(itemId: string) {
  const validation = validateItemId(itemId, "unclaim");

  try {
    await prisma.gift.update({
      where: {
        id: validation.data.itemId,
      },
      data: { selectedById: null },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Database Error: Failed to unclaim gift.");
  }

  revalidatePath("/others");
  revalidatePath("/gifts");
}

export async function removeGift(itemId: string) {
  const validation = validateItemId(itemId, "delete");

  try {
    await prisma.gift.delete({
      where: {
        id: validation.data.itemId,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Database Error: Failed to unclaim gift.");
  }

  revalidatePath("/mylist");
}
