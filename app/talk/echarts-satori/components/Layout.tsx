export const Layout = ({
	children,
	heading,
	description,
}: {
	children: React.ReactNode
	heading: string
	description: string | React.ReactNode
}) => {
	return (
		<section className="pt-12 md:pt-16 vertical">
			<h2 className="md:text-heading4 text-extra-light uppercase">{heading}</h2>

			<p className="mt-4 md:text-body1 text-medium md:min-h-20 max-w-[834px]">
				{description}
			</p>

			{children}
		</section>
	)
}
