import { motion } from 'framer-motion'

export const ProgressBar = ({ progress }: { progress: number }) => {
	return (
		<div className="absolute top-0 left-0 h-2 w-screen overflow-hidden">
			<motion.div
				className="bg-accent h-full rounded-sm"
				animate={{ x: `-${100 - progress}%` }}
				initial={{ x: '-100%' }}
				transition={{ ease: 'easeInOut', duration: 0.25 }}
			/>
		</div>
	)
}
