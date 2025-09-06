import FluidBox from "@/components/FluidEngine/FluidBox"
import FluidEngine from "@/components/FluidEngine/FluidEngine"
import Image from "next/image"

export default function Home() {
	return (
		<div className="relative w-screen overflow-hidden">
			<div className="max-w-[1300px] mx-auto">
				<FluidEngine rows={28} columns={24}>
					<FluidBox rowStart={1} colStart={1} colEnd={27} rowEnd={12}>
						<Image
							src="/images/corydhmiller-home-background.jpg"
							alt="Cory Miller"
							width={2730}
							height={1536}
							quality={50}
							className="object-cover w-ful shadow-xl"
							priority
						/>
					</FluidBox>
					<FluidBox
						colStart={[2, 4, 12]}
						colEnd={[18, 18, 24]}
						rowStart={[12, 11]}
						rowEnd={[12, 15]}
					>
						<Image
							src="/images/portrait-of-ruslan.jpg"
							alt="Cory Miller"
							width={2730}
							height={1536}
							quality={50}
							className="min-h-screen object-cover shadow-xl"
							priority
						/>
					</FluidBox>
					<FluidBox
						colStart={1}
						colEnd={[12, 16]}
						rowStart={[13, 14]}
						rowEnd={18}
					>
						<Image
							src="/images/boy-looking-through-window.jpg"
							alt="Cory Miller"
							width={2730}
							height={1536}
							quality={50}
							priority
						/>
					</FluidBox>
				</FluidEngine>
			</div>
		</div>
	)
}
