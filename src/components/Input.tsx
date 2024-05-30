import { ReactNode } from "react";
import { clsx } from "clsx";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  children?: ReactNode;
  isSmall?: boolean;
};

export default function Input({
  isSmall,
  onChange,
  className,
  children,
  id,
  ...rest
}: InputProps) {
  return (
    <>
      {children && (
        <label htmlFor={id} className="text-center text-xl">
          {children}
        </label>
      )}
      <input
        onChange={onChange}
        className={clsx(
          `${className ?? ""}  h-10 w-full rounded-lg
      text-center text-black placeholder:text-black/25
      focus:border-2 focus:border-red-600 focus:outline-none`,
          { "h-10": !isSmall, "h-4": isSmall },
        )}
        id={id}
        {...rest}
      />
    </>
  );
}
