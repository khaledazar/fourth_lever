"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PillButton from "./ui/PillButton";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#process" },
  { label: "Who We Serve", href: "#who-we-serve" },
  { label: "Case Studies", href: "#case-studies" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[rgba(255,255,255,0.06)] shadow-[0_1px_3px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
      style={
        scrolled
          ? {
              background: "rgba(11,17,32,0.85)",
              backdropFilter: "blur(16px) saturate(180%)",
            }
          : undefined
      }
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <span className="font-heading font-bold text-xl text-white tracking-[-0.5px]">
              Fourth
            </span>
            <span className="font-heading font-bold text-xl text-emerald-400 tracking-[-0.5px]">
              Lever
            </span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative font-body text-[15px] font-medium text-white/60 hover:text-white transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute bottom-[-2px] left-0 w-0 h-[1.5px] bg-emerald-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <PillButton
              href="https://calendly.com/khaledazar/30min"
              variant="primary"
              className="ml-2"
            >
              Book a Call
            </PillButton>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`w-5 h-[1.5px] bg-white transition-all duration-300 origin-center ${
                mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""
              }`}
            />
            <span
              className={`w-5 h-[1.5px] bg-white transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-5 h-[1.5px] bg-white transition-all duration-300 origin-center ${
                mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-b border-[rgba(255,255,255,0.06)] overflow-hidden"
            style={{
              background: "rgba(11,17,32,0.95)",
              backdropFilter: "blur(16px)",
            }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-[15px] font-medium text-white/60 hover:text-white transition-colors py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <PillButton
                href="https://calendly.com/khaledazar/30min"
                variant="primary"
                className="w-full mt-2"
              >
                Book a Call
              </PillButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
