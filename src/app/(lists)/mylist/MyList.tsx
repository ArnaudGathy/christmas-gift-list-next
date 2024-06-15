import List from "@/components/list/List";
import { getMyGiftsAddedByMe } from "@/lib/queries/gift";
import { getCurrentUserEmail } from "@/../auth";

export default async function MyList() {
  const currentUser = await getCurrentUserEmail();
  const myGifts = await getMyGiftsAddedByMe();

  return (
    <List
      isPersonnal
      gifts={myGifts}
      target="moi"
      currentUser={currentUser}
      emptyLabel='Ajoute ton premier cadeau avec le bouton "+"'
    />
  );
}
