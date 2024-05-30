import { ReactNode } from "react";
import { mountainsOfChristmas } from "@/lib/constants/fonts";
import { clsx } from "clsx";

export default function Highlight({
  children,
  secondary,
  className,
}: {
  className?: string;
  children: ReactNode;
  secondary?: boolean;
}) {
  return (
    <span
      className={clsx(
        `${mountainsOfChristmas.className} ${className ?? ""} align-middle text-2xl font-semibold`,
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
