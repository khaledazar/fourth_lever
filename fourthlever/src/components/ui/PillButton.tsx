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
      "bg-accent text-white shadow-[0_2px_4px_rgba(5,150,105,0.2),0_0_0_1px_rgba(5,150,105,0.1)] hover:bg-[#047857] hover:shadow-[0_4px_12px_rgba(5,150,105,0.3),0_0_0_1px_rgba(5,150,105,0.2)] hover:-translate-y-0.5",
    ghost:
      "bg-white text-secondary border border-[#D1D5DB] shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:bg-[#F9FAFB] hover:border-[#9CA3AF] hover:shadow-[0_2px_4px_rgba(0,0,0,0.08)]",
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
