"use client";

import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";

const capabilities = [
  {
    title: "Scheduling & Dispatch",
    description:
      "AI-powered routing and scheduling that puts the right person in the right place, every time.",
    bullets: [
      "Automated job assignment",
      "Route optimization",
      "Real-time crew tracking",
      "Emergency dispatch prioritization",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
  {
    title: "Customer Communication",
    description:
      "Follow-ups, estimates, and updates — handled automatically so nothing falls through the cracks.",
    bullets: [
      "Automated follow-up sequences",
      "Estimate delivery & tracking",
      "Review request automation",
      "Customer satisfaction surveys",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    title: "Back-Office Automation",
    description:
      "Invoicing, billing, and admin tasks that run themselves while you focus on the job.",
    bullets: [
      "Automated invoice generation",
      "Payment tracking & reminders",
      "Expense categorization",
      "Report generation",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    title: "Performance Intelligence",
    description:
      "Know exactly how your business is performing with real-time dashboards and predictive insights.",
    bullets: [
      "Revenue & job tracking",
      "Technician/crew performance",
      "Customer retention metrics",
      "Predictive forecasting",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
  },
];

export default function Capabilities() {
  return (
    <section id="services" className="py-20 md:py-[120px] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          tag="Our Services"
          heading="Capabilities built for operations"
          gradientWord="operations"
          subtext="We don't sell software. We build and manage the AI systems that run your business behind the scenes."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="dark-card p-7"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-bg flex items-center justify-center mb-5">
                {cap.icon}
              </div>
              <h3 className="font-heading font-semibold text-lg text-primary mb-2">
                {cap.title}
              </h3>
              <p className="font-body text-[15px] text-body leading-relaxed mb-5">
                {cap.description}
              </p>
              <ul className="space-y-2">
                {cap.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-[13px] text-body/80">
                    <span className="w-1 h-1 rounded-full bg-emerald-400 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
