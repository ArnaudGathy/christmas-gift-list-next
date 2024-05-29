import { ReactNode } from "react";
import { mountainsOfChristmas } from "@/lib/constants/fonts";
import { clsx } from "clsx";

export default function Highlight({
  children,
  secondary,
}: {
  children: ReactNode;
  secondary?: boolean;
}) {
  return (
    <span
      className={clsx(
        `${mountainsOfChristmas.className} text-2xl font-semibold align-middle`,
        {
          "text-green-600": secondary,
          "text-red-600": !secondary,
        },
      )}
    >
      {children}
    </span>
  );
}
