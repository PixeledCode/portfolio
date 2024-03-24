'use client'

import React from 'react'
import { Page1 } from './pages/page-1'
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

export default function Talk() {
	const [slide, setSlide] = React.useState(0)
	const pages = [
		Page1,
		Page2,
		Page3,
		Page4,
		Page5,
		Page6,
		Page7,
		Page8,
		Page9,
		Page10,
	]

	const prevSlide = React.useCallback(() => {
		setSlide((prev) => {
			if (prev === 0) return 0
			return prev - 1
		})
	}, [setSlide])

	const nextSlide = React.useCallback(() => {
		setSlide((prev) => {
			if (prev === pages.length - 1) return prev
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

	return (
		<main className="max-w-talk mx-auto px-6 [&>section]:min-h-screen">
			{showPage(slide, pages)}

			<div className="absolute grid justify-between gap-2 right-8 bottom-8 h-20 z-10">
				{slide !== 0 ? (
					<button
						onClick={prevSlide}
						aria-label="Previous slide"
						className="self-start w-9 h-9 [&>svg]:hover:scale-95 [&>svg]:active:scale-90"
						data-animate
					>
						<ChevronUp
							className="transition-transform transform"
							color="var(--accent)"
							strokeWidth="3px"
							size={36}
						/>
					</button>
				) : null}
				{slide !== pages.length - 1 ? (
					<button
						onClick={nextSlide}
						aria-label="Next slide"
						className="self-end w-9 h-9 [&>svg]:hover:scale-95 [&>svg]:active:scale-90"
						data-animate
					>
						<ChevronDown
							className="transition-transform transform"
							color="var(--accent)"
							strokeWidth="3px"
							size={36}
						/>
					</button>
				) : null}
			</div>
		</main>
	)
}

function showPage(page: number, pages: React.FC[]) {
	const Page = pages[page % pages.length]
	return <Page />
}
