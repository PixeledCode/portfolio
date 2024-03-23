'use client'

import React from 'react'
import Cookie from 'js-cookie'
import { useMetaKeyPress } from '@/utils/use-meta-key-press'

export const ThemeToggle = ({ initialTheme }: { initialTheme: string }) => {
	const [theme, setTheme] = React.useState(initialTheme)

	React.useEffect(() => {
		if (initialTheme === 'system') {
			setTheme(
				document.documentElement.getAttribute('data-theme-color') || 'light'
			)
		}
	}, [initialTheme])

	function handleClick() {
		const newTheme = theme === 'light' ? 'dark' : 'light'
		setTheme(newTheme)

		Cookie.set('theme-color', newTheme, {
			expires: 1000,
		})

		document.documentElement.setAttribute('data-theme-color', newTheme)
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
