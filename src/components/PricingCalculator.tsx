"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	Smartphone,
	Globe,
	Server,
	Brain,
	MessageSquare,
	Database,
	Bug,
	Rocket,
	Wrench,
	Search,
	Layers,
	Layout,
	ShoppingBag,
	CheckCircle2,
	Circle,
	Zap,
	Clock,
	Shield,
	ChevronRight,
	Sparkles,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const SERVICES = [
	{
		id: "app",
		icon: Smartphone,
		label: "App Development",
		desc: "iOS & Android",
		base: 3500,
		color: "from-violet-500 to-indigo-500",
	},
	{
		id: "web",
		icon: Globe,
		label: "Web Development",
		desc: "React / Next.js",
		base: 2500,
		color: "from-indigo-500 to-blue-500",
	},
	{
		id: "backend",
		icon: Server,
		label: "Backend & APIs",
		desc: "Node / Python",
		base: 2000,
		color: "from-cyan-500 to-indigo-500",
	},
	{
		id: "ai",
		icon: Brain,
		label: "AI Agents",
		desc: "GPT-4 / Claude",
		base: 5000,
		color: "from-purple-500 to-pink-500",
	},
	{
		id: "chatbot",
		icon: MessageSquare,
		label: "Chatbots",
		desc: "Custom trained",
		base: 2500,
		color: "from-emerald-500 to-cyan-500",
	},
	{
		id: "database",
		icon: Database,
		label: "Database Design",
		desc: "Schema + queries",
		base: 1500,
		color: "from-amber-500 to-orange-500",
	},
	{
		id: "bugs",
		icon: Bug,
		label: "Bug Solving",
		desc: "Debug & fix",
		base: 800,
		color: "from-red-500 to-rose-500",
	},
	{
		id: "deploy",
		icon: Rocket,
		label: "Deployment",
		desc: "CI/CD & cloud",
		base: 1000,
		color: "from-indigo-500 to-violet-500",
	},
	{
		id: "maint",
		icon: Wrench,
		label: "Maintenance",
		desc: "Ongoing support",
		base: 1200,
		color: "from-slate-400 to-slate-600",
	},
	{
		id: "seo",
		icon: Search,
		label: "SEO",
		desc: "Technical + on-page",
		base: 1000,
		color: "from-green-500 to-emerald-500",
	},
	{
		id: "figma",
		icon: Layers,
		label: "Figma Design",
		desc: "UI/UX & systems",
		base: 1500,
		color: "from-pink-500 to-rose-500",
	},
	{
		id: "wp",
		icon: Layout,
		label: "WordPress",
		desc: "Themes + plugins",
		base: 1500,
		color: "from-blue-500 to-cyan-500",
	},
	{
		id: "shopify",
		icon: ShoppingBag,
		label: "Shopify",
		desc: "Custom stores",
		base: 2000,
		color: "from-green-600 to-teal-500",
	},
];

const COMPLEXITY = [
	{
		id: "basic",
		label: "Basic",
		sub: "Simple, minimal features",
		mult: 1,
		desc: "Perfect for MVPs",
	},
	{
		id: "standard",
		label: "Standard",
		sub: "Custom features included",
		mult: 1.5,
		desc: "Most popular",
	},
	{
		id: "advanced",
		label: "Advanced",
		sub: "Complex integrations",
		mult: 2.5,
		desc: "Enterprise-ready",
	},
	{
		id: "enterprise",
		label: "Enterprise",
		sub: "Full-scale platform",
		mult: 4,
		desc: "Mission-critical",
	},
];

const TIMELINES = [
	{
		id: "rush",
		label: "Rush",
		sub: "1–2 weeks",
		modifier: 1.35,
		icon: Zap,
		color: "text-red-400",
	},
	{
		id: "fast",
		label: "Fast",
		sub: "2–4 weeks",
		modifier: 1.15,
		icon: Clock,
		color: "text-amber-400",
	},
	{
		id: "normal",
		label: "Standard",
		sub: "1–3 months",
		modifier: 1,
		icon: Clock,
		color: "text-green-400",
	},
	{
		id: "relaxed",
		label: "Relaxed",
		sub: "3+ months",
		modifier: 0.9,
		icon: Clock,
		color: "text-blue-400",
	},
];

