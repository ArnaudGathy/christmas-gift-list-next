import ItemLine from "@/components/list/ItemLine";
import { Item } from "@/lib/constants/types";
import Highlight from "@/components/Highlight";
import { clsx } from "clsx";

export default function List({
  isPersonnal = false,
  isGlobal = false,
  forOthers = false,
  currentUser,
  target,
  items,
  emptyLabel,
}: {
  forOthers?: boolean;
  isPersonnal?: boolean;
  currentUser: string;
  isGlobal?: boolean;
  target: string;
  emptyLabel?: string;
  items: Item[];
}) {
  return (
    <div className="rounded-lg bg-gradient-to-r from-red-600/95 to-red-500/75 shadow-lg">
      <div className="border-b border-b-white/30 px-4 py-2">
        <h2 className="text-lg font-semibold">
          Pour <Highlight secondary>{target}</Highlight>
        </h2>
      </div>
      <div
        className={clsx("space-y-2 p-2", {
          "p-4": !items.length && emptyLabel,
        })}
      >
        {!!items.length
          ? items.map((item) => (
              <ItemLine
                forOthers={forOthers}
                isPersonnal={isPersonnal}
                isGlobal={isGlobal}
                key={item.name}
                item={item}
                currentUser={currentUser}
              />
            ))
          : emptyLabel && <span className="text-white/60">{emptyLabel}</span>}
      </div>
    </div>
  );
}
