import Image from "next/image"

const PageContent = () => {
	return (
		<>
			<Image
				src="/images/corydhmiller-home-background.jpg"
				alt="Cory Miller"
				width={2730}
				height={1536}
				quality={50}
				className="min-h-screen object-cover"
				priority
			/>
		</>
	)
}

export default function Home() {
	return (
		<>
			<div className="relative">
				<PageContent />
			</div>
		</>
	)
}
