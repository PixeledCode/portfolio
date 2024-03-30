import { Diagram, Item, Label } from '../components/Diagram'
import { Layout } from '../components/Layout'

export const Page4 = () => {
	return (
		<Layout
			heading="The problem"
			description="The current implementation is pretty simple but not ideal."
		>
			<Diagram className="mt-8 md:mt-12">
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
