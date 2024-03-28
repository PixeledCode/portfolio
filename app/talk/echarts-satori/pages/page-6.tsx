import { Arrow, Diagram, Item, Label } from '../components/Diagram'
import { Layout } from '../components/Layout'

export const Page6 = () => {
	return (
		<Layout heading="the quick fix" description="ft. NextJS">
			<Diagram className="w-full md:min-h-[546px] mt-8 md:mt-12">
				<Label top={140}>Server</Label>
				<Label top={280}>Client</Label>

				<Item color="red" row={4} col={1} size={4}>
					Download Click
				</Item>

				<Arrow col={5} rotate />

				<Item color="yellow" row={2} col={9} size={4}>
					Initiate ECharts
				</Item>
				<Item color="blue" row={2} col={13} size={5}>
					Create chart using options
				</Item>
				<Item color="gray" row={2} col={18} size={5}>
					Convert to SVG string
				</Item>

				<Arrow col={23} />

				<Item color="gray" row={4} col={27} size={5}>
					Convert SVG to Data URI
				</Item>
				<Item color="red" row={4} col={32} size={4}>
					Download Image
				</Item>
			</Diagram>
		</Layout>
	)
}
