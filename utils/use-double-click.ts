import { useCallback, useRef } from 'react'

const excludedTags = [
	'P',
	'A',
	'BUTTON',
	'INPUT',
	'TEXTAREA',
	'SELECT',
	'SPAN',
	'H1',
	'H2',
	'H3',
	'H4',
	'H5',
	'H6',
	'LABEL',
	'CODE',
	'PRE',
]

export const useDoubleClick = (
	doubleClick: (event: MouseEvent) => void,
	click?: (event: MouseEvent) => void,
	timeout = 100
) => {
	// we're using useRef here for the useCallback to rememeber the timeout
	const clickTimeout: any = useRef()

	const clearClickTimeout = () => {
		if (clickTimeout) {
			clearTimeout(clickTimeout.current)
			clickTimeout.current = undefined
		}
	}

	// return a memoized version of the callback that only changes if one of the dependencies has changed
	return useCallback(
		(event: MouseEvent) => {
			clearClickTimeout()
			if (click && event.detail === 1) {
				clickTimeout.current = setTimeout(() => {
					click(event)
				}, timeout)
			}
			if (event.detail % 2 === 0) {
				if (!excludedTags.includes((event.target as HTMLElement).tagName)) {
					event.stopPropagation()
					event.preventDefault()
					doubleClick(event)
				}
			}
		},
		[click, doubleClick, timeout]
	)
}
