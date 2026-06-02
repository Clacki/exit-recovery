import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "./styles";

type CardVariant = "default" | "surface" | "panel";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  variant?: CardVariant;
};

const variantClassNames: Record<CardVariant, string> = {
  default: "bg-[#f8f8f8]",
  surface: "bg-white ring-1 ring-gray-100",
  panel: "bg-[#f8f8f8] ring-1 ring-[#f0f0f0]",
};

export default function Card({ children, className, variant = "default", ...props }: CardProps) {
  return (
    <div className={cn("rounded-[14px]", variantClassNames[variant], className)} {...props}>
      {children}
    </div>
  );
}
