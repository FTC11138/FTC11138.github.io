import type { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  className?: string;
}

export default function Tag({ children, className = "" }: TagProps) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full border border-red-500/40 bg-red-600/10 px-4 py-1.5 text-xs font-semibold tracking-[0.15em] text-red-200 uppercase ${className}`}
    >
      {children}
    </span>
  );
}
