"use client";

import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import Tile from "./ui/Tile";

const audiences = [
  {
    title: "Service Businesses",
    description:
      "HVAC, trades, home services — automate scheduling, dispatch, follow-ups, and customer communication without hiring more staff.",
    icon: (
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
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Agencies & Consultants",
    description:
      "Marketing, recruiting, advisory firms — scale your delivery without scaling your headcount. AI handles the repetitive work.",
    icon: (
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
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: "Growing SMBs",
    description:
      "$1M–$20M businesses that know AI matters but don't have the team to build it. We become your AI department.",
    icon: (
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
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
];

export default function WhoItsFor() {
  return (
    <section id="who-its-for" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          tag="Who It's For"
          heading="Built for operators, not engineers"
          gradientWord="not engineers"
          subtext="You don't need a technical co-founder. You need someone who builds AI for a living."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {audiences.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Tile className="h-full">
                <div className="w-[46px] h-[46px] bg-white border border-border-light rounded-xl flex items-center justify-center mb-5 group-hover:rotate-3 transition-transform duration-300">
                  {a.icon}
                </div>
                <h3 className="font-heading font-bold text-lg text-primary mb-3">
                  {a.title}
                </h3>
                <p className="font-body text-[15px] text-body leading-relaxed">
                  {a.description}
                </p>
              </Tile>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
