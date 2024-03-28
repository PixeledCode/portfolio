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
				xmlns="http://www.w3.org/2000/svg"
				width="62"
				height="150"
				fill="none"
				viewBox="0 0 70 158"
				preserveAspectRatio="none"
				className={cn(styles.svg, rotate && 'rotate-x-180')}
			>
				<path
					fill="var(--text-dark)"
					d="M1.02941 0.000432697C0.477369 -0.0158124 0.0166778 0.41854 0.000432697 0.970586C-0.0158124 1.52263 0.41854 1.98332 0.970586 1.99957L1.02941 0.000432697ZM69.7147 150.695C70.101 150.3 70.0941 149.667 69.6994 149.28L63.2669 142.986C62.8722 142.599 62.2391 142.606 61.8528 143.001C61.4665 143.396 61.4734 144.029 61.8681 144.415L67.5859 150.01L61.9906 155.728C61.6043 156.123 61.6111 156.756 62.0059 157.142C62.4006 157.529 63.0337 157.522 63.42 157.127L69.7147 150.695ZM0.970586 1.99957C7.02922 2.17786 11.1163 4.52244 13.9171 8.45261C16.7633 12.4464 18.3403 18.1619 19.115 25.1614C20.6678 39.1901 18.9539 57.6994 18.5207 76.4088C18.0904 94.9961 18.9329 113.737 25.7727 127.783C29.207 134.836 34.1608 140.723 41.2234 144.806C48.279 148.885 57.3679 151.121 69.0108 150.995L68.9892 148.995C57.6113 149.118 48.8972 146.932 42.2244 143.075C35.5587 139.221 30.8588 133.66 27.5708 126.908C20.966 113.344 20.0896 95.0543 20.5202 76.4551C20.948 57.978 22.675 39.1451 21.1029 24.9413C20.3152 17.8246 18.6883 11.7013 15.5459 7.29189C12.3581 2.81888 7.67193 0.195903 1.02941 0.000432697L0.970586 1.99957Z"
				/>
			</svg>
		</div>
	)
}
