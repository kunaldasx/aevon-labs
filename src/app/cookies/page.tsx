import Link from "next/link";
import {
	ArrowLeft,
	BarChart3,
	Settings2,
	ShieldCheck,
	Cookie,
	Mail,
	ExternalLink,
} from "lucide-react";

const LAST_UPDATED = "August 17, 2026";

export default function CookiePolicyPage() {
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
						<Cookie className="h-4 w-4 text-primary" />
						<span className="text-xs font-medium uppercase tracking-[0.16em] text-white/50">
							Cookie Policy
						</span>
					</div>
				</div>
			</header>

			<div className="relative mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 md:px-8">
				{/* Hero */}
				<div className="mb-12 max-w-3xl">
					<div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary/80">
						<Cookie className="h-3.5 w-3.5" />
						Cookies & similar technologies
					</div>

					<h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
						Cookie Policy
					</h1>

					<p className="mt-5 text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
						This policy explains how AEVON may use cookies and similar
						technologies on our website and how you can manage them.
					</p>

					<p className="mt-4 text-xs text-white/30">
						Last updated: {LAST_UPDATED}
					</p>
				</div>

				{/* Cookie types */}
				<div className="mb-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
					<CookieCard
						icon={ShieldCheck}
						title="Essential"
						description="Required for core website functionality, security, and basic operation."
					/>

					<CookieCard
						icon={BarChart3}
						title="Analytics"
						description="May help us understand website usage and improve performance."
					/>

					<CookieCard
						icon={Settings2}
						title="Preferences"
						description="May remember choices or settings that improve your experience."
					/>
				</div>

				<div className="space-y-10">
					<CookieSection number="01" title="What are cookies?">
						<p>
							Cookies are small text files stored on your device when you visit
							a website. They allow websites to remember information about your
							visit and can help provide functionality, security, analytics, and
							personalization.
						</p>

						<p>
							We may also use similar technologies such as local storage,
							pixels, tags, or device identifiers for comparable purposes.
						</p>
					</CookieSection>

					<CookieSection number="02" title="How we use cookies">
						<p>
							Depending on the services and technologies active on our website,
							cookies may be used to:
						</p>

						<ul>
							<li>Keep the website functioning correctly</li>
							<li>Maintain security and prevent abuse</li>
							<li>Remember certain preferences</li>
							<li>Understand how visitors use our website</li>
							<li>Measure website performance</li>
							<li>Improve our content and user experience</li>
						</ul>
					</CookieSection>

					<CookieSection number="03" title="Types of cookies">
						<div className="space-y-4">
							<CookieType
								title="Strictly necessary cookies"
								description="These cookies are required for essential website functionality and security. Because the website may not function correctly without them, they generally cannot be disabled through optional cookie controls."
							/>

							<CookieType
								title="Analytics cookies"
								description="These cookies may collect aggregated information about how visitors interact with our website, such as pages viewed, approximate traffic patterns, and performance information."
							/>

							<CookieType
								title="Preference cookies"
								description="These cookies may remember choices or settings so that the website can provide a more consistent experience."
							/>

							<CookieType
								title="Marketing cookies"
								description="AEVON does not currently intend to use marketing cookies unless they are introduced for a specific purpose and appropriately disclosed or consented to where required."
							/>
						</div>
					</CookieSection>

					<CookieSection number="04" title="Third-party cookies">
						<p>
							Some third-party services integrated into our website may set
							their own cookies or similar technologies.
						</p>

						<p>
							Examples may include analytics, embedded content, security,
							communication, or other external services.
						</p>

						<p>
							These third parties may process information according to their own
							privacy policies and terms. We recommend reviewing their policies
							where relevant.
						</p>
					</CookieSection>

					<CookieSection number="05" title="Managing cookies">
						<p>
							You can control or delete cookies through your browser settings.
							Most browsers allow you to block cookies, delete existing cookies,
							or receive notifications before a cookie is stored.
						</p>

						<p>
							Blocking essential cookies may cause parts of our website to stop
							working correctly.
						</p>

						<div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-6">
							<div className="flex items-start gap-4">
								<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
									<Settings2 className="h-5 w-5" />
								</div>

								<div>
									<h3 className="text-sm font-semibold text-white">
										Browser controls
									</h3>

									<p className="mt-1 text-sm leading-6 text-white/50">
										Look for your browser's privacy, security, or cookie
										settings to manage stored cookies.
									</p>
								</div>
							</div>
						</div>
					</CookieSection>

					<CookieSection number="06" title="Cookie duration">
						<p>Cookies may be either session cookies or persistent cookies.</p>

						<p>
							Session cookies are generally removed when you close your browser.
							Persistent cookies remain on your device for a specified period or
							until they are manually deleted.
						</p>

						<p>
							The actual duration depends on the particular cookie and the
							service that sets it.
						</p>
					</CookieSection>

					<CookieSection number="07" title="Updates to this policy">
						<p>
							We may update this Cookie Policy when our website, technologies,
							services, or legal requirements change.
						</p>

						<p>
							Any changes will be reflected on this page together with an
							updated revision date.
						</p>
					</CookieSection>

					<CookieSection number="08" title="Contact us">
						<div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-6">
							<div className="flex items-start gap-4">
								<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
									<Mail className="h-5 w-5" />
								</div>

								<div>
									<h3 className="text-sm font-semibold text-white">
										Cookie questions
									</h3>

									<p className="mt-1 text-sm leading-6 text-white/50">
										If you have questions about our use of cookies or similar
										technologies, contact us at:
									</p>

									<a
										href={`mailto:${process.env.NEXT_PUBLIC_SUPPORT_EMAIL}`}
										className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition hover:text-primary/80"
									>
										{process.env.NEXT_PUBLIC_SUPPORT_EMAIL}
										<ExternalLink className="h-3.5 w-3.5" />
									</a>
								</div>
							</div>
						</div>
					</CookieSection>
				</div>

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

function CookieSection({
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

function CookieType({
	title,
	description,
}: {
	title: string;
	description: string;
}) {
	return (
		<div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
			<h3>{title}</h3>

			<p className="mt-2 text-sm leading-6 text-white/50">{description}</p>
		</div>
	);
}

function CookieCard({
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
