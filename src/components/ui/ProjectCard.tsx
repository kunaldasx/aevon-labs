import { Project, PROJECTS } from "@/lib/projects";
import { ArrowRight, Monitor } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectCard({
	project,
	onOpen,
}: {
	project: Project;
	onOpen: () => void;
}) {
	return (
		<motion.button
			onClick={onOpen}
			whileHover={{ y: -6 }}
			transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
			className="group relative text-left rounded-[32px] overflow-hidden border border-white/10 bg-card/90 shadow-card-hover"
			style={{ minHeight: 420 }}
		>
			<div
				className="relative h-56 overflow-hidden"
				style={{
					backgroundImage: `url(${project.banner})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="absolute inset-0 bg-black/30" />
				<div className="absolute inset-x-0 bottom-0 px-6 pb-6">
					<span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/80 backdrop-blur-xl border border-white/10">
						<Monitor className="w-3.5 h-3.5 text-primary" />
						Live UI Showcase
					</span>
				</div>
			</div>

			<div className="relative flex h-full flex-col justify-between p-6 bg-gradient-to-b from-card/95 via-card/90 to-card/100">
				<div>
					<div className="mb-3 text-xs uppercase tracking-[0.24em] text-foreground-muted">
						{project.subtitle}
					</div>
					<h3 className="text-2xl font-bold text-foreground mb-3">
						{project.title}
					</h3>
					<p className="text-sm leading-6 text-foreground-muted">
						{project.description}
					</p>
				</div>

				<div className="mt-6 flex flex-wrap gap-2">
					{project.tags.slice(0, 4).map((tag) => (
						<span
							key={tag}
							className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-foreground-muted bg-white/5"
						>
							{tag}
						</span>
					))}
				</div>

				<div className="mt-8 flex items-center justify-between gap-3">
					<span className="text-sm font-semibold text-primary">
						View details
					</span>
					<ArrowRight className="w-4 h-4 text-primary transition-transform duration-300 group-hover:translate-x-1" />
				</div>
			</div>
		</motion.button>
	);
}
