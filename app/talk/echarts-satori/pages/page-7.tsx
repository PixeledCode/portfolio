import React from 'react'
import { Layout } from '../components/Layout'
import { resizeChart, Switch } from './page-5'
import { iframeURL } from '../config'

export const Page7 = () => {
	const ref = React.useRef<HTMLIFrameElement>(null)

	return (
		<Layout
			heading="the quick fix"
			description="Thanks to route handlers, we are able to share consistent charts across different screen sizes."
		>
			<div className="w-full vertical ">
				<Switch onClick={(type) => resizeChart(type, ref)} />
				<div
					ref={ref}
					className="mx-auto w-full min-h-96 [&>html]:overflow-hidden"
				>
					<iframe
						className="mx-auto mt-4 w-full h-[560px]"
						src={`${iframeURL}/embed/route-handler`}
					/>
				</div>
			</div>
		</Layout>
	)
}
