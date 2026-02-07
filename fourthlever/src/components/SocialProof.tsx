"use client";

import { motion } from "framer-motion";

/* Abstract geometric logo placeholders */
const logos = [
  <svg key="l1" width="100" height="32" viewBox="0 0 100 32" fill="none">
    <circle cx="16" cy="16" r="10" stroke="#94A3B8" strokeWidth="1.5" />
    <rect x="32" y="14" width="60" height="4" rx="2" fill="#94A3B8" />
  </svg>,
  <svg key="l2" width="100" height="32" viewBox="0 0 100 32" fill="none">
    <rect x="2" y="4" width="24" height="24" rx="6" stroke="#94A3B8" strokeWidth="1.5" />
    <rect x="34" y="4" width="24" height="24" rx="6" stroke="#94A3B8" strokeWidth="1.5" />
    <rect x="66" y="10" width="28" height="4" rx="2" fill="#94A3B8" />
    <rect x="66" y="18" width="20" height="4" rx="2" fill="#94A3B8" />
  </svg>,
  <svg key="l3" width="100" height="32" viewBox="0 0 100 32" fill="none">
    <polygon points="16,4 28,28 4,28" stroke="#94A3B8" strokeWidth="1.5" fill="none" />
    <circle cx="50" cy="16" r="3" fill="#94A3B8" />
    <circle cx="64" cy="16" r="3" fill="#94A3B8" />
    <circle cx="78" cy="16" r="3" fill="#94A3B8" />
  </svg>,
  <svg key="l4" width="100" height="32" viewBox="0 0 100 32" fill="none">
    <polygon
      points="16,2 28,9 28,23 16,30 4,23 4,9"
      stroke="#94A3B8"
      strokeWidth="1.5"
      fill="none"
    />
    <rect x="38" y="10" width="54" height="4" rx="2" fill="#94A3B8" />
    <rect x="38" y="18" width="36" height="4" rx="2" fill="#94A3B8" />
  </svg>,
  <svg key="l5" width="100" height="32" viewBox="0 0 100 32" fill="none">
    <rect x="4" y="18" width="8" height="12" rx="2" fill="#94A3B8" />
    <rect x="16" y="10" width="8" height="20" rx="2" fill="#94A3B8" />
    <rect x="28" y="4" width="8" height="26" rx="2" fill="#94A3B8" />
    <rect x="46" y="12" width="48" height="4" rx="2" fill="#94A3B8" />
    <rect x="46" y="20" width="32" height="4" rx="2" fill="#94A3B8" />
  </svg>,
];

export default function SocialProof() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-12 border-y border-border-light overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="font-body text-sm text-muted text-center mb-8 tracking-wide">
          Trusted by operators building real businesses
        </p>

        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee">
            {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-10 opacity-40 hover:opacity-60 transition-opacity duration-300 grayscale"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
