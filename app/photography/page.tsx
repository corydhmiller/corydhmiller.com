import PhotographyGallery from "@components/PhotographyGallery"

export default function Home() {
	return (
		<div>
			<div className="fixed inset-0 z-0 opacity-[.02] pointer-events-none">
				<div
					className="text-black text-5xl font-serif font-bold"
					style={{
						fontSize: `calc(round(calc(100vw/2.5),2px))`,
						maxWidth: "100vw",
					}}
				>
					Photo<span className="block">graphy</span>
				</div>
			</div>
			<PhotographyGallery />
		</div>
	)
}
