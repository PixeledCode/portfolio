import Image from 'next/image'
import { Layout } from '../components/Layout'

export const Page3 = () => {
	return (
		<Layout
			heading="The problem"
			description="I work with dashboards on a daily basis. A common ask is having charts
		that need to be shareable."
		>
			<div className="w-full flex gap-3 md:h-[573px] mt-8 md:mt-12 overflow-auto md:overflow-visible">
				<Image
					src="/deck/d4d.png"
					alt="screenshot of d4d platform"
					width={554}
					height={355}
					className="object-contain max-w-full"
				/>
				<Image
					src="/deck/constituency.png"
					alt="screenshot of constituency platform"
					width={554}
					height={355}
					className="object-contain max-w-full"
				/>
			</div>
		</Layout>
	)
}
