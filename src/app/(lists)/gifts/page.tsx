import List from "@/components/list/List";
import { getMySelectedGifts } from "@/lib/queries/gift";
import { getCurrentUserEmail } from "@/../auth";

export default async function Home() {
  const currentUser = await getCurrentUserEmail();
  const mySelectedGifts = await getMySelectedGifts();

  return (
    <div className="my-4 flex-1">
      <List
        forOthers
        gifts={mySelectedGifts}
        currentUser={currentUser}
        target="offrir"
        emptyLabel="Tu n'as pas encore selectionné de cadeaux à offrir."
      />
    </div>
  );
}
