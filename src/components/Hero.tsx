"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
	ArrowRight,
	ChevronDown,
	Rocket,
	Sparkles,
	MousePointer2,
} from "lucide-react";

const STATS = [
	{ value: "150+", label: "Projects Delivered" },
	{ value: "98%", label: "Client Satisfaction" },
	{ value: "5+", label: "Years Experience" },
	{ value: "40+", label: "Happy Clients" },
];

const FLOATING = [
	{ label: "Next.js & React", x: "8%", y: "28%", delay: 0.2, rotate: -4 },
	{ label: "AI-Powered Apps", x: "76%", y: "18%", delay: 0.5, rotate: 3 },
	{ label: "Global Clients", x: "80%", y: "66%", delay: 0.8, rotate: -2 },
];

const stagger = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
	hidden: { opacity: 0, y: 24 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
	},
};

export default function Hero() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const resize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};
		resize();
		window.addEventListener("resize", resize);

		type Particle = {
			x: number;
			y: number;
			vx: number;
			vy: number;
			r: number;
			o: number;
			hue: number;
		};
		const particles: Particle[] = Array.from({ length: 90 }, () => ({
			x: Math.random() * canvas.width,
			y: Math.random() * canvas.height,
			vx: (Math.random() - 0.5) * 0.35,
			vy: (Math.random() - 0.5) * 0.35,
			r: Math.random() * 1.8 + 0.4,
			o: Math.random() * 0.45 + 0.08,
			hue: Math.random() > 0.6 ? 239 : Math.random() > 0.5 ? 262 : 190,
		}));

		let raf: number;
		const draw = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			for (const p of particles) {
				p.x = (p.x + p.vx + canvas.width) % canvas.width;
				p.y = (p.y + p.vy + canvas.height) % canvas.height;
				ctx.beginPath();
				ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
				ctx.fillStyle = `hsla(${p.hue},70%,65%,${p.o})`;
				ctx.fill();
			}
			for (let i = 0; i < particles.length; i++) {
				for (let j = i + 1; j < particles.length; j++) {
					const dx = particles[i].x - particles[j].x;
					const dy = particles[i].y - particles[j].y;
					const d = Math.sqrt(dx * dx + dy * dy);
					if (d < 130) {
						ctx.beginPath();
						ctx.moveTo(particles[i].x, particles[i].y);
						ctx.lineTo(particles[j].x, particles[j].y);
						ctx.strokeStyle = `rgba(99,102,241,${0.13 * (1 - d / 130)})`;
						ctx.lineWidth = 0.6;
						ctx.stroke();
					}
				}
			}
			raf = requestAnimationFrame(draw);
		};
		draw();
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("resize", resize);
		};
	}, []);

	return (
		<section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background mt-8 md:mt-12">
			{/* Canvas */}
			<canvas
				ref={canvasRef}
				className="absolute inset-0 pointer-events-none"
				style={{ opacity: 0.55 }}
			/>

			{/* Grid */}
			<div
				className="absolute inset-0 pointer-events-none"
				style={{
					backgroundImage:
						"linear-gradient(rgba(99,102,241,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.045) 1px, transparent 1px)",
					backgroundSize: "64px 64px",
				}}
			/>

			{/* Glow orbs */}
			<div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-primary/7 blur-[180px] pointer-events-none" />
			<div className="absolute top-1/2 left-[15%] w-[500px] h-[500px] rounded-full bg-secondary/5 blur-[140px] pointer-events-none" />
			<div className="absolute bottom-[15%] right-[10%] w-[420px] h-[420px] rounded-full bg-accent/4 blur-[120px] pointer-events-none" />

			{/* Floating badges */}
			{FLOATING.map((f) => (
				<motion.div
					key={f.label}
					className="absolute hidden xl:flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium text-foreground-muted"
					style={{
						left: f.x,
						top: f.y,
						background: "rgba(18,18,30,0.75)",
						backdropFilter: "blur(16px)",
						border: "1px solid rgba(99,102,241,0.2)",
						rotate: `${f.rotate}deg`,
					}}
					initial={{ opacity: 0, scale: 0.7, y: 20 }}
					animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
					transition={{
						opacity: { delay: 1.2 + f.delay, duration: 0.5 },
						scale: { delay: 1.2 + f.delay, duration: 0.5 },
						y: {
							delay: 1.2 + f.delay,
							duration: 4.5,
							repeat: Infinity,
							ease: "easeInOut",
						},
					}}
				>
					<Sparkles className="w-3 h-3 text-primary" />
					{f.label}
				</motion.div>
			))}

			{/* Main content */}
			<motion.div
				variants={stagger}
				initial="hidden"
				animate="visible"
				className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-7 pt-20"
			>
				{/* Badge */}
				<motion.div variants={fadeUp}>
					<div
						className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest"
						style={{
							background: "rgba(99,102,241,0.1)",
							border: "1px solid rgba(99,102,241,0.3)",
							color: "#818cf8",
						}}
					>
						<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
						Premium Software Development Agency
						<span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
					</div>
				</motion.div>

				{/* Headline */}
				<motion.div variants={fadeUp} className="flex flex-col gap-1.5">
					<h1 className="text-5xl sm:text-7xl md:text-8xl font-black leading-[1.02] tracking-tight text-foreground">
						We Build
					</h1>
					<h1
						className="text-5xl sm:text-7xl md:text-8xl font-black leading-[1.02] tracking-tight"
						style={{
							background:
								"linear-gradient(135deg, #6366f1 0%, #8b5cf6 45%, #06b6d4 100%)",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
							backgroundClip: "text",
						}}
					>
						Digital Excellence.
					</h1>
				</motion.div>

				{/* Subtitle */}
				<motion.p
					variants={fadeUp}
					className="text-foreground-muted text-lg sm:text-xl max-w-2xl leading-relaxed"
				>
					Aevon is a premium software agency crafting high-performance web apps,
					mobile solutions, AI agents, and enterprise-grade software that drives
					real business results.
				</motion.p>

				{/* CTAs */}
				<motion.div
					variants={fadeUp}
					className="flex flex-col sm:flex-row items-center gap-4"
				>
					<motion.button
						onClick={() =>
							document
								.querySelector("#contact")
								?.scrollIntoView({ behavior: "smooth" })
						}
						whileHover={{ scale: 1.05, y: -2 }}
						whileTap={{ scale: 0.96 }}
						className="group flex items-center gap-2.5 px-8 py-4 rounded-2xl text-base font-bold text-white"
						style={{
							background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
							boxShadow:
								"0 0 30px rgba(99,102,241,0.5), 0 4px 20px rgba(0,0,0,0.3)",
						}}
					>
						<Rocket className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
						Start Your Project
					</motion.button>
					<motion.button
						onClick={() =>
							document
								.querySelector("#services")
								?.scrollIntoView({ behavior: "smooth" })
						}
						whileHover={{ scale: 1.04, y: -1 }}
						whileTap={{ scale: 0.96 }}
						className="group flex items-center gap-2.5 px-8 py-4 rounded-2xl text-base font-bold text-foreground-muted hover:text-foreground transition-colors duration-200"
						style={{
							border: "1px solid rgba(99,102,241,0.3)",
							background: "rgba(99,102,241,0.06)",
						}}
					>
						Explore Services
						<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
					</motion.button>
				</motion.div>

				{/* Stats */}
				<motion.div
					variants={fadeUp}
					className="w-full flex flex-wrap justify-center gap-4 sm:gap-0 sm:grid sm:grid-cols-4 pt-6"
					style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
				>
					{STATS.map((s, i) => (
						<div
							key={s.label}
							className={cn(
								"flex flex-col items-center gap-1 py-4 sm:px-6",
								i < STATS.length - 1 && "sm:border-r sm:border-white/[0.05]",
							)}
						>
							<span
								className="text-3xl font-black"
								style={{
									background:
										"linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
									backgroundClip: "text",
								}}
							>
								{s.value}
							</span>
							<span className="text-xs text-foreground-muted/60 tracking-wide font-medium">
								{s.label}
							</span>
						</div>
					))}
				</motion.div>

				{/* Trusted by strip */}
				<motion.div
					variants={fadeUp}
					className="flex items-center gap-3 text-foreground-muted/40"
				>
					<MousePointer2 className="w-3.5 h-3.5" />
					<span className="text-xs tracking-widest uppercase font-medium">
						Trusted by 40+ companies worldwide
					</span>
					<MousePointer2 className="w-3.5 h-3.5" />
				</motion.div>
			</motion.div>

			{/* Scroll indicator */}
			<motion.button
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.8, duration: 0.6 }}
				onClick={() =>
					document
						.querySelector("#services")
						?.scrollIntoView({ behavior: "smooth" })
				}
				className="absolute bottom-8 left-1/2 -translate-x-1/2 group flex flex-col items-center gap-2"
			>
				<span className="text-[10px] uppercase tracking-[0.2em] text-foreground-muted/30 group-hover:text-foreground-muted/60 transition-colors">
					Scroll
				</span>
				<div className="w-5 h-8 rounded-full border border-foreground-muted/20 group-hover:border-primary/40 flex items-start justify-center pt-1.5 transition-colors">
					<motion.div
						animate={{ y: [0, 10, 0] }}
						transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
						className="w-1 h-1.5 rounded-full bg-foreground-muted/40 group-hover:bg-primary transition-colors"
					/>
				</div>
			</motion.button>
		</section>
	);
}

function cn(...classes: (string | boolean | undefined)[]) {
	return classes.filter(Boolean).join(" ");
}
