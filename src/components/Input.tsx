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
          `${className}  w-full h-10 rounded-lg
      focus:border-2 focus:border-red-600 focus:outline-none
      text-center text-black placeholder:text-black/25`,
          { "h-10": !isSmall, "h-4": isSmall },
        )}
        id={id}
        {...rest}
      />
    </>
  );
}
