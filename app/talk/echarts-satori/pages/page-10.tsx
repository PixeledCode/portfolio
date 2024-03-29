import Image from 'next/image'
import { Codepen } from '../components/icons/codepen'
import { Github } from '../components/icons/github'
import { LinkedIn } from '../components/icons/linkedin'
import { Twitter } from '../components/icons/twitter'
import { Layout } from '../components/Layout'
import Link from 'next/link'

export const Page10 = () => {
	return (
		<Layout heading="fin." description="That’s all for today." animate={false}>
			<div className="w-fit md:text-body2 mt-4 md:mt-0">
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
			<div className="hidden md:flex justify-center items-center mt-20">
				<Link href="/">
					<Image
						src={'/site.png'}
						width={288}
						height={288}
						alt="qr code for pixeledcode.com"
					/>
				</Link>
			</div>

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
				{/* <a
					href="https://codepen.io/pixeledcode"
					className="flex items-center gap-1"
				>
					<Codepen />
					<span>/pixeledcode</span>
				</a> */}
				<a
					href="https://github.com/pixeledcode"
					className="flex items-center gap-1"
				>
					<Github />
					<span>/pixeledcode</span>
				</a>
			</div>
		</Layout>
	)
}
