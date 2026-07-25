"use client";

import { motion } from "framer-motion";
import { Zap, Github, Twitter, Linkedin, Mail, ArrowUpRight, MapPin } from "lucide-react";

const LINKS = {
  Services: ["App Development","Web Development","Backend & APIs","AI Agents","Chatbots","Database","Shopify & WordPress","SEO"],
  Company: ["About Us","Our Process","Tech Stack","Testimonials","Careers","Blog"],
  Legal: ["Privacy Policy","Terms of Service","Cookie Policy"],
};

const SOCIALS = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@aevon.dev", label: "Email" },
];

export default function Footer() {
  const scrollToSection = (id: string) => {
    document.querySelector(`#${id}`)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(5,5,8,0), rgba(13,13,20,0.8))" }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }} />

      {/* Top CTA banner */}
      <div className="relative" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-black text-foreground">
              Ready to build?{" "}
              <span style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Let&apos;s talk.
              </span>
            </h2>
            <p className="text-foreground-muted mt-2 text-lg">No commitments. Just an honest conversation about your project.</p>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("contact")}
            className="flex-shrink-0 flex items-center gap-2.5 px-7 py-4 rounded-2xl text-base font-black text-white"
            style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", boxShadow: "0 0 40px rgba(99,102,241,0.5), 0 8px 30px rgba(0,0,0,0.3)" }}
          >
            Start a Project <ArrowUpRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12 mb-14">
          {/* Brand */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", boxShadow: "0 0 20px rgba(99,102,241,0.5)" }}>
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-black" style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                AEVON
              </span>
            </div>
            <p className="text-foreground-muted text-sm leading-relaxed max-w-xs">
              A premium software development agency building world-class apps, platforms, and AI solutions for ambitious businesses globally.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-2">
              {SOCIALS.map((s) => (
                <motion.a
                  key={s.label} href={s.href} aria-label={s.label}
                  whileHover={{ scale: 1.15, y: -3 }} whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-foreground-muted/50 hover:text-primary transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.4)"; (e.currentTarget as HTMLElement).style.background = "rgba(99,102,241,0.1)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; }}
                >
                  <s.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col gap-1.5 text-xs text-foreground-muted/50">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.8)] animate-pulse" />
                <span>Available for new projects</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3 h-3" />
                <span>Remote-first · Worldwide</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([category, items]) => (
            <div key={category} className="flex flex-col gap-4">
              <h3 className="text-[10px] font-black uppercase tracking-[0.15em] text-foreground-muted/40">{category}</h3>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 28 }}
                      className="text-sm text-foreground-muted/50 hover:text-foreground/80 transition-colors duration-200 cursor-pointer inline-block"
                    >
                      {item}
                    </motion.span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <p className="text-xs text-foreground-muted/30">
            &copy; {new Date().getFullYear()} Aevon. All rights reserved. Built with Next.js & ❤️
          </p>
          <div className="flex items-center gap-1 text-xs text-foreground-muted/20">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400/60 animate-pulse" />
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
