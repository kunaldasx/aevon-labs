import Link from "next/link";
import {
	ArrowLeft,
	Mail,
	ShieldCheck,
	Lock,
	Database,
	Cookie,
	UserCheck,
} from "lucide-react";

const LAST_UPDATED = "August 17, 2026";

export default function PrivacyPolicyPage() {
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
						<ShieldCheck className="h-4 w-4 text-primary" />
						<span className="text-xs font-medium uppercase tracking-[0.16em] text-white/50">
							Privacy Policy
						</span>
					</div>
				</div>
			</header>

			{/* Content */}
			<div className="relative mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 md:px-8">
				{/* Hero */}
				<div className="mb-12 max-w-3xl">
					<div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary/80">
						<ShieldCheck className="h-3.5 w-3.5" />
						Your privacy matters
					</div>

					<h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
						Privacy Policy
					</h1>

					<p className="mt-5 text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
						This Privacy Policy explains how AEVON collects, uses, stores, and
						protects personal information when you visit our website, contact
						us, or use our services.
					</p>

					<p className="mt-4 text-xs text-white/30">
						Last updated: {LAST_UPDATED}
					</p>
				</div>

				{/* Quick summary */}
				<div className="mb-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
					<InfoCard
						icon={Database}
						title="What we collect"
						description="Information you provide and limited technical data."
					/>

					<InfoCard
						icon={Lock}
						title="How we protect it"
						description="Reasonable technical and organizational safeguards."
					/>

					<InfoCard
						icon={UserCheck}
						title="Your choices"
						description="You can request access, correction, or deletion."
					/>

					<InfoCard
						icon={Cookie}
						title="Cookies"
						description="We use cookies and similar technologies where applicable."
					/>
				</div>

				{/* Policy */}
				<div className="space-y-10">
					<PolicySection number="01" title="Who we are">
						<p>
							AEVON is a software development agency that designs and builds
							websites, web applications, mobile applications, backend systems,
							AI solutions, and related digital products.
						</p>

						<p>
							In this policy, “AEVON”, “we”, “us”, and “our” refer to AEVON.
							“You” refers to the person visiting our website or communicating
							with us.
						</p>
					</PolicySection>

					<PolicySection number="02" title="Information we collect">
						<p>
							We collect information that you voluntarily provide to us and
							limited information that is automatically generated when you use
							our website.
						</p>

						<h3>Information you provide</h3>

						<ul>
							<li>Name and contact information</li>
							<li>Email address and phone number</li>
							<li>Company or organization details</li>
							<li>Project requirements and descriptions</li>
							<li>Selected project budget or service preferences</li>
							<li>Any other information you voluntarily submit to us</li>
						</ul>

						<h3>Information collected automatically</h3>

						<ul>
							<li>IP address and approximate location</li>
							<li>Browser and device information</li>
							<li>Operating system and screen information</li>
							<li>Pages visited and general interaction data</li>
							<li>Referrer information</li>
							<li>Technical logs required for security and operation</li>
						</ul>
					</PolicySection>

					<PolicySection number="03" title="How we use your information">
						<p>
							We use collected information only for legitimate business and
							operational purposes, including:
						</p>

						<ul>
							<li>Responding to enquiries and project requests</li>
							<li>Understanding your project requirements</li>
							<li>Preparing proposals, estimates, and quotations</li>
							<li>Communicating about services or ongoing projects</li>
							<li>Providing and improving our website and services</li>
							<li>Maintaining website security and preventing abuse</li>
							<li>Diagnosing technical problems and improving performance</li>
							<li>Meeting applicable legal or regulatory obligations</li>
						</ul>

						<p>We do not sell your personal information to third parties.</p>
					</PolicySection>

					<PolicySection number="04" title="Legal basis and consent">
						<p>
							Depending on the nature of the interaction and applicable law, we
							may process personal information based on your consent, your
							request to take steps before entering into a contract, performance
							of a contractual relationship, legal obligations, or other lawful
							purposes.
						</p>

						<p>
							Where consent is required, we will seek it in an appropriate and
							understandable manner. You may withdraw consent where applicable,
							although this does not affect processing that was lawful before
							withdrawal.
						</p>

						<p>
							For users in India, our privacy practices are intended to operate
							consistently with applicable Indian data-protection requirements,
							including the Digital Personal Data Protection framework, as and
							when applicable to our processing activities.
						</p>
					</PolicySection>

					<PolicySection number="05" title="How we share information">
						<p>
							We may share personal information with trusted service providers
							when reasonably necessary to operate our business. Examples may
							include:
						</p>

						<ul>
							<li>Hosting and cloud infrastructure providers</li>
							<li>Email and communication providers</li>
							<li>Analytics and monitoring providers</li>
							<li>Payment providers where applicable</li>
							<li>Security and fraud-prevention services</li>
							<li>Professional advisers or legal authorities where required</li>
						</ul>

						<p>
							We require service providers handling personal information on our
							behalf to use it only for appropriate purposes and to apply
							reasonable security measures.
						</p>
					</PolicySection>

					<PolicySection number="06" title="Data retention">
						<p>
							We retain personal information only for as long as reasonably
							necessary for the purpose for which it was collected, including
							contractual, operational, security, accounting, and legal
							requirements.
						</p>

						<p>
							When information is no longer required, we may securely delete,
							anonymize, or otherwise dispose of it, subject to legal and
							legitimate business requirements.
						</p>
					</PolicySection>

					<PolicySection number="07" title="Data security">
						<p>
							We take reasonable technical and organizational measures to
							protect personal information against unauthorized access,
							disclosure, alteration, loss, or destruction.
						</p>

						<p>
							Depending on the system involved, these measures may include
							access controls, encryption, secure authentication, logging,
							monitoring, backups, and restricted administrative access.
						</p>

						<p>
							However, no internet transmission or storage system can be
							guaranteed to be completely secure.
						</p>
					</PolicySection>

					<PolicySection number="08" title="Cookies and similar technologies">
						<p>
							Our website may use cookies, local storage, analytics tools, and
							similar technologies to maintain functionality, understand usage,
							improve performance, and protect our services.
						</p>

						<p>
							You can control cookies through your browser settings. Disabling
							certain cookies may affect some website features.
						</p>
					</PolicySection>

					<PolicySection number="09" title="Third-party websites and services">
						<p>
							Our website may contain links to third-party websites, including
							social media platforms, project demonstrations, or external
							services.
						</p>

						<p>
							AEVON is not responsible for the privacy practices, content, or
							security of third-party websites. We recommend reviewing the
							privacy policy of any external service you visit.
						</p>
					</PolicySection>

					<PolicySection number="10" title="Your privacy rights">
						<p>
							Depending on applicable law, you may have rights relating to your
							personal information, including the ability to:
						</p>

						<ul>
							<li>Request access to personal information we hold about you</li>
							<li>Request correction of inaccurate information</li>
							<li>Request deletion where legally permitted</li>
							<li>Withdraw consent where processing is based on consent</li>
							<li>Request information about how your data is processed</li>
							<li>
								Raise a complaint regarding our handling of your information
							</li>
						</ul>

						<p>
							To exercise a right, contact us using the details provided below.
							We may need to verify your identity before processing certain
							requests.
						</p>
					</PolicySection>

					<PolicySection number="11" title="Children's privacy">
						<p>
							Our website and services are not intentionally directed toward
							children. We do not knowingly request personal information from
							children except where permitted and appropriately authorized under
							applicable law.
						</p>

						<p>
							If you believe that a child has provided personal information to
							us improperly, please contact us so that we can review and take
							appropriate action.
						</p>
					</PolicySection>

					<PolicySection number="12" title="International data transfers">
						<p>
							AEVON may use cloud infrastructure and third-party service
							providers that operate in countries other than your own. Where
							personal information is transferred across borders, we will take
							steps required by applicable law and appropriate contractual or
							technical safeguards.
						</p>
					</PolicySection>

					<PolicySection number="13" title="Changes to this policy">
						<p>
							We may update this Privacy Policy when our services, data
							practices, or applicable legal requirements change.
						</p>

						<p>
							When we make material changes, we will update the “Last updated”
							date at the top of this page and, where appropriate, provide
							additional notice.
						</p>
					</PolicySection>

					<PolicySection number="14" title="Contact us">
						<div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-6">
							<div className="flex items-start gap-4">
								<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
									<Mail className="h-5 w-5" />
								</div>

								<div>
									<h3 className="text-sm font-semibold text-white">
										Privacy enquiries
									</h3>

									<p className="mt-1 text-sm leading-6 text-white/50">
										If you have questions, requests, or concerns about this
										Privacy Policy or how we handle your information, contact us
										at:
									</p>

									<a
										href={`mailto:${process.env.NEXT_PUBLIC_SUPPORT_EMAIL}`}
										className="mt-3 inline-block text-sm font-medium text-primary transition hover:text-primary/80"
									>
										{process.env.NEXT_PUBLIC_SUPPORT_EMAIL}
									</a>
								</div>
							</div>
						</div>
					</PolicySection>
				</div>

				{/* Footer */}
				<div className="mt-16 border-t border-white/10 pt-8">
					<div className="flex flex-col gap-4 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
						<p>© {new Date().getFullYear()} AEVON. All rights reserved.</p>

						<Link href="/" className="transition hover:text-white/60">
							Back to website
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
}

/* -------------------------------------------------------------------------- */
/* Components                                                                 */
/* -------------------------------------------------------------------------- */

function PolicySection({
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

					<div className="mt-5 space-y-5 text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
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
