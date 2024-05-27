import { clsx } from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  secondary?: boolean;
};

export default function Button({
  children,
  className,
  onClick,
  secondary = false,
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
          "bg-red-500 disabled:bg-neutral-400": !secondary,
        },
      )}
      onPointerDown={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
