'use client'

import { motion, animate } from 'framer-motion'
import { useTheme } from './theme-toggle'
import { cn } from '@/utils/helper'
import { useMetaKeyPress } from '@/utils/use-meta-key-press'
import React from 'react'

export const Toolbar = () => {
	const [show, setShow] = React.useState(true)
	const ref = React.useRef<HTMLDivElement>(null)
	const [theme, setTheme] = useTheme()
	useMetaKeyPress('k', handleClick)
	useMetaKeyPress('b', toggleFullScreen)

	function handleClick(value?: boolean) {
		if (value !== undefined) {
			setShow(() => {
				if (ref.current) {
					animate(ref.current, {
						opacity: value ? 1 : 0,
						y: value ? 0 : 40,
					})
				}
				return value
			})
			return
		}
		setShow((prev) => {
			const newShow = !prev
			if (ref.current) {
				animate(ref.current, {
					opacity: newShow ? 1 : 0,
					y: newShow ? 0 : 40,
				})
			}
			return newShow
		})
	}

	function toggleFullScreen() {
		if (!document.fullscreenElement) {
			handleClick(false)
			document.documentElement.requestFullscreen()
		} else if (document.exitFullscreen) {
			document.exitFullscreen()
		}
	}

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 20, x: '-50%' }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.5 }}
			className="toolbar fixed bottom-5 left-1/2 z-50 inline-flex max-h-12 items-center gap-2 overflow-hidden rounded-full bg-[var(--toolbar-bg)] py-4 px-4"
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
					title="check code"
					aria-label="github"
					href="https://github.com/PixeledCode"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						aria-label="GitHub"
						viewBox="0 0 512 512"
						className="h-6 w-6 rounded-full"
					>
						<path fill="var(--text-dark)" d="M0 0h512v512H0" />
						<path
							fill="var(--bg)"
							d="M335 499c14 0 12 17 12 17H165s-2-17 12-17c13 0 16-6 16-12l-1-44c-71 16-86-34-86-34-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 39 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-67 0 0 21-7 70 26 42-12 86-12 128 0 49-33 70-26 70-26 14 35 6 61 3 67 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48l-1 70c0 6 3 12 16 12z"
						/>
					</svg>
				</Link>
				<Link
					title="say hi"
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
