export interface Project {
	id: string;
	title: string;
	subtitle: string;
	description: string;
	details: string[];
	impact: string;
	tags: string[];
	banner: string;
	images: string[];
}

export const PROJECTS: Project[] = [
	{
		id: "helix-one",
		title: "Helix One",
		subtitle: "Enterprise SaaS dashboard for operations teams",
		description:
			"A unified platform for executive workflows, AI-driven insights, and real-time analytics across distributed operations.",
		details: [
			"Real-time KPI dashboards with alerting",
			"AI insights and natural language reporting",
			"Role-based secure access and SSO",
		],
		impact:
			"Launched in 8 weeks; 2.4× faster decision cycles and 99.99% uptime.",
		tags: ["Next.js", "TypeScript", "Node.js", "Prisma", "OpenAI"],
		banner:
			"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
		images: [
			"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
			"https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
		],
	},
	{
		id: "pulse-commerce",
		title: "Pulse Commerce",
		subtitle: "Conversion-first storefront for a modern retail brand",
		description:
			"High-converting e-commerce experience with fast checkout, headless CMS, and predictive product recommendations.",
		details: [
			"Optimized checkout flow with live inventory sync",
			"Headless CMS-powered marketing pages",
			"Personalized recommendations using behavior signals",
		],
		impact: "Boosted revenue by 31% and reduced cart abandonment by 18%.",
		tags: ["React", "Shopify", "GraphQL", "Stripe", "Tailwind"],
		banner:
			"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
		images: [
			"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
			"https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
		],
	},
	{
		id: "nimble-ai",
		title: "Nimble AI",
		subtitle: "Smart agent workflow for enterprise teams",
		description:
			"An AI orchestration engine that automates research, task generation, and stakeholder updates with a polished user experience.",
		details: [
			"Custom prompt templates and workflow automation",
			"Secure document indexing for context-aware responses",
			"Live activity feed and notifications for teams",
		],
		impact:
			"Saved 140+ team hours per month and reduced manual handoffs by 72%.",
		tags: ["AI", "React", "TypeScript", "LangChain", "Vector DB"],
		banner:
			"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
		images: [
			"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
			"https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
		],
	},
	{
		id: "arcade-x",
		title: "Arcade X",
		subtitle: "Brand identity and web launch for a creative studio",
		description:
			"A bold marketing site with immersive interactions, motion-led storytelling, and seamless content editing.",
		details: [
			"Animated hero experience with micro-interactions",
			"CMS-managed content for fast updates",
			"Performance-first mobile experience",
		],
		impact:
			"Reduced page weight by 38% and increased average session duration by 48%.",
		tags: ["Next.js", "React", "Contentful", "Motion UX", "Performance"],
		banner:
			"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
		images: [
			"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
			"https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
		],
	},
	{
		id: "verve-pay",
		title: "Verve Pay",
		subtitle: "Fintech experience for smart business payments",
		description:
			"Secure payments and analytics for small business teams, wrapped in a clear, modern dashboard experience.",
		details: [
			"Fast payment flows with instant validation",
			"Transaction analytics and risk alerts",
			"PCI-ready architecture with encryption",
		],
		impact:
			"Helped the client launch in 6 weeks with 23% faster payment approvals.",
		tags: ["React", "Stripe", "Node.js", "AWS", "Security"],
		banner:
			"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
		images: [
			"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
			"https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
		],
	},
];
