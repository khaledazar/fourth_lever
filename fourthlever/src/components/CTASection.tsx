"use client";

import { motion } from "framer-motion";
import PillButton from "./ui/PillButton";

export default function CTASection() {
  return (
    <section className="py-20 md:py-[120px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden dark-card p-12 md:p-16 text-center"
        >
          {/* Gradient bar at top */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />

          {/* Ambient glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(600px 400px at 50% 0%, rgba(16,185,129,0.06), transparent 70%)",
            }}
          />

          <div className="relative">
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-primary tracking-[-2.5px] leading-[1.08] mb-4">
              Let&apos;s put AI to work{" "}
              <span className="gradient-text">in your business</span>
            </h2>
            <p className="font-body text-base text-body max-w-xl mx-auto leading-relaxed mb-10">
              30-minute call. No pitch deck. Just a conversation about where AI
              can move the needle for your operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <PillButton
                href="https://calendly.com/khaledazar/30min"
                variant="primary"
              >
                Book a Call
              </PillButton>
              <PillButton href="#process" variant="ghost">
                Learn More
              </PillButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
