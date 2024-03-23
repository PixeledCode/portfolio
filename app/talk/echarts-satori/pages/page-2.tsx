import { Spinner } from '../components'

export const Page2 = () => {
	return (
		<div className="pt-12 md:pt-24">
			<h1 className="font-semibold text-2xl md:text-6xl max-w-[834px]">
				Sharing custom charts on the fly using Satori
			</h1>
			<p className="font-medium text-3xl text-muted mt-8">Shoaib Ahmed</p>
			<a
				target="_blank"
				rel="noreferrer"
				href="https://twitter.com/pixeledcode"
				className="inline-block text-accent text-2xl mt-3"
			>
				@pixeledcode
			</a>

			<p className="mt-20 text-2xl text-muted">
				ReactJS Bangalore, April 6, 2024
			</p>
			<p className="mt-20 font-semibold text-4xl">
				Hi, I’m Shoaib. <br />
				Senior Frontend Engineer @CivicDataLab
			</p>
			<p className="mt-6 text-2xl text-muted">
				my love for biryani is as infinite as this loader
			</p>
			<div className="mt-2">
				<Spinner size={32} />
			</div>
		</div>
	)
}
