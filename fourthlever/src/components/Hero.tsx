"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import PillButton from "./ui/PillButton";
import FloatingCard from "./ui/FloatingCard";
import Tile from "./ui/Tile";

/* ── SVG icons (Lucide-style, stroke-only) ──────── */
const icons = {
  automation: (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1E293B"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  operations: (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1E293B"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  ),
  growth: (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1E293B"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 20V10M12 20V4M6 20v-6" />
    </svg>
  ),
  managed: (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1E293B"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
};

const heroTiles = [
  {
    icon: icons.automation,
    title: "AI Automation",
    desc: "Workflows built and managed for your business",
    metric: "24/7",
    metricLabel: "Always running",
    float: "animate-float-1",
    delay: 0.4,
  },
  {
    icon: icons.operations,
    title: "Smart Operations",
    desc: "AI-powered ops that learn and improve",
    metric: "3.2x",
    metricLabel: "Avg. efficiency gain",
    float: "animate-float-2",
    delay: 0.5,
  },
  {
    icon: icons.growth,
    title: "Growth Engine",
    desc: "Data-driven decisions, automated execution",
    metric: "↑ 47%",
    metricLabel: "Revenue impact",
    float: "animate-float-3",
    delay: 0.6,
  },
  {
    icon: icons.managed,
    title: "Managed Service",
    desc: "We build it, run it, and own the outcomes",
    metric: "100%",
    metricLabel: "Hands-off for you",
    float: "animate-float-4",
    delay: 0.7,
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const r = containerRef.current.getBoundingClientRect();
      setMouse({
        x: (e.clientX - r.left - r.width / 2) / r.width,
        y: (e.clientY - r.top - r.height / 2) / r.height,
      });
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left ───────────────────────────────── */}
          <div>
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 bg-accent-bg rounded-full mb-8"
            >
              <span className="w-[7px] h-[7px] rounded-full bg-accent animate-pulse-dot" />
              <span className="font-body text-[13px] font-semibold text-accent">
                Accepting new clients
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-heading font-extrabold text-[2.75rem] md:text-[3.5rem] lg:text-[3.75rem] text-primary tracking-[-2px] leading-[1.1] mb-6"
            >
              AI infrastructure that runs{" "}
              <span className="gradient-text">behind the scenes</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-body text-lg text-body leading-relaxed max-w-lg mb-10"
            >
              We build, deploy, and manage AI systems for businesses that want
              results — not another tool to learn. You run your business. We run
              the machines.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <PillButton
                href="https://calendly.com/khaledazar/30min"
                variant="primary"
              >
                Book a Call
              </PillButton>
              <PillButton href="#how-it-works" variant="ghost">
                How It Works
              </PillButton>
            </motion.div>
          </div>

          {/* ── Right — floating tiles ─────────────── */}
          <div className="relative grid grid-cols-2 gap-4 lg:gap-5">
            {heroTiles.map((tile, i) => (
              <FloatingCard
                key={tile.title}
                delay={tile.delay}
                floatClass={tile.float}
              >
                <div
                  style={{
                    transform: `translate(${mouse.x * (i % 2 === 0 ? -8 : 8)}px, ${mouse.y * (i < 2 ? -6 : 6)}px)`,
                    transition: "transform 0.3s ease-out",
                  }}
                >
                  <Tile className="h-full">
                    <div className="w-[46px] h-[46px] bg-white border border-border-light rounded-xl flex items-center justify-center mb-4 group-hover:rotate-3 transition-transform duration-300">
                      {tile.icon}
                    </div>
                    <h3 className="font-heading font-bold text-[15px] text-primary mb-1.5">
                      {tile.title}
                    </h3>
                    <p className="font-body text-[13px] text-body leading-relaxed mb-4">
                      {tile.desc}
                    </p>
                    <div className="pt-3 border-t border-border-light">
                      <span className="font-heading font-extrabold text-xl text-primary">
                        {tile.metric}
                      </span>
                      <p className="font-body text-[12px] text-muted mt-0.5">
                        {tile.metricLabel}
                      </p>
                    </div>
                  </Tile>
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
