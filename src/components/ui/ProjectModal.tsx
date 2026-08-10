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
import { useState } from "react";

export default function ProjectModal({
	project,
	onClose,
}: {
	project: Project;
	onClose: () => void;
}) {
	const [activeImage, setActiveImage] = useState(0);

	const nextImage = () => {
		setActiveImage((current) =>
			current === project.images.length - 1 ? 0 : current + 1,
		);
	};

	const previousImage = () => {
		setActiveImage((current) =>
			current === 0 ? project.images.length - 1 : current - 1,
		);
	};

	return (
		<motion.div
			className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black/85 p-4 sm:p-6"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			onClick={(event) => {
				if (event.target === event.currentTarget) {
					onClose();
				}
			}}
		>
			<motion.div
				className="relative flex max-h-[calc(100vh-3rem)] w-full max-w-6xl flex-col overflow-hidden rounded-[36px] border border-white/10 bg-[#09090f] shadow-[0_30px_120px_rgba(0,0,0,0.6)]"
				initial={{ y: 24, opacity: 0, scale: 0.98 }}
				animate={{ y: 0, opacity: 1, scale: 1 }}
				exit={{ y: 24, opacity: 0, scale: 0.98 }}
				transition={{
					duration: 0.35,
					ease: [0.22, 1, 0.36, 1],
				}}
			>
				{/* Close button */}
				<button
					type="button"
					onClick={onClose}
					className="absolute right-5 top-5 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white/70 backdrop-blur-md transition hover:bg-white/10 hover:text-white"
					aria-label="Close project modal"
				>
					<X size={18} />
				</button>

				{/* Scrollable content */}
				<div className="overflow-y-auto">
					{/* Header */}
					<div className="px-6 pb-6 pt-8 sm:px-10 sm:pt-10">
						<div className="mb-4 flex items-center gap-2 text-sm font-medium text-white/50">
							<Sparkles size={15} />
							<span>Project Spotlight</span>
						</div>

						<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
							{project.title}
						</h2>

						<p className="mt-4 max-w-3xl text-base leading-7 text-white/60">
							{project.description}
						</p>
					</div>

					{/* ========================================================= */}
					{/* IMAGE GALLERY */}
					{/* ========================================================= */}
					<div className="px-6 sm:px-10">
						<div className="rounded-[28px] border border-white/10 bg-white/[0.025] p-3 sm:p-4">
							{/* Main image */}
							<div className="group relative aspect-[16/9] overflow-hidden rounded-[22px] bg-black/40">
								<AnimatePresence mode="wait">
									<motion.div
										key={activeImage}
										className="absolute inset-0"
										initial={{ opacity: 0, x: 20 }}
										animate={{ opacity: 1, x: 0 }}
										exit={{ opacity: 0, x: -20 }}
										transition={{ duration: 0.25 }}
									>
										<Image
											src={project.images[activeImage]}
											alt={`${project.title} screenshot ${activeImage + 1}`}
											fill
											priority={activeImage === 0}
											sizes="(max-width: 768px) 100vw, 1100px"
											className="object-contain"
										/>
									</motion.div>
								</AnimatePresence>

								{/* Previous */}
								{project.images.length > 1 && (
									<button
										type="button"
										onClick={previousImage}
										className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white opacity-0 backdrop-blur-md transition-all hover:bg-black/80 group-hover:opacity-100"
										aria-label="Previous image"
									>
										<ChevronLeft size={22} />
									</button>
								)}

								{/* Next */}
								{project.images.length > 1 && (
									<button
										type="button"
										onClick={nextImage}
										className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white opacity-0 backdrop-blur-md transition-all hover:bg-black/80 group-hover:opacity-100"
										aria-label="Next image"
									>
										<ChevronRight size={22} />
									</button>
								)}

								{/* Image counter */}
								{project.images.length > 1 && (
									<div className="absolute bottom-4 right-4 z-10 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-md">
										{activeImage + 1} / {project.images.length}
									</div>
								)}
							</div>

							{/* ===================================================== */}
							{/* THUMBNAILS */}
							{/* ===================================================== */}
							{project.images.length > 1 && (
								<div className="mt-3 overflow-x-auto pb-1">
									<div className="flex min-w-max gap-3">
										{project.images.map((image, index) => {
											const isActive = activeImage === index;

											return (
												<button
													key={index}
													type="button"
													onClick={() => setActiveImage(index)}
													className={`relative h-20 w-28 shrink-0 overflow-hidden rounded-xl border-2 transition-all sm:h-24 sm:w-36 ${
														isActive
															? "border-white opacity-100"
															: "border-transparent opacity-50 hover:border-white/30 hover:opacity-80"
													}`}
													aria-label={`View image ${index + 1}`}
												>
													<Image
														src={image}
														alt={`${project.title} thumbnail ${index + 1}`}
														fill
														sizes="144px"
														className="object-cover"
													/>

													{isActive && (
														<div className="absolute inset-0 bg-white/5" />
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
					{/* PROJECT INFORMATION */}
					{/* ========================================================= */}
					<div className="grid gap-8 px-6 py-8 sm:px-10 lg:grid-cols-[1fr_320px]">
						{/* Left */}
						<div>
							{/* Impact */}
							{project.impact && (
								<div className="mb-8">
									<h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-white/40">
										Impact
									</h3>

									<p className="text-lg leading-8 text-white/70">
										{project.impact}
									</p>
								</div>
							)}

							{/* Highlights */}
							{project.details?.length > 0 && (
								<div className="mb-8">
									<h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-white/40">
										Highlights
									</h3>

									<div className="grid gap-3 sm:grid-cols-2">
										{project.details.map((item) => (
											<div
												key={item}
												className="rounded-2xl border border-white/10 bg-white/[0.025] p-4"
											>
												<p className="mb-1 text-xs font-medium uppercase tracking-wider text-white/30">
													Highlight
												</p>

												<p className="text-sm leading-6 text-white/70">
													{item}
												</p>
											</div>
										))}
									</div>
								</div>
							)}

							{/* Tech stack */}
							<div>
								<h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-white/40">
									Tech Stack
								</h3>

								<div className="flex flex-wrap gap-2">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/60"
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						</div>

						{/* Right */}
						<div className="space-y-5">
							<div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
								<p className="mb-2 text-xs font-medium uppercase tracking-wider text-white/30">
									Role
								</p>

								<p className="text-sm leading-6 text-white/70">
									Design, frontend, backend, deployment
								</p>
							</div>

							<div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
								<p className="mb-2 text-xs font-medium uppercase tracking-wider text-white/30">
									Demo Mode
								</p>

								<p className="text-sm leading-6 text-white/50">
									A polished interface built to feel fast, approachable, and
									easy to navigate.
								</p>
							</div>

							<div className="flex gap-3">
								{project.subtitle && (
									<a
										href={project.subtitle}
										target="_blank"
										rel="noopener noreferrer"
										className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-medium text-black transition hover:bg-white/90"
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
						</div>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
}
