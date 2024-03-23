import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-geist-sans)'],
				mono: ['var(--font-geist-mono)'],
			},
			colors: {
				white: 'var(--white)',
				black: 'var(--black)',
				selection: 'var(--selection)',
				bg: 'var(--bg)',
				hover: 'var(--hover)',
				default: 'var(--text-color)',
				muted: 'var(--text-muted)',
				alpha: 'var(--alpha)',
				'shadow-color': 'var(--shadow-color)',
				accent: 'var(--accent)',
			},
			spacing: {
				page: '1072px',
				content: '640px',
				top: 'var(--page-top)',

				0: '0',
				'025': '1px',
				'05': '2px',
				'1': '4px',
				'2': '8px',
				'3': '12px',
				'4': '16px',
				'5': '20px',
				'6': '24px',
				'7': '28px',
				'8': '32px',
				'9': '36px',
				'10': '40px',
				'11': '44px',
				'12': '48px',
				'14': '56px',
				'16': '64px',
				'20': '80px',
				'24': '96px',
				'28': '112px',
				'32': '128px',
			},
		},
	},
	plugins: [],
	future: {
		hoverOnlyWhenSupported: true,
	},
}
export default config
