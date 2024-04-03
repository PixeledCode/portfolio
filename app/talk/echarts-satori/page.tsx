'use client'

import React from 'react'
import { Page2 } from './pages/page-2'
import { Page3 } from './pages/page-3'
import { Page4 } from './pages/page-4'
import { Page5 } from './pages/page-5'
import { Page6 } from './pages/page-6'
import { Page7 } from './pages/page-7'
import { Page8 } from './pages/page-8'
import { Page9 } from './pages/page-9'
import { Page10 } from './pages/page-10'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { motion, AnimatePresence, animate } from 'framer-motion'
import MobileLayout from './mobile-layout'
import { ProgressBar } from '@/components/progress-bar'
import { Pag85 } from './pages/page-8.5'
import { cn } from '@/utils/helper'

export default function Talk() {
	const [slide, setSlide] = React.useState(0)

	const prevRef = React.useRef<HTMLButtonElement>(null)
	const nextRef = React.useRef<HTMLButtonElement>(null)

	const pages = [
		Page2,
		Page3,
		Page4,
		Page5,
		Page6,
		Page7,
		Page8,
		Pag85,
		Page9,
		Page10,
	]

	const prevSlide = React.useCallback(() => {
		setSlide((prev) => {
			if (prev === 0) return 0
			if (prevRef?.current && prev !== pages.length - 1)
				animate(prevRef.current, { y: [-2, 0] })
			return prev - 1
		})
	}, [setSlide, pages.length])

	const nextSlide = React.useCallback(() => {
		setSlide((prev) => {
			if (prev === pages.length - 1) return prev
			if (nextRef?.current && prev !== 0)
				animate(nextRef.current, { y: [2, 0] })
			return prev + 1
		})
	}, [pages.length, setSlide])

	React.useEffect(() => {
		const handleKey = (e: KeyboardEvent) => {
			if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
				nextSlide()
			} else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
				prevSlide()
			}
		}

		window.addEventListener('keydown', handleKey)

		return () => {
			window.removeEventListener('keydown', handleKey)
		}
	}, [nextSlide, prevSlide])

	const progress = slide === 0 ? 0 : ((slide + 1) / pages.length) * 100
	return (
		<>
			<ProgressBar progress={progress} />
			<main className="[&>section]:min-h-screen hidden md:block">
				<AnimatePresence>{showPage(slide, pages)}</AnimatePresence>

				<div className="absolute grid justify-between gap-2 right-8 bottom-8 h-20 z-10">
					<AnimatePresence initial={false}>
						{slide !== 0 ? (
							<motion.button
								ref={prevRef}
								key="prev"
								initial={{ opacity: 0 }}
								animate={{ y: 2, opacity: 1 }}
								exit={{ y: -2, opacity: 0 }}
								whileTap={{ y: -2 }}
								onClick={prevSlide}
								aria-label="Previous slide"
								className="self-start w-9 h-9"
							>
								<Chevron className="rotate-180" />
							</motion.button>
						) : null}

						{slide !== pages.length - 1 ? (
							<motion.button
								ref={nextRef}
								key="next"
								initial={{ opacity: 0 }}
								animate={{ y: -2, opacity: 1 }}
								exit={{ y: 2, opacity: 0 }}
								whileTap={{ y: 2 }}
								onClick={nextSlide}
								aria-label="Next slide"
								className="self-end w-9 h-9"
							>
								<Chevron />
							</motion.button>
						) : null}
					</AnimatePresence>
				</div>
			</main>
			<main className="md:hidden px-body-margin">
				<MobileLayout pages={pages} />
			</main>
		</>
	)
}

function showPage(page: number, pages: React.FC[]) {
	const Page = pages[page % pages.length]
	return <Page />
}

const Chevron = ({ className, ...args }: { className?: string }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="36"
		className={cn('pointer-events-none', className)}
		height="36"
		{...args}
	>
		<path
			fill="var(--accent)"
			d="M7.5 10.5h3V12H12v1.5h1.5V15H15v1.5h1.5V18h3v-1.5H21V15h1.5v-1.5H24V12h1.5v-1.5h3V12H30v3h-1.5v1.5H27V18h-1.5v1.5H24V21h-1.5v1.5H21V24h-1.5v1.5h-3V24H15v-1.5h-1.5V21H12v-1.5h-1.5V18H9v-1.5H7.5V15H6v-3h1.5v-1.5Z"
		/>
	</svg>
)
