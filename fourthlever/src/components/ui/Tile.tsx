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
        relative overflow-hidden bg-white
        border border-border-light rounded-2xl
        py-7 px-6
        shadow-[0_1px_3px_rgba(15,23,42,0.04),0_4px_12px_rgba(15,23,42,0.03)]
        ${
          hover
            ? "group cursor-default transition-all duration-300 ease-out hover:border-border-hover hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(5,150,105,0.12),0_4px_12px_rgba(15,23,42,0.04)]"
            : ""
        }
        ${className}
      `}
      onClick={onClick}
    >
      {hover && (
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent to-accent-mint opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      {children}
    </div>
  );
}
