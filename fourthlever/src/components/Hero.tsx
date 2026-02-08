"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

/* ── Dashboard Terminal ──────────────────────────── */
function DashboardTerminal() {
  const [lines, setLines] = useState<string[]>([]);
  const [current, setCurrent] = useState("");
  const hasStarted = useRef(false);

  const allLines = useRef([
    "$ fourth-lever status --all",
    "✓ All systems operational",
    "✓ 4 AI services running",
    "✓ Processing queue: 0 pending",
    "$ fourth-lever dispatch --today",
    "→ Jobs dispatched: 47",
    "→ Avg route time: 22min",
    "→ On-time rate: 98.3%",
  ]);

  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;
    let li = 0, ci = 0, active = true;
    const type = () => {
      if (!active || li >= allLines.current.length) return;
      const line = allLines.current[li];
      if (ci <= line.length) {
        setCurrent(line.substring(0, ci));
        ci++;
        setTimeout(type, line.startsWith("$") ? 40 : 18);
      } else {
        setLines((prev) => [...prev, line]);
        setCurrent("");
        li++; ci = 0;
        setTimeout(type, line.startsWith("$") ? 500 : 140);
      }
    };
    setTimeout(type, 1800);
    return () => { active = false; };
  }, []);

  const color = (l: string) =>
    l.startsWith("$") ? "text-white/60" : l.startsWith("✓") ? "text-emerald-400" : "text-white/40";

  return (
    <div className="font-mono text-[11px] leading-[1.8] min-h-[120px]">
      {lines.map((l, i) => (<div key={i} className={color(l)}>{l}</div>))}
      {current && (
        <div className={color(current)}>
          {current}<span className="inline-block w-[5px] h-[13px] bg-emerald-400/70 ml-0.5 animate-pulse" />
        </div>
      )}
      {!current && lines.length === 0 && (
        <span className="inline-block w-[5px] h-[13px] bg-emerald-400/70 ml-0.5 animate-pulse" />
      )}
    </div>
  );
}

/* ── Counter ─────────────────────────────────────── */
function MetricCounter({ value, delay = 2 }: { value: number; delay?: number }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    const go = () => {
      const s = Date.now(), dur = 1500;
      const tick = () => {
        const p = Math.min((Date.now() - s) / dur, 1);
        setCount(Math.round((1 - Math.pow(1 - p, 3)) * value));
        if (p < 1) requestAnimationFrame(tick); else setCount(value);
      };
      requestAnimationFrame(tick);
    };
    setTimeout(go, delay * 1000);
  }, [value, delay]);
  return <span className="tabular-nums">{count.toLocaleString()}</span>;
}

/* ── Data ─────────────────────────────────────────── */
const services = [
  { name: "Dispatch AI", latency: "12ms", uptime: "99.9%" },
  { name: "Invoice Processing", latency: "8ms", uptime: "99.8%" },
  { name: "Customer Follow-up Engine", latency: "15ms", uptime: "100%" },
  { name: "Schedule Optimizer", latency: "6ms", uptime: "99.7%" },
];

const dashMetrics: { label: string; value?: number; display?: string }[] = [
  { label: "Jobs Today", value: 47 },
  { label: "Uptime", display: "99.99%" },
  { label: "Avg Response", display: "0.3s" },
  { label: "Active Models", value: 12 },
];

