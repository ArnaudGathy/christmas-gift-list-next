"use client";

import { buttonAnimationClasses } from "@/components/Button";
import { useFormStatus } from "react-dom";
import { ReactNode } from "react";

export const ClaimButton = ({ children }: { children: ReactNode }) => {
  const { pending } = useFormStatus();

  return (
    <button
      name="claim"
      type="submit"
      className={`${buttonAnimationClasses} flex h-full w-full items-start disabled:opacity-50`}
      disabled={pending}
    >
      {children}
    </button>
  );
};
