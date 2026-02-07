"use client";

import { motion } from "framer-motion";
import PillButton from "./ui/PillButton";

export default function CTASection() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden bg-surface border border-border-light rounded-3xl p-12 md:p-16 text-center"
        >
          {/* Always-visible gradient bar */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent to-accent-mint" />

          {/* Dot pattern */}
          <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

          <div className="relative">
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-primary tracking-[-1.5px] leading-[1.15] mb-5">
              Ready to add your{" "}
              <span className="gradient-text">fourth lever</span>?
            </h2>
            <p className="font-body text-lg text-body max-w-xl mx-auto leading-relaxed mb-10">
              30-minute call. No pitch deck. Just a conversation about where AI
              can move the needle for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <PillButton
                href="https://calendly.com/khaledazar/30min"
                variant="primary"
              >
                Book a Call
              </PillButton>
              <PillButton href="#how-it-works" variant="ghost">
                Learn More
              </PillButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
