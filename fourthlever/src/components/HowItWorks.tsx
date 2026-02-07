"use client";

import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import Tile from "./ui/Tile";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We audit your operations and identify exactly where AI creates the most leverage. No guesswork, no generic playbooks.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Build & Deploy",
    description:
      "We design and deploy custom AI systems tailored to your specific workflows. No templates. No off-the-shelf tools.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Manage & Scale",
    description:
      "We run everything on a monthly retainer. Monitoring, optimization, and scaling — all handled. You just see the results.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-[120px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          tag="How It Works"
          heading="Three steps to your fourth lever"
          gradientWord="fourth lever"
          subtext="A simple, proven process that gets you from zero AI to fully managed infrastructure."
        />

        <div className="grid md:grid-cols-3 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Tile className="relative h-full">
                {/* Step number — brand color at 7% opacity */}
                <span
                  className="absolute top-4 right-5 font-heading font-black text-[56px] leading-none tracking-[-3px] select-none pointer-events-none"
                  style={{ color: "rgba(5,150,105,0.07)" }}
                >
                  {step.number}
                </span>

                <div className="w-[46px] h-[46px] bg-accent-bg rounded-[14px] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>

                <h3 className="font-heading font-semibold text-lg text-primary mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-[15px] text-body leading-relaxed">
                  {step.description}
                </p>
              </Tile>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
