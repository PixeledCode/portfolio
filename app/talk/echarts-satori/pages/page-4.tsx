import { Diagram, Item, Label } from '../components/Diagram'
import { Layout } from '../components/Layout'

export const Page4 = () => {
	return (
		<Layout
			heading="The problem"
			description="Let’s take a look at a chart and the current implementation for sharing
		it."
		>
			<Diagram className="w-full mt-8 md:mt-12">
				<Label top={200}>Server</Label>
				<Label top={420}>Client</Label>

				<Item color="red" row={4} col={1} size={5}>
					Download Click
				</Item>
				<Item color="yellow" row={4} col={6} size={5}>
					Screenshot the DOM
				</Item>
				<Item color="red" row={4} col={11} size={5}>
					Download Image
				</Item>
			</Diagram>
		</Layout>
	)
}
