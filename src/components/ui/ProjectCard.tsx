"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Monitor } from "lucide-react";
import { Project } from "@/lib/projects";

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
			className="group relative aspect-[16/12] w-full overflow-hidden rounded-[24px] border border-white/10 bg-surface text-left"
		>
			{/* Background image */}
			<motion.div
				className="absolute inset-0"
				variants={{
					rest: {
						scale: 1,
					},
					hover: {
						scale: 1.06,
					},
				}}
				transition={{
					duration: 0.6,
					ease: [0.22, 1, 0.36, 1],
				}}
			>
				<img
					src={project.banner}
					alt={project.title}
					className="h-full w-full object-cover"
				/>
			</motion.div>

			{/* Base overlay */}
			<div className="absolute inset-0 bg-black/35 transition-colors duration-500 group-hover:bg-black/65" />

			{/* Bottom gradient */}
			<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

			{/* Showcase badge */}
			<div className="absolute left-4 top-4 z-10 sm:left-5 sm:top-5">
				<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.18em] text-white/75 backdrop-blur-md">
					<Monitor className="h-3 w-3 text-primary" />
					Live UI Showcase
				</div>
			</div>

			{/* Content */}
			<div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
				{/* Subtitle */}
				<p className="mb-2 line-clamp-2 max-w-[95%] text-[10px] font-medium uppercase leading-4 tracking-[0.16em] text-white/55">
					{project.subtitle}
				</p>

				{/* Title */}
				<h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
					{project.title}
				</h3>

				{/* Hover content */}
				<motion.div
					variants={{
						rest: {
							opacity: 0,
							height: 0,
							y: 10,
						},
						hover: {
							opacity: 1,
							height: "auto",
							y: 0,
						},
					}}
					transition={{
						duration: 0.3,
						ease: [0.22, 1, 0.36, 1],
					}}
					className="overflow-hidden"
				>
					<p className="mt-2 line-clamp-2 text-xs leading-5 text-white/70">
						{project.description}
					</p>

					<div className="mt-3 flex flex-wrap gap-1.5">
						{project.tags.slice(0, 4).map((tag) => (
							<span
								key={tag}
								className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[9px] text-white/70 backdrop-blur-sm"
							>
								{tag}
							</span>
						))}
					</div>
				</motion.div>

				{/* Action */}
				<div className="mt-3 flex items-center justify-between">
					<span className="text-xs font-semibold text-primary sm:text-sm">
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
						<ArrowUpRight className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
					</motion.div>
				</div>
			</div>
		</motion.button>
	);
}
