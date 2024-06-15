import List from "@/components/list/List";
import Filters from "@/components/list/Filters";
import { getGiftsByUsersExceptMine } from "@/lib/queries/gift";
import { entries, sort } from "remeda";
import { getCurrentUserEmail } from "@/../auth";

type HomeProps = {
  searchParams?: {
    showUnclaimed?: string;
  };
};

export default async function Home({ searchParams }: HomeProps) {
  const currentUser = await getCurrentUserEmail();
  const showUnclaimed = searchParams?.showUnclaimed === "true";

  const giftstByUser = await getGiftsByUsersExceptMine(showUnclaimed);
  const giftsSortedByUserName = sort(entries(giftstByUser), (a, b) =>
    a[0].localeCompare(b[0]),
  );

  return (
    <div className="mb-4 flex flex-1 flex-col gap-4">
      <Filters />
      {giftsSortedByUserName.map(([target, items]) => (
        <List
          key={target}
          isGlobal
          gifts={items}
          target={target}
          currentUser={currentUser}
        />
      ))}
    </div>
  );
}
