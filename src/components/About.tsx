"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Zap, Target, Users, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const STATS = [
  { value: 150, suffix: "+", label: "Projects Delivered", color: "from-primary to-secondary" },
  { value: 98, suffix: "%", label: "Client Satisfaction", color: "from-secondary to-accent" },
  { value: 5, suffix: "+", label: "Years in Business", color: "from-accent to-primary" },
  { value: 40, suffix: "+", label: "Global Clients", color: "from-primary to-secondary" },
];

const PILLARS = [
  {
    icon: Zap,
    title: "Speed Without Compromise",
    description: "We ship fast — but never at the expense of quality. Every line of code is built to last.",
    gradient: "from-primary/20 to-transparent",
    iconBg: "bg-primary/15", iconColor: "text-primary",
    glow: "rgba(99,102,241,0.2)",
  },
  {
    icon: Target,
    title: "Results-First Approach",
    description: "We're obsessed with outcomes. Real business impact you can actually measure.",
    gradient: "from-accent/20 to-transparent",
    iconBg: "bg-accent/15", iconColor: "text-accent",
    glow: "rgba(6,182,212,0.2)",
  },
  {
    icon: Shield,
    title: "Transparent & Reliable",
    description: "Clear communication, no hidden costs, and we always deliver on our commitments.",
    gradient: "from-secondary/20 to-transparent",
    iconBg: "bg-secondary/15", iconColor: "text-secondary",
    glow: "rgba(139,92,246,0.2)",
  },
  {
    icon: Users,
    title: "True Partnership",
    description: "We embed into your team, learn your domain, and build like we have a stake in your success.",
    gradient: "from-emerald-500/20 to-transparent",
    iconBg: "bg-emerald-500/15", iconColor: "text-emerald-400",
    glow: "rgba(52,211,153,0.2)",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 2200;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const e = 1 - Math.pow(1 - p, 4);
      setCount(Math.floor(e * value));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/15 to-background pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(99,102,241,0.25), transparent)" }} />
      <div className="absolute top-1/2 right-0 translate-x-1/3 w-[600px] h-[600px] rounded-full bg-secondary/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -translate-x-1/4 w-[500px] h-[500px] rounded-full bg-accent/4 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* LEFT */}
          <div className="flex flex-col gap-10">
            <SectionHeader
              badge="Who We Are"
              title="Crafting Software"
              highlight="With Purpose."
              description="Aevon was founded by engineers frustrated with agencies that over-promise and under-deliver. We built something different — a team as invested in your success as you are."
              center={false}
            />

            <div className="flex flex-col gap-3">
              {PILLARS.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ x: 4, scale: 1.01 }}
                  className="group flex items-start gap-4 p-4 rounded-2xl border transition-all duration-300 cursor-default"
                  style={{
                    background: "rgba(15,15,24,0.6)",
                    borderColor: "rgba(255,255,255,0.05)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = p.glow.replace("0.2", "0.4");
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 30px ${p.glow}`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.05)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div className={`w-10 h-10 rounded-xl ${p.iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <p.icon className={`w-5 h-5 ${p.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-foreground mb-1">{p.title}</h4>
                    <p className="text-sm text-foreground-muted leading-relaxed">{p.description}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-foreground-muted/30 group-hover:text-foreground-muted/60 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 mt-0.5" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* decorative ring */}
            <div className="absolute -inset-6 rounded-3xl pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(99,102,241,0.08), transparent 70%)" }} />

            <div className="relative grid grid-cols-2 gap-3.5">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.88 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="group relative rounded-2xl p-6 border overflow-hidden cursor-default transition-all duration-300"
                  style={{ background: "rgba(15,15,24,0.8)", borderColor: "rgba(255,255,255,0.06)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.4)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.4), 0 0 30px rgba(99,102,241,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-[0.07] transition-opacity duration-300 pointer-events-none`} />
                  <span
                    className="text-4xl font-black tracking-tight"
                    style={{
                      background: `linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </span>
                  <p className="text-sm text-foreground-muted mt-1 leading-snug">{s.label}</p>
                </motion.div>
              ))}

              {/* Availability card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.88 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="col-span-2 relative rounded-2xl p-6 border overflow-hidden"
                style={{ background: "rgba(15,15,24,0.8)", borderColor: "rgba(99,102,241,0.2)" }}
              >
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.07), rgba(139,92,246,0.05), transparent)" }} />
                <div className="relative flex items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)] animate-pulse" />
                      <span className="text-xs text-foreground-muted font-semibold uppercase tracking-wider">Currently Available</span>
                    </div>
                    <p className="text-foreground font-bold text-base">Taking on new projects</p>
                    <p className="text-foreground-muted text-sm mt-0.5">
                      Avg. response: <span className="text-accent font-semibold">&lt; 2 hours</span>
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="flex-shrink-0 px-4 py-2.5 rounded-xl text-sm font-bold text-white"
                    style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", boxShadow: "0 0 20px rgba(99,102,241,0.4)" }}
                  >
                    Get in Touch
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
