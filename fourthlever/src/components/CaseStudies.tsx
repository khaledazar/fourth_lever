"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";

const cases = [
  {
    id: "ops",
    tag: "Home Services",
    title: "Dispatch automation that feels invisible",
    description:
      "A multi-location HVAC operator replaced manual dispatch with an AI routing layer. The system learned technician patterns, optimized travel time, and triggered follow-ups automatically.",
    metrics: [
      { label: "Response time", value: "2.4x faster" },
      { label: "Jobs completed", value: "+38%/wk" },
      { label: "Hours saved", value: "1,280/yr" },
    ],
    highlight: "Zero new hires. Zero new tools.",
  },
  {
    id: "agency",
    tag: "Agency Delivery",
    title: "Delivery scaled without hiring",
    description:
      "A mid-market agency automated research, reporting, and QA steps. The AI layer created a repeatable operations system that increased throughput with the same headcount.",
    metrics: [
      { label: "Throughput", value: "3.1x" },
      { label: "Automation", value: "92%" },
      { label: "Turnaround", value: "5d → 1d" },
    ],
    highlight: "AI did the repetitive work. Humans did the creative work.",
  },
  {
    id: "finance",
    tag: "SMB Finance",
    title: "Cash collection with AI follow‑up",
    description:
      "A $12M distributor implemented AI-driven invoice matching and payment nudges. The system handled exceptions while the team focused on relationship‑building.",
    metrics: [
      { label: "Recovered", value: "$62K" },
      { label: "Accuracy", value: "99.4%" },
      { label: "DSO", value: "-11 days" },
    ],
    highlight: "Revenue impact without process disruption.",
  },
];

export default function CaseStudies() {
  const [active, setActive] = useState(cases[0]);

  return (
    <section id="case-studies" className="py-20 md:py-[120px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          tag="Case Studies"
          heading="Operational wins, not AI demos"
          gradientWord="Operational wins"
          subtext="We don't ship experiments. We ship infrastructure that quietly compounds results." />

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Left list */}
          <div className="lg:col-span-4 space-y-4">
            {cases.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c)}
                className={`w-full text-left rounded-2xl border px-5 py-4 transition-all duration-300 ${
                  active.id === c.id
                    ? "border-border-hover bg-accent-bg shadow-[0_12px_40px_rgba(5,150,105,0.12),0_4px_12px_rgba(15,23,42,0.04)]"
                    : "border-border-light bg-white hover:border-border-hover"
                }`}
              >
                <div className="text-xs uppercase tracking-[0.2em] text-muted mb-2">
                  {c.tag}
                </div>
                <div className="font-heading font-semibold text-[15px] text-primary leading-snug">
                  {c.title}
                </div>
              </button>
            ))}
          </div>

          {/* Right detail */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="glass-panel p-8 relative overflow-hidden"
              >
                <div className="absolute inset-0 pointer-events-none" style={{
                  background:
                    "radial-gradient(600px 300px at 80% 0%, rgba(5,150,105,0.08), transparent 60%)",
                }} />

                <div className="relative">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs uppercase tracking-widest font-medium bg-[rgba(5,150,105,0.08)] border border-[rgba(5,150,105,0.15)] text-accent">
                      {active.tag}
                    </span>
                    <span className="text-xs text-muted">Managed AI Infrastructure</span>
                  </div>

                  <h3 className="font-heading font-extrabold text-3xl text-primary tracking-[-2px] leading-[1.1] mb-4">
                    {active.title}
                  </h3>
                  <p className="text-body text-base leading-relaxed mb-8">
                    {active.description}
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 mb-8">
                    {active.metrics.map((m) => (
                      <div key={m.label} className="bg-white border border-border-light rounded-2xl px-4 py-4 shadow-[0_1px_3px_rgba(15,23,42,0.04)]">
                        <div className="font-mono font-bold text-[20px] tracking-[-1px] text-accent mb-1">
                          {m.value}
                        </div>
                        <div className="text-xs uppercase tracking-widest text-muted">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-sm font-medium text-secondary">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    {active.highlight}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
