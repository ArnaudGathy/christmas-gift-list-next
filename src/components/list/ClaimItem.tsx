import { ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { claimGift, removeGift, unClaimGift } from "@/lib/actions/gifts";
import { buttonAnimationClasses } from "@/components/Button";

export default function ClaimItem({
  id,
  isCancel,
  isRemove,
}: {
  id: number;
  isCancel?: boolean;
  isRemove?: boolean;
}) {
  const claim = claimGift.bind(null, id);
  const unClaim = unClaimGift.bind(null, id);
  const remove = removeGift.bind(null, id);

  const getAction = () => {
    if (isCancel) {
      return unClaim;
    }
    if (isRemove) {
      return remove;
    }
    return claim;
  };

  // todo toast ?

  return (
    <form action={getAction()}>
      <button
        name="claim"
        type="submit"
        className={`${buttonAnimationClasses} flex h-full w-full items-start`}
      >
        {isCancel || isRemove ? (
          <XMarkIcon className="size-6" />
        ) : (
          <ShoppingCartIcon className="size-6" />
        )}
      </button>
    </form>
  );
}
