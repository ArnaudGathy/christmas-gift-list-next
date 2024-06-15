import { Prisma } from "@prisma/client";

export type Gift = Prisma.GiftGetPayload<{
  include: { ownedBy: true; selectedBy: true; addedBy: true };
}>;
