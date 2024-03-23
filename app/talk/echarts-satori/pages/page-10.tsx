import { Codepen } from '../components/icons/codepen'
import { Github } from '../components/icons/github'
import { LinkedIn } from '../components/icons/linkedin'
import { Twitter } from '../components/icons/twitter'

export const Page10 = () => {
	return (
		<div className="pt-12 md:pt-16">
			<h2 className="text-heading4 text-extra-light uppercase">fin.</h2>

			<p className="mt-4 text-body1 text-medium max-w-[834px]">
				That’s all for today.
			</p>

			<div className="mt-4 text-body2">
				<p className="text-light">Code & Demo</p>
				<a
					className="text-accent"
					target="_blank"
					rel="noreferrer"
					href="https://github.com/PixeledCode/echarts-satori"
				>
					github.com/PixeledCode/echarts-satori
				</a>
			</div>

			<div className="w-[360px] h-[360px] bg-gray-300 mx-auto mt-20"></div>
			<div className="mt-20 mx-auto horizontal center flex-wrap gap-4 text-body2">
				<div className="flex items-center gap-1">
					<LinkedIn />
					<span>/in/pixeledcode</span>
				</div>
				<div className="flex items-center gap-1">
					<Twitter />
					<span>/pixeledcode</span>
				</div>
				<div className="flex items-center gap-1">
					<Codepen />
					<span>/pixeledcode</span>
				</div>
				<div className="flex items-center gap-1">
					<Github />
					<span>/pixeledcode</span>
				</div>
			</div>
		</div>
	)
}
