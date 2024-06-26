import Image from 'next/image'
import { motion } from 'framer-motion'

export const Page1 = () => {
	return (
		<section className="pt-12 md:pt-0 vertical justify-center">
			<h1 className="text-heading2 md:text-heading1 max-w-[834px]">
				Sharing custom charts on the fly using Satori
			</h1>
			<p className="w-fit text-heading3 text-light mt-8">Shoaib Ahmed</p>
			<a
				target="_blank"
				rel="noreferrer"
				href="https://twitter.com/pixeledcode"
				className="inline-block w-fit text-accent text-body2 mt-3"
			>
				@pixeledcode
			</a>

			<p className="w-fit mt-20 text-body2 text-light">
				ReactJS Bangalore, April 6, 2024
			</p>
			<motion.div
				exit={{ opacity: 0, y: -20 }}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className="w-fit self-center mt-8"
			>
				<Image
					src={'/talk.png'}
					width={240}
					height={240}
					className="hidden md:block aspect-square mx-auto"
					alt="qr code for slide deck"
				/>
			</motion.div>
		</section>
	)
}
