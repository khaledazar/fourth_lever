"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import AnimatedCounter from "./ui/AnimatedCounter";

/* ── Data ─────────────────────────────────────────── */
const services = [
  { name: "Lead Qualification AI", status: "Active", uptime: "99.9%" },
  { name: "Invoice Processing", status: "Active", uptime: "99.8%" },
  { name: "Customer Follow-up Engine", status: "Active", uptime: "100%" },
  { name: "Scheduling Optimizer", status: "Active", uptime: "99.7%" },
];

const activityItems = [
  { text: "AI processed 847 leads this week", time: "2m ago" },
  { text: "Follow-up sequence triggered for 12 prospects", time: "5m ago" },
  { text: "Invoice matching completed — 99.2% accuracy", time: "12m ago" },
  { text: "Customer sentiment analysis updated", time: "18m ago" },
  { text: "Weekly performance report generated", time: "24m ago" },
];

/* ── Mini sparkline ──────────────────────────────── */
function Sparkline() {
  return (
    <svg width="48" height="16" viewBox="0 0 48 16" fill="none" className="hidden sm:block">
      <polyline
        points="0,12 8,10 16,8 24,11 32,4 40,6 48,2"
        stroke="#10B981"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Typewriter ──────────────────────────────────── */
function TypewriterText({ isInView }: { isInView: boolean }) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState("");
  const startedRef = useRef(false);

  const allLines = useRef([
    "$ fourth-lever status --all",
    "✓ All systems operational",
    "✓ 4 AI services running",
    "✓ Processing queue: 0 pending",
    "$ fourth-lever metrics --today",
    "→ Leads processed: 127",
    "→ Automations triggered: 2,847",
    "→ Avg response time: 0.3s",
  ]);

  useEffect(() => {
    if (!isInView || startedRef.current) return;
    startedRef.current = true;

    let lineIdx = 0;
    let charIdx = 0;
    let active = true;

    const type = () => {
      if (!active || lineIdx >= allLines.current.length) return;
      const line = allLines.current[lineIdx];

      if (charIdx <= line.length) {
        setCurrentLine(line.substring(0, charIdx));
        charIdx++;
        setTimeout(type, line.startsWith("$") ? 50 : 25);
      } else {
        setDisplayedLines((prev) => [...prev, line]);
        setCurrentLine("");
        lineIdx++;
        charIdx = 0;
        setTimeout(type, line.startsWith("$") ? 600 : 200);
      }
    };

    setTimeout(type, 800);
    return () => {
      active = false;
    };
  }, [isInView]);

  const colorFor = (line: string) => {
    if (line.startsWith("$")) return "text-white/70";
    if (line.startsWith("✓")) return "text-accent-light";
    return "text-white/50";
  };

  return (
    <div className="font-mono text-[12px] leading-relaxed min-h-[120px]">
      {displayedLines.map((line, i) => (
        <div key={i} className={colorFor(line)}>{line}</div>
      ))}
      {currentLine && (
        <div className={colorFor(currentLine)}>
          {currentLine}
          <span className="inline-block w-[6px] h-[14px] bg-accent-light/70 ml-0.5 animate-pulse" />
        </div>
      )}
      {!currentLine && displayedLines.length === 0 && (
        <span className="inline-block w-[6px] h-[14px] bg-accent-light/70 ml-0.5 animate-pulse" />
      )}
    </div>
  );
}

/* ── Main Component ──────────────────────────────── */
export default function InteractiveDemo() {
  const [activeActivity, setActiveActivity] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setActiveActivity((prev) => (prev + 1) % activityItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section id="services" className="py-20 md:py-[120px] relative" ref={sectionRef}>
      {/* Dot-grid backdrop */}
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          tag="See It In Action"
          heading="Your AI infrastructure, working"
          gradientWord="working"
          subtext="A glimpse into what runs behind the scenes for our clients — always on, always learning."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-5 gap-4"
        >
          {/* ── Left panel — System Status (dark) ── */}
          <div className="lg:col-span-3 bg-primary rounded-2xl p-6 overflow-hidden shadow-[0_4px_24px_rgba(15,23,42,0.15)]">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse-dot" />
                <span className="font-heading font-semibold text-[13px] text-white/90 uppercase tracking-wider">
                  System Status
                </span>
              </div>
              <span className="font-body text-[12px] text-white/40">Live</span>
            </div>

            <div className="space-y-3">
              {services.map((svc, i) => (
                <motion.div
                  key={svc.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.07] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-[7px] h-[7px] rounded-full bg-accent animate-pulse-dot" />
                    <span className="font-body text-sm text-white/80">{svc.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-body text-xs text-accent-light font-medium hidden sm:inline">{svc.status}</span>
                    <span className="font-body text-xs text-white/40 hidden sm:inline">{svc.uptime}</span>
                    <Sparkline />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Terminal */}
            <div className="mt-5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.04]">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                </div>
                <span className="font-mono text-[11px] text-white/30 ml-2">fourth-lever-ops</span>
              </div>
              <TypewriterText isInView={isInView} />
            </div>
          </div>

          {/* ── Right panel — Recent Activity ───── */}
          <div className="lg:col-span-2 bg-white border border-border-light rounded-2xl p-6 shadow-[0_1px_3px_rgba(15,23,42,0.04),0_4px_12px_rgba(15,23,42,0.03)]">
            <h3 className="font-heading font-semibold text-[15px] text-primary mb-5">
              Recent Activity
            </h3>
            <div className="space-y-3">
              {activityItems.map((item, i) => (
                <motion.div
                  key={i}
                  animate={{
                    opacity: i <= activeActivity ? 1 : 0.3,
                    scale: i === activeActivity ? 1.01 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                  className={`p-3 rounded-xl border transition-all duration-300 ${
                    i === activeActivity
                      ? "bg-accent-bg border-[rgba(5,150,105,0.15)]"
                      : "bg-surface border-border-light"
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    <div
                      className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                        i === activeActivity ? "bg-accent" : "bg-muted"
                      }`}
                    />
                    <div>
                      <p className="font-body text-[13px] text-secondary leading-snug">{item.text}</p>
                      <span className="font-body text-[11px] text-muted mt-1 block">{item.time}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Stats row ─────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {[
            { label: "Tasks Automated", value: 2847, prefix: "", suffix: "" },
            { label: "Hours Saved", value: 164, prefix: "", suffix: "" },
            { label: "Revenue Impact", value: 47, prefix: "$", suffix: "K" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="bg-white border border-border-light rounded-2xl p-5 text-center shadow-[0_1px_3px_rgba(15,23,42,0.04),0_4px_12px_rgba(15,23,42,0.03)] hover:border-border-hover hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(5,150,105,0.12),0_4px_12px_rgba(15,23,42,0.04)] transition-all duration-300"
            >
              <div className="font-mono font-bold text-[28px] tracking-[-1px] text-accent mb-1">
                <AnimatedCounter target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <p className="font-body text-sm text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
