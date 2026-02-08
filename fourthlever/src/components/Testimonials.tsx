"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";

const testimonials = [
  {
    quote:
      "We went from missing 30% of follow-up calls to catching every single one. Fourth Lever didn't just give us a tool — they built a system that thinks for us.",
    name: "Mike R.",
    title: "Owner, Regional HVAC Company",
  },
  {
    quote:
      "Our maintenance request response time dropped from 48 hours to 4. Tenants are happier, owners are happier, and my team isn't drowning in emails anymore.",
    name: "Sarah K.",
    title: "Director of Operations, Property Management Group",
  },
  {
    quote:
      "I used to spend my Sundays doing paperwork. Now the AI handles daily logs, change orders, and sub coordination. I got my weekends back.",
    name: "James T.",
    title: "General Contractor, Commercial Construction",
  },
  {
    quote:
      "We added $180K in revenue last quarter without hiring anyone. The AI dispatch system gets more jobs done per truck, period.",
    name: "David L.",
    title: "Owner, Plumbing & Mechanical Services",
  },
  {
    quote:
      "The team at Fourth Lever understands what it's like to actually run a business. They didn't just build us AI — they gave us our time back.",
    name: "Karen M.",
    title: "COO, Multi-location Service Company",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 md:py-[120px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          tag="Testimonials"
          heading="What our clients say"
          gradientWord="clients"
          subtext="Real operators. Real results. Real words."
        />

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="dark-card p-8 md:p-10 text-center"
            >
              {/* Quote icon */}
              <div className="w-10 h-10 rounded-xl bg-accent-bg flex items-center justify-center mx-auto mb-6">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#34d399"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                </svg>
              </div>

              <p className="font-body text-lg md:text-xl text-secondary leading-[1.7] mb-8">
                &ldquo;{testimonials[active].quote}&rdquo;
              </p>

              <div>
                <p className="font-heading font-semibold text-[15px] text-primary">
                  {testimonials[active].name}
                </p>
                <p className="font-body text-[13px] text-muted mt-1">
                  {testimonials[active].title}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === active
                    ? "bg-emerald-400 w-6"
                    : "bg-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.25)]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
