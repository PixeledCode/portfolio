import { motion } from 'framer-motion'

export const Layout = ({
	children,
	heading,
	description,
	animate = true,
}: {
	children: React.ReactNode
	heading: string
	description: string | React.ReactNode
	animate?: boolean
}) => {
	return (
		<section className="pt-12 md:pt-0 vertical justify-center section">
			<div>
				<h2 className="w-fit md:text-heading4 text-extra-light uppercase">
					{heading}
				</h2>

				<motion.p
					initial={{ opacity: animate ? 0 : 1 }}
					animate={{ opacity: 1 }}
					className="w-fit mt-4 md:text-body1 text-medium md:min-h-20 max-w-[834px]"
				>
					{description}
				</motion.p>
			</div>

			{children}
		</section>
	)
}
