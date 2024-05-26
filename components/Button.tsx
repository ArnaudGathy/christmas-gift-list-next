import { ReactNode } from "react";
import { clsx } from "clsx";

type ButtonProps = {
  type?: HTMLButtonElement["type"];
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  className?: string;
  secondary?: boolean;
};

export default function Button({
  children,
  className,
  onClick,
  secondary = false,
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button
      className={clsx(
        `${className ?? ""}
        text-sm text-center rounded p-2 mt-0 w-full
        `,
        {
          "active:scale-90 transition-transform": !rest.disabled,
          "bg-white text-black/75": secondary,
          "bg-red-500 text-white disabled:bg-neutral-400": !secondary,
        },
      )}
      type={type}
      onPointerDown={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
