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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={`mb-14 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <span className="inline-flex items-center px-4 py-1.5 bg-[rgba(5,150,105,0.08)] border border-[rgba(5,150,105,0.15)] text-accent font-heading font-medium text-xs uppercase tracking-widest rounded-full mb-4">
        {tag}
      </span>
      <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary tracking-[-2px] leading-[1.08] mb-4">
        {before}
        {idx >= 0 && <span className="gradient-text">{gradientWord}</span>}
        {after}
      </h2>
      {subtext && (
        <p
          className={`text-body font-body text-base max-w-2xl leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtext}
        </p>
      )}
    </motion.div>
  );
}
