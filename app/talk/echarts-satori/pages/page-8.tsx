import { Arrow, Diagram, Item, Label } from '../components/Diagram'
import { Layout } from '../components/Layout'

export const Page8 = () => {
	return (
		<Layout
			heading="let’s go plus ultra"
			description="We can improve it further by creating a custom template (React Component) before download."
		>
			<Diagram
				className="mt-8 md:mt-12"
				style={{
					'--width': '900px',
					'--num-of-columns': 52,
				}}
			>
				<Label top={200}>Server</Label>
				<Label top={420}>Client</Label>

				<Item color="red" row={4} col={1} size={5}>
					Download Click
				</Item>

				<Arrow col={6} rotate />

				<Item color="yellow" row={2} col={10} size={5}>
					Generate Chart
				</Item>

				<Arrow col={15} />

				<Item color="gray" row={4} col={19} size={6}>
					Convert SVG to Data URI
				</Item>
				<Item color="blue" row={4} col={25} size={6}>
					Create React Template
				</Item>
				<Item color="gray" row={4} col={31} size={6}>
					Convert React to SVG
				</Item>
				<Item color="gray" row={4} col={37} size={6}>
					Convert SVG to Data URI
				</Item>
				<Item color="red" row={4} col={43} size={6}>
					Download Image
				</Item>
			</Diagram>
		</Layout>
	)
}
