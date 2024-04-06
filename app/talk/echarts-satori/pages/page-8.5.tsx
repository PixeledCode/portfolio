import React from 'react'
import { Layout } from '../components/Layout'
import { resizeChart, Switch } from './page-5'
import { iframeURL } from '../config'

export const Pag85 = () => {
	const ref = React.useRef<HTMLIFrameElement>(null)

	return (
		<Layout heading="let’s go plus ultra" description="ft. Satori">
			<div className="w-full vertical ">
				<Switch onClick={(type) => resizeChart(type, ref)} />
				<div
					ref={ref}
					className="mx-auto w-full min-h-96 [&>html]:overflow-hidden"
				>
					<iframe
						className="mx-auto mt-4 w-full h-[560px]"
						src={`${iframeURL}/embed/satori`}
					/>
				</div>
			</div>
		</Layout>
	)
}
