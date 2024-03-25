'use client'

import { motion } from 'framer-motion'
import { useTheme } from './theme-toggle'
import { cn } from '@/utils/helper'
import Image from 'next/image'

export const Toolbar = () => {
	const [theme, setTheme] = useTheme()

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="toolbar fixed bottom-5 left-1/2 z-50 inline-flex max-h-12 -translate-x-1/2 items-center gap-2 overflow-hidden rounded-full bg-[var(--toolbar-bg)] py-4 px-4"
		>
			<div className="flex items-center gap-1">
				<Button
					title="change theme"
					aria-label="change theme"
					onClick={() => {
						const newTheme = theme === 'light' ? 'dark' : 'light'
						setTheme(newTheme)
					}}
				>
					<div className={cn('h-5 w-5 bg-default rounded-full')}></div>
				</Button>
				<Link
					title="github"
					aria-label="github"
					href="https://github.com/PixeledCode"
				>
					<Image
						src={theme === 'dark' ? '/github-white.png' : '/github.png'}
						alt="github"
						width={20}
						height={20}
					/>
				</Link>
				<Link
					title="twitter"
					aria-label="twitter"
					href="https://twitter.com/PixeledCode"
				>
					<svg
						width="20"
						height="20"
						viewBox="0 0 20 20"
						className="fill-current"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M14.773 2.5h2.545l-5.56 6.354 6.54 8.646h-5.12l-4.01-5.244-4.59 5.244H2.032l5.946-6.796L1.704 2.5h5.25l3.626 4.793L14.773 2.5zm-.893 13.477h1.41L6.19 3.943H4.676l9.204 12.034z"></path>
					</svg>
				</Link>
			</div>
		</motion.div>
	)
}

const classes =
	'flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all ease-out'
const Button = ({
	children,
	...props
}: Readonly<{ children: React.ReactNode }> &
	React.ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<button {...props} type="button" className={classes}>
			{children}
		</button>
	)
}

const Link = ({
	children,
	...props
}: Readonly<{ children: React.ReactNode }> &
	React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
	return (
		<a target="_blank" rel="noreferrer" {...props} className={classes}>
			{children}
		</a>
	)
}
