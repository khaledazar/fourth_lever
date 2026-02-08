"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  tag: string;
  heading: string;
  gradientWord: string;
  subtext?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  tag,
  heading,
  gradientWord,
  subtext,
  align = "center",
}: SectionHeaderProps) {
  const idx = heading.indexOf(gradientWord);
  const before = idx >= 0 ? heading.slice(0, idx) : heading;
  const after = idx >= 0 ? heading.slice(idx + gradientWord.length) : "";

  return (
    <div className={`mb-14 ${align === "center" ? "text-center" : "text-left"}`}>
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className="inline-flex items-center px-4 py-1.5 bg-accent-bg border border-[rgba(16,185,129,0.15)] text-accent-light font-heading font-medium text-xs uppercase tracking-widest rounded-full mb-[14px]"
      >
        {tag}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.08 }}
        className="font-heading font-extrabold text-4xl md:text-5xl text-primary tracking-[-2.5px] leading-[1.08] mb-4"
      >
        {before}
        {idx >= 0 && <span className="gradient-text">{gradientWord}</span>}
        {after}
      </motion.h2>
      {subtext && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className={`text-body font-body text-base max-w-2xl leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtext}
        </motion.p>
      )}
    </div>
  );
}
