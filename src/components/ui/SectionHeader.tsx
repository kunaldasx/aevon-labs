"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  center?: boolean;
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  description,
  center = true,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "flex flex-col gap-4",
        center && "items-center text-center",
        className
      )}
    >
      {badge && (
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          {badge}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
        {highlight ? (
          <>
            {title}{" "}
            <span className="text-gradient">{highlight}</span>
          </>
        ) : (
          title
        )}
      </h2>
      {description && (
        <p className="text-foreground-muted text-base sm:text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
