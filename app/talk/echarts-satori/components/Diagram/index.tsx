import { cn } from '@/utils/helper'
import styles from './diagram.module.scss'

export const Diagram = ({
	children,
	className,
	style,
}: {
	children: React.ReactNode
	className?: string
	style?: React.CSSProperties
}) => {
	return (
		<div className={cn(styles.wrapper, className)}>
			<div className={styles.diagram} style={style}>
				<div className={cn(styles.strip, 'row-start-2')} />
				<div className={cn(styles.strip, 'row-start-4')} />
				<div className={styles.shadow} />

				{children}
			</div>
		</div>
	)
}

export const Item = ({
	children,
	color = 'red',
	row = 1,
	col = 1,
	size = 3,
}: {
	children: React.ReactNode
	color: 'red' | 'blue' | 'gray' | 'yellow'
	row: number
	col: number
	size?: number
}) => {
	return (
		<div
			style={{
				gridArea: `${row} / ${col} / auto / ${col + size}`,
				'--background': `var(--dragram-bg-${color})`,
				'--border-color': `var(--dragram-border-${color})`,
			}}
			className={styles.item}
		>
			<div>
				<div>{children}</div>
			</div>
		</div>
	)
}

export const Label = ({
	children,
	top,
}: {
	children: React.ReactNode
	top: number
}) => {
	return (
		<div
			style={{
				top: `${top}px`,
			}}
			className={styles.label}
		>
			{children}
		</div>
	)
}

/**
 * Arrow Component
 *
 * This component renders an SVG arrow with optional rotation. It takes 4 columns in a CSS grid layout.
 *
 * Props:
 * - `rotate` (optional): A boolean that determines whether the arrow should be rotated 180 degrees along the X-axis. Defaults to `false`.
 * - `col`: A number that determines the column position of the arrow in a CSS grid layout.
 */
export const Arrow = ({
	rotate = false,
	col,
}: {
	rotate?: boolean
	col: number
}) => {
	return (
		<div
			style={{
				gridArea: `2 / ${col} / span 3 / span 4`,
			}}
			className={styles.arrow}
		>
			<svg
				width="62"
				height="220"
				fill="currentColor"
				viewBox="0 0 90 220"
				preserveAspectRatio="none"
				xmlns="http://www.w3.org/2000/svg"
				className={cn(styles.svg, rotate && 'rotate-x-180')}
			>
				<path d="M1.31 0C.331-.032-.313 1.112.151 2.058c.216.443.628.722 1.082.737L1.31 0Zm87.317 210.576a1.496 1.496 0 0 0-.02-1.975l-8.177-8.796c-.689-.763-1.872-.42-2.128.62a1.492 1.492 0 0 0 .349 1.377l7.269 7.819-7.112 7.99c-.695.757-.381 2.057.564 2.339.45.135.93-.013 1.252-.385l8.003-8.989ZM1.233 2.795c7.701.249 12.898 3.523 16.458 9.018 3.618 5.578 5.623 13.568 6.609 23.345 1.974 19.606-.205 45.469-.756 71.613-.546 25.974.524 52.163 9.22 71.791 4.365 9.854 10.663 18.081 19.641 23.786 8.97 5.701 20.524 8.827 35.326 8.649l-.028-2.794c-14.465.172-25.542-2.884-34.026-8.272-8.473-5.386-14.448-13.157-18.628-22.592-8.397-18.956-9.51-44.512-8.963-70.503.544-25.82 2.739-52.135.741-71.985-1.002-9.943-3.07-18.501-7.065-24.662C15.71 3.941 9.753.275 1.308.004l-.074 2.791h-.001Z" />
			</svg>
		</div>
	)
}
