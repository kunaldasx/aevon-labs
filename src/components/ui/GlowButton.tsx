"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface GlowButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: ReactNode;
}

export default function GlowButton({
  children,
  onClick,
  href,
  variant = "primary",
  size = "md",
  className,
  icon,
}: GlowButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-primary to-secondary text-white shadow-glow-primary hover:shadow-glow-secondary",
    secondary:
      "bg-gradient-to-r from-secondary to-accent text-white shadow-glow-secondary hover:shadow-glow-accent",
    outline:
      "bg-transparent border border-primary/40 text-primary hover:bg-primary/10 hover:border-primary/60",
    ghost:
      "bg-transparent text-foreground-muted hover:text-foreground hover:bg-surface",
  };

  const classes = cn(
    "relative inline-flex items-center justify-center gap-2.5 rounded-xl font-semibold transition-all duration-300 cursor-pointer",
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  const content = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.96 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.96 }}
    >
      {content}
    </motion.button>
  );
}
