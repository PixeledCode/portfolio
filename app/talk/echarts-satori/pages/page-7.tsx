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
			<Switch onClick={(type) => resizeChart(type, ref)} />

			<div className="w-full flex mx-auto [&>html]:overflow-hidden" ref={ref}>
				<iframe
					className="mt-4 mx-auto md:mt-8 h-60 w-full md:h-[560px]"
					src="https://echarts-satori.vercel.app/embed/route-handler"
				/>
			</div>
		</Layout>
	)
}
