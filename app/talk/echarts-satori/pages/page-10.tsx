import { Codepen } from '../components/icons/codepen'
import { Github } from '../components/icons/github'
import { LinkedIn } from '../components/icons/linkedin'
import { Twitter } from '../components/icons/twitter'
import { Layout } from '../components/Layout'

export const Page10 = () => {
	return (
		<Layout heading="fin." description="That’s all for today.">
			<div className="flex-grow">
				<div className="md:text-body2 mt-4 md:mt-0">
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
				<div className="hidden md:block md:w-72 aspect-square bg-gray-300 mx-auto mt-10 md:mt-20"></div>

				<div className="mt-14 mx-auto horizontal center flex-wrap gap-4 md:text-body2 pb-10">
					<a
						href="https://linkedin.com/in/pixeledcode"
						className="flex items-center gap-1"
					>
						<LinkedIn />
						<span>/in/pixeledcode</span>
					</a>
					<a
						href="https://twitter.com/pixeledcode"
						className="flex items-center gap-1"
					>
						<Twitter />
						<span>/pixeledcode</span>
					</a>
					<a
						href="https://codepen.io/pixeledcode"
						className="flex items-center gap-1"
					>
						<Codepen />
						<span>/pixeledcode</span>
					</a>
					<a
						href="https://github.com/pixeledcode"
						className="flex items-center gap-1"
					>
						<Github />
						<span>/pixeledcode</span>
					</a>
				</div>
			</div>
		</Layout>
	)
}
