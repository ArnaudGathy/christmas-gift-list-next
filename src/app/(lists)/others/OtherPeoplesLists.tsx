import List from "@/components/list/List";
import { getCurrentUserEmail } from "@/../auth";
import { getGiftsByUsersExceptMine } from "@/lib/queries/gift";
import { entries, sort } from "remeda";

type OtherPeoplesListsProps = {
  showUnclaimed?: boolean;
};

export default async function OtherPeoplesLists({
  showUnclaimed = false,
}: OtherPeoplesListsProps) {
  const currentUser = await getCurrentUserEmail();

  const giftstByUser = await getGiftsByUsersExceptMine(showUnclaimed);
  const giftsSortedByUserName = sort(entries(giftstByUser), (a, b) =>
    a[0].localeCompare(b[0]),
  );

  return giftsSortedByUserName.map(([target, items]) => (
    <List
      key={target}
      isGlobal
      gifts={items}
      target={target}
      currentUser={currentUser}
    />
  ));
}
