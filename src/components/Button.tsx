import { clsx } from "clsx";

export const buttonAnimationClasses = "active:scale-90 transition-transform";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  round?: boolean;
  secondary?: boolean;
};

export default function Button({
  round,
  children,
  className,
  onClick,
  secondary = false,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={clsx(
        `${className ?? ""} ${buttonAnimationClasses}
        w-full p-2 text-center text-sm md:max-w-96`,
        {
          "bg-white text-green-700": secondary,
          "bg-red-600 disabled:bg-neutral-400": !secondary,
          "rounded-lg": !round,
          "rounded-full": round,
        },
      )}
      onPointerDown={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
