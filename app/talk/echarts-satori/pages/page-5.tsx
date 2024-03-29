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
					Here’s how it works on different screen sizes. <br /> The shared
					charts are not consistent.
				</>
			}
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

export const Switch = ({
	onClick,
}: {
	onClick: (type: 'mobile' | 'desktop') => void
}) => {
	const [isMobile, setIsMobile] = React.useState(false)
	const classes = 'px-2 py-1 bg-bg hover:bg-hover text-medium hidden md:block'
	return (
		<div className="w-fit flex items-center rounded-md border-2 mt-2 self-end">
			<button
				className={cn(classes, isMobile && 'rounded-l-[3px] bg-gray1')}
				onClick={() => {
					setIsMobile(true)
					onClick('mobile')
				}}
			>
				mobile
			</button>
			<button
				className={cn(classes, !isMobile && 'rounded-r-[3px] bg-gray1')}
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
