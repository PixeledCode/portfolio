import React from 'react'

export const useKeyPress = () => {
	const [keyPressed, setKeyPressed] = React.useState<null | string>(null)

	React.useEffect(() => {
		const downHandler = ({ key }: KeyboardEvent) => {
			setKeyPressed(key)
		}

		const upHandler = () => {
			setKeyPressed(null)
		}

		window.addEventListener('keydown', downHandler)
		window.addEventListener('keyup', upHandler)

		return () => {
			window.removeEventListener('keydown', downHandler)
			window.removeEventListener('keyup', upHandler)
		}
	}, [])

	return keyPressed
}
