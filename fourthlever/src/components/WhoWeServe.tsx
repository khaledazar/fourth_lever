"use client";

import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";

const industries = [
  {
    title: "Construction & General Contractors",
    description:
      "Manage crews, subcontractors, and project timelines with AI that coordinates the chaos. From bid management to daily logs, we automate the paperwork so your team stays on the job site.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20M4 20V10l8-6 8 6v10M9 20v-6h6v6" />
      </svg>
    ),
  },
  {
    title: "Property Management",
    description:
      "Tenant requests, maintenance scheduling, lease renewals — managed automatically. AI that handles the back-office so your property managers can focus on relationships.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 3v18M3 9h6M3 15h6M15 9h6M15 15h6" />
      </svg>
    ),
  },
  {
    title: "HVAC & Mechanical",
    description:
      "Dispatch the right technician to the right job. AI routing, automated follow-ups, and predictive maintenance scheduling that keeps your fleet moving and your customers happy.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
  },
  {
    title: "Commercial Development",
    description:
      "From feasibility studies to project closeout, AI systems that track budgets, automate reporting, and give you real-time visibility across all your projects.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
];

export default function WhoWeServe() {
  return (
    <section id="who-we-serve" className="py-20 md:py-[120px] relative">
      <div className="section-glow top-0 left-[-20%]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <SectionHeader
          tag="Who We Serve"
          heading="Built for the trades, not tech companies"
          gradientWord="the trades"
          subtext="We work with operators who build real things — construction, HVAC, plumbing, property management. If your business runs on crews, trucks, and schedules, we're your AI team."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="dark-card p-7"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-bg flex items-center justify-center mb-5">
                {ind.icon}
              </div>
              <h3 className="font-heading font-semibold text-lg text-primary mb-3">
                {ind.title}
              </h3>
              <p className="font-body text-[15px] text-body leading-relaxed">
                {ind.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
