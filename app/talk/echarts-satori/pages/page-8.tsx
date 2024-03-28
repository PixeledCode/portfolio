import { Arrow, Diagram, Item, Label } from '../components/Diagram'
import { Layout } from '../components/Layout'

export const Page8 = () => {
	return (
		<Layout
			heading="the improvement"
			description="We can improve it further by creating a custom template (React Component) before download."
		>
			<Diagram
				className="w-full md:min-h-[546px] mt-8 md:mt-12"
				style={{
					'--width': '760px',
					'--num-of-columns': 42,
				}}
			>
				<Label top={140}>Server</Label>
				<Label top={280}>Client</Label>

				<Item color="red" row={4} col={1} size={4}>
					Download Click
				</Item>

				<Arrow col={5} rotate />

				<Item color="yellow" row={2} col={9} size={4}>
					Generate Chart
				</Item>

				<Arrow col={13} />

				<Item color="gray" row={4} col={17} size={5}>
					Convert SVG to Data URI
				</Item>
				<Item color="blue" row={4} col={22} size={5}>
					Create React Template
				</Item>
				<Item color="gray" row={4} col={27} size={5}>
					Convert React to SVG
				</Item>
				<Item color="gray" row={4} col={32} size={5}>
					Convert SVG to Data URI
				</Item>
				<Item color="red" row={4} col={37} size={5}>
					Download Image
				</Item>
			</Diagram>
		</Layout>
	)
}
