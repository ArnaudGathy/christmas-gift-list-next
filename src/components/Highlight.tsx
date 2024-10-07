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
        `${mountainsOfChristmas.className} ${className ?? ""} inline-block
        align-middle text-2xl font-semibold
        `,
        {
          "text-green-500": secondary,
          "ext-red-700": !secondary,
        },
      )}
    >
      {children}
    </span>
  );
}
