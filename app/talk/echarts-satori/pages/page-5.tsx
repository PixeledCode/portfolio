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
						className="mx-auto mt-4 w-full h-[560px]"
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
	const [_, setIsMobile] = React.useState(false)
	const ref = React.useRef<HTMLSpanElement>(null)

	function handleClick() {
		setIsMobile((prev) => {
			onClick(prev ? 'desktop' : 'mobile')
			if (ref.current)
				animate(ref.current, {
					transform: `translateX(${prev ? 0 : 100}%)`,
				})
			return !prev
		})
	}

	return (
		<div className="w-fit flex items-center rounded-md border-2 mt-2 self-end relative">
			<button
				className={cn('bg-bg text-medium hidden md:block ')}
				onClick={handleClick}
			>
				<span className="px-2 py-1 flex gap-3 ">
					<span
						className="absolute inset-0 bg-gray-50 w-1/2 rounded-[5px] elevation"
						ref={ref}
					/>
					<span className="w-16 z-1 relative">desktop</span>
					<span className="w-16 z-1 relative">mobile</span>
				</span>
			</button>
		</div>
	)
}
