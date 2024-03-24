import { Page1 } from './pages/page-1'
import { Page2 } from './pages/page-2'
import { Page3 } from './pages/page-3'
import { Page4 } from './pages/page-4'
import { Page5 } from './pages/page-5'
import { Page6 } from './pages/page-6'
import { Page7 } from './pages/page-7'
import { Page8 } from './pages/page-8'
import { Page9 } from './pages/page-9'
import { Page10 } from './pages/page-10'

export default function MobileLayout() {
	const pages = [Page2, Page3, Page4, Page5, Page6, Page7, Page8, Page9, Page10]

	return (
		<div className="flex flex-col">
			{pages.map((Page, index) => (
				<Page key={index} />
			))}
		</div>
	)
}
