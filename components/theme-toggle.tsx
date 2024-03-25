'use client'

import React from 'react'
import Cookie from 'js-cookie'
import { useMetaKeyPress } from '@/utils/use-meta-key-press'
import { useDoubleClick } from '@/utils/use-double-click'

export const ThemeToggle = ({ initialTheme }: { initialTheme: string }) => {
	const [theme, setTheme] = React.useState(initialTheme)
	const doubleClick = useDoubleClick(handleClick)

	React.useEffect(() => {
		if (initialTheme === 'system') {
			setTheme(
				document.documentElement.getAttribute('data-theme-color') || 'light'
			)
		}
	}, [initialTheme])

	React.useEffect(() => {
		const body = document.querySelector('body')
		body?.addEventListener('mousedown', doubleClick)

		return () => {
			body?.removeEventListener('mousedown', doubleClick)
		}
	}, [doubleClick])

	function handleClick() {
		setTheme((prev) => {
			const newTheme = prev === 'light' ? 'dark' : 'light'
			Cookie.set('theme-color', newTheme, {
				expires: 1000,
			})

			document.documentElement.setAttribute('data-theme-color', newTheme)
			return newTheme
		})
	}

	useMetaKeyPress('k', handleClick)

	return <></>

	// if (theme === 'system') {
	// 	return <button>Loading</button>
	// }

	// return (
	// 	<button onClick={handleClick}>
	// 		Switch to {theme === 'light' ? 'dark' : 'light'} mode
	// 	</button>
	// )
}

export const useTheme = () => {
	const [theme, setThemeHook] = React.useState<'light' | 'dark'>('light')

	React.useEffect(() => {
		const savedTheme = Cookie.get('theme-color') as 'light' | 'dark'
		setTheme(savedTheme)
	}, [])

	function setTheme(newTheme: 'light' | 'dark') {
		setThemeHook(newTheme)
		Cookie.set('theme-color', newTheme, {
			expires: 1000,
		})

		document.documentElement.setAttribute('data-theme-color', newTheme)
	}

	return [theme, setTheme] as const
}
