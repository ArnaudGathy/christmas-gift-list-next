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
    <div className="bg-red-600/90 rounded-lg shadow-lg">
      {target && (
        <div className="px-4 py-2 border-b border-b-white/30">
          <h2 className="text-lg font-semibold">
            Pour <Highlight secondary>{target}</Highlight>
          </h2>
        </div>
      )}
      <div className="px-2 py-2 space-y-2">
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
