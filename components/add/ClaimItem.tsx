import { ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { claimGift, unClaimGift } from "@/lib/actions/gifts";
import { buttonAnimationClasses } from "@/components/Button";

export default function ClaimItem({
  id,
  cancel,
}: {
  id: number;
  cancel?: boolean;
}) {
  const claim = claimGift.bind(null, id);
  const unClaim = unClaimGift.bind(null, id);

  // todo toast ?

  return (
    <form action={cancel ? unClaim : claim}>
      <button
        type="submit"
        className={`${buttonAnimationClasses} flex items-start h-full w-full`}
      >
        {cancel ? (
          <XMarkIcon className="size-6" />
        ) : (
          <ShoppingCartIcon className="size-6" />
        )}
      </button>
    </form>
  );
}
