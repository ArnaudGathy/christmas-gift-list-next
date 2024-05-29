import { clsx } from "clsx";
import {
  ArrowTopRightOnSquareIcon,
  CheckIcon,
} from "@heroicons/react/16/solid";
import Image from "next/image";
import bullet from "../../../public/bullet.svg";
import ClaimItem from "@/components/list/ClaimItem";
import { Item } from "@/lib/constants/types";

export default function ItemLine({
  isPersonnal = false,
  isGlobal = false,
  currentUser,
  item: { name, addedBy, selectedBy, link, owner },
}: {
  isPersonnal?: boolean;
  currentUser: string;
  isGlobal?: boolean;
  item: Item;
}) {
  const isSelected = isGlobal && !!selectedBy;

  return (
    <div className="flex justify-between gap-2">
      <div>
        <span
          className={clsx("font-medium flex gap-1", {
            "line-through text-green-500": isSelected,
          })}
        >
          <div className="min-w-5 flex justify-center">
            {isSelected ? (
              <CheckIcon className="size-5 text-green-400" />
            ) : (
              <Image
                className="h-3 mt-1"
                alt="bullet"
                width="12"
                height="12"
                src={bullet}
              />
            )}
          </div>
          {link ? (
            <a href={link} target="_blank" rel="noreferrer">
              <ArrowTopRightOnSquareIcon className="size-5 inline mr-1 mb-1" />
              <span>{name}</span>
            </a>
          ) : (
            name
          )}
        </span>
        <p className="text-xs text-white/60 min-h-5 pl-6">
          {isSelected && <>Choisi par : {selectedBy}</>}
          {!isSelected && !isPersonnal && addedBy && (
            <>Ajouté par : {addedBy}</>
          )}
          {isPersonnal && owner !== currentUser && <>Pour : {owner}</>}
        </p>
      </div>
      <div className="min-w-6">
        {isPersonnal ? (
          <ClaimItem id={1} isRemove />
        ) : selectedBy === currentUser ? (
          <ClaimItem id={1} isCancel />
        ) : !selectedBy && !isPersonnal ? (
          <ClaimItem id={1} />
        ) : null}
      </div>
    </div>
  );
}
