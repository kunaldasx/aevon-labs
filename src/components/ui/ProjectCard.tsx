"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Monitor } from "lucide-react";
import { Project } from "@/lib/projects";
import Image from "next/image";

interface ProjectCardProps {
	project: Project;
	onOpen: () => void;
}

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
	return (
		<motion.button
			type="button"
			onClick={onOpen}
			initial="rest"
			whileHover="hover"
			animate="rest"
			className="group relative aspect-[16/9] w-full overflow-hidden rounded-[24px] border border-white/10 bg-surface text-left"
		>
			{/* Background image */}
			<motion.div className="absolute inset-0">
				<Image
					src={project.banner}
					alt={project.title}
					height={500}
					width={500}
					priority
					quality={100}
					className="h-full w-full object-cover"
				/>
			</motion.div>

			{/* Showcase badge */}
			<div className="absolute left-4 top-4 z-10 sm:left-5 sm:top-5">
				<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.18em] text-white/75 backdrop-blur-md">
					<Monitor className="h-3 w-3 text-primary" />
					Live UI Showcase
				</div>
			</div>

			{/* Content */}
			<div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
				{/* Bottom readability gradient */}
				<div
					className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
					style={{
						background:
							"linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.65) 45%, transparent 100%)",
					}}
				/>

				{/* Hover readability overlay */}
				<div className="pointer-events-none absolute inset-x-0 bottom-0 h-52 bg-black/70 opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100" />

				{/* Hover details */}
				<motion.div
					variants={{
						rest: {
							opacity: 0,
							y: 8,
						},
						hover: {
							opacity: 1,
							y: 0,
						},
					}}
					transition={{
						duration: 0.25,
						ease: [0.22, 1, 0.36, 1],
					}}
					className="absolute bottom-[72px] left-4 right-4 pointer-events-none sm:bottom-[90px] sm:left-5 sm:right-5"
				>
					<p className="mb-2 line-clamp-2 text-[10px] font-medium uppercase leading-4 tracking-[0.16em] text-white/70">
						{project.subtitle}
					</p>

					<p className="line-clamp-2 text-xs leading-5 text-white/80">
						{project.description}
					</p>

					<div className="mt-3 flex flex-wrap gap-1.5">
						{project.tags.slice(0, 4).map((tag) => (
							<span
								key={tag}
								className="rounded-full border border-white/15 bg-black/40 px-2 py-1 text-[9px] text-white/80 backdrop-blur-sm"
							>
								{tag}
							</span>
						))}
					</div>
				</motion.div>

				{/* Title */}
				<h3 className="relative z-10 text-xl font-bold tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] sm:text-2xl">
					{project.title}
				</h3>

				{/* Action */}
				<div className="relative z-10 mt-3 flex items-center justify-between">
					<span className="text-xs font-semibold text-primary drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] sm:text-sm">
						View details
					</span>

					<motion.div
						variants={{
							rest: {
								x: 0,
								opacity: 0.7,
							},
							hover: {
								x: 4,
								opacity: 1,
							},
						}}
						transition={{ duration: 0.2 }}
					>
						<ArrowUpRight className="h-4 w-4 text-primary drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] sm:h-5 sm:w-5" />
					</motion.div>
				</div>
			</div>
		</motion.button>
	);
}
