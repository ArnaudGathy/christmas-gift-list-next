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
  forOthers = false,
  isPersonnal = false,
  isGlobal = false,
  currentUser,
  item: { name, addedBy, selectedBy, link, owner },
}: {
  forOthers?: boolean;
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
          className={clsx("flex gap-1 font-medium", {
            "text-green-500 line-through": isSelected,
          })}
        >
          <div className="flex min-w-5 justify-center">
            {isSelected ? (
              <CheckIcon className="size-5 text-green-400" />
            ) : (
              <Image
                className="mt-1 h-3"
                alt="bullet"
                width="12"
                height="12"
                src={bullet}
              />
            )}
          </div>
          {link ? (
            <a href={link} target="_blank" rel="noreferrer">
              <ArrowTopRightOnSquareIcon className="mb-1 mr-1 inline size-5" />
              <span>{name}</span>
            </a>
          ) : (
            name
          )}
        </span>
        <p className="min-h-5 pl-6 text-xs text-white/60">
          {isSelected && <>Choisi par : {selectedBy}</>}
          {!isSelected && !isPersonnal && !forOthers && addedBy && (
            <>Ajouté par : {addedBy}</>
          )}
          {(isPersonnal || forOthers) && owner !== currentUser && (
            <>Pour : {owner}</>
          )}
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
