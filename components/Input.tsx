import { ReactNode } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  children?: ReactNode;
};

export default function Input({
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
        className={`${className}  w-full h-10 rounded-lg
      focus:border-2 focus:border-red-500 focus:outline-none
      text-center text-black placeholder:text-black/25`}
        id={id}
        {...rest}
      />
    </>
  );
}
