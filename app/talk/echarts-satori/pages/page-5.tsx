import React from 'react'
import { Layout } from '../components/Layout'
import { motion, animate } from 'framer-motion'
import { cn } from '@/utils/helper'

export function resizeChart(
	type: 'mobile' | 'desktop',
	ref: React.RefObject<HTMLIFrameElement>
) {
	const element = ref.current
	if (element) {
		animate(element, {
			width: type === 'mobile' ? 320 : '100%',
			transformOrigin: 'center',
		})
	}
}

export const Page5 = () => {
	const ref = React.useRef<HTMLIFrameElement>(null)

	return (
		<Layout
			heading="The problem"
			description={
				<>
					Here’s how it works on mobile. <br /> The charts are not
					understandable once shared.
				</>
			}
		>
			<Switch onClick={(type) => resizeChart(type, ref)} />

			<div className="w-full flex mx-auto" ref={ref}>
				<iframe
					className="mt-4 mx-auto md:mt-8 h-60 w-full md:h-[560px]"
					src="https://echarts-satori.vercel.app/embed/screenshot"
				/>
			</div>
		</Layout>
	)
}

export const Switch = ({
	onClick,
}: {
	onClick: (type: 'mobile' | 'desktop') => void
}) => {
	const [isMobile, setIsMobile] = React.useState(false)
	const classes = 'px-2 py-1 hover:bg-hover text-medium'
	return (
		<div className="w-fit flex items-center rounded-md border-2 mt-2 self-end">
			<button
				className={cn(
					classes,
					isMobile && 'rounded-l-[3px] bg-gray-300 hover:bg-gray-300'
				)}
				onClick={() => {
					setIsMobile(true)
					onClick('mobile')
				}}
			>
				mobile
			</button>
			<button
				className={cn(
					classes,
					!isMobile && 'rounded-r-[3px] bg-gray-300 hover:bg-gray-300'
				)}
				onClick={() => {
					setIsMobile(false)
					onClick('desktop')
				}}
			>
				desktop
			</button>
		</div>
	)
}
