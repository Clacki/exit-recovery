import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "./styles";

type ButtonVariant = "primary" | "secondary" | "danger" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg" | "xl";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variantClassNames: Record<ButtonVariant, string> = {
  primary: "bg-[#3ebd5d] text-white hover:bg-[#34aa51] focus-visible:outline-[#3ebd5d]",
  secondary: "bg-black text-white hover:bg-[#242424] focus-visible:outline-black",
  danger: "bg-[#f85a44] text-white hover:bg-[#e34e3a] focus-visible:outline-[#f85a44]",
  outline:
    "border border-[#d7d7d7] bg-white text-[#4e4e4e] hover:border-[#3ebd5d] hover:text-[#3ebd5d] focus-visible:outline-[#3ebd5d]",
  ghost: "bg-transparent text-[#4e4e4e] hover:text-[#3ebd5d] focus-visible:outline-[#3ebd5d]",
};

const sizeClassNames: Record<ButtonSize, string> = {
  sm: "h-10 rounded px-4 text-sm",
  md: "h-12 rounded-md px-5 text-sm",
  lg: "h-14 rounded-[14px] px-6 text-base",
  xl: "h-20 rounded-[14px] px-8 text-2xl sm:h-24 sm:text-4xl",
};

export default function Button({
  children,
  className,
  disabled,
  size = "md",
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-black transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 disabled:cursor-default disabled:bg-[#b2b2b2] disabled:text-white disabled:hover:bg-[#b2b2b2]",
        variantClassNames[variant],
        sizeClassNames[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
