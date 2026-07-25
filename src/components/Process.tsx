"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, PenTool, Code2, Rocket, HeartHandshake, ChevronRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    number: "01", icon: Lightbulb, title: "Discovery",
    short: "Requirements & planning",
    description: "Deep-dive workshops to understand your goals, users, and constraints. We map every requirement before writing a single line of code.",
    details: ["Requirements Workshop", "Market & Competitor Analysis", "Tech Stack Planning", "Project Roadmap"],
    gradient: "from-amber-500 to-orange-500", glow: "rgba(245,158,11,0.35)",
    bg: "rgba(245,158,11,0.08)",
  },
  {
    number: "02", icon: PenTool, title: "Design",
    short: "UX, prototypes & systems",
    description: "Wireframes, interactive Figma prototypes, and a full design system — every screen reviewed and signed off before build begins.",
    details: ["User Flows & Wireframes", "Interactive Prototypes", "Design System", "Client Sign-off"],
    gradient: "from-pink-500 to-rose-500", glow: "rgba(236,72,153,0.35)",
    bg: "rgba(236,72,153,0.08)",
  },
  {
    number: "03", icon: Code2, title: "Build",
    short: "Agile sprints & demos",
    description: "Two-week sprints with live demos. Clean, documented code, continuous integration, and regular syncs so you always know where we are.",
    details: ["2-Week Sprints", "Weekly Live Demos", "CI/CD Pipeline", "Code Reviews"],
    gradient: "from-indigo-500 to-violet-500", glow: "rgba(99,102,241,0.35)",
    bg: "rgba(99,102,241,0.08)",
  },
  {
    number: "04", icon: Rocket, title: "Launch",
    short: "QA, audit & deploy",
    description: "Comprehensive QA, performance tuning, security audit, and a zero-downtime deploy to production — then we monitor for 72 hours post-launch.",
    details: ["End-to-End QA", "Performance Optimization", "Security Audit", "Zero-Downtime Deploy"],
    gradient: "from-cyan-500 to-blue-500", glow: "rgba(6,182,212,0.35)",
    bg: "rgba(6,182,212,0.08)",
  },
  {
    number: "05", icon: HeartHandshake, title: "Support",
    short: "Monitoring & growth",
    description: "Ongoing monitoring, maintenance, and a direct line to your dedicated engineer. We don't disappear after launch — we grow with you.",
    details: ["24/7 Monitoring", "Monthly Updates", "Dedicated Engineer", "Growth Consulting"],
    gradient: "from-emerald-500 to-teal-500", glow: "rgba(16,185,129,0.35)",
    bg: "rgba(16,185,129,0.08)",
  },
];

export default function Process() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="process" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/20 to-background pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(139,92,246,0.25), transparent)" }} />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/4 blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="How We Work"
          title="Our Proven"
          highlight="5-Step Process."
          description="A disciplined, transparent workflow that takes your idea from first conversation to live product — and keeps it thriving long after launch."
        />

        {/* Step cards — desktop horizontal, mobile vertical */}
        <div className="mt-20 hidden lg:grid grid-cols-5 gap-4">
          {STEPS.map((step, i) => {
            const isActive = active === step.title;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                onHoverStart={() => setActive(step.title)}
                onHoverEnd={() => setActive(null)}
                whileHover={{ y: -8, scale: 1.03 }}
                className={cn("relative rounded-2xl p-5 border cursor-default overflow-hidden transition-all duration-350")}
                style={{
                  background: isActive ? step.bg : "rgba(15,15,24,0.6)",
                  borderColor: isActive ? step.glow.replace("0.35", "0.5") : "rgba(255,255,255,0.05)",
                  boxShadow: isActive ? `0 20px 50px rgba(0,0,0,0.4), 0 0 40px ${step.glow.replace("0.35","0.2")}` : "none",
                }}
              >
                {/* Step number */}
                <div className="absolute top-4 right-4 text-[11px] font-black text-foreground-muted/20">{step.number}</div>

                {/* Icon */}
                <motion.div
                  animate={isActive ? { scale: 1.12, rotate: 6 } : { scale: 1, rotate: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${step.gradient} mb-5`}
                  style={{ boxShadow: isActive ? `0 8px 30px ${step.glow}` : "none" }}
                >
                  <step.icon className="w-7 h-7 text-white" />
                </motion.div>

                <h3 className="text-base font-bold text-foreground mb-1">{step.title}</h3>
                <p className="text-[12px] text-foreground-muted/60 mb-4">{step.short}</p>

                <AnimatePresence>
                  {isActive && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex flex-col gap-1.5 overflow-hidden"
                    >
                      {step.details.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-[11px] text-foreground-muted">
                          <ChevronRight className="w-3 h-3 text-primary/60 flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: Accordion */}
        <div className="mt-12 flex flex-col gap-3 lg:hidden">
          {STEPS.map((step, i) => {
            const isOpen = active === step.title;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="rounded-2xl border overflow-hidden"
                style={{ background: "rgba(15,15,24,0.7)", borderColor: isOpen ? step.glow.replace("0.35", "0.45") : "rgba(255,255,255,0.05)" }}
              >
                <button
                  onClick={() => setActive(isOpen ? null : step.title)}
                  className="w-full flex items-center gap-4 p-5 text-left"
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br ${step.gradient} flex-shrink-0`}>
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-foreground">{step.title}</div>
                    <div className="text-xs text-foreground-muted/60 mt-0.5">{step.short}</div>
                  </div>
                  <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronRight className="w-4 h-4 text-foreground-muted/40" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 flex flex-col gap-3" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                        <p className="text-sm text-foreground-muted leading-relaxed pt-4">{step.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {step.details.map((d) => (
                            <span key={d} className="text-[11px] px-2.5 py-1 rounded-full border"
                              style={{ background: step.bg, borderColor: step.glow.replace("0.35", "0.25"), color: "rgba(255,255,255,0.6)" }}>
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-16 relative overflow-hidden rounded-3xl p-8 sm:p-10 border"
          style={{
            background: "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.05), rgba(6,182,212,0.04))",
            borderColor: "rgba(99,102,241,0.2)",
          }}
        >
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-primary/8 blur-[100px] pointer-events-none" />
          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-black text-foreground mb-1">Ready to kick off your project?</h3>
              <p className="text-foreground-muted text-sm">Book a free 30-minute discovery call — no commitments, just clarity.</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="flex-shrink-0 flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-bold text-white"
              style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", boxShadow: "0 0 30px rgba(99,102,241,0.45)" }}
            >
              Book Free Call <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
