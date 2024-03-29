export default function MobileLayout({
	pages,
}: {
	pages: React.ComponentType[]
}) {
	return (
		<div className="flex flex-col">
			{pages.map((Page, index) => (
				<Page key={index} />
			))}
		</div>
	)
}
