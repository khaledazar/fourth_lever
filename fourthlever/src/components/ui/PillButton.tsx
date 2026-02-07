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
    "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-heading font-semibold text-[15px] transition-all duration-200 hover:scale-[1.02]";

  const variants = {
    primary:
      "bg-accent text-white hover:bg-accent-light hover:shadow-[0_0_20px_rgba(5,150,105,0.3)]",
    ghost:
      "border border-border-light text-secondary hover:border-border-hover hover:bg-accent-bg",
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
