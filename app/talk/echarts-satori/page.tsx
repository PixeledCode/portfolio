'use client'

import { Page1 } from './pages/page-1'
import { Page2 } from './pages/page-2'
import React from 'react'

export default function Talk() {
	const [slide, setSlide] = React.useState(0)
	const pages = [Page1, Page2]

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
		<main className="max-w-talk mx-auto px-6 [&>*]:min-h-screen [&>*]:py-12 [&>*]:md:py-24">
			{showPage(slide, pages)}
		</main>
	)
}

function showPage(page: number, pages: React.FC[]) {
	const Page = pages[page % pages.length]
	return <Page />
}
