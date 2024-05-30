import ItemLine from "@/components/list/ItemLine";
import { Item } from "@/lib/constants/types";
import Highlight from "@/components/Highlight";

export default function List({
  isPersonnal = false,
  isGlobal = false,
  forOthers = false,
  currentUser,
  target,
  items,
}: {
  forOthers?: boolean;
  isPersonnal?: boolean;
  currentUser: string;
  isGlobal?: boolean;
  target?: string;
  items: Item[];
}) {
  return (
    <div className="rounded-lg bg-gradient-to-r from-red-600/95 to-red-500/75 shadow-lg">
      {target && (
        <div className="border-b border-b-white/30 px-4 py-2">
          <h2 className="text-lg font-semibold">
            Pour <Highlight secondary>{target}</Highlight>
          </h2>
        </div>
      )}
      <div className="space-y-2 px-2 py-2">
        {items.map((item) => (
          <ItemLine
            forOthers={forOthers}
            isPersonnal={isPersonnal}
            isGlobal={isGlobal}
            key={item.name}
            item={item}
            currentUser={currentUser}
          />
        ))}
      </div>
    </div>
  );
}
