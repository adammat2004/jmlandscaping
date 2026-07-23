import type { ReactNode } from "react";

type Variant = "terracotta" | "sage" | "neutral" | "outline";

const variantClasses: Record<Variant, string> = {
  terracotta: "bg-terracotta-100 text-terracotta-800",
  sage: "bg-sage-100 text-sage-800",
  neutral: "bg-neutral-100 text-neutral-800",
  outline: "border border-terracotta text-terracotta",
};

export default function Tag({
  children,
  variant = "terracotta",
  className = "",
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3.5 py-1 text-xs tracking-wide ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
