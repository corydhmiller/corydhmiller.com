import AnimateBox from "@/components/AnimateBox/AnimateBox"
import FluidBox from "@/components/FluidEngine/FluidBox"
import FluidEngine from "@/components/FluidEngine/FluidEngine"
import Heading from "@/components/Typography/Heading"
import Image from "next/image"

export default function Home() {
	return (
		<div className="relative w-screen overflow-hidden">
			<div className="relative text-center z-10 px-4 py-12 border-l border-r border-gray-200">
				<Heading>Cory Miller</Heading>
				<span className="opacity-80 font-normal">
					Street, Portrait, and Headshot Photography
				</span>
			</div>

			<div className="max-w-[1300px] mx-auto">
				<FluidEngine rows={60} columns={24}>
					<FluidBox
						rowStart={1}
						colStart={[1]}
						colEnd={[16, 24, 27]}
						rowEnd={[12]}
					>
						<Image
							src="/images/main-walks-in-from-rain.jpg"
							alt="A man holding an umbrella walks in out of the rain"
							width={1300}
							height={731}
							quality={50}
							className="w-full"
							priority
						/>
					</FluidBox>
					<FluidBox
						colStart={[1, 4, 12]}
						colEnd={[13, 18, 26]}
						rowStart={[12, 13]}
						rowEnd={[12, 16]}
					>
						<AnimateBox startY={-100} endY={100}>
							<Image
								src="/images/portrait-of-ruslan.jpg"
								alt="A portrait of Ruslan"
								width={531}
								height={683}
								quality={50}
								className="shadow-xl"
							/>
						</AnimateBox>
					</FluidBox>
					<FluidBox
						colStart={2}
						colEnd={[11, 15, 16]}
						rowStart={[13, 16]}
						rowEnd={18}
					>
						<AnimateBox startY={100} endY={200}>
							<Image
								src="/images/boy-looking-through-window.jpg"
								alt="A boy and his family walk through a museum door"
								width={727}
								height={1090}
								quality={50}
							/>
						</AnimateBox>
					</FluidBox>
					<FluidBox
						colStart={1}
						colEnd={[16, 20, 27]}
						rowStart={24}
						rowEnd={26}
					>
						<AnimateBox startY={150} endY={-87}>
							<Image
								src="/images/woman-hailing-taxi-cab.jpg"
								alt="A cinematic photo of a woman hailing a taxi cab"
								width={1800}
								height={753}
								quality={50}
								className="shadow-xl"
							/>
						</AnimateBox>
					</FluidBox>
					<FluidBox
						colStart={[1, 5]}
						colEnd={[17, 24]}
						rowStart={26}
						rowEnd={31}
					>
						<AnimateBox startY={250} endY={-120}>
							<Image
								src="/images/young-girl-dancing-in-vienna.jpg"
								alt="A photo of a young girl dancing on the Vienna streets"
								width={1500}
								height={999}
								quality={50}
								className="shadow-2xl"
							/>
						</AnimateBox>
					</FluidBox>
					<FluidBox
						colStart={1}
						colEnd={[10, 12, 14]}
						rowStart={[33, 33, 30]}
						rowEnd={[42, 42, 38]}
					>
						<AnimateBox startY={250} endY={-120}>
							<Image
								src="/images/guard-stands-watch-at-deans-yard.jpg"
								alt="A photo of a guard standing watch by Dean's Yard in London"
								width={1500}
								height={999}
								quality={50}
								className="shadow-xl"
							/>
						</AnimateBox>
					</FluidBox>
					<FluidBox
						colStart={[3, 12, 14]}
						colEnd={[17, 22, 24]}
						rowStart={[42, 33, 32]}
						rowEnd={[45, 42, 40]}
					>
						<AnimateBox startY={300} endY={-250}>
							<Image
								src="/images/andre-headshot.jpg"
								alt="A portrait of Andre"
								width={1800}
								height={1857}
								quality={50}
								className="shadow-xl"
							/>
						</AnimateBox>
					</FluidBox>
					<FluidBox
						colStart={[1, 2, 5]}
						colEnd={[17, 22, 24]}
						rowStart={[48, 41, 38]}
						rowEnd={[51, 46, 48]}
					>
						<AnimateBox startY={100} endY={-250}>
							<Image
								src="/images/georgia-portrait.jpg"
								alt="A portrait of Georgia"
								width={875}
								height={1314}
								quality={50}
								className="shadow-2xl"
							/>
						</AnimateBox>
					</FluidBox>
					<FluidBox
						colStart={[2, 3, 14]}
						colEnd={[12, 16, 24]}
						rowStart={[31]}
						rowEnd={[32]}
					>
						<p>Photographer based in Vienna, Austria</p>
						<p className="pl-4 pt-8">looking for honest moments</p>
						<p className="pl-12 pt-12">...mostly in monochrome</p>
					</FluidBox>
					<FluidBox colStart={[2]} colEnd={[23]} rowStart={[52]} rowEnd={[53]}>
						<p>Enjoy your visit</p>
					</FluidBox>
				</FluidEngine>
			</div>
		</div>
	)
}
