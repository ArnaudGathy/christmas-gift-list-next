import {
  ShoppingCartIcon,
  UserPlusIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import {
  claimGift,
  createBacking,
  joinBacking,
  leaveBacking,
  removeGift,
  unClaimGift,
} from "@/lib/actions/gifts";
import { buttonAnimationClasses } from "@/components/Button";
import { getCurrentUserEmail } from "@/../auth";
import { clsx } from "clsx";

export default async function ClaimItem({
  id,
  isCancel,
  isRemove,
  isJoinBacking,
  isLeaveBacking,
}: {
  id: string;
  isCancel?: boolean;
  isRemove?: boolean;
  isJoinBacking?: boolean;
  isLeaveBacking?: boolean;
}) {
  const displayBackingIcon =
    !isJoinBacking && !isLeaveBacking && !isCancel && !isRemove;
  const currentUserEmail = await getCurrentUserEmail();
  const claim = claimGift.bind(null, id, currentUserEmail);
  const unClaim = unClaimGift.bind(null, id);
  const remove = removeGift.bind(null, id);

  const createBack = createBacking.bind(null, id, currentUserEmail);
  const joinBack = joinBacking.bind(null, id, currentUserEmail);
  const leaveBack = leaveBacking.bind(null, id, currentUserEmail);

  const getAction = () => {
    if (isJoinBacking) {
      return joinBack;
    }
    if (isLeaveBacking) {
      return leaveBack;
    }
    if (isCancel) {
      return unClaim;
    }
    if (isRemove) {
      return remove;
    }
    return claim;
  };

  const getIcon = () => {
    if (isCancel || isRemove || isLeaveBacking) {
      return <XMarkIcon className="size-6" />;
    }

    if (isJoinBacking) {
      return <UserPlusIcon className="size-6" />;
    }

    return <ShoppingCartIcon className="size-6" />;
  };

  return (
    <div
      className={clsx("flex min-w-6 gap-2", { "min-w-14": displayBackingIcon })}
    >
      {displayBackingIcon && (
        <form action={createBack}>
          <button
            name="claim"
            type="submit"
            className={`${buttonAnimationClasses} flex h-full w-full items-start`}
          >
            <UsersIcon className="size-6" />
          </button>
        </form>
      )}
      <form action={getAction()}>
        <button
          name="claim"
          type="submit"
          className={`${buttonAnimationClasses} flex h-full w-full items-start`}
        >
          {getIcon()}
        </button>
      </form>
    </div>
  );
}
