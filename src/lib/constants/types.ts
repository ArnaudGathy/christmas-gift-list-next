import { GiftBacking, Prisma, User } from "@prisma/client";

export type Gift = Prisma.GiftGetPayload<{
  include: {
    ownedBy: true;
    selectedBy: true;
    addedBy: true;
  };
}> & {
  backings: Array<GiftBacking & { user: User }>;
};
