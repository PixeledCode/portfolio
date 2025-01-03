import data from '@/content/home.json'

export default function Home() {
	return (
		<>
			<div className="blur"></div>

			<main className="min-h-screen vertical mx-auto pt-top pb-top max-w-page px-body-margin">
				<div className="main-grid">
					<article className="col-start-2">
						<div>
							<h1 className="font-medium" data-animate>
								PixeledCode
							</h1>
							<p className="mt-1 text-light">
								Hi, I’m Shoaib, a design-friendly frontend engineer
							</p>
							<p
								className="mt-6"
								data-animate
								style={{
									'--stagger': 1,
								}}
							>
								bridging the gap between design and tech at{' '}
								<Link href="https://www.twilio.com" label="Twilio" />. I
								like to build experiences that are delightful to use.
							</p>
							<p
								className="mt-4"
								data-animate
								style={{
									'--stagger': 2,
								}}
							>
								Currently learning about animations on the web.
							</p>
						</div>

						<section
							className="mt-8"
							data-animate
							style={{
								'--stagger': 3,
							}}
						>
							<h2 className="text-medium">Projects</h2>
							<div className="mt-2 vertical gap-4 md:gap-1">
								{data.projects.map((project) => (
									<ProjectLink key={project.title} project={project} />
								))}
							</div>
						</section>

						<section
							className="mt-8"
							data-animate
							style={{
								'--stagger': 4,
							}}
						>
							<h2 className="text-medium">Writing / Decks</h2>
							<div className="mt-2 vertical gap-4 md:gap-1">
								{data.writings.map((writing) => (
									<ProjectLink key={writing.title} project={writing} />
								))}
							</div>
						</section>

						<blockquote
							data-animate
							style={{
								'--stagger': 5,
							}}
							className="p-4 my-6 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800"
						>
							<p className="leading-relaxed">
								Good code is a love letter to the next developer who will
								maintain it
								<em className="text-sm block mt-2"> - Addy Osmani</em>
							</p>
						</blockquote>

						<section
							className="mt-8"
							data-animate
							style={{
								'--stagger': 6,
							}}
						>
							<h2 className="text-medium">Connect</h2>
							<p className="mt-5">
								Reach me through{' '}
								<Link href="https://twitter.com/PixeledCode" label="Twitter" />,{' '}
								<Link
									href="https://linkedin.com/in/PixeledCode"
									label="LinkedIn"
								/>
								, or{' '}
								<Link href="mailto:ashoaib540918@gmail.com" label="Email" />. My
								work is available at{' '}
								<Link href="https://github.com/PixeledCode" label="Github" /> and <Link href="https://codepen.io/pixeledcode" label="Codepen" />
							</p>
						</section>
					</article>
				</div>
			</main>
		</>
	)
}

const Link = ({ href, label }: { href: string; label: string }) => (
	<a target="_blank" rel="noreferrer" href={href} className="accentLink">
		<span>{label}</span>
	</a>
)

const ProjectLink = ({
	project,
}: {
	project: {
		title: string
		description: string
		link: string
		external?: boolean
	}
}) => {
	return (
		<a
			className="leading-7 inline-block px-3 sm:py-3 -mx-3 hover:bg-hover rounded-md"
			target={project.external ? '_blank' : '_self'}
			rel={project.external ? 'noreferrer' : ''}
			href={project.link}
		>
			<h3 className="underline sm:no-underline decoration-muted">
				{project.title}
			</h3>
			<p className="leading-7 text-medium">{project.description}</p>
		</a>
	)
}
