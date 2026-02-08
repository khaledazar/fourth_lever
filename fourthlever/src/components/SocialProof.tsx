"use client";

import { motion } from "framer-motion";

const logos = [
  <svg key="l1" width="120" height="32" viewBox="0 0 120 32" fill="none"><rect x="2" y="6" width="20" height="20" rx="4" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" /><rect x="32" y="12" width="80" height="4" rx="2" fill="rgba(255,255,255,0.12)" /><rect x="32" y="20" width="52" height="3" rx="1.5" fill="rgba(255,255,255,0.06)" /></svg>,
  <svg key="l2" width="120" height="32" viewBox="0 0 120 32" fill="none"><circle cx="16" cy="16" r="12" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" /><rect x="36" y="12" width="76" height="4" rx="2" fill="rgba(255,255,255,0.12)" /><rect x="36" y="20" width="48" height="3" rx="1.5" fill="rgba(255,255,255,0.06)" /></svg>,
  <svg key="l3" width="120" height="32" viewBox="0 0 120 32" fill="none"><polygon points="16,4 28,28 4,28" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" fill="none" /><rect x="36" y="12" width="70" height="4" rx="2" fill="rgba(255,255,255,0.12)" /><rect x="36" y="20" width="44" height="3" rx="1.5" fill="rgba(255,255,255,0.06)" /></svg>,
  <svg key="l4" width="120" height="32" viewBox="0 0 120 32" fill="none"><polygon points="16,2 28,9 28,23 16,30 4,23 4,9" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" fill="none" /><rect x="36" y="12" width="74" height="4" rx="2" fill="rgba(255,255,255,0.12)" /><rect x="36" y="20" width="50" height="3" rx="1.5" fill="rgba(255,255,255,0.06)" /></svg>,
  <svg key="l5" width="120" height="32" viewBox="0 0 120 32" fill="none"><rect x="4" y="18" width="8" height="12" rx="2" fill="rgba(255,255,255,0.15)" /><rect x="16" y="10" width="8" height="20" rx="2" fill="rgba(255,255,255,0.15)" /><rect x="28" y="4" width="8" height="26" rx="2" fill="rgba(255,255,255,0.15)" /><rect x="46" y="12" width="66" height="4" rx="2" fill="rgba(255,255,255,0.12)" /><rect x="46" y="20" width="40" height="3" rx="1.5" fill="rgba(255,255,255,0.06)" /></svg>,
];

export default function SocialProof() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <p className="font-body text-sm text-muted text-center mb-10 tracking-wide">
          Trusted by operators across construction, HVAC, and property management
        </p>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0B1120] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0B1120] to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee">
            {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
              <div key={i} className="flex-shrink-0 mx-10 opacity-50 hover:opacity-70 transition-opacity duration-300">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
