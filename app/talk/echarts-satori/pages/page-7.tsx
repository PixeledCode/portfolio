import React from 'react'
import { Layout } from '../components/Layout'
import { resizeChart, Switch } from './page-5'

export const Page7 = () => {
	const ref = React.useRef<HTMLIFrameElement>(null)

	return (
		<Layout
			heading="the quick fix"
			description="Thanks to route handlers, we are able to share consistent charts across different screen sizes."
		>
			<div className="w-full vertical ">
				<Switch onClick={(type) => resizeChart(type, ref)} />
				<div ref={ref} className="mx-auto w-full [&>html]:overflow-hidden">
					<iframe
						className="mx-auto mt-4 h-60 w-full md:h-[560px]"
						src="https://echarts-satori.vercel.app/embed/screenshot"
					/>
				</div>
			</div>
		</Layout>
	)
}
