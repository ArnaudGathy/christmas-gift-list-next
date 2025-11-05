import { clsx } from "clsx";
import {
  ArrowTopRightOnSquareIcon,
  CheckIcon,
} from "@heroicons/react/16/solid";
import Image from "next/image";
import bullet from "../../../public/bullet.svg";
import ClaimItem from "@/components/list/ClaimItem";
import { Gift } from "@/lib/constants/types";
import { UsersIcon } from "@heroicons/react/24/solid";

export default function ItemLine({
  forOthers = false,
  isPersonnal = false,
  isGlobal = false,
  currentUser,
  gift: { name, link, ownedBy, selectedBy, addedBy, id, backings },
}: {
  forOthers?: boolean;
  isPersonnal?: boolean;
  currentUser: string;
  isGlobal?: boolean;
  gift: Gift;
}) {
  const hasBacking = !!backings.length;
  const isSelected = isGlobal && !!selectedBy;
  const isUserBacker = backings.some(
    (backing) => backing?.user?.email === currentUser,
  );

  function renderClaimItem() {
    if (isPersonnal) {
      return <ClaimItem id={id} isRemove />;
    }

    if (hasBacking && selectedBy?.email !== currentUser) {
      if (isUserBacker) {
        return <ClaimItem id={id} isLeaveBacking />;
      } else {
        return <ClaimItem id={id} isJoinBacking />;
      }
    }

    if (selectedBy?.email === currentUser) {
      return <ClaimItem id={id} isCancel />;
    }

    if (!selectedBy && !isPersonnal) {
      return <ClaimItem id={id} />;
    }

    return null;
  }

  return (
    <div className="flex justify-between gap-2">
      <div className="flex-1">
        <span
          className={clsx("flex gap-1 font-medium", {
            "text-green-500 line-through": isSelected,
          })}
        >
          <div className="flex min-w-5 justify-center">
            {isSelected ? (
              hasBacking ? (
                <UsersIcon className="size-45text-green-400" />
              ) : (
                <CheckIcon className="size-5 text-green-400" />
              )
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
        <p className="flex min-h-5 flex-col pl-6 text-xs text-white/60">
          {isSelected && !backings.length && (
            <>Choisi par : {selectedBy.name}</>
          )}
          {!isSelected &&
            !isPersonnal &&
            !forOthers &&
            addedBy.name !== ownedBy.name && <>Ajouté par : {addedBy.name}</>}
          {(isPersonnal || forOthers) && ownedBy.email !== currentUser && (
            <>Pour : {ownedBy.name}</>
          )}
          {hasBacking && !isPersonnal && (
            <span className="flex gap-1">
              Participants :
              {backings.map((backing, index) => {
                const isInitialBacker =
                  backing.user.email === selectedBy?.email;
                return (
                  <span key={backing.user.id} className="flex">
                    <span
                      className={clsx("flex gap-1", {
                        underline: isInitialBacker,
                      })}
                    >
                      {backing.user.name}
                    </span>
                    {index < backings.length - 1 && ", "}
                  </span>
                );
              })}
            </span>
          )}
        </p>
      </div>
      {renderClaimItem()}
    </div>
  );
}
