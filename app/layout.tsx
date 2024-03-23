import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { cookies } from 'next/headers'

import './globals.css'
import { ThemeToggle } from '@/components/theme-toggle'

export const metadata: Metadata = {
	title: 'PixeledCode',
	description: 'Frontend Engineer, building delightful web experiences.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const savedTheme = cookies().get('theme-color')
	const theme = savedTheme?.value || 'light'

	return (
		<html lang="en" data-theme-color={theme}>
			<head>
				<ThemeScript />
			</head>
			<body className={`${GeistSans.variable} ${GeistMono.variable}`}>
				<header>
					<ThemeToggle initialTheme={theme} />
				</header>
				{children}
			</body>
		</html>
	)
}

const ThemeScript = () => {
	const codeToRunOnClient = `
		(function() {
			if(document.documentElement.getAttribute('data-theme-color') === 'system' && window.matchMedia) {
				const theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
				document.documentElement.setAttribute('data-theme-color', theme)

				window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
					const newColorScheme = event.matches ? "dark" : "light";
					document.documentElement.setAttribute('data-theme-color', newColorScheme)
			});
			}
		})()
	`

	return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
}
