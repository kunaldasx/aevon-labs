"use client";

import { useState } from "react";
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
	ArrowUpRight,
	ChevronDown,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const SERVICES = [
	{
		icon: Smartphone,
		title: "App Development",
		description:
			"Native-quality iOS & Android apps with React Native and Expo. Buttery-smooth UX, offline-ready, App Store prepared.",
		color: "from-violet-500 to-indigo-600",
		glow: "rgba(139,92,246,0.3)",
		tag: "Mobile",
	},
	{
		icon: Globe,
		title: "Web Development",
		description:
			"High-performance web apps built on Next.js and React. SSR, ISR, edge-ready — optimized for speed, SEO, and scale.",
		color: "from-indigo-500 to-blue-600",
		glow: "rgba(99,102,241,0.3)",
		tag: "Frontend",
	},
	{
		icon: Server,
		title: "Backend & APIs",
		description:
			"Robust REST and GraphQL APIs, microservices, message queues, and cloud-native architecture built to handle serious load.",
		color: "from-cyan-500 to-indigo-500",
		glow: "rgba(6,182,212,0.3)",
		tag: "Backend",
	},
	{
		icon: Brain,
		title: "AI Agents",
		description:
			"Autonomous GPT-4 and Claude-powered agents that reason, plan, and execute complex multi-step workflows without human hand-holding.",
		color: "from-purple-500 to-pink-600",
		glow: "rgba(168,85,247,0.35)",
		tag: "AI",
		featured: true,
	},
	{
		icon: MessageSquare,
		title: "Chatbots",
		description:
			"Conversational AI trained on your docs, FAQs, and CRM data — deployed on web, WhatsApp, Slack, or wherever your users are.",
		color: "from-emerald-500 to-cyan-500",
		glow: "rgba(16,185,129,0.3)",
		tag: "AI",
	},
	{
		icon: Database,
		title: "Database Solutions",
		description:
			"Schema design, query optimization, and data modeling. We pick the right tool — Postgres, Mongo, Redis, or DynamoDB.",
		color: "from-amber-500 to-orange-600",
		glow: "rgba(245,158,11,0.3)",
		tag: "Backend",
	},
	{
		icon: Bug,
		title: "Bug Solving",
		description:
			"Deep debugging for production issues, memory leaks, race conditions, and elusive intermittent failures. We find and fix what others miss.",
		color: "from-red-500 to-rose-600",
		glow: "rgba(239,68,68,0.3)",
		tag: "Support",
	},
	{
		icon: Rocket,
		title: "Deployment",
		description:
			"CI/CD pipelines, containerization, blue-green deploys, and zero-downtime rollouts on AWS, Vercel, Railway, or GCP.",
		color: "from-indigo-500 to-violet-600",
		glow: "rgba(99,102,241,0.3)",
		tag: "DevOps",
	},
	{
		icon: Wrench,
		title: "Software Maintenance",
		description:
			"Keep your existing software healthy — monitoring, security patches, dependency upgrades, performance tuning, and incremental refactors.",
		color: "from-slate-400 to-slate-600",
		glow: "rgba(100,116,139,0.25)",
		tag: "Support",
	},
	{
		icon: Search,
		title: "SEO Optimization",
		description:
			"Technical SEO, Core Web Vitals, structured data, and on-page optimization that translates to real organic traffic growth.",
		color: "from-green-500 to-emerald-600",
		glow: "rgba(34,197,94,0.3)",
		tag: "Marketing",
	},
	{
		icon: Layers,
		title: "Figma Design",
		description:
			"Complete UI/UX systems — from user flows and wireframes to polished Figma files developers can build from without guesswork.",
		color: "from-pink-500 to-rose-500",
		glow: "rgba(236,72,153,0.3)",
		tag: "Design",
	},
	{
		icon: Layout,
		title: "WordPress",
		description:
			"Custom themes, advanced custom fields, WooCommerce stores, and headless WordPress powering a modern React or Next.js front-end.",
		color: "from-blue-500 to-cyan-500",
		glow: "rgba(59,130,246,0.3)",
		tag: "CMS",
	},
	{
		icon: ShoppingBag,
		title: "Shopify",
		description:
			"Bespoke Shopify storefronts, custom Liquid sections, app integrations, and conversion-optimized checkout flows.",
		color: "from-green-600 to-teal-500",
		glow: "rgba(22,163,74,0.3)",
		tag: "Commerce",
	},
];