function AnimatedPrice({ value }: { value: number }) {
	const [displayed, setDisplayed] = useState(value);
	const prevRef = useRef(value);

	useEffect(() => {
		const from = prevRef.current;
		const to = value;
		prevRef.current = value;
		if (from === to) return;

		const start = performance.now();
		const duration = 600;

		const animate = (now: number) => {
			const t = Math.min((now - start) / duration, 1);
			const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
			setDisplayed(Math.round(from + (to - from) * eased));
			if (t < 1) requestAnimationFrame(animate);
		};
		requestAnimationFrame(animate);
	}, [value]);

	return <span>{displayed.toLocaleString()}</span>;
}

export default function PricingCalculator() {
	const [selected, setSelected] = useState<Set<string>>(new Set());
	const [complexity, setComplexity] = useState("standard");
	const [timeline, setTimeline] = useState("normal");
	const [support, setSupport] = useState(false);

	const toggleService = (id: string) => {
		setSelected((prev) => {
			const next = new Set(prev);
			next.has(id) ? next.delete(id) : next.add(id);
			return next;
		});
	};

	const selectedServices = SERVICES.filter((s) => selected.has(s.id));
	const baseTotal = selectedServices.reduce((sum, s) => sum + s.base, 0);
	const complexMult = COMPLEXITY.find((c) => c.id === complexity)?.mult ?? 1;
	const timelineMult = TIMELINES.find((t) => t.id === timeline)?.modifier ?? 1;
	const supportAddon = support ? 0.2 : 0;
	const total = Math.round(
		baseTotal * complexMult * timelineMult * (1 + supportAddon),
	);

	const scrollToContact = () => {
		document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<section id="pricing" className="relative py-28 overflow-hidden">
			{/* Background */}
			<div className="absolute inset-0 bg-gradient-to-b from-background via-surface/30 to-background pointer-events-none" />
			<div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-primary/5 blur-[160px] pointer-events-none" />
			<div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-secondary/4 blur-[130px] pointer-events-none" />

			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHeader
					badge="Pricing Calculator"
					title="Estimate Your"
					highlight="Project Cost."
					description="Select the services you need, set your complexity and timeline, and get an instant ballpark estimate — no forms, no waiting."
				/>

				<div className="mt-16 grid lg:grid-cols-[1fr_340px] gap-6 items-start">
					{/* ─── LEFT PANEL ─── */}
					<div className="flex flex-col gap-5">
						{/* Service Selection */}
						<div className="glass-card rounded-2xl p-6 border border-border">
							<h3 className="text-sm font-semibold text-foreground mb-1">
								Select Services
							</h3>
							<p className="text-xs text-foreground-muted mb-5">
								Choose everything you need — prices are additive
							</p>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
								{SERVICES.map((svc) => {
									const isSelected = selected.has(svc.id);
									return (
										<motion.button
											key={svc.id}
											onClick={() => toggleService(svc.id)}
											whileHover={{ scale: 1.02, y: -1 }}
											whileTap={{ scale: 0.98 }}
											className={cn(
												"relative flex items-center gap-3.5 px-4 py-3.5 rounded-xl border text-left transition-all duration-200 group overflow-hidden",
												isSelected
													? "border-primary/60 bg-primary/8"
													: "border-border bg-surface/40 hover:border-primary/30 hover:bg-surface/70",
											)}
										>
											{/* Selected glow */}
											{isSelected && (
												<div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-transparent pointer-events-none" />
											)}

											{/* Icon */}
											<div
												className={cn(
													"w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200",
													isSelected
														? `bg-gradient-to-br ${svc.color}`
														: "bg-surface border border-border group-hover:border-primary/30",
												)}
											>
												<svc.icon
													className={cn(
														"w-4 h-4",
														isSelected ? "text-white" : "text-foreground-muted",
													)}
												/>
											</div>

											{/* Labels */}
											<div className="flex-1 min-w-0">
												<div
													className={cn(
														"text-sm font-medium leading-tight",
														isSelected
															? "text-foreground"
															: "text-foreground-muted",
													)}
												>
													{svc.label}
												</div>
												<div className="text-[11px] text-foreground-muted/60 mt-0.5">
													{svc.desc}
												</div>
											</div>

											{/* Price + check */}
											<div className="flex flex-col items-end gap-1 flex-shrink-0">
												<div
													className={cn(
														"text-xs font-semibold",
														isSelected
															? "text-primary"
															: "text-foreground-muted/50",
													)}
												>
													₹{svc.base.toLocaleString()}
												</div>
												<AnimatePresence>
													{isSelected ? (
														<motion.div
															initial={{ scale: 0, opacity: 0 }}
															animate={{ scale: 1, opacity: 1 }}
															exit={{ scale: 0, opacity: 0 }}
															transition={{
																duration: 0.2,
																type: "spring",
																stiffness: 400,
															}}
														>
															<CheckCircle2 className="w-3.5 h-3.5 text-primary" />
														</motion.div>
													) : (
														<Circle className="w-3.5 h-3.5 text-border" />
													)}
												</AnimatePresence>
											</div>
										</motion.button>
									);
								})}
							</div>
							{selected.size > 0 && (
								<motion.button
									initial={{ opacity: 0, y: 5 }}
									animate={{ opacity: 1, y: 0 }}
									onClick={() => setSelected(new Set())}
									className="mt-4 text-xs text-foreground-muted/50 hover:text-foreground-muted transition-colors underline underline-offset-2"
								>
									Clear all selections
								</motion.button>
							)}
						</div>

						{/* Complexity */}
						<div className="glass-card rounded-2xl p-6 border border-border">
							<h3 className="text-sm font-semibold text-foreground mb-1">
								Project Complexity
							</h3>
							<p className="text-xs text-foreground-muted mb-5">
								Higher complexity means more custom engineering work
							</p>
							<div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
								{COMPLEXITY.map((c) => {
									const active = complexity === c.id;
									return (
										<motion.button
											key={c.id}
											onClick={() => setComplexity(c.id)}
											whileHover={{ y: -2 }}
											whileTap={{ scale: 0.97 }}
											className={cn(
												"relative flex flex-col items-center gap-1 py-4 px-3 rounded-xl border text-center transition-all duration-200 overflow-hidden",
												active
													? "border-primary bg-primary/10"
													: "border-border bg-surface/40 hover:border-primary/30",
											)}
										>
											{active && (
												<div className="absolute inset-0 bg-gradient-to-b from-primary/15 to-transparent pointer-events-none" />
											)}
											{c.id === "standard" && !active && (
												<div className="absolute top-2 right-2">
													<span className="text-[9px] font-bold text-primary/60 uppercase tracking-wider">
														Popular
													</span>
												</div>
											)}
											<span
												className={cn(
													"text-sm font-bold",
													active ? "text-primary" : "text-foreground-muted",
												)}
											>
												{c.label}
											</span>
											<span className="text-[10px] text-foreground-muted/60 leading-tight">
												{c.sub}
											</span>
											<span
												className={cn(
													"mt-1 text-[11px] font-semibold px-2 py-0.5 rounded-full",
													active
														? "bg-primary/20 text-primary"
														: "bg-surface text-foreground-muted/50",
												)}
											>
												×{c.mult}
											</span>
										</motion.button>
									);
								})}
							</div>
						</div>

						{/* Timeline */}
						<div className="glass-card rounded-2xl p-6 border border-border">
							<h3 className="text-sm font-semibold text-foreground mb-1">
								Delivery Timeline
							</h3>
							<p className="text-xs text-foreground-muted mb-5">
								Faster timelines require dedicated resources
							</p>
							<div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
								{TIMELINES.map((t) => {
									const active = timeline === t.id;
									const isRush = t.id === "rush";
									const isPremium = t.modifier > 1;
									return (
										<motion.button
											key={t.id}
											onClick={() => setTimeline(t.id)}
											whileHover={{ y: -2 }}
											whileTap={{ scale: 0.97 }}
											className={cn(
												"relative flex flex-col items-center gap-2 py-4 px-3 rounded-xl border text-center transition-all duration-200 overflow-hidden",
												active
													? "border-primary bg-primary/10"
													: "border-border bg-surface/40 hover:border-primary/30",
												isRush && "border-red-500/20",
											)}
										>
											{active && (
												<div className="absolute inset-0 bg-gradient-to-b from-primary/15 to-transparent pointer-events-none" />
											)}
											<t.icon
												className={cn(
													"w-4 h-4",
													active ? "text-primary" : t.color,
													"opacity-80",
												)}
											/>
											<span
												className={cn(
													"text-sm font-bold",
													active ? "text-primary" : "text-foreground-muted",
												)}
											>
												{t.label}
											</span>
											<span className="text-[10px] text-foreground-muted/60">
												{t.sub}
											</span>
											{isPremium && (
												<span
													className={cn(
														"text-[10px] font-semibold px-1.5 py-0.5 rounded-full",
														active
															? "bg-red-500/20 text-red-400"
															: "bg-surface text-red-400/50",
													)}
												>
													+{Math.round((t.modifier - 1) * 100)}% rush
												</span>
											)}
											{t.modifier < 1 && (
												<span
													className={cn(
														"text-[10px] font-semibold px-1.5 py-0.5 rounded-full",
														active
															? "bg-green-500/20 text-green-400"
															: "bg-surface text-green-400/50",
													)}
												>
													-{Math.round((1 - t.modifier) * 100)}% off
												</span>
											)}
										</motion.button>
									);
								})}
							</div>
						</div>

						{/* Add-ons */}
						<div className="glass-card rounded-2xl p-6 border border-border">
							<h3 className="text-sm font-semibold text-foreground mb-5">
								Add-ons
							</h3>
							<motion.button
								onClick={() => setSupport(!support)}
								whileHover={{ scale: 1.01 }}
								whileTap={{ scale: 0.99 }}
								className={cn(
									"w-full flex items-center gap-4 p-4 rounded-xl border transition-all duration-200",
									support
										? "border-primary/60 bg-primary/8"
										: "border-border bg-surface/40 hover:border-primary/30",
								)}
							>
								<div
									className={cn(
										"w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all",
										support
											? "bg-gradient-to-br from-primary to-secondary"
											: "bg-surface border border-border",
									)}
								>
									<Shield
										className={cn(
											"w-5 h-5",
											support ? "text-white" : "text-foreground-muted",
										)}
									/>
								</div>
								<div className="flex-1 text-left">
									<div
										className={cn(
											"text-sm font-semibold",
											support ? "text-foreground" : "text-foreground-muted",
										)}
									>
										Priority Support & SLA
									</div>
									<div className="text-xs text-foreground-muted/60 mt-0.5">
										Dedicated engineer, 24/7 monitoring, guaranteed response
										times
									</div>
								</div>
								<div className="flex flex-col items-end gap-1 flex-shrink-0">
									<span
										className={cn(
											"text-xs font-semibold",
											support ? "text-primary" : "text-foreground-muted/50",
										)}
									>
										+20%
									</span>
									<div
										className={cn(
											"w-10 h-5 rounded-full transition-all duration-300 relative",
											support
												? "bg-primary"
												: "bg-surface border border-border",
										)}
									>
										<motion.div
											animate={{ x: support ? 20 : 2 }}
											transition={{
												type: "spring",
												stiffness: 500,
												damping: 30,
											}}
											className="absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm"
										/>
									</div>
								</div>
							</motion.button>
						</div>
					</div>

					{/* ─── RIGHT PANEL: Sticky estimate ─── */}
					<div className="lg:sticky lg:top-28">
						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
							className="glass-card rounded-2xl border border-primary/15 overflow-hidden"
						>
							{/* Header */}
							<div className="p-5 border-b border-border bg-gradient-to-r from-primary/8 to-secondary/5">
								<div className="flex items-center gap-3 mb-1">
									<div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
										<Sparkles className="w-4 h-4 text-white" />
									</div>
									<div>
										<h3 className="text-sm font-bold text-foreground">
											Your Estimate
										</h3>
										<p className="text-[11px] text-foreground-muted">
											Based on your selections
										</p>
									</div>
								</div>
							</div>

							{/* Breakdown */}
							<div className="p-5 flex flex-col gap-3">
								{/* Selected services list */}
								<div className="flex flex-col gap-1.5 min-h-[60px]">
									<span className="text-[10px] uppercase tracking-widest text-foreground-muted/50 font-semibold">
										Selected Services
									</span>
									<AnimatePresence mode="popLayout">
										{selectedServices.length === 0 ? (
											<motion.span
												initial={{ opacity: 0 }}
												animate={{ opacity: 1 }}
												exit={{ opacity: 0 }}
												className="text-xs text-foreground-muted/40 italic"
											>
												No services selected yet
											</motion.span>
										) : (
											selectedServices.map((s) => (
												<motion.div
													key={s.id}
													layout
													initial={{ opacity: 0, height: 0 }}
													animate={{ opacity: 1, height: "auto" }}
													exit={{ opacity: 0, height: 0 }}
													className="flex items-center justify-between"
												>
													<span className="text-xs text-foreground-muted flex items-center gap-1.5">
														<s.icon className="w-3 h-3 text-primary/60" />
														{s.label}
													</span>
													<span className="text-xs font-medium text-foreground-muted/70">
														₹{s.base.toLocaleString()}
													</span>
												</motion.div>
											))
										)}
									</AnimatePresence>
								</div>

								<div className="h-px bg-border" />

								{/* Modifiers */}
								<div className="flex flex-col gap-2.5">
									<div className="flex items-center justify-between">
										<span className="text-xs text-foreground-muted">
											Complexity
										</span>
										<span className="text-xs font-semibold text-foreground">
											{COMPLEXITY.find((c) => c.id === complexity)?.label} ×
											{COMPLEXITY.find((c) => c.id === complexity)?.mult}
										</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-xs text-foreground-muted">
											Timeline
										</span>
										<span className="text-xs font-semibold text-foreground">
											{TIMELINES.find((t) => t.id === timeline)?.label} —{" "}
											{TIMELINES.find((t) => t.id === timeline)?.sub}
										</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-xs text-foreground-muted">
											Priority Support
										</span>
										<span
											className={cn(
												"text-xs font-semibold",
												support ? "text-primary" : "text-foreground-muted/50",
											)}
										>
											{support ? "+20%" : "Not included"}
										</span>
									</div>
								</div>

								<div className="h-px bg-border" />

								{/* Total */}
								<div className="flex flex-col gap-1 pt-1">
									<span className="text-[10px] uppercase tracking-widest text-foreground-muted/50 font-semibold">
										Estimated Investment
									</span>
									<div className="flex items-end gap-1">
										<span className="text-4xl font-bold text-gradient leading-none">
											₹<AnimatedPrice value={total} />
										</span>
										{selected.size > 0 && (
											<span className="text-xs text-foreground-muted/50 mb-1">
												INR
											</span>
										)}
									</div>
									<p className="text-[11px] text-foreground-muted/50 leading-relaxed">
										*Starting estimate. Final quote based on full requirements.
									</p>
								</div>

								{/* CTA */}
								<motion.button
									onClick={scrollToContact}
									whileHover={{ scale: 1.02, y: -2 }}
									whileTap={{ scale: 0.98 }}
									className="mt-2 w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold shadow-glow-primary hover:shadow-glow-secondary transition-all duration-300"
								>
									Get Detailed Quote
									<ChevronRight className="w-4 h-4" />
								</motion.button>

								<p className="text-[11px] text-foreground-muted/40 text-center leading-relaxed">
									Free consultation · No commitment
								</p>
							</div>
						</motion.div>

						{/* Trust badges below estimate card */}
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.3, duration: 0.5 }}
							className="mt-4 grid grid-cols-3 gap-2"
						>
							{[
								{ icon: Shield, label: "NDA Available" },
								{ icon: Zap, label: "2hr Response" },
								{ icon: CheckCircle2, label: "No Hidden Fees" },
							].map((badge) => (
								<div
									key={badge.label}
									className="flex flex-col items-center gap-1.5 p-3 rounded-xl border border-border bg-surface/30 text-center"
								>
									<badge.icon className="w-4 h-4 text-primary" />
									<span className="text-[10px] text-foreground-muted/60 font-medium leading-tight">
										{badge.label}
									</span>
								</div>
							))}
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}
