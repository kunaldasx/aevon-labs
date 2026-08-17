"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { Project, PROJECTS } from "@/lib/projects";
import ProjectCard from "./ui/ProjectCard";
import ProjectModal from "./ui/ProjectModal";

const AUTO_SLIDE_DELAY = 3000;
const SLIDE_DURATION = 0.7;

export default function Projects({ showAll = false }: { showAll?: boolean }) {
	const [activeProject, setActiveProject] = useState<Project | null>(null);
	const [currentIndex, setCurrentIndex] = useState(PROJECTS.length);
	const [isPaused, setIsPaused] = useState(false);
	const [cardOffset, setCardOffset] = useState(0);
	const [isResetting, setIsResetting] = useState(false);

	const cardRef = useRef<HTMLDivElement>(null);
	const carouselRef = useRef<HTMLDivElement>(null);

	const [cardWidth, setCardWidth] = useState(0);
	const [carouselWidth, setCarouselWidth] = useState(0);

	const projectCount = PROJECTS.length;

	const carouselProjects = [...PROJECTS, ...PROJECTS, ...PROJECTS];

	/*
	 * Calculate the actual distance between cards.
	 * This keeps the carousel accurate across breakpoints.
	 */
	useEffect(() => {
		const updateDimensions = () => {
			if (!cardRef.current || !carouselRef.current) return;

			const cardWidth = cardRef.current.offsetWidth;
			const carouselWidth = carouselRef.current.clientWidth;
			const gap = 20;

			setCardWidth(cardWidth);
			setCarouselWidth(carouselWidth);
			setCardOffset(cardWidth + gap);
		};

		updateDimensions();

		const resizeObserver = new ResizeObserver(updateDimensions);

		if (carouselRef.current) {
			resizeObserver.observe(carouselRef.current);
		}

		if (cardRef.current) {
			resizeObserver.observe(cardRef.current);
		}

		return () => {
			resizeObserver.disconnect();
		};
	}, []);

	/*
	 * Auto-slide.
	 */
	useEffect(() => {
		if (projectCount <= 1 || isPaused || !cardOffset || isResetting) {
			return;
		}

		const timer = setTimeout(() => {
			setCurrentIndex((prev) => prev + 1);
		}, AUTO_SLIDE_DELAY);

		return () => clearTimeout(timer);
	}, [currentIndex, isPaused, cardOffset, projectCount, isResetting]);

	const handleAnimationComplete = () => {
		if (currentIndex >= projectCount * 2) {
			setIsResetting(true);
			setCurrentIndex(projectCount);

			requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					setIsResetting(false);
				});
			});

			return;
		}

		if (currentIndex < projectCount) {
			setIsResetting(true);
			setCurrentIndex(projectCount + currentIndex);

			requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					setIsResetting(false);
				});
			});
		}
	};

	const goNext = () => {
		if (projectCount <= 1) return;

		setIsPaused(true);
		setCurrentIndex((prev) => prev + 1);

		// Resume auto-slide after the interaction.
		window.setTimeout(() => {
			setIsPaused(false);
		}, AUTO_SLIDE_DELAY);
	};

	const goPrevious = () => {
		if (projectCount <= 1) return;

		setIsPaused(true);
		setCurrentIndex((prev) => prev - 1);

		window.setTimeout(() => {
			setIsPaused(false);
		}, AUTO_SLIDE_DELAY);
	};

	const goToProject = (index: number) => {
		setIsPaused(true);
		setCurrentIndex(projectCount + index);

		window.setTimeout(() => {
			setIsPaused(false);
		}, AUTO_SLIDE_DELAY);
	};

	/*
	 * Convert the actual carousel index back to the logical
	 * project index for the pagination dots.
	 */
	const activeDot =
		(((currentIndex - projectCount) % projectCount) + projectCount) %
		projectCount;

	if (!projectCount) {
		return null;
	}

	const centerOffset = (carouselWidth - cardWidth) / 2;

	return (
		<section id="projects" className="relative overflow-hidden py-28">
			<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-surface/20 to-background" />

			<div
				className="absolute left-0 right-0 top-0 h-px"
				style={{
					background:
						"linear-gradient(to right, transparent, rgba(99,102,241,0.25), transparent)",
				}}
			/>

			<div className="pointer-events-none absolute right-0 top-1/4 h-[520px] w-[520px] rounded-full bg-secondary/7 blur-[140px]" />

			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<SectionHeader
					badge={showAll ? "Full Portfolio" : "Featured Work"}
					title="Selected"
					highlight={showAll ? "Case Studies." : "Projects."}
					description={
						showAll
							? "Every project in our collection, shown with the same signature polish and results-driven thinking."
							: "A concise selection of recent work, with immersive previews and a fast path to explore every case study."
					}
				/>

				{/* Carousel */}
				<div
					className="relative mt-16"
					onMouseEnter={() => setIsPaused(true)}
					onMouseLeave={() => setIsPaused(false)}
				>
					{/* Left fade */}
					<div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-background to-transparent sm:w-24" />

					{/* Right fade */}
					<div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent sm:w-24" />

					{/* Previous Button */}
					<button
						type="button"
						onClick={goPrevious}
						aria-label="Previous project"
						className="hidden absolute left-2 top-1/2 z-20 md:flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border/60 bg-background/80 text-foreground backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-primary/50 hover:bg-background sm:left-4"
					>
						<ChevronLeft className="h-5 w-5" />
					</button>

					{/* Next Button */}
					<button
						type="button"
						onClick={goNext}
						aria-label="Next project"
						className="hidden absolute right-2 top-1/2 z-20 md:flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border/60 bg-background/80 text-foreground backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-primary/50 hover:bg-background sm:right-4"
					>
						<ChevronRight className="h-5 w-5" />
					</button>
					{/* Track */}
					<div ref={carouselRef} className="overflow-hidden">
						<motion.div
							className="flex gap-5"
							animate={{
								x: centerOffset - currentIndex * cardOffset,
							}}
							transition={{
								duration: isResetting ? 0 : SLIDE_DURATION,
								ease: [0.22, 1, 0.36, 1],
							}}
							onAnimationComplete={handleAnimationComplete}
						>
							{carouselProjects.map((project, index) => (
								<div
									key={`${project.id}-${index}`}
									ref={index === 0 ? cardRef : undefined}
									className="w-[300px] shrink-0 sm:w-[400px] lg:w-[500px]"
								>
									<ProjectCard
										project={project}
										onOpen={() => setActiveProject(project)}
									/>
								</div>
							))}
						</motion.div>
					</div>
				</div>

				{/* Pagination */}
				<div className="mt-8 flex items-center justify-center gap-2">
					{PROJECTS.map((project, index) => {
						const isActive = index === activeDot;

						return (
							<button
								key={project.id}
								type="button"
								onClick={() => goToProject(index)}
								aria-label={`Go to ${project.title}`}
								aria-current={isActive ? "true" : undefined}
								className="group flex h-4 items-center justify-center"
							>
								<motion.span
									initial={false}
									animate={{
										width: isActive ? 48 : 8,
										opacity: isActive ? 1 : 0.35,
									}}
									transition={{
										duration: 0.3,
										ease: [0.22, 1, 0.36, 1],
									}}
									className="block h-2 rounded-full bg-primary"
								/>
							</button>
						);
					})}
				</div>
			</div>

			<AnimatePresence>
				{activeProject && (
					<ProjectModal
						project={activeProject}
						onClose={() => setActiveProject(null)}
					/>
				)}
			</AnimatePresence>
		</section>
	);
}
