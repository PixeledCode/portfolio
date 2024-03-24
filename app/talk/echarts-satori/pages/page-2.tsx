import { Spinner } from '../components'
import { motion } from 'framer-motion'

export const Page2 = () => {
	return (
		<section className="pt-12 md:pt-0 vertical justify-center">
			<h1 className="text-heading3 md:text-heading1 max-w-[834px]">
				Sharing custom charts on the fly using Satori
			</h1>
			<p className="text-md md:text-heading3 text-light mt-8">Shoaib Ahmed</p>
			<a
				target="_blank"
				rel="noreferrer"
				href="https://twitter.com/pixeledcode"
				className="inline-block text-accent text-md md:text-body2 md:mt-3"
			>
				@pixeledcode
			</a>

			<p className="mt-5 md:mt-20 text-lg md:text-body2 text-light">
				ReactJS Bangalore, April 6, 2024
			</p>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className="min-h-[272px]"
			>
				<p className="mt-5 md:mt-20 text-lg md:text-heading2">
					Hi, I’m Shoaib. <br />
					Senior Frontend Engineer @CivicDataLab
				</p>
				<p className="mt-6 text-lg md:text-body2 text-light hidden md:block">
					my love for biryani is as infinite as this loader
				</p>
				<div className="mt-2 hidden md:block">
					<Spinner size={32} />
				</div>
			</motion.div>
		</section>
	)
}
