"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight, Play } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const TESTIMONIALS = [
  {
    name: "Sarah Mitchell", role: "CEO, NovaTech Solutions", avatar: "SM",
    avatarGradient: "from-violet-500 to-indigo-600", rating: 5,
    text: "Aevon transformed our outdated legacy system into a blazing-fast modern platform in under 3 months. The attention to detail, the code quality, and the communication throughout were exceptional. I cannot recommend them highly enough.",
    result: "3× faster performance",
  },
  {
    name: "James Okoye", role: "Founder, RetailFlow", avatar: "JO",
    avatarGradient: "from-emerald-500 to-teal-600", rating: 5,
    text: "We needed a complex Shopify integration with a custom AI recommendation engine. Aevon delivered exactly that — on time and under budget. Our conversion rate jumped 34% in the first month. These guys are the real deal.",
    result: "+34% conversion rate",
  },
  {
    name: "Priya Kapoor", role: "CTO, HealthBridge", avatar: "PK",
    avatarGradient: "from-pink-500 to-rose-600", rating: 5,
    text: "The AI agents Aevon built for our patient intake process saved our team 200+ hours per month. They understood our compliance requirements immediately and built something both powerful and HIPAA-compliant.",
    result: "200+ hours saved/month",
  },
  {
    name: "Marcus van der Berg", role: "Director, LogiTrack", avatar: "MV",
    avatarGradient: "from-amber-500 to-orange-600", rating: 5,
    text: "Backend performance was our bottleneck — Aevon came in, refactored our database architecture, and our API response times dropped by 80%. They also set up monitoring and CI/CD that our in-house team relies on daily.",
    result: "80% faster API responses",
  },
  {
    name: "Aisha Nkomo", role: "Founder, StyleSphere", avatar: "AN",
    avatarGradient: "from-cyan-500 to-blue-600", rating: 5,
    text: "From Figma to live Shopify store in 6 weeks — Aevon made it feel effortless. The site is gorgeous, loads in under 2 seconds, and our customers constantly compliment how easy it is to use. Worth every penny.",
    result: "Sub-2s load time",
  },
];

const CLIENTS = ["NovaTech", "RetailFlow", "HealthBridge", "LogiTrack", "StyleSphere", "Finova", "Cloudex", "PeakScale"];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const t = setTimeout(() => {
      setDir(1);
      setCurrent((c) => (c + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearTimeout(t);
  }, [current, autoplay]);

  const go = (d: number) => {
    setAutoplay(false);
    setDir(d);
    setCurrent((c) => (c + d + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0, scale: 0.97 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0, scale: 0.97 }),
  };

  const t = TESTIMONIALS[current];

  return (
    <section id="testimonials" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/20 to-background pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(99,102,241,0.25), transparent)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Client Stories"
          title="Trusted By"
          highlight="Founders & Teams."
          description="Real results, real clients. Here's what working with Aevon actually looks like."
        />

        <div className="mt-16">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={current}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-3xl p-8 sm:p-12 border overflow-hidden"
                style={{
                  background: "rgba(15,15,24,0.85)",
                  borderColor: "rgba(99,102,241,0.18)",
                  boxShadow: "0 30px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
                }}
              >
                {/* BG gradient */}
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.06), rgba(139,92,246,0.04), transparent)" }} />

                {/* Large quote icon */}
                <Quote className="absolute top-6 right-8 sm:top-10 sm:right-12 w-20 h-20 sm:w-32 sm:h-32 opacity-[0.04] pointer-events-none" />

                <div className="relative flex flex-col gap-7">
                  {/* Stars + result badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold"
                      style={{ background: "rgba(99,102,241,0.15)", color: "#818cf8", border: "1px solid rgba(99,102,241,0.3)" }}
                    >
                      <Play className="w-2.5 h-2.5 fill-current" />
                      {t.result}
                    </motion.div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg sm:text-xl text-foreground/90 leading-relaxed font-medium">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${t.avatarGradient} flex items-center justify-center text-white font-black text-sm flex-shrink-0`}>
                      {t.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-foreground">{t.name}</div>
                      <div className="text-sm text-foreground-muted">{t.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-1.5">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setAutoplay(false); setDir(i > current ? 1 : -1); setCurrent(i); }}
                  className={`h-1.5 rounded-full transition-all duration-400 ${i === current ? "w-8 bg-primary" : "w-1.5 bg-white/10 hover:bg-white/20"}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <motion.button onClick={() => go(-1)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-xl border flex items-center justify-center text-foreground-muted hover:text-primary transition-colors duration-200"
                style={{ background: "rgba(15,15,24,0.8)", borderColor: "rgba(255,255,255,0.07)" }}>
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button onClick={() => go(1)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-xl border flex items-center justify-center text-foreground-muted hover:text-primary transition-colors duration-200"
                style={{ background: "rgba(15,15,24,0.8)", borderColor: "rgba(255,255,255,0.07)" }}>
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Client strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-16 pt-10"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-center text-[10px] uppercase tracking-[0.2em] text-foreground-muted/35 mb-8 font-semibold">
            Trusted by teams worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-3">
            {CLIENTS.map((name) => (
              <motion.span
                key={name}
                whileHover={{ scale: 1.08, opacity: 1 }}
                className="text-sm font-black tracking-wide text-foreground-muted/25 hover:text-foreground-muted/60 transition-all duration-200 cursor-default"
              >
                {name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
