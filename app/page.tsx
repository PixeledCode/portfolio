import data from '@/content/home.json'

export default function Home() {
	return (
		<main className="min-h-screen vertical mx-auto pt-top pb-6 max-w-page">
			<div className="main-grid">
				<article className="col-start-2">
					<div>
						<h1 className="font-medium">PixeledCode</h1>
						<p className="mt-6">
							Frontend Engineer bridging the gap between design and tech at{' '}
							<Link href="https://civicdatalab.in" label="CivicDataLab" />. I
							like to build experiences that are delightful to use.
						</p>
						<p className="mt-4">
							Currently learning about animations on the web.
						</p>
					</div>

					<section className="mt-8">
						<h2 className="text-muted">Projects</h2>
						<div className="mt-2 vertical gap-4 md:gap-1">
							{data.projects.map((project) => (
								<ProjectLink key={project.title} project={project} />
							))}
						</div>
					</section>

					<section className="mt-8">
						<h2 className="text-muted">Writing</h2>
						<div className="mt-2 vertical gap-4 md:gap-1">
							{data.writings.map((writing) => (
								<ProjectLink key={writing.title} project={writing} />
							))}
						</div>
					</section>

					<blockquote className="p-4 my-6 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
						<p className="leading-relaxed">
							Good code is a love letter to the next developer who will maintain
							it
							<em className="text-sm block mt-2"> - Addy Osmani</em>
						</p>
					</blockquote>

					<section className="mt-8">
						<h2>Connect</h2>
						<p className="mt-5">
							Reach me through{' '}
							<Link href="https://twitter.com/PixeledCode" label="Twitter" />,{' '}
							<Link
								href="https://linkedin.com/in/PixeledCode"
								label="LinkedIn"
							/>
							, or <Link href="mailto:ashoaib540918@gmail.com" label="Email" />.
							My work is also available at{' '}
							<Link href="https://github.com/PixeledCode" label="Github" />,{' '}
							<Link href="https://codepen.io/pixeledcode" label="Codepen" />,
							and <Link href="https://bento.me/pixeledcode" label="Bento" />
						</p>
					</section>
				</article>
			</div>
		</main>
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
	project: { title: string; description: string; link: string }
}) => {
	return (
		<a
			className="leading-7 inline-block px-3 sm:py-3 -mx-3 hover:bg-hover rounded-md"
			target="_blank"
			rel="noreferrer"
			href={project.link}
		>
			<h3>{project.title}</h3>
			<p className="leading-7 text-muted">{project.description}</p>
		</a>
	)
}
