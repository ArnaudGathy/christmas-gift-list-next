import List from "@/components/list/List";
import { getCurrentUserEmail } from "@/../auth";
import { getOtherPeoplesGiftsAddedByMe } from "@/lib/queries/gift";

export default async function MyListForOtherPeople() {
  const currentUser = await getCurrentUserEmail();
  const otherPeoplesGifts = await getOtherPeoplesGiftsAddedByMe();

  return (
    <List
      isPersonnal
      gifts={otherPeoplesGifts}
      target="les autres"
      currentUser={currentUser}
      emptyLabel="Tu peux aussi ajouter des cadeaux pour les autres."
    />
  );
}