const INITIAL_VISIBLE = 6;

const container = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.055 } },
};

const card = {
	hidden: { opacity: 0, y: 36, scale: 0.96 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
	},
};

const extraCard = {
	hidden: { opacity: 0, y: 28, scale: 0.95 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.45,
			ease: [0.22, 1, 0.36, 1] as const,
			delay: i * 0.06,
		},
	}),
	exit: {
		opacity: 0,
		y: 16,
		scale: 0.96,
		transition: { duration: 0.25, ease: [0.4, 0, 1, 1] as const },
	},
};

function ServiceCard({
	svc,
	hovered,
	setHovered,
}: {
	svc: (typeof SERVICES)[number];
	hovered: string | null;
	setHovered: (v: string | null) => void;
}) {
	const isHovered = hovered === svc.title;
	return (
		<motion.div
			onHoverStart={() => setHovered(svc.title)}
			onHoverEnd={() => setHovered(null)}
			whileHover={{ y: -8, scale: 1.02 }}
			transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
			className={cn(
				"group relative rounded-2xl p-5 cursor-default overflow-hidden",
				"border transition-all duration-300",
				svc.featured && "lg:col-span-1",
			)}
			style={{
				background: isHovered ? "rgba(18,18,30,0.95)" : "rgba(15,15,24,0.75)",
				borderColor: isHovered
					? svc.glow
							.replace("0.3", "0.6")
							.replace("0.35", "0.6")
							.replace("0.25", "0.5")
					: "rgba(255,255,255,0.05)",
				boxShadow: isHovered
					? `0 20px 60px rgba(0,0,0,0.5), 0 0 40px ${svc.glow}`
					: "none",
			}}
		>
			{/* Glow layer */}
			<AnimatePresence>
				{isHovered && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.25 }}
						className="absolute inset-0 pointer-events-none rounded-2xl"
						style={{
							background: `radial-gradient(circle at 40% 0%, ${svc.glow.replace("0.3", "0.18").replace("0.35", "0.18").replace("0.25", "0.12")}, transparent 65%)`,
						}}
					/>
				)}
			</AnimatePresence>

			{/* Tag */}
			<div className="flex items-start justify-between mb-4">
				<div
					className={cn(
						"w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br",
						svc.color,
						"transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3",
					)}
					style={{ boxShadow: isHovered ? `0 8px 24px ${svc.glow}` : "none" }}
				>
					<svc.icon className="w-5 h-5 text-white" />
				</div>
				<span
					className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full"
					style={{
						background: "rgba(255,255,255,0.04)",
						color: "rgba(255,255,255,0.3)",
						border: "1px solid rgba(255,255,255,0.06)",
					}}
				>
					{svc.tag}
				</span>
			</div>

			<h3 className="text-[15px] font-bold text-foreground mb-2 group-hover:text-white transition-colors duration-200">
				{svc.title}
			</h3>
			<p className="text-[13px] text-foreground-muted leading-relaxed">
				{svc.description}
			</p>

			{/* Hover arrow */}
			<motion.div
				initial={{ opacity: 0, x: -6 }}
				animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -6 }}
				transition={{ duration: 0.2 }}
				className="flex items-center gap-1 mt-4 text-xs font-semibold"
				style={{
					color: svc.glow
						.replace("rgba(", "rgba(")
						.replace(", 0.", ", 1.")
						.replace(",0.", ",1."),
				}}
			>
				<span>Learn more</span>
				<ArrowUpRight className="w-3.5 h-3.5" />
			</motion.div>
		</motion.div>
	);
}

