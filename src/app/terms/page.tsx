import Link from "next/link";
import {
	ArrowLeft,
	ArrowUpRight,
	BriefcaseBusiness,
	CheckCircle2,
	FileText,
	Mail,
	ShieldCheck,
} from "lucide-react";

const LAST_UPDATED = "August 17, 2026";

export default function TermsPage() {
	return (
		<main className="min-h-screen bg-[#09090f] text-white">
			{/* Background */}
			<div className="pointer-events-none fixed inset-0 overflow-hidden">
				<div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-[160px]" />

				<div
					className="absolute inset-0 opacity-[0.025]"
					style={{
						backgroundImage:
							"linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)",
						backgroundSize: "64px 64px",
					}}
				/>
			</div>

			{/* Header */}
			<header className="sticky top-0 z-40 border-b border-white/10 bg-[#09090f]/90 backdrop-blur-xl">
				<div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6 md:px-8">
					<Link
						href="/"
						className="flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
					>
						<ArrowLeft className="h-4 w-4" />
						Back to AEVON
					</Link>

					<div className="flex items-center gap-2">
						<FileText className="h-4 w-4 text-primary" />
						<span className="text-xs font-medium uppercase tracking-[0.16em] text-white/50">
							Terms of Service
						</span>
					</div>
				</div>
			</header>

			<div className="relative mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 md:px-8">
				{/* Hero */}
				<div className="mb-12 max-w-3xl">
					<div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary/80">
						<FileText className="h-3.5 w-3.5" />
						Terms & conditions
					</div>

					<h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
						Terms of Service
					</h1>

					<p className="mt-5 text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
						These terms explain the rules and conditions that apply when you use
						the AEVON website, contact us, or engage us for software development
						and related services.
					</p>

					<p className="mt-4 text-xs text-white/30">
						Last updated: {LAST_UPDATED}
					</p>
				</div>

				{/* Summary cards */}
				<div className="mb-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
					<InfoCard
						icon={BriefcaseBusiness}
						title="Our services"
						description="Software design, development, AI, web, mobile, and technical services."
					/>

					<InfoCard
						icon={CheckCircle2}
						title="Project scope"
						description="Requirements, deliverables, timelines, and pricing are agreed separately."
					/>

					<InfoCard
						icon={ShieldCheck}
						title="Your responsibility"
						description="Provide accurate information, access, approvals, and required materials."
					/>

					<InfoCard
						icon={FileText}
						title="Written agreements"
						description="Specific projects may require a separate proposal, SOW, or contract."
					/>
				</div>

				<div className="space-y-10">
					<TermsSection number="01" title="Acceptance of these terms">
						<p>
							By accessing this website or engaging AEVON for services, you
							agree to these Terms of Service.
						</p>

						<p>
							If you do not agree with these terms, you should not use the
							website or engage our services.
						</p>

						<p>
							For individual projects, a signed agreement, statement of work,
							proposal, quotation, or other written agreement may contain
							additional terms. Where applicable, those project- specific terms
							will govern the relevant work.
						</p>
					</TermsSection>

					<TermsSection number="02" title="Our services">
						<p>
							AEVON provides software development and digital services, which
							may include:
						</p>

						<ul>
							<li>Website and web application development</li>
							<li>Mobile application development</li>
							<li>Backend and API development</li>
							<li>Database design and development</li>
							<li>AI agents and automation</li>
							<li>Chatbot development</li>
							<li>UI/UX and Figma design</li>
							<li>WordPress and Shopify development</li>
							<li>Deployment and infrastructure configuration</li>
							<li>Maintenance and technical support</li>
							<li>Technical SEO and related digital services</li>
						</ul>

						<p>
							The exact services provided for a project will depend on the
							agreed scope.
						</p>
					</TermsSection>

					<TermsSection number="03" title="Project scope and requirements">
						<p>
							Before development begins, we may define project requirements,
							deliverables, milestones, timelines, technologies, integrations,
							and responsibilities.
						</p>

						<p>
							Work outside the agreed scope may require additional fees, time,
							or a separate agreement.
						</p>

						<p>
							Changes to requirements after approval may affect the project
							timeline and final cost.
						</p>
					</TermsSection>

					<TermsSection number="04" title="Estimates and pricing">
						<p>
							Any prices or estimates displayed on our website are indicative
							starting estimates unless explicitly stated otherwise.
						</p>

						<p>
							Final pricing depends on the project's scope, complexity, number
							of screens or features, integrations, design requirements,
							infrastructure, third-party services, and other project-specific
							factors.
						</p>

						<p>
							A final quotation or proposal may supersede any estimate displayed
							on the website.
						</p>
					</TermsSection>

					<TermsSection number="05" title="Payments">
						<p>
							Payment terms will be communicated in the relevant proposal,
							quotation, invoice, or project agreement.
						</p>

						<p>
							Depending on the project, payments may be divided into deposits,
							milestones, development stages, or recurring fees.
						</p>

						<p>
							Work may be paused if required payments are overdue. Additional
							costs caused by prolonged delays may apply where agreed in the
							applicable project agreement.
						</p>
					</TermsSection>

					<TermsSection number="06" title="Client responsibilities">
						<p>
							Clients are responsible for providing information, content,
							credentials, approvals, assets, and access required to complete
							the project.
						</p>

						<ul>
							<li>Providing accurate project requirements</li>
							<li>Providing required content and brand assets</li>
							<li>Providing timely feedback and approvals</li>
							<li>Providing access to required third-party services</li>
							<li>Ensuring they have rights to supplied content</li>
							<li>Reviewing and approving deliverables in a timely manner</li>
						</ul>

						<p>
							Delays caused by missing information, access, approvals, or client
							dependencies may affect the delivery timeline.
						</p>
					</TermsSection>

					<TermsSection number="07" title="Intellectual property">
						<p>
							Unless otherwise agreed in writing, ownership and licensing of
							project deliverables will be determined by the applicable project
							agreement.
						</p>

						<p>
							Client-provided content, trademarks, logos, data, and other
							materials remain the property of the client or their respective
							owners.
						</p>

						<p>
							AEVON may retain ownership of pre-existing frameworks, libraries,
							reusable components, internal tools, templates, development
							processes, and general technical know-how unless otherwise agreed.
						</p>
					</TermsSection>

					<TermsSection number="08" title="Third-party services">
						<p>
							Projects may depend on third-party services such as hosting
							providers, payment gateways, cloud platforms, APIs, app stores,
							email providers, analytics services, or other external platforms.
						</p>

						<p>
							AEVON is not responsible for outages, pricing changes, policy
							changes, account restrictions, API changes, or other failures
							caused by third-party providers.
						</p>

						<p>
							Third-party fees are generally separate from AEVON's development
							fees unless explicitly included in a project agreement.
						</p>
					</TermsSection>

					<TermsSection number="09" title="Timelines and delivery">
						<p>
							Project timelines are estimates unless a specific delivery date
							has been agreed in writing.
						</p>

						<p>
							Timelines may change because of scope changes, delayed feedback,
							third-party dependencies, technical issues, availability of
							required resources, or circumstances beyond reasonable control.
						</p>
					</TermsSection>

					<TermsSection number="10" title="Testing and acceptance">
						<p>
							Clients are expected to review delivered functionality and report
							issues within a reasonable period.
						</p>

						<p>
							Where a project includes a defined testing or acceptance period,
							the applicable project agreement will specify the process and
							timeframe.
						</p>

						<p>
							Minor bugs or technical issues discovered after delivery may be
							addressed according to the agreed support or warranty terms.
						</p>
					</TermsSection>

					<TermsSection number="11" title="Maintenance and support">
						<p>
							Unless explicitly included in the project agreement, ongoing
							maintenance, hosting, monitoring, content updates, feature
							development, and support are separate services.
						</p>

						<p>
							Maintenance plans may have separate monthly or recurring fees and
							service limitations.
						</p>
					</TermsSection>

					<TermsSection number="12" title="Acceptable use">
						<p>
							You must not use our website or services for unlawful, fraudulent,
							abusive, malicious, or unauthorized purposes.
						</p>

						<p>
							You must not attempt to compromise the security, availability, or
							integrity of our website, systems, infrastructure, or third-party
							services.
						</p>
					</TermsSection>

					<TermsSection number="13" title="Confidentiality">
						<p>
							We will treat confidential project information shared with us in
							the course of a professional engagement with reasonable care.
						</p>

						<p>
							Where a project requires specific confidentiality obligations, the
							parties may enter into a separate non-disclosure agreement or
							confidentiality clause.
						</p>
					</TermsSection>

					<TermsSection number="14" title="Warranties and disclaimers">
						<p>
							We aim to provide professional services using reasonable care and
							skill.
						</p>

						<p>
							However, we do not guarantee that a website, application,
							integration, API, or other software will always be completely
							uninterrupted, error-free, or compatible with every future
							third-party platform or environment.
						</p>

						<p>
							Third-party platforms, infrastructure providers, app stores, APIs,
							and other external dependencies may affect the operation of a
							delivered system.
						</p>
					</TermsSection>

					<TermsSection number="15" title="Limitation of liability">
						<p>
							To the maximum extent permitted by applicable law, AEVON will not
							be liable for indirect, incidental, special, consequential, or
							loss-of-profit damages arising from the use of our website or
							services.
						</p>

						<p>
							Any project-specific limitation of liability, if applicable, will
							be governed by the relevant written agreement.
						</p>
					</TermsSection>

					<TermsSection number="16" title="Termination">
						<p>
							Either party may terminate a project according to the termination
							provisions of the applicable project agreement.
						</p>

						<p>
							Amounts due for completed work, approved milestones,
							non-refundable third-party costs, or other agreed obligations may
							remain payable after termination.
						</p>
					</TermsSection>

					<TermsSection number="17" title="Changes to these terms">
						<p>
							We may update these Terms of Service from time to time. The
							updated version will be published on this page with an updated
							revision date.
						</p>

						<p>
							Continued use of our website after an update indicates acceptance
							of the revised terms to the extent permitted by applicable law.
						</p>
					</TermsSection>

					<TermsSection number="18" title="Governing law">
						<p>
							These terms are intended to be governed by the applicable laws of
							India, subject to any mandatory rights or protections that cannot
							legally be excluded.
						</p>

						<p>
							Any project-specific agreement may contain additional
							jurisdiction, dispute-resolution, or governing-law provisions.
						</p>
					</TermsSection>

					<TermsSection number="19" title="Contact">
						<div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-6">
							<div className="flex items-start gap-4">
								<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
									<Mail className="h-5 w-5" />
								</div>

								<div>
									<h3 className="text-sm font-semibold text-white">
										Questions about these terms?
									</h3>

									<p className="mt-1 text-sm leading-6 text-white/50">
										For questions regarding these Terms of Service, contact
										AEVON:
									</p>

									<a
										href={`mailto:${process.env.NEXT_PUBLIC_SUPPORT_EMAIL}`}
										className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition hover:text-primary/80"
									>
										{process.env.NEXT_PUBLIC_SUPPORT_EMAIL}
										<ArrowUpRight className="h-3.5 w-3.5" />
									</a>
								</div>
							</div>
						</div>
					</TermsSection>
				</div>

				<BottomFooter />
			</div>
		</main>
	);
}

