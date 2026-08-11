"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { Project, PROJECTS } from "@/lib/projects";
import ProjectCard from "./ui/ProjectCard";
import ProjectModal from "./ui/ProjectModal";

const container = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.08 } },
};

const card = {
	hidden: { opacity: 0, y: 24 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
	},
};

export default function Projects({ showAll = false }: { showAll?: boolean }) {
	const [activeProject, setActiveProject] = useState<Project | null>(null);
	const visibleProjects = showAll ? PROJECTS : PROJECTS.slice(0, 3);

	return (
		<section id="projects" className="relative py-28 overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-b from-background via-surface/20 to-background pointer-events-none" />
			<div
				className="absolute top-0 left-0 right-0 h-px"
				style={{
					background:
						"linear-gradient(to right, transparent, rgba(99,102,241,0.25), transparent)",
				}}
			/>
			<div className="absolute top-1/4 right-0 w-[520px] h-[520px] rounded-full bg-secondary/7 blur-[140px] pointer-events-none" />

			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

				<motion.div
					variants={container}
					initial="hidden"
					animate="visible"
					className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
				>
					{visibleProjects.map((project) => (
						<motion.div key={project.id} variants={card}>
							<ProjectCard
								project={project}
								onOpen={() => setActiveProject(project)}
							/>
						</motion.div>
					))}
				</motion.div>

				{!showAll && (
					<div className="mt-12 flex flex-col items-center justify-center gap-4 text-center">
						<p className="max-w-2xl text-sm text-foreground-muted">
							Want to see the full portfolio? Each case study dives into the
							strategy, UI details, and business outcomes.
						</p>
						<Link
							href="/projects"
							className="inline-flex items-center gap-3 rounded-3xl bg-gradient-to-r from-primary to-secondary px-8 py-4 text-sm font-bold text-white shadow-[0_20px_70px_rgba(99,102,241,0.2)] transition-transform duration-200 hover:-translate-y-1"
						>
							View More Projects <ArrowRight className="w-4 h-4" />
						</Link>
					</div>
				)}
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
