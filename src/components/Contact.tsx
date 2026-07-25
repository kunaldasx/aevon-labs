"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, MessageSquare, Clock, CheckCircle, CheckCircle2, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const INFO_CARDS = [
  { icon: Mail, label: "Email Us", value: "hello@aevon.dev", sub: "Reach out anytime", color: "text-primary", bg: "rgba(99,102,241,0.1)", border: "rgba(99,102,241,0.2)" },
  { icon: MessageSquare, label: "Live Chat", value: "Start a conversation", sub: "We reply within 2 hours", color: "text-secondary", bg: "rgba(139,92,246,0.1)", border: "rgba(139,92,246,0.2)" },
  { icon: Clock, label: "Response Time", value: "< 2 hours", sub: "Mon–Fri, 9am–6pm UTC", color: "text-accent", bg: "rgba(6,182,212,0.1)", border: "rgba(6,182,212,0.2)" },
];

const SERVICES = ["App Development","Web Development","Backend Development","AI Agents","Chatbots","Database","Bug Solving","Deployment","Software Maintenance","SEO","Figma Design","WordPress","Shopify","Other"];
const BUDGETS = [["<5k","< $5,000"],["5k-15k","$5,000 – $15,000"],["15k-50k","$15,000 – $50,000"],["50k+","$50,000+"],["not-sure","Not sure yet"]];
const PROMISES = ["No-obligation free consultation","Honest, transparent pricing","Response within 2 business hours","NDA available on request"];

const inputBase = "w-full px-4 py-3 rounded-xl text-foreground text-sm transition-all duration-200 outline-none placeholder-foreground-muted/35";
const inputStyle = {
  background: "rgba(10,10,18,0.7)",
  border: "1px solid rgba(255,255,255,0.07)",
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", service: "", budget: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const focusStyle = (field: string): React.CSSProperties => ({
    ...inputStyle,
    borderColor: focused === field ? "rgba(99,102,241,0.6)" : "rgba(255,255,255,0.07)",
    boxShadow: focused === field ? "0 0 0 3px rgba(99,102,241,0.12)" : "none",
  });

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/15 to-background pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(139,92,246,0.25), transparent)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] rounded-full bg-primary/5 blur-[180px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Get In Touch"
          title="Let's Build Something"
          highlight="Great Together."
          description="Tell us about your project. We'll get back with a clear plan and honest advice within 2 hours."
        />

        <div className="mt-16 grid lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Info column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {INFO_CARDS.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ x: 4, scale: 1.01 }}
                className="group flex items-start gap-4 p-4 rounded-2xl border transition-all duration-300 cursor-default"
                style={{ background: "rgba(15,15,24,0.7)", borderColor: "rgba(255,255,255,0.06)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = card.border;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 30px ${card.bg}`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: card.bg, border: `1px solid ${card.border}` }}>
                  <card.icon className={cn("w-5 h-5", card.color)} />
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-foreground-muted/50 mb-0.5">{card.label}</div>
                  <div className="font-bold text-foreground text-sm">{card.value}</div>
                  <div className="text-xs text-foreground-muted/60 mt-0.5">{card.sub}</div>
                </div>
              </motion.div>
            ))}

            {/* Promise card */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="p-5 rounded-2xl border mt-2"
              style={{ background: "rgba(99,102,241,0.05)", borderColor: "rgba(99,102,241,0.18)" }}
            >
              <h4 className="font-bold text-foreground text-sm mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Our Promise to You
              </h4>
              <div className="flex flex-col gap-2">
                {PROMISES.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs text-foreground-muted">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 rounded-3xl border overflow-hidden"
            style={{ background: "rgba(15,15,24,0.85)", borderColor: "rgba(255,255,255,0.07)", boxShadow: "0 40px 100px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)" }}
          >
            {/* Form header */}
            <div className="px-8 py-5 border-b"
              style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.07), rgba(139,92,246,0.04))", borderColor: "rgba(255,255,255,0.05)" }}>
              <h3 className="font-bold text-foreground">Start a Conversation</h3>
              <p className="text-sm text-foreground-muted/60 mt-0.5">Fill in the details and we'll respond within 2 hours</p>
            </div>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  className="flex flex-col items-center justify-center gap-6 py-20 px-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22, delay: 0.1 }}
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", boxShadow: "0 0 40px rgba(99,102,241,0.5)" }}
                  >
                    <CheckCircle className="w-10 h-10 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-black text-foreground mb-2">Message Received!</h3>
                    <p className="text-foreground-muted">We&apos;ll be in touch within 2 hours. Check your inbox.</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl text-sm font-bold text-primary border border-primary/30 hover:bg-primary/10 transition-colors"
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="p-8 flex flex-col gap-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    {[{ id: "name", label: "Your Name", placeholder: "John Smith", type: "text" },
                      { id: "email", label: "Email Address", placeholder: "john@company.com", type: "email" }
                    ].map((f) => (
                      <div key={f.id} className="flex flex-col gap-1.5">
                        <label className="text-[11px] font-semibold uppercase tracking-widest text-foreground-muted/50">{f.label}</label>
                        <input
                          type={f.type} required
                          value={form[f.id as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                          onFocus={() => setFocused(f.id)}
                          onBlur={() => setFocused(null)}
                          placeholder={f.placeholder}
                          className={inputBase}
                          style={focusStyle(f.id)}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {[
                      { id: "service", label: "Service Needed", options: SERVICES.map((s) => [s, s]) },
                      { id: "budget", label: "Budget Range", options: BUDGETS },
                    ].map((f) => (
                      <div key={f.id} className="flex flex-col gap-1.5">
                        <label className="text-[11px] font-semibold uppercase tracking-widest text-foreground-muted/50">{f.label}</label>
                        <select
                          value={form[f.id as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                          onFocus={() => setFocused(f.id)}
                          onBlur={() => setFocused(null)}
                          className={cn(inputBase, "appearance-none cursor-pointer")}
                          style={focusStyle(f.id)}
                        >
                          <option value="" className="bg-[#0d0d14]">Select {f.id === "service" ? "a service" : "budget"}</option>
                          {f.options.map(([val, label]) => (
                            <option key={val} value={val} className="bg-[#0d0d14]">{label}</option>
                          ))}
                        </select>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-semibold uppercase tracking-widest text-foreground-muted/50">Tell Us About Your Project</label>
                    <textarea
                      required rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      placeholder="Describe what you're building, the problem you're solving, and any technical requirements..."
                      className={cn(inputBase, "resize-none")}
                      style={focusStyle("message")}
                    />
                  </div>

                  <motion.button
                    type="submit" disabled={loading}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex items-center justify-center gap-3 w-full py-4 rounded-xl text-white text-sm font-bold transition-all duration-300"
                    style={{
                      background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                      boxShadow: loading ? "none" : "0 0 30px rgba(99,102,241,0.45), 0 4px 20px rgba(0,0,0,0.3)",
                      opacity: loading ? 0.7 : 1,
                    }}
                  >
                    {loading ? (
                      <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</>
                    ) : (
                      <><Send className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />Send Message<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" /></>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
