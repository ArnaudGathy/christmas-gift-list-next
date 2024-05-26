import { clsx } from "clsx";
import { useState } from "react";

type InputProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: HTMLInputElement["type"];
  className?: string;
  placeholder?: string;
  error?: string;
};

export default function Input({
  value,
  onChange,
  type = "text",
  className,
  placeholder,
  error,
}: InputProps) {
  const [isTouched, setIsTouched] = useState(false);
  const hasError = isTouched && !!error;

  return (
    <div>
      <input
        value={value}
        onChange={(event) => {
          onChange(event);
          if (!isTouched) {
            setIsTouched(true);
          }
        }}
        type={type}
        className={clsx(
          `${className} text-center text-black h-10 rounded placeholder:text-black/25 w-full mt-10`,
          { "boder-solid border-2 border-red-500": hasError },
        )}
        placeholder={placeholder}
      />
      <div className="text-center text-white min-h-10">
        {hasError ? error : ""}
      </div>
    </div>
  );
}
