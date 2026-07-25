import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050508",
        surface: "#0d0d14",
        card: "#12121e",
        "card-hover": "#1a1a2e",
        border: "rgba(99,102,241,0.18)",
        primary: {
          DEFAULT: "#6366f1",
          hover: "#818cf8",
          glow: "rgba(99,102,241,0.4)",
        },
        secondary: {
          DEFAULT: "#8b5cf6",
          glow: "rgba(139,92,246,0.4)",
        },
        accent: {
          DEFAULT: "#06b6d4",
          glow: "rgba(6,182,212,0.4)",
        },
        muted: "#64748b",
        foreground: "#f1f5f9",
        "foreground-muted": "#94a3b8",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "grid-pattern":
          "linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "60px 60px",
      },
      animation: {
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "spin-slow": "spin 8s linear infinite",
        "border-glow": "borderGlow 3s ease-in-out infinite",
        "gradient-shift": "gradientShift 6s ease infinite",
      },
      keyframes: {
        glowPulse: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        borderGlow: {
          "0%, 100%": { borderColor: "rgba(99,102,241,0.3)" },
          "50%": { borderColor: "rgba(139,92,246,0.6)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      boxShadow: {
        "glow-primary": "0 0 30px rgba(99,102,241,0.35), 0 0 60px rgba(99,102,241,0.15)",
        "glow-secondary": "0 0 30px rgba(139,92,246,0.35), 0 0 60px rgba(139,92,246,0.15)",
        "glow-accent": "0 0 30px rgba(6,182,212,0.35), 0 0 60px rgba(6,182,212,0.15)",
        "card-hover": "0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(99,102,241,0.2)",
        "inner-glow": "inset 0 1px 0 rgba(255,255,255,0.05)",
      },
      dropShadow: {
        "glow": "0 0 20px rgba(99,102,241,0.5)",
        "glow-lg": "0 0 40px rgba(99,102,241,0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
