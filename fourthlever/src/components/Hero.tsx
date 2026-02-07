"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import PillButton from "./ui/PillButton";
import FloatingCard from "./ui/FloatingCard";
import Tile from "./ui/Tile";

/* ── Icons — emerald stroke ─────────────────────── */
const icons = {
  automation: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  operations: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  ),
  growth: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 20V10M12 20V4M6 20v-6" />
    </svg>
  ),
  managed: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
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
    delay: 0.7,
  },
  {
    icon: icons.operations,
    title: "Smart Operations",
    desc: "AI-powered ops that learn and improve",
    metric: "3.2x",
    metricLabel: "Avg. efficiency gain",
    float: "animate-float-2",
    delay: 0.8,
  },
  {
    icon: icons.growth,
    title: "Growth Engine",
    desc: "Data-driven decisions, automated execution",
    metric: "↑ 47%",
    metricLabel: "Revenue impact",
    float: "animate-float-3",
    delay: 0.9,
  },
  {
    icon: icons.managed,
    title: "Managed Service",
    desc: "We build it, run it, and own the outcomes",
    metric: "100%",
    metricLabel: "Hands-off for you",
    float: "animate-float-4",
    delay: 1.0,
  },
];

/* ── Parallax multipliers per card (depth layers) ── */
const parallax = [
  { x: -4, y: -3 },
  { x: 6, y: -4 },
  { x: -5, y: 5 },
  { x: 8, y: 6 },
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
      className="relative pt-36 pb-20 md:pt-[180px] md:pb-[120px] overflow-hidden"
    >
      {/* ── Background gradient orbs ─────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="hero-orbs"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ── Left ───────────────────────────────── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="font-body text-xs uppercase tracking-[0.22em] text-muted mb-4"
            >
              AI Infrastructure Agency
            </motion.div>
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 pl-3 pr-4 py-1.5 rounded-full backdrop-blur-md mb-8"
              style={{
                background: "rgba(5,150,105,0.08)",
                border: "1px solid rgba(5,150,105,0.15)",
              }}
            >
              <span className="w-[7px] h-[7px] rounded-full bg-accent animate-pulse-dot" />
              <span className="font-mono text-[12px] font-medium tracking-wide text-accent">
                Accepting new clients
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="font-heading font-extrabold text-[2.75rem] md:text-[3.5rem] lg:text-[3.75rem] text-primary tracking-[-2.75px] leading-[1.05] mb-5"
            >
              AI infrastructure that runs{" "}
              <span className="gradient-text">behind the scenes</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="font-body text-base text-body leading-relaxed max-w-lg mb-9"
            >
              We build, deploy, and manage AI systems for businesses that want
              results — not another tool to learn. You run your business. We run
              the machines.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
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

          {/* ── Right — staggered offset tile grid ── */}
          <div className="hero-tiles-wrapper">
            <div className="absolute inset-2 glass-panel pointer-events-none" />
            <div className="hero-tiles">
              {heroTiles.map((tile, i) => (
                <FloatingCard
                  key={tile.title}
                  delay={tile.delay}
                  floatClass={tile.float}
                  offsetY={i % 2 === 1 ? 24 : 0}
                >
                  <div
                    style={{
                      transform: `translate(${mouse.x * parallax[i].x}px, ${mouse.y * parallax[i].y}px)`,
                      transition:
                        "transform 0.4s cubic-bezier(0.25,0.1,0.25,1)",
                    }}
                  >
                    <Tile className="h-full">
                      {/* Emerald icon box */}
                      <div className="w-[46px] h-[46px] bg-accent-bg rounded-[14px] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        {tile.icon}
                      </div>
                      <h3 className="font-heading font-semibold text-[15px] text-primary mb-1.5">
                        {tile.title}
                      </h3>
                      <p className="font-body text-[13px] text-body leading-relaxed mb-4">
                        {tile.desc}
                      </p>
                      {/* Metric */}
                      <div className="pt-4 mt-auto border-t border-border-light">
                        <span className="font-mono font-bold text-[22px] tracking-[-1px] text-accent">
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
      </div>
    </section>
  );
}
