"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  {
    label: "Frontend", emoji: "⚡",
    techs: ["React 19", "Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion", "Vue 3"],
    gradient: "from-blue-500/15 to-indigo-500/10", border: "rgba(99,102,241,0.2)", accent: "#6366f1",
  },
  {
    label: "Mobile", emoji: "📱",
    techs: ["React Native", "Expo", "Flutter", "iOS SDK", "Android"],
    gradient: "from-violet-500/15 to-purple-500/10", border: "rgba(139,92,246,0.2)", accent: "#8b5cf6",
  },
  {
    label: "Backend", emoji: "🔧",
    techs: ["Node.js", "Python", "FastAPI", "Express 5", "NestJS", "Go"],
    gradient: "from-cyan-500/15 to-teal-500/10", border: "rgba(6,182,212,0.2)", accent: "#06b6d4",
  },
  {
    label: "AI & ML", emoji: "🧠",
    techs: ["OpenAI GPT-4", "Claude 3.5", "LangChain", "Pinecone", "LlamaIndex", "HuggingFace"],
    gradient: "from-pink-500/15 to-rose-500/10", border: "rgba(236,72,153,0.2)", accent: "#ec4899",
  },
  {
    label: "Database", emoji: "🗄️",
    techs: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "PlanetScale", "Drizzle ORM"],
    gradient: "from-amber-500/15 to-orange-500/10", border: "rgba(245,158,11,0.2)", accent: "#f59e0b",
  },
  {
    label: "Cloud & DevOps", emoji: "☁️",
    techs: ["AWS", "Vercel", "Docker", "Kubernetes", "GitHub Actions", "Railway"],
    gradient: "from-emerald-500/15 to-green-500/10", border: "rgba(16,185,129,0.2)", accent: "#10b981",
  },
  {
    label: "CMS & Commerce", emoji: "🛒",
    techs: ["WordPress", "Shopify", "Contentful", "Strapi", "WooCommerce", "Sanity"],
    gradient: "from-slate-500/15 to-zinc-500/10", border: "rgba(100,116,139,0.2)", accent: "#64748b",
  },
  {
    label: "Design", emoji: "🎨",
    techs: ["Figma", "Adobe XD", "Framer", "Storybook", "Chromatic"],
    gradient: "from-fuchsia-500/15 to-pink-500/10", border: "rgba(217,70,239,0.2)", accent: "#d946ef",
  },
];

export default function TechStack() {
  const [hoveredCat, setHoveredCat] = useState<string | null>(null);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <section id="tech" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(6,182,212,0.25), transparent)" }} />
      <div className="absolute top-1/2 right-0 translate-x-1/3 w-[600px] h-[600px] rounded-full bg-accent/4 blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Tech Stack"
          title="We're Fluent In"
          highlight="Modern Tech."
          description="Cutting-edge tools, frameworks, and platforms — chosen for performance and longevity, not trend-chasing."
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5"
        >
          {CATEGORIES.map((cat, i) => {
            const isCatHovered = hoveredCat === cat.label;
            return (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                onHoverStart={() => setHoveredCat(cat.label)}
                onHoverEnd={() => setHoveredCat(null)}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative rounded-2xl p-5 border overflow-hidden cursor-default transition-all duration-300"
                style={{
                  background: isCatHovered
                    ? `linear-gradient(135deg, ${cat.border.replace("0.2", "0.12")}, rgba(15,15,24,0.9))`
                    : "rgba(15,15,24,0.65)",
                  borderColor: isCatHovered ? cat.border.replace("0.2", "0.5") : cat.border.replace("0.2", "0.12"),
                  boxShadow: isCatHovered ? `0 16px 50px rgba(0,0,0,0.4), 0 0 40px ${cat.border.replace("0.2", "0.15")}` : "none",
                }}
              >
                {/* Category label */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg">{cat.emoji}</span>
                  <span className="text-[11px] font-black uppercase tracking-widest" style={{ color: cat.accent }}>{cat.label}</span>
                </div>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-1.5">
                  {cat.techs.map((tech) => {
                    const isTechHovered = hoveredTech === `${cat.label}-${tech}`;
                    return (
                      <motion.span
                        key={tech}
                        onHoverStart={() => setHoveredTech(`${cat.label}-${tech}`)}
                        onHoverEnd={() => setHoveredTech(null)}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="text-[11px] px-2.5 py-1.5 rounded-lg font-semibold cursor-default transition-all duration-200"
                        style={{
                          background: isTechHovered
                            ? `${cat.border.replace("0.2", "0.2")}`
                            : "rgba(255,255,255,0.04)",
                          color: isTechHovered ? cat.accent : "rgba(255,255,255,0.5)",
                          border: `1px solid ${isTechHovered ? cat.border.replace("0.2","0.6") : "rgba(255,255,255,0.06)"}`,
                        }}
                      >
                        {tech}
                      </motion.span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
