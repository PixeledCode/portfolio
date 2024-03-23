import { Spinner } from '../components'

export const Page2 = () => {
	return (
		<div className="pt-12 md:pt-24">
			<h1 className="text-heading2 md:text-heading1 max-w-[834px]">
				Sharing custom charts on the fly using Satori
			</h1>
			<p className="text-heading3 text-light mt-8">Shoaib Ahmed</p>
			<a
				target="_blank"
				rel="noreferrer"
				href="https://twitter.com/pixeledcode"
				className="inline-block text-accent text-body2 mt-3"
			>
				@pixeledcode
			</a>

			<p className="mt-20 text-body2 text-light">
				ReactJS Bangalore, April 6, 2024
			</p>
			<p className="mt-20 text-heading2">
				Hi, I’m Shoaib. <br />
				Senior Frontend Engineer @CivicDataLab
			</p>
			<p className="mt-6 text-body2 text-light">
				my love for biryani is as infinite as this loader
			</p>
			<div className="mt-2">
				<Spinner size={32} />
			</div>
		</div>
	)
}
