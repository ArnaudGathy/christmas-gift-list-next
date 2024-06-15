import List from "@/components/list/List";
import { getCurrentUserEmail } from "@/../auth";
import { getMySelectedGifts } from "@/lib/queries/gift";

export default async function MyGiftsLists() {
  const currentUser = await getCurrentUserEmail();
  const mySelectedGifts = await getMySelectedGifts();

  return (
    <List
      forOthers
      gifts={mySelectedGifts}
      currentUser={currentUser}
      target="offrir"
      emptyLabel="Tu n'as pas encore selectionné de cadeaux à offrir."
    />
  );
}
