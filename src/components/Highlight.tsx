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
        `${mountainsOfChristmas.className} ${className ?? ""} inline-block bg-gradient-to-b bg-clip-text
        align-middle text-2xl font-semibold text-transparent
        `,
        {
          "from-green-600 to-green-400": secondary,
          "from-red-700 to-red-400": !secondary,
        },
      )}
    >
      {children}
    </span>
  );
}
