import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "./styles";

type TagVariant = "default" | "skill" | "category" | "status" | "filter";
type TagSize = "sm" | "md" | "lg";

type TagProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  selected?: boolean;
  size?: TagSize;
  variant?: TagVariant;
};

const variantClassNames: Record<TagVariant, string> = {
  default: "bg-[#ececec] text-[#4e4e4e]",
  skill: "bg-[#ececec] text-[#4e4e4e]",
  category: "bg-white text-[#3ebd5d] ring-1 ring-emerald-100",
  status: "bg-[#3ebd5d] text-white",
  filter: "bg-[#ececec] text-[#4e4e4e]",
};

const sizeClassNames: Record<TagSize, string> = {
  sm: "px-2.5 py-1 text-xs",
  md: "px-3 py-1.5 text-sm",
  lg: "px-4 py-2 text-base sm:text-xl",
};

export default function Tag({
  children,
  className,
  selected = false,
  size = "md",
  variant = "default",
  ...props
}: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center justify-center rounded font-bold",
        variantClassNames[variant],
        selected && "bg-[#3ebd5d] text-white ring-0",
        sizeClassNames[size],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
