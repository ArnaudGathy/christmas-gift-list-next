"use client";

import { useFormStatus } from "react-dom";
import { buttonAnimationClasses } from "@/components/Button";
import { UsersIcon } from "@heroicons/react/24/solid";

export const CreateBackingButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      name="claim"
      type="submit"
      className={`${buttonAnimationClasses} flex h-full w-full items-start disabled:opacity-50`}
      disabled={pending}
    >
      <UsersIcon className="size-6" />
    </button>
  );
};
