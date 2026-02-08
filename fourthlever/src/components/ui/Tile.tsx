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
        bg-[rgba(255,255,255,0.03)]
        border border-[rgba(255,255,255,0.06)] rounded-2xl
        py-7 px-6
        ${
          hover
            ? "group cursor-default transition-all duration-300 ease-out hover:border-[rgba(16,185,129,0.3)] hover:-translate-y-1.5 hover:bg-[rgba(255,255,255,0.05)] hover:shadow-[0_12px_40px_rgba(16,185,129,0.08)]"
            : ""
        }
        ${className}
      `}
      onClick={onClick}
    >
      {hover && (
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent to-accent-mint opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      {hover && (
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              "linear-gradient(120deg, rgba(16,185,129,0.06) 0%, transparent 55%)",
          }}
        />
      )}
      {children}
    </div>
  );
}