export default function Services() {
	const [hovered, setHovered] = useState<string | null>(null);
	const [expanded, setExpanded] = useState(false);

	const visibleServices = SERVICES.slice(0, INITIAL_VISIBLE);
	const extraServices = SERVICES.slice(INITIAL_VISIBLE);
	const remaining = extraServices.length;

	return (
		<section id="services" className="relative py-28 overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-b from-background via-surface/25 to-background pointer-events-none" />
			<div
				className="absolute inset-0 pointer-events-none"
				style={{
					backgroundImage:
						"radial-gradient(circle, rgba(99,102,241,0.12) 1px, transparent 1px)",
					backgroundSize: "44px 44px",
					opacity: 0.35,
				}}
			/>
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full bg-primary/4 blur-[180px] pointer-events-none" />

			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHeader
					badge="What We Do"
					title="Every Service You"
					highlight="Ever Need."
					description="From a single landing page to complex enterprise platforms — we deliver across the full spectrum of modern software development."
				/>

				{/* Always-visible cards */}
				<motion.div
					variants={container}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-60px" }}
					className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5"
				>
					{visibleServices.map((svc) => (
						<motion.div key={svc.title} variants={card}>
							<ServiceCard
								svc={svc}
								hovered={hovered}
								setHovered={setHovered}
							/>
						</motion.div>
					))}

					{/* Expanded cards animate in/out inside the same grid */}
					<AnimatePresence>
						{expanded &&
							extraServices.map((svc, i) => (
								<motion.div
									key={svc.title}
									custom={i}
									variants={extraCard}
									initial="hidden"
									animate="visible"
									exit="exit"
								>
									<ServiceCard
										svc={svc}
										hovered={hovered}
										setHovered={setHovered}
									/>
								</motion.div>
							))}
					</AnimatePresence>
				</motion.div>

				{/* View More / Show Less button */}
				<div className="mt-10 flex flex-col items-center gap-3">
					{/* Fade-out gradient hint when collapsed */}
					{!expanded && (
						<div
							className="w-full h-16 -mt-20 mb-4 pointer-events-none"
							style={{
								background:
									"linear-gradient(to bottom, transparent, var(--background, #080810))",
							}}
						/>
					)}

					<motion.button
						onClick={() => {
							if (expanded) {
								// Scroll back up to the section top before collapsing
								document
									.getElementById("services")
									?.scrollIntoView({ behavior: "smooth", block: "start" });
								setTimeout(() => setExpanded(false), 300);
							} else {
								setExpanded(true);
							}
						}}
						whileHover={{ scale: 1.04, y: -2 }}
						whileTap={{ scale: 0.97 }}
						className="group relative flex items-center gap-2.5 px-7 py-3 rounded-2xl text-sm font-semibold text-foreground overflow-hidden"
						style={{
							background: "rgba(255,255,255,0.03)",
							border: "1px solid rgba(255,255,255,0.08)",
							boxShadow: "0 0 0 0 rgba(99,102,241,0)",
							transition: "box-shadow 0.3s ease",
						}}
						onMouseEnter={(e) => {
							(e.currentTarget as HTMLButtonElement).style.boxShadow =
								"0 0 24px rgba(99,102,241,0.25)";
							(e.currentTarget as HTMLButtonElement).style.borderColor =
								"rgba(99,102,241,0.4)";
						}}
						onMouseLeave={(e) => {
							(e.currentTarget as HTMLButtonElement).style.boxShadow =
								"0 0 0 0 rgba(99,102,241,0)";
							(e.currentTarget as HTMLButtonElement).style.borderColor =
								"rgba(255,255,255,0.08)";
						}}
					>
						{/* Subtle gradient hover fill */}
						<span
							className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
							style={{
								background:
									"radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.12), transparent 70%)",
							}}
						/>

						<span className="relative z-10 text-gradient font-bold">
							{expanded ? "Show Less" : `View ${remaining} More Services`}
						</span>

						<motion.span
							className="relative z-10"
							animate={{ rotate: expanded ? 180 : 0 }}
							transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
						>
							<ChevronDown className="w-4 h-4 text-primary" />
						</motion.span>
					</motion.button>

					<p className="text-[12px] text-foreground-muted/50">
						{expanded
							? "Showing all services"
							: `${remaining} more services available`}
					</p>
				</div>
			</div>
		</section>
	);
}
