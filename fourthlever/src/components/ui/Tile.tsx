"use client";

import { ReactNode } from "react";

interface TileProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export default function Tile({
  children,
  className = "",
  hover = true,
  onClick,
}: TileProps) {
  return (
    <div
      className={`
        relative overflow-hidden
        bg-surface border border-border-light rounded-2xl
        py-[26px] px-[22px]
        ${
          hover
            ? "group cursor-default transition-all duration-300 hover:border-border-hover hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(5,150,105,0.07)]"
            : ""
        }
        ${className}
      `}
      onClick={onClick}
    >
      {/* Gradient top bar on hover */}
      {hover && (
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent to-accent-mint opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      {children}
    </div>
  );
}
