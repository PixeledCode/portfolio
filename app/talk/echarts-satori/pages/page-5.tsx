import { Layout } from '../components/Layout'

export const Page5 = () => {
	return (
		<Layout
			heading="The problem"
			description={
				<>
					Here’s how it works on mobile. <br /> The charts are not
					understandable once shared.
				</>
			}
		>
			<div className="w-full h-60 md:h-[560px] bg-gray-300 mt-4 md:mt-8"></div>
		</Layout>
	)
}
