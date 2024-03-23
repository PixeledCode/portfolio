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

	React.useEffect(() => {
		const handleKey = (e: KeyboardEvent) => {
			if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
				setSlide((prev) => {
					if (prev === pages.length - 1) return prev
					return prev + 1
				})
			} else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
				setSlide((prev) => {
					if (prev === 0) return 0
					return prev - 1
				})
			}
		}

		window.addEventListener('keydown', handleKey)

		return () => {
			window.removeEventListener('keydown', handleKey)
		}
	}, [pages.length])

	return (
		<main className="max-w-talk mx-auto px-6 [&>*]:min-h-screen">
			{showPage(slide, pages)}
		</main>
	)
}

function showPage(page: number, pages: React.FC[]) {
	const Page = pages[page % pages.length]
	return <Page />
}
