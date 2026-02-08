"use client";

import { ReactNode } from "react";

interface PillButtonProps {
  children: ReactNode;
  variant?: "primary" | "ghost";
  href?: string;
  className?: string;
  onClick?: () => void;
}

export default function PillButton({
  children,
  variant = "primary",
  href,
  className = "",
  onClick,
}: PillButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-heading font-semibold text-[15px] transition-all duration-200 cursor-pointer";

  const variants = {
    primary:
      "bg-accent text-white shadow-[0_0_20px_rgba(16,185,129,0.2),0_0_0_1px_rgba(16,185,129,0.15)] hover:bg-accent-light hover:shadow-[0_0_30px_rgba(16,185,129,0.3),0_0_0_1px_rgba(16,185,129,0.2)] hover:-translate-y-0.5",
    ghost:
      "bg-[rgba(255,255,255,0.05)] text-[rgba(255,255,255,0.7)] border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.2)] hover:text-white",
  };

  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={cls} onClick={onClick}>
      {children}
    </button>
  );
}
