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

  const giftsByUser = await getGiftsByUsersExceptMine(showUnclaimed);
  const giftsSortedByUserName = sort(entries(giftsByUser), (a, b) =>
    a[0].localeCompare(b[0]),
  );

  if (giftsSortedByUserName.length === 0) {
    return (
      <List
        isGlobal
        gifts={[]}
        target={"les autres"}
        currentUser={currentUser}
        emptyLabel="Personne n'a encore ajouté de cadeau."
      />
    );
  }

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
