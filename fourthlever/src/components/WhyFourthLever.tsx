"use client";

import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import Tile from "./ui/Tile";

const differentiators = [
  {
    title: "We Build It",
    description: "Custom AI, not off-the-shelf templates",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: "We Run It",
    description: "Monthly managed service, not a one-time project",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "We Own It",
    description: "Accountable to outcomes, not just deliverables",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    title: "We Scale It",
    description: "Your AI grows as your business grows",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
];

export default function WhyFourthLever() {
  return (
    <section id="why-us" className="py-20 md:py-[120px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          tag="Why Fourth Lever"
          heading="Not consultants. Not a tool. Your AI team."
          gradientWord="Your AI team."
        />

        <div className="grid lg:grid-cols-2 gap-4">
          {/* ── Left — Founder quote ──────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <Tile className="h-full flex flex-col justify-between">
              <div>
                <div className="w-[46px] h-[46px] bg-accent-bg rounded-[14px] flex items-center justify-center mb-6">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z" />
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                  </svg>
                </div>
                <p className="font-body text-base text-secondary leading-[1.75] mb-8">
                  18 years of building and scaling companies. Multiple exits. We
                  don&apos;t just understand AI — we understand what it&apos;s
                  like to run a business. That&apos;s why we built Fourth Lever:
                  to give every operator access to the AI infrastructure that
                  used to be reserved for companies with engineering teams.
                </p>
              </div>
              <div className="pt-5 border-t border-border-light">
                <p className="font-heading font-semibold text-[15px] text-primary">
                  Khaled Azar
                </p>
                <p className="font-body text-[13px] text-muted">
                  Founder, Fourth Lever
                </p>
              </div>
            </Tile>
          </motion.div>

          {/* ── Right — 2x2 grid ─────────────────── */}
          <div className="grid grid-cols-2 gap-4">
            {differentiators.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Tile className="h-full">
                  <div className="w-[46px] h-[46px] bg-accent-bg rounded-[14px] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {d.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-[15px] text-primary mb-2">
                    {d.title}
                  </h3>
                  <p className="font-body text-[13px] text-body leading-relaxed">
                    {d.description}
                  </p>
                </Tile>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
