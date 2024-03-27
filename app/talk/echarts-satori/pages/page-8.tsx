import { Diagram } from '../components/Diagram'
import { Layout } from '../components/Layout'

export const Page8 = () => {
	return (
		<Layout
			heading="the improvement"
			description="We can improve it further by creating a custom template (React Component) before download."
		>
			<div className="w-full min-h-60 md:min-h-[560px] mt-4 md:mt-8">
				<Diagram />
			</div>
		</Layout>
	)
}
