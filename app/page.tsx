import FluidBox from "@/components/FluidEngine/FluidBox"
import FluidEngine from "@/components/FluidEngine/FluidEngine"
import Heading from "@/components/Typography/Heading"
import Image from "next/image"

export default function Home() {
	return (
		<div className="relative w-screen overflow-hidden">
			<div className="relative text-center z-10 px-4 py-12">
				<Heading>Cory Miller</Heading>
				<span className="opacity-80 font-normal">
					Street, Portrait, and Headshot Photography
				</span>
			</div>

			<FluidEngine rows={42} columns={24}>
				<FluidBox colStart={[1]} colEnd={[27]} rowStart={1} rowEnd={[4]}>
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
					colStart={[2, 2, 4, 14]}
					colEnd={[26, 26, 26, 27]}
					rowStart={[5]}
					rowEnd={[8]}
				>
					<Image
						src="/images/portrait-of-ruslan.jpg"
						alt="A portrait of Ruslan"
						width={531}
						height={683}
						quality={50}
						className="shadow-xl w-full"
					/>
				</FluidBox>
				<FluidBox
					colStart={[2,2,2,1]}
					colEnd={[26, 26, 26, 10]}
					rowStart={[9,9,9,6]}
					rowEnd={[15]}
				>
					<Image
						src="/images/boy-looking-through-window.jpg"
						alt="A boy and his family walk through a museum door"
						width={727}
						height={1090}
						quality={50}
						className="shadow-xl w-full"
					/>
				</FluidBox>
				<FluidBox colStart={[1]} colEnd={[27]} rowStart={[16]} rowEnd={[18]}>
					<Image
						src="/images/woman-hailing-taxi-cab.jpg"
						alt="A cinematic photo of a woman hailing a taxi cab"
						width={1800}
						height={753}
						quality={50}
						className="shadow-xl w-full"
					/>
				</FluidBox>
				<FluidBox
					colStart={[1, 2]}
					colEnd={[27, 27, 25]}
					rowStart={[19]}
					rowEnd={22}
				>
					<Image
						src="/images/young-girl-dancing-in-vienna.jpg"
						alt="A photo of a young girl dancing on the Vienna streets"
						width={1500}
						height={999}
						quality={50}
						className="shadow-2xl w-full"
					/>
				</FluidBox>
				<FluidBox colStart={[2]} colEnd={[26]} rowStart={[24]} rowEnd={[25]}>
					<div className="px-4">
						<p>Photographer based in Vienna, Austria</p>
						<p className="pl-4 pt-8">looking for honest moments</p>
						<p className="pl-12 pt-12">...mostly in monochrome</p>
					</div>
				</FluidBox>
				<FluidBox
					colStart={[2, 2, 1]}
					colEnd={[26, 26, 12]}
					rowStart={[27]}
					rowEnd={[29]}
				>
					<Image
						src="/images/guard-stands-watch-at-deans-yard.jpg"
						alt="A photo of a guard standing watch by Dean's Yard in London"
						width={1500}
						height={999}
						quality={50}
						className="shadow-xl w-full"
					/>
				</FluidBox>
				<FluidBox
					colStart={[2, 2, 13]}
					colEnd={[26, 26, 26]}
					rowStart={[30, 30, 28]}
					rowEnd={[32, 32, 31]}
				>
					<Image
						src="/images/andre-headshot.jpg"
						alt="A portrait of Andre"
						width={1800}
						height={1857}
						quality={50}
						className="shadow-xl w-full"
					/>
				</FluidBox>
				<FluidBox colStart={[2]} colEnd={[26]} rowStart={[33,33,33,31]} rowEnd={[35]}>
					<Image
						src="/images/georgia-portrait.jpg"
						alt="A portrait of Georgia"
						width={875}
						height={1314}
						quality={50}
						className="shadow-2xl w-full"
					/>
				</FluidBox>
				<FluidBox colStart={[2]} colEnd={[26]} rowStart={[38]} rowEnd={[39]}>
					<p>Enjoy your visit</p>
				</FluidBox>
			</FluidEngine>
		</div>
	)
}
