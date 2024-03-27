import { Diagram } from '../components/Diagram'
import { Layout } from '../components/Layout'

export const Page6 = () => {
	return (
		<Layout heading="the quick fix" description="ft. NextJS">
			<div className="w-full min-h-60 md:min-h-[560px] mt-4 md:mt-8">
				<Diagram />
			</div>
		</Layout>
	)
}
