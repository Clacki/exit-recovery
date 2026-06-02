import type { InputHTMLAttributes, ReactNode } from "react";

import { cn } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  errorMessage?: ReactNode;
  helperText?: ReactNode;
  label?: ReactNode;
  wrapperClassName?: string;
};

export default function Input({
  className,
  disabled,
  errorMessage,
  helperText,
  id,
  label,
  wrapperClassName,
  ...props
}: InputProps) {
  const hasErrorMessage = Boolean(errorMessage);
  const hasDescription = hasErrorMessage || Boolean(helperText);
  const descriptionId = hasDescription ? `${id ?? props.name}-description` : undefined;

  return (
    <label className={cn("block", wrapperClassName)}>
      {label ? <span className="mb-2 block text-sm font-black text-gray-900">{label}</span> : null}
      <input
        id={id}
        disabled={disabled}
        aria-describedby={descriptionId}
        aria-invalid={Boolean(errorMessage)}
        className={cn(
          "h-12 w-full rounded-[14px] border border-[#d7d7d7] bg-white px-4 text-sm font-semibold text-gray-900 outline-none transition placeholder:text-[#c1c1c1] focus:border-[#3ebd5d] disabled:cursor-default disabled:bg-[#f8f8f8] disabled:text-[#777777] sm:h-[60px] sm:px-5 sm:text-base",
          hasErrorMessage && "border-[#f85a44] focus:border-[#f85a44]",
          className,
        )}
        {...props}
      />
      {hasErrorMessage ? (
        <p id={descriptionId} className="mt-2 text-sm font-semibold text-[#f85a44]">
          {errorMessage}
        </p>
      ) : null}
      {!hasErrorMessage && helperText ? (
        <p id={descriptionId} className="mt-2 text-sm font-semibold text-[#777777]">
          {helperText}
        </p>
      ) : null}
    </label>
  );
}
