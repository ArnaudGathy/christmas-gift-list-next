import { clsx } from "clsx";

export const buttonAnimationClasses = "active:scale-90 transition-transform";

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
        text-sm text-center rounded-lg p-2 mt-0 w-full
        `,
        {
          buttonAnimationClasses: !rest.disabled,
          "bg-white text-black/75": secondary,
          "bg-red-600 disabled:bg-neutral-400": !secondary,
        },
      )}
      onPointerDown={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
