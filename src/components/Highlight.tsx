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
          "inline-block bg-gradient-to-b from-green-600 to-green-400 bg-clip-text text-transparent":
            secondary,
          "inline-block bg-gradient-to-b from-red-700 to-red-400 bg-clip-text text-transparent":
            !secondary,
        },
      )}
    >
      {children}
    </span>
  );
}
