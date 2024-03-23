import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Lexend } from 'next/font/google'
import { cookies } from 'next/headers'

import './globals.css'
import { ThemeToggle } from '@/components/theme-toggle'
import { siteConfig } from '@/config/site'

const lexend = Lexend({
	subsets: ['latin'],
	display: 'swap',
})

export async function generateMetadata() {
	return {
		metadataBase: new URL(siteConfig.url),
		title: {
			default: siteConfig.name,
			template: `%s | ${siteConfig.name}`,
		},
		description: siteConfig.description,
		keywords: [
			'Next.js',
			'React',
			'Server Components',
			'Radix UI',
			'OPub',
			'Open Publishing',
		],
		creator: 'PixeledCode',
		openGraph: {
			type: 'website',
			locale: 'en_US',
			url: siteConfig.url,
			title: siteConfig.name,
			description: siteConfig.description,
			siteName: siteConfig.name,
			images: [`${siteConfig.url}/og.png`],
		},
		twitter: {
			card: 'summary_large_image',
			title: siteConfig.name,
			description: siteConfig.description,
			images: [`${siteConfig.url}/og.png`],
			creator: 'PixeledCode',
		},
		icons: {
			icon: '/favicon.ico',
			shortcut: '/favicon-16x16.png',
			apple: `${siteConfig.url}/apple-touch-icon.png`,
		},
		manifest: `${siteConfig.url}/site.webmanifest`,
	}
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const savedTheme = cookies().get('theme-color')
	const theme = savedTheme?.value || 'system'

	return (
		<html lang="en" data-theme-color={theme}>
			<head>
				<ThemeScript />
			</head>
			<body
				className={`${GeistSans.variable} ${GeistMono.variable} ${lexend.className}`}
			>
				<ThemeToggle initialTheme={theme} />
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
