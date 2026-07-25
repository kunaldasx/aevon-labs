"use client";

import { useState, useEffect, useRef } from "react";
import {
	motion,
	AnimatePresence,
	useScroll,
	useMotionValueEvent,
} from "framer-motion";
import { Menu, X, Zap, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
	{ label: "Services", href: "#services" },
	{ label: "About", href: "#about" },
	{ label: "Process", href: "#process" },
	{ label: "Tech", href: "#tech" },
	{ label: "Pricing", href: "#pricing" },
	{ label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [hidden, setHidden] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);
	const [activeLink, setActiveLink] = useState("");
	const lastScrollY = useRef(0);
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", (val) => {
		const prev = lastScrollY.current;
		const diff = val - prev;

		setScrolled(val > 24);

		// Only trigger hide/show after user has scrolled past the hero a bit
		if (val > 80) {
			if (diff > 4) {
				// Scrolling down — hide
				setHidden(true);
				setMobileOpen(false);
			} else if (diff < -4) {
				// Scrolling up — reveal
				setHidden(false);
			}
		} else {
			setHidden(false);
		}

		lastScrollY.current = val;
	});

	// Intersection-based active section tracking
	useEffect(() => {
		const sections = navLinks.map((l) => l.href.replace("#", ""));
		const observers: IntersectionObserver[] = [];

		sections.forEach((id) => {
			const el = document.getElementById(id);
			if (!el) return;
			const obs = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) setActiveLink(`#${id}`);
				},
				{ threshold: 0.3, rootMargin: "-80px 0px 0px 0px" },
			);
			obs.observe(el);
			observers.push(obs);
		});

		return () => observers.forEach((o) => o.disconnect());
	}, []);

	const handleNavClick = (href: string) => {
		setMobileOpen(false);
		const el = document.querySelector(href);
		el?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<>
			<motion.nav
				initial={{ y: -80, opacity: 0 }}
				animate={{ y: hidden ? "-110%" : 0, opacity: hidden ? 0 : 1 }}
				transition={{
					y: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
					opacity: { duration: 0.3 },
				}}
				className={cn(
					"fixed top-0 left-0 right-0 z-50 transition-[padding,background-color,border-color,box-shadow] duration-500",
					scrolled
						? "py-3 bg-background/70 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
						: "py-5 bg-transparent",
				)}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between">
						{/* Logo */}
						<motion.button
							className="flex items-center gap-2.5 group"
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.97 }}
							onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
						>
							<div className="relative w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center overflow-hidden">
								<div
									className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
									style={{ filter: "blur(6px)" }}
								/>
								<Zap className="relative w-4 h-4 text-white" />
							</div>
							<span className="text-xl font-black tracking-tight">
								<span className="text-gradient">AEVON</span>
							</span>
						</motion.button>

						{/* Desktop Nav */}
						<div className="hidden md:flex items-center gap-0.5 p-1.5 rounded-2xl bg-white/[0.04] border border-white/[0.06]">
							{navLinks.map((link) => {
								const active = activeLink === link.href;
								return (
									<button
										key={link.href}
										onClick={() => handleNavClick(link.href)}
										className={cn(
											"relative px-3.5 py-1.5 text-sm rounded-xl font-medium transition-all duration-200",
											active
												? "text-white"
												: "text-foreground-muted hover:text-foreground",
										)}
									>
										{active && (
											<motion.span
												layoutId="activeNavPill"
												className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 rounded-xl"
												transition={{
													type: "spring",
													bounce: 0.25,
													duration: 0.5,
												}}
											/>
										)}
										<span className="relative z-10">{link.label}</span>
									</button>
								);
							})}
						</div>

						{/* CTA */}
						<div className="hidden md:flex">
							<motion.button
								onClick={() => handleNavClick("#contact")}
								whileHover={{ scale: 1.05, y: -1 }}
								whileTap={{ scale: 0.95 }}
								className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] transition-shadow duration-300"
							>
								Let&apos;s Talk
								<ArrowUpRight className="w-3.5 h-3.5" />
							</motion.button>
						</div>

						{/* Mobile toggle */}
						<motion.button
							className="md:hidden p-2 rounded-xl border border-white/[0.08] text-foreground-muted hover:text-foreground hover:bg-white/[0.04] transition-all"
							onClick={() => setMobileOpen(!mobileOpen)}
							whileTap={{ scale: 0.9 }}
						>
							<AnimatePresence mode="wait">
								{mobileOpen ? (
									<motion.div
										key="x"
										initial={{ rotate: -90, opacity: 0 }}
										animate={{ rotate: 0, opacity: 1 }}
										exit={{ rotate: 90, opacity: 0 }}
										transition={{ duration: 0.15 }}
									>
										<X className="w-5 h-5" />
									</motion.div>
								) : (
									<motion.div
										key="menu"
										initial={{ rotate: 90, opacity: 0 }}
										animate={{ rotate: 0, opacity: 1 }}
										exit={{ rotate: -90, opacity: 0 }}
										transition={{ duration: 0.15 }}
									>
										<Menu className="w-5 h-5" />
									</motion.div>
								)}
							</AnimatePresence>
						</motion.button>
					</div>
				</div>
			</motion.nav>

			{/* Mobile menu */}
			<AnimatePresence>
				{mobileOpen && (
					<>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="fixed inset-0 z-30 bg-background/60 backdrop-blur-sm md:hidden"
							onClick={() => setMobileOpen(false)}
						/>
						<motion.div
							initial={{ opacity: 0, y: -16, scale: 0.97 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							exit={{ opacity: 0, y: -16, scale: 0.97 }}
							transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
							className="fixed top-[68px] left-4 right-4 z-40 bg-card/95 backdrop-blur-2xl rounded-2xl p-3 border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.6)] md:hidden"
						>
							<div className="flex flex-col gap-0.5">
								{navLinks.map((link, i) => (
									<motion.button
										key={link.href}
										initial={{ opacity: 0, x: -12 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: i * 0.04 }}
										onClick={() => handleNavClick(link.href)}
										className="text-left px-4 py-3 text-sm font-medium text-foreground-muted hover:text-foreground hover:bg-white/[0.04] rounded-xl transition-all duration-150"
									>
										{link.label}
									</motion.button>
								))}
								<div className="h-px bg-white/[0.06] my-1" />
								<motion.button
									initial={{ opacity: 0, x: -12 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: navLinks.length * 0.04 }}
									onClick={() => handleNavClick("#contact")}
									className="flex items-center justify-center gap-2 mx-1 py-3 text-sm font-bold rounded-xl bg-gradient-to-r from-primary to-secondary text-white"
								>
									Let&apos;s Talk <ArrowUpRight className="w-3.5 h-3.5" />
								</motion.button>
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</>
	);
}
