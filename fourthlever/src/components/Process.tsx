"use client";

import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";

const phases = [
  {
    phase: "Understanding your business",
    steps: [
      {
        number: "01",
        title: "Discovery",
        description:
          "We audit your current workflows, talk to your team, and identify exactly where AI creates the most leverage for your specific operations.",
      },
      {
        number: "02",
        title: "Strategy",
        description:
          "We map out the specific systems that will move the needle — dispatch, communication, invoicing, or all three. Clear roadmap, no guesswork.",
      },
    ],
  },
  {
    phase: "Building the right systems",
    steps: [
      {
        number: "03",
        title: "Design & Build",
        description:
          "Custom AI systems tailored to YOUR specific operations. No templates. No off-the-shelf tools. Built from scratch for how your business actually works.",
      },
      {
        number: "04",
        title: "Deploy",
        description:
          "We launch your systems with zero disruption to your day-to-day. Your team keeps working while we handle the technical heavy lifting.",
      },
    ],
  },
  {
    phase: "Running and scaling",
    steps: [
      {
        number: "05",
        title: "Manage",
        description:
          "We monitor, optimize, and maintain everything on a monthly retainer. You just see the results — better numbers, less manual work.",
      },
      {
        number: "06",
        title: "Scale",
        description:
          "As your business grows, we scale your AI systems to match. More trucks, more properties, more projects — same team, same quality.",
      },
    ],
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-[120px] relative">
      <div className="section-glow bottom-0 right-[-20%]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <SectionHeader
          tag="How It Works"
          heading="AI development, simplified"
          gradientWord="simplified"
          subtext="A clear, proven process that gets you from zero AI to fully managed infrastructure."
        />

        <div className="space-y-16">
          {phases.map((phase, pi) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: pi * 0.1 }}
            >
              {/* Phase label */}
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] w-12 bg-gradient-to-r from-emerald-400/50 to-transparent" />
                <span className="font-mono text-[12px] text-emerald-400/70 uppercase tracking-[0.2em] font-medium">
                  {phase.phase}
                </span>
                <div className="h-[1px] flex-1 bg-[rgba(255,255,255,0.06)]" />
              </div>

              {/* Steps */}
              <div className="grid md:grid-cols-2 gap-5">
                {phase.steps.map((step, si) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: (pi * 2 + si) * 0.08 }}
                    className="dark-card p-7 relative"
                  >
                    <span className="absolute top-5 right-6 font-heading font-black text-[48px] leading-none tracking-[-3px] select-none pointer-events-none text-[rgba(16,185,129,0.05)]">
                      {step.number}
                    </span>
                    <h3 className="font-heading font-semibold text-lg text-primary mb-3">
                      {step.title}
                    </h3>
                    <p className="font-body text-[15px] text-body leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
