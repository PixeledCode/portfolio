import { Layout } from '../components/Layout'

export const Page9 = () => {
	return (
		<Layout heading="let’s go plus ultra" description="ft. Satori">
			<div className="text-body2">
				<p className="text-light">also, it isn’t slow..</p>
				<div className="w-full h-60 bg-gray-300 mt-6" />

				<div className="mt-12 vertical gap-4">
					<p className="text-light">it solves for</p>
					<div className="flex items-center gap-6">
						<CheckSVG />
						<span>custom views of shareable charts</span>
					</div>
					<div className="flex items-center gap-6">
						<CheckSVG />
						<span>responsive shareable charts</span>
					</div>
				</div>

				<div>
					<p className="text-light mt-10">and as a bonus, for</p>
					<div className="flex items-center gap-6 mt-4">
						<span>browser compatibility</span>
						<HeartSVG />
					</div>
				</div>
			</div>
		</Layout>
	)
}

const CheckSVG = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none">
			<path
				fill="var(--accent)"
				d="M29.333 12V9.334H28V6.667h-1.333V5.334h-1.334V4h-2.666V2.667H20V1.334h-8v1.333H9.333V4H6.667v1.333H5.333v1.334H4v2.667H2.667V12H1.333v8h1.334v2.667H4v2.666h1.333v1.334h1.334V28h2.666v1.334H12v1.333h8v-1.334h2.667V28h2.666v-1.333h1.334v-1.334H28v-2.666h1.333V20h1.334v-8h-1.334ZM24 16h-1.333v1.334h-1.334v1.333H20V20h-1.333v1.334h-1.334v1.333H16V24h-2.667v-1.333H12v-1.334h-1.333V20H9.333v-1.333H8V16h1.333v-1.333H12V16h1.333v1.334H16V16h1.333v-1.333h1.334v-1.333H20V12h1.333v-1.333H24V12h1.333v2.667H24V16Z"
			/>
		</svg>
	)
}

const HeartSVG = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none">
			<path
				fill="var(--accent)"
				d="M30.667 8v6.667h-1.334V16H28v1.333h-1.333v1.334h-1.334V20H24v1.333h-1.333v1.334h-1.334V24H20v1.333h-1.333v1.334h-1.334V28h-2.666v-1.333h-1.334v-1.334H12V24h-1.333v-1.333H9.333v-1.334H8V20H6.667v-1.333H5.333v-1.334H4V16H2.667v-1.333H1.333V8h1.334V6.667H4V5.333h1.333V4h8v1.333h1.334v1.334h2.666V5.333h1.334V4h8v1.333H28v1.334h1.333V8h1.334Z"
			/>
		</svg>
	)
}
