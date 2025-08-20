import Image from "next/image"

export default function Home() {
	return (
		<div className="relative">
			<Image
				src="/images/corydhmiller-home-background.jpg"
				alt="Cory Miller"
				width={2730}
				height={1536}
				quality={50}
				className="min-h-screen object-cover"
				priority
			/>
		</div>
	)
}
