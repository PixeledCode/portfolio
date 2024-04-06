import { Arrow, Diagram, Item, Label } from '../components/Diagram'
import { Layout } from '../components/Layout'

export const Page6 = () => {
	return (
		<Layout heading="the quick fix" description="ft. NextJS">
			<Diagram className="mt-8 md:mt-12">
				<Label top={200}>Server</Label>
				<Label top={420}>Client</Label>

				<Item color="red" row={4} col={1} size={5}>
					Download Click
				</Item>

				<Arrow col={6} rotate />

				<Item color="yellow" row={2} col={10} size={5}>
					Initiate ECharts
				</Item>
				<Item color="blue" row={2} col={15} size={6}>
					Create chart using options
				</Item>
				<Item color="gray" row={2} col={21} size={6}>
					Convert to SVG string
				</Item>

				<Arrow col={27} />

				<Item color="red" row={4} col={31} size={5}>
					Download Image
				</Item>
			</Diagram>
		</Layout>
	)
}
