import type { ReactNode } from "react";

export default function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-surface rounded-lg shadow-[var(--shadow-organic-sm)] overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}
