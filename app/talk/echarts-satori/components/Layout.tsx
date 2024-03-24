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
		<section className="pt-12 md:pt-16">
			<h2 className="text-heading4 text-extra-light uppercase">{heading}</h2>

			<p className="mt-4 text-body1 text-medium min-h-20 max-w-[834px]">
				{description}
			</p>

			{children}
		</section>
	)
}
