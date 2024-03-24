import { Layout } from '../components/Layout'

export const Page5 = () => {
	return (
		<Layout
			heading="The problem"
			description={
				<>
					Here’s how it works on mobile. <br /> The charts are not
					understandable and needed a fix.
				</>
			}
		>
			<div className="w-full h-[560px] bg-gray-300 mt-8"></div>
		</Layout>
	)
}