/* ── Hero ─────────────────────────────────────────── */
export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const r = containerRef.current.getBoundingClientRect();
      setMouse({
        x: ((e.clientX - r.left) / r.width - 0.5) * 2,
        y: ((e.clientY - r.top) / r.height - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <section ref={containerRef} className="hero-dark relative min-h-screen flex flex-col overflow-hidden">
      <div className="hero-grid-bg" />
      <div className="hero-dark-orbs" />

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center w-full max-w-[1120px] mx-auto px-5 sm:px-8 lg:px-12 pt-24 pb-12">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-7"
          style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.15)", backdropFilter: "blur(12px)" }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot" />
          <span className="font-mono text-[11px] font-medium tracking-[0.18em] uppercase text-emerald-400/90">
            AI Infrastructure for the Trades
          </span>
        </motion.div>

        {/* Heading with code syntax */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="font-heading font-extrabold text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.25rem] text-white tracking-[-2px] sm:tracking-[-3px] md:tracking-[-4px] leading-[0.95] mb-5 text-center"
        >
          We build and <span className="code-syntax">&lt;automate/&gt;</span>
          <br />
          <span className="gradient-text">AI systems for service businesses</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="font-body text-base sm:text-lg text-white/40 max-w-2xl leading-relaxed text-center mb-9"
        >
          Construction, HVAC, property management, plumbing — we build, deploy, and manage the AI infrastructure that automates your operations so you can focus on growing.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.85 }}
          className="flex flex-wrap justify-center gap-3 mb-14 sm:mb-16"
        >
          <a href="https://calendly.com/khaledazar/30min" target="_blank" rel="noopener noreferrer" className="hero-btn-primary">
            Book a Call
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
          <a href="#process" className="hero-btn-ghost">How It Works</a>
        </motion.div>

        {/* Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="w-full relative"
        >
          <div className="dashboard-glow" />
          <div
            className="dashboard-3d rounded-2xl overflow-hidden relative"
            style={{
              transform: `perspective(1400px) rotateX(2deg) translateX(${mouse.x * 4}px) translateY(${mouse.y * 2}px)`,
              transition: "transform 0.35s cubic-bezier(0.25,0.1,0.25,1)",
            }}
          >
            <div className="dashboard-scan-line" />

            {/* Window chrome */}
            <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]/70" />
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E]/70" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]/70" />
              </div>
              <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.04]">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
                <span className="font-mono text-[11px] text-white/20">app.fourthlever.com/dashboard</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-[6px] h-[6px] rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.5)]" />
                <span className="font-mono text-[10px] text-emerald-400/70 font-medium">Live</span>
              </div>
            </div>

            {/* Tab bar */}
            <div className="flex items-center gap-0 px-4 sm:px-5 border-b border-white/[0.06] overflow-x-auto">
              {["Overview", "Dispatch", "Analytics", "Logs"].map((tab, i) => (
                <span key={tab} className={`px-3 sm:px-4 py-2.5 font-mono text-[11px] sm:text-[12px] whitespace-nowrap transition-colors ${i === 0 ? "text-emerald-400 border-b-2 border-emerald-400 -mb-[1px]" : "text-white/20"}`}>{tab}</span>
              ))}
            </div>

            {/* Body */}
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-3 p-4 sm:p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-white/25">Active Services</span>
                  <span className="font-mono text-[10px] text-white/15">4 of 4 healthy</span>
                </div>
                <div className="space-y-1.5">
                  {services.map((svc, i) => (
                    <motion.div key={svc.name} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35, delay: 1.4 + i * 0.08 }}
                      className="flex items-center justify-between py-2 sm:py-2.5 px-3 rounded-lg bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.05] transition-colors duration-200">
                      <div className="flex items-center gap-2.5">
                        <div className="w-[6px] h-[6px] rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.4)]" />
                        <span className="font-body text-[12px] sm:text-[13px] text-white/60">{svc.name}</span>
                      </div>
                      <div className="hidden sm:flex items-center gap-3">
                        <span className="font-mono text-[10px] text-emerald-400/60">{svc.uptime}</span>
                        <span className="font-mono text-[10px] text-white/20">{svc.latency}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="md:col-span-2 p-4 sm:p-5 border-t md:border-t-0 md:border-l border-white/[0.06]">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-white/25">Ops Terminal</span>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
                    <span className="font-mono text-[9px] text-white/20">active</span>
                  </div>
                </div>
                <DashboardTerminal />
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 border-t border-white/[0.06]">
              {dashMetrics.map((m, i) => (
                <motion.div key={m.label} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 1.8 + i * 0.1 }}
                  className={`px-4 sm:px-5 py-3.5 ${i % 2 === 1 ? "border-l border-white/[0.06]" : ""} ${i >= 2 ? "border-t border-white/[0.06] md:border-t-0 md:border-l" : ""}`}>
                  <div className="font-mono font-bold text-[16px] sm:text-[18px] text-white/90 tracking-[-0.5px]">
                    {m.value !== undefined ? <MetricCounter value={m.value} delay={2 + i * 0.15} /> : m.display}
                  </div>
                  <div className="font-mono text-[9px] text-white/25 uppercase tracking-[0.15em] mt-0.5">{m.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center justify-between px-4 sm:px-5 py-2 border-t border-white/[0.04] bg-white/[0.01]">
              <span className="font-mono text-[9px] text-white/12">fourth-lever v2.4.1</span>
              <span className="font-mono text-[9px] text-white/12">Last sync: just now</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5, duration: 0.6 }} className="relative z-10 pb-10 flex justify-center">
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="flex flex-col items-center gap-2">
          <span className="font-mono text-[9px] text-white/15 uppercase tracking-[0.25em]">Scroll</span>
          <div className="w-[1px] h-6 bg-gradient-to-b from-white/15 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