function TermsSection({
	number,
	title,
	children,
}: {
	number: string;
	title: string;
	children: React.ReactNode;
}) {
	return (
		<section className="border-t border-white/10 pt-8 sm:pt-10">
			<div className="grid gap-5 md:grid-cols-[100px_minmax(0,1fr)] md:gap-8">
				<div className="text-[10px] font-semibold tracking-[0.18em] text-primary/60">
					SECTION {number}
				</div>

				<div className="max-w-3xl">
					<h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
						{title}
					</h2>

					<div
						className="
							mt-5
							space-y-5
							text-sm
							leading-7
							text-white/60
							sm:text-base
							sm:leading-8
							[&_h3]:pt-2
							[&_h3]:text-sm
							[&_h3]:font-semibold
							[&_h3]:text-white/80
							[&_ul]:list-disc
							[&_ul]:space-y-2
							[&_ul]:pl-5
						"
					>
						{children}
					</div>
				</div>
			</div>
		</section>
	);
}

function InfoCard({
	icon: Icon,
	title,
	description,
}: {
	icon: React.ComponentType<{ className?: string }>;
	title: string;
	description: string;
}) {
	return (
		<div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
			<Icon className="h-4 w-4 text-primary/80" />

			<h3 className="mt-3 text-sm font-medium text-white">{title}</h3>

			<p className="mt-1 text-xs leading-5 text-white/35">{description}</p>
		</div>
	);
}

function BottomFooter() {
	return (
		<div className="mt-16 border-t border-white/10 pt-8">
			<div className="flex flex-col gap-4 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
				<p>© {new Date().getFullYear()} AEVON. All rights reserved.</p>

				<Link href="/" className="transition hover:text-white/60">
					Back to website
				</Link>
			</div>
		</div>
	);
}
