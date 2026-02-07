"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface FloatingCardProps {
  children: ReactNode;
  delay?: number;
  floatClass?: string;
  className?: string;
}

export default function FloatingCard({
  children,
  delay = 0,
  floatClass = "animate-float-1",
  className = "",
}: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      <div className={floatClass}>{children}</div>
    </motion.div>
  );
}
