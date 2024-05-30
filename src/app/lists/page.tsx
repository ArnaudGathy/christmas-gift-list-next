import List from "@/components/list/List";
import { itemsByTarget } from "@/lib/constants/mocks";
import Filters from "@/components/list/Filters";

export default function Home() {
  // TODO get all lists
  // group by user
  // order by user
  // order by selected or not (order by claimed at), order by added at

  // TODO list filters
  // Only available to claim
  // One person's list only

  return (
    <div className="flex flex-col flex-1 gap-4 mb-4">
      <Filters />
      {Object.entries(itemsByTarget).map(([target, items]) => (
        <List
          isGlobal
          key={target}
          items={items}
          target={target}
          currentUser="Arnaud"
        />
      ))}
    </div>
  );
}
