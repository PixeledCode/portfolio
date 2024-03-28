import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: ['selector', '[data-theme-color="dark"]'],
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				mono: ['var(--font-geist-mono)'],
			},
			fontSize: {
				heading1: [
					'4rem',
					{
						fontWeight: '600',
						lineHeight: '5rem',
					},
				],
				heading2: [
					'2.25rem',
					{
						fontWeight: '600',
						lineHeight: '2.875rem',
					},
				],
				heading3: [
					'2rem',
					{
						fontWeight: '500',
						lineHeight: '2.5rem',
					},
				],
				heading4: [
					'1.5rem',
					{
						fontWeight: '500',
						letterSpacing: '2%',
						lineHeight: '1.875rem',
					},
				],
				body1: [
					'2rem',
					{
						fontWeight: '400',
						lineHeight: '2.5rem',
					},
				],
				body2: [
					'1.5rem',
					{
						fontWeight: '400',
						lineHeight: '1.875rem',
					},
				],
			},
			colors: {
				white: 'var(--white)',
				black: 'var(--black)',
				bg: 'var(--bg)',
				hover: 'var(--hover)',
				default: 'var(--text-color)',
				muted: 'var(--text-muted)',

				accent: 'var(--accent)',
				dark: 'var(--text-dark)',
				medium: 'var(--text-medium)',
				light: 'var(--text-light)',
				'extra-light': 'var(--text-extra-light)',
			},
			spacing: {
				page: '1072px',
				talk: '1120px',
				content: '640px',
				top: 'var(--page-top)',
				'body-margin': 'var(--body-margin)',

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
			rotate: {
				'0': '0deg',
				'30': '30deg',
				'60': '60deg',
				'90': '90deg',
				'120': '120deg',
				'150': '150deg',
				'180': '180deg',
			},
		},
	},
	plugins: [require('tailwindcss-3d')],
	future: {
		hoverOnlyWhenSupported: true,
	},
}
export default config
