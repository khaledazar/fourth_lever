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
      className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <span className="inline-block px-4 py-1.5 bg-accent-bg text-accent font-heading font-semibold text-xs uppercase tracking-widest rounded-full mb-6">
        {tag}
      </span>
      <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-primary tracking-[-1.5px] leading-[1.15] mb-5">
        {before}
        {idx >= 0 && <span className="gradient-text">{gradientWord}</span>}
        {after}
      </h2>
      {subtext && (
        <p
          className={`text-body font-body text-lg max-w-2xl leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtext}
        </p>
      )}
    </motion.div>
  );
}
