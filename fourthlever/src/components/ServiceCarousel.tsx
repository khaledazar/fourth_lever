"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "AI Ops Strategy",
    description:
      "We audit your workflows and identify exactly where AI creates the most leverage. No guesswork — just a clear roadmap from manual to automated.",
  },
  {
    title: "Custom Automation",
    description:
      "We design and deploy custom AI systems tailored to your specific operations. No templates, no off-the-shelf tools.",
  },
  {
    title: "Dispatch Optimization",
    description:
      "AI routing that learns your technician patterns, optimizes travel time, and triggers follow-ups automatically.",
  },
  {
    title: "Lead Qualification",
    description:
      "Incoming leads scored, routed, and followed up with — automatically. Your sales team only talks to serious buyers.",
  },
  {
    title: "Invoice Processing",
    description:
      "AI-driven invoice matching, payment nudges, and exception handling. Cash collection that runs itself.",
  },
  {
    title: "Customer Communication",
    description:
      "Automated appointment reminders, follow-up sequences, review requests, and satisfaction surveys.",
  },
  {
    title: "Performance Dashboards",
    description:
      "Real-time visibility into revenue, crew performance, customer retention, and operational KPIs.",
  },
  {
    title: "Ongoing Management",
    description:
      "We don't build and leave. We monitor, optimize, and scale everything on a monthly retainer. You see results.",
  },
];

export default function ServiceCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!trackRef.current) return;
    const amount = 340;
    trackRef.current.scrollBy({
      left: dir === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 md:py-[120px] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between mb-10">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center px-4 py-1.5 bg-accent-bg border border-[rgba(16,185,129,0.15)] text-accent-light font-heading font-medium text-xs uppercase tracking-widest rounded-full mb-[14px]"
            >
              What We Do
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="font-heading font-extrabold text-4xl md:text-5xl text-primary tracking-[-2.5px] leading-[1.08]"
            >
              End-to-end AI <span className="gradient-text">services</span>
            </motion.h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] flex items-center justify-center text-white/40 hover:text-white hover:border-[rgba(255,255,255,0.15)] transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] flex items-center justify-center text-white/40 hover:text-white hover:border-[rgba(255,255,255,0.15)] transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        <div ref={trackRef} className="carousel-track">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="dark-card p-6 w-[300px] sm:w-[320px] flex-shrink-0"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-[11px] text-emerald-400/60 font-medium">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="h-[1px] flex-1 bg-[rgba(255,255,255,0.06)]" />
              </div>
              <h3 className="font-heading font-semibold text-[17px] text-primary mb-3">
                {svc.title}
              </h3>
              <p className="font-body text-[14px] text-body leading-relaxed">
                {svc.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
