"use client";

import { Project } from "@/lib/projects";
import { AnimatePresence, motion } from "framer-motion";
import {
	ChevronLeft,
	ChevronRight,
	ExternalLink,
	Sparkles,
	X,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProjectModal({
	project,
	onClose,
}: {
	project: Project;
	onClose: () => void;
}) {
	const [activeImage, setActiveImage] = useState(0);
	const [direction, setDirection] = useState(1);

	const imageCount = project.images.length;

	/*
	 * Lock background scrolling while modal is open.
	 * Also allow Escape to close the modal.
	 */
	useEffect(() => {
		const previousOverflow = document.body.style.overflow;

		document.body.style.overflow = "hidden";

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				onClose();
			}

			if (imageCount > 1 && event.key === "ArrowRight") {
				setDirection(1);
				setActiveImage((current) => (current + 1) % imageCount);
			}

			if (imageCount > 1 && event.key === "ArrowLeft") {
				setDirection(-1);
				setActiveImage((current) => (current - 1 + imageCount) % imageCount);
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			document.body.style.overflow = previousOverflow;
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [imageCount, onClose]);

	const nextImage = () => {
		if (imageCount <= 1) return;

		setDirection(1);

		setActiveImage((current) => (current + 1) % imageCount);
	};

	const previousImage = () => {
		if (imageCount <= 1) return;

		setDirection(-1);

		setActiveImage((current) => (current - 1 + imageCount) % imageCount);
	};

	const selectImage = (index: number) => {
		setDirection(index > activeImage ? 1 : -1);
		setActiveImage(index);
	};

	return (
		<motion.div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm sm:p-4 md:p-6"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.2 }}
			onMouseDown={(event) => {
				if (event.target === event.currentTarget) {
					onClose();
				}
			}}
		>
			<motion.div
				role="dialog"
				aria-modal="true"
				aria-labelledby="project-modal-title"
				className="
					relative
					flex
					h-full
					w-full
					flex-col
					overflow-hidden
					bg-[#09090f]
					sm:h-auto
					sm:max-h-[calc(100vh-2rem)]
					sm:max-w-5xl
					sm:rounded-3xl
					sm:border
					sm:border-white/10
					sm:shadow-[0_30px_120px_rgba(0,0,0,0.6)]
					md:max-h-[calc(100vh-3rem)]
				"
				initial={{
					y: 20,
					opacity: 0,
					scale: 0.98,
				}}
				animate={{
					y: 0,
					opacity: 1,
					scale: 1,
				}}
				exit={{
					y: 20,
					opacity: 0,
					scale: 0.98,
				}}
				transition={{
					duration: 0.3,
					ease: [0.22, 1, 0.36, 1],
				}}
			>
				{/* ========================================================= */}
				{/* HEADER */}
				{/* ========================================================= */}

				<header
					className="
						flex
						shrink-0
						items-start
						justify-between
						gap-4
						border-b
						border-white/10
						bg-[#09090f]/95
						px-4
						py-4
						backdrop-blur-xl
						sm:px-6
						sm:py-5
						md:px-8
					"
				>
					<div className="min-w-0 pr-2">
						<div className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-white/40">
							<Sparkles size={14} />
							<span>Project Spotlight</span>
						</div>

						<h2
							id="project-modal-title"
							className="
								text-xl
								font-semibold
								tracking-tight
								text-white
								sm:text-2xl
								md:text-3xl
							"
						>
							{project.title}
						</h2>

						<p className="mt-1.5 max-w-2xl text-sm leading-5 text-white/50 sm:leading-6">
							{project.subtitle}
						</p>
					</div>

					<button
						type="button"
						onClick={onClose}
						aria-label="Close project modal"
						className="
							flex
							h-9
							w-9
							shrink-0
							items-center
							justify-center
							rounded-full
							border
							border-white/10
							bg-white/[0.04]
							text-white/60
							transition
							hover:bg-white/10
							hover:text-white
							sm:h-10
							sm:w-10
						"
					>
						<X size={18} />
					</button>
				</header>

				{/* ========================================================= */}
				{/* SCROLLABLE CONTENT */}
				{/* ========================================================= */}

				<div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
					{/* ===================================================== */}
					{/* IMAGE GALLERY */}
					{/* ===================================================== */}

					<div className="px-3 pt-3 sm:px-6 sm:pt-6 md:px-8">
						<div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-2 sm:rounded-3xl sm:p-3">
							{/* Main image */}
							<div
								className="
									group
									relative
									aspect-[4/3]
									overflow-hidden
									rounded-xl
									bg-black/50
									sm:aspect-[16/9]
									sm:rounded-2xl
								"
							>
								<AnimatePresence initial={false} mode="wait" custom={direction}>
									<motion.div
										key={activeImage}
										custom={direction}
										className="absolute inset-0"
										initial={{
											opacity: 0,
											x: direction * 25,
										}}
										animate={{
											opacity: 1,
											x: 0,
										}}
										exit={{
											opacity: 0,
											x: direction * -25,
										}}
										transition={{
											duration: 0.22,
											ease: "easeOut",
										}}
									>
										<Image
											src={project.images[activeImage]}
											alt={`${project.title} screenshot ${activeImage + 1}`}
											fill
											priority={activeImage === 0}
											sizes="
												(max-width: 640px) 100vw,
												(max-width: 1024px) 90vw,
												1000px
											"
											className="object-cover"
										/>
									</motion.div>
								</AnimatePresence>

								{/* Desktop / touch controls */}
								{imageCount > 1 && (
									<>
										<button
											type="button"
											onClick={previousImage}
											aria-label="Previous image"
											className="
												absolute
												left-2
												top-1/2
												z-10
												flex
												h-9
												w-9
												-translate-y-1/2
												items-center
												justify-center
												rounded-full
												border
												border-white/10
												bg-black/65
												text-white
												backdrop-blur-md
												transition
												hover:bg-black/85
												sm:left-3
												sm:h-10
												sm:w-10
											"
										>
											<ChevronLeft size={18} />
										</button>

										<button
											type="button"
											onClick={nextImage}
											aria-label="Next image"
											className="
												absolute
												right-2
												top-1/2
												z-10
												flex
												h-9
												w-9
												-translate-y-1/2
												items-center
												justify-center
												rounded-full
												border
												border-white/10
												bg-black/65
												text-white
												backdrop-blur-md
												transition
												hover:bg-black/85
												sm:right-3
												sm:h-10
												sm:w-10
											"
										>
											<ChevronRight size={18} />
										</button>

										{/* Counter */}
										<div
											className="
												absolute
												bottom-2
												right-2
												z-10
												rounded-full
												border
												border-white/10
												bg-black/65
												px-2.5
												py-1
												text-[10px]
												font-medium
												text-white/80
												backdrop-blur-md
												sm:bottom-3
												sm:right-3
											"
										>
											{activeImage + 1} / {imageCount}
										</div>
									</>
								)}
							</div>

							{/* ================================================= */}
							{/* THUMBNAILS */}
							{/* ================================================= */}

							{imageCount > 1 && (
								<div
									className="
										mt-2
										overflow-x-auto
										overscroll-contain
										sm:mt-3
										pb-2
									"
								>
									<div className="flex min-w-max gap-2">
										{project.images.map((image, index) => {
											const isActive = activeImage === index;

											return (
												<button
													key={index}
													type="button"
													onClick={() => selectImage(index)}
													aria-label={`View image ${index + 1}`}
													aria-current={isActive ? "true" : undefined}
													className={`
														relative
														h-12
														w-20
														shrink-0
														overflow-hidden
														rounded-lg
														border
														transition-all
														sm:h-16
														sm:w-24
														sm:rounded-xl
														${
															isActive
																? "border-primary opacity-100 ring-1 ring-primary/40"
																: "border-transparent opacity-40 hover:border-white/20 hover:opacity-80"
														}
													`}
												>
													<Image
														src={image}
														alt=""
														fill
														sizes="96px"
														className="object-cover"
													/>

													{isActive && (
														<div className="absolute inset-0 bg-primary/10" />
													)}
												</button>
											);
										})}
									</div>
								</div>
							)}
						</div>
					</div>

					{/* ========================================================= */}
					{/* PROJECT CONTENT */}
					{/* ========================================================= */}

					<div className="grid gap-8 px-4 py-7 sm:px-6 sm:py-8 md:px-8 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-10">
						{/* Main content */}
						<div className="min-w-0">
							{/* Description */}
							<div className="mb-8">
								<h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/35">
									Overview
								</h3>

								<p className="text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
									{project.description}
								</p>
							</div>

							{/* Impact */}
							{project.impact && (
								<div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-6">
									<h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/35">
										Impact
									</h3>

									<p className="text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
										{project.impact}
									</p>
								</div>
							)}

							{/* Highlights */}
							{project.details?.length > 0 && (
								<div className="mb-8">
									<h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/35">
										Key Highlights
									</h3>

									<div className="grid gap-3 sm:grid-cols-2">
										{project.details.map((item, index) => (
											<div
												key={`${item}-${index}`}
												className="
													rounded-2xl
													border
													border-white/10
													bg-white/[0.025]
													p-4
													transition-colors
													hover:bg-white/[0.04]
												"
											>
												<div className="mb-2 flex items-center gap-2">
													<span className="text-[10px] font-semibold uppercase tracking-wider text-primary/70">
														0{index + 1}
													</span>

													<div className="h-px flex-1 bg-white/5" />
												</div>

												<p className="text-sm leading-6 text-white/65">
													{item}
												</p>
											</div>
										))}
									</div>
								</div>
							)}

							{/* Tech stack */}
							<div>
								<h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/35">
									Tech Stack
								</h3>

								<div className="flex flex-wrap gap-2">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className="
												rounded-full
												border
												border-white/10
												bg-white/[0.04]
												px-3
												py-1.5
												text-xs
												text-white/60
											"
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						</div>

						{/* ================================================= */}
						{/* SIDEBAR */}
						{/* ================================================= */}

						<aside className="lg:sticky lg:top-0 lg:self-start">
							<div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
								<h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/35">
									Project Details
								</h3>

								<div className="space-y-4">
									<div>
										<p className="mb-1 text-xs text-white/30">Category</p>

										<p className="text-sm text-white/65">{project.subtitle}</p>
									</div>

									<div>
										<p className="mb-1 text-xs text-white/30">Technologies</p>

										<p className="text-sm text-white/65">
											{project.tags.length} technologies
										</p>
									</div>

									<div>
										<p className="mb-1 text-xs text-white/30">Media</p>

										<p className="text-sm text-white/65">
											{imageCount} screenshots
										</p>
									</div>
								</div>
							</div>

							{/* Navigation hint */}
							<div className="w-full flex gap-3 mt-4">
								{project.subtitle && (
									<a
										href={project.subtitle}
										target="_blank"
										rel="noopener noreferrer"
										className="flex flex-1 items-center justify-center gap-1 rounded-xl bg-white px-4 py-3 text-sm font-medium text-black transition hover:bg-white/90"
									>
										Live Demo
										<ExternalLink size={15} />
									</a>
								)}

								{project.subtitle && (
									<a
										href={project.subtitle}
										target="_blank"
										rel="noopener noreferrer"
										className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-white transition hover:bg-white/[0.08]"
									>
										GitHub
										<ExternalLink size={15} />
									</a>
								)}
							</div>
						</aside>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
}
