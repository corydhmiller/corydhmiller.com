import FluidBox from "@/components/FluidEngine/FluidBox"
import FluidEngine from "@/components/FluidEngine/FluidEngine"
import { StoryblokImage } from "@/components/StoryblokImage/StoryblokImage"
import Heading from "@/components/Typography/Heading"

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
				<FluidBox colStart={[1]} colEnd={[27]} rowStart={1} rowEnd={[2]}>
					<StoryblokImage
						src="https://a.storyblok.com/f/313088/2730x1536/0102f6d8b1/main-walks-in-from-rain.jpg"
						alt="A man holding an umbrella walks in out of the rain"
						width={2540}
						height={1428}
						quality={80}
						className="w-full"
						priority
						/>
				</FluidBox>
				<FluidBox
					colStart={[2]}
					colEnd={[27, 27, 26]}
					rowStart={3}
					rowEnd={[4]}
					>
					<StoryblokImage
						src="https://a.storyblok.com/f/313088/7764x3882/1055f4a5d1/dogs-greet-each-other-at-hofburg.jpg"
						alt="Several dogs greeting each other at the Hofburg"
						width={1869}
						height={834}
						quality={80}
						className="w-full rounded-[2px]"
					/>
				</FluidBox>
				<FluidBox
					colStart={[2, 2, 4, 14]}
					colEnd={[26, 26, 26, 27]}
					rowStart={[5]}
					rowEnd={[8]}
				>
					<StoryblokImage
						src="https://a.storyblok.com/f/313088/1800x2314/d488b45088/portrait-of-ruslan.jpg"
						alt="A portrait of Ruslan"
						width={704}
						height={905}
						quality={80}
						className="shadow-xl w-full rounded-[2px]"
					/>
				</FluidBox>
				<FluidBox
					colStart={[2, 2, 2, 1]}
					colEnd={[26, 26, 26, 10]}
					rowStart={[9, 9, 9, 6]}
					rowEnd={[10]}
				>
					<StoryblokImage
						src="https://a.storyblok.com/f/313088/1800x2700/feccff1276/boy-looking-through-window.jpg"
						alt="A boy and his family walk through a museum door"
						width={768}
						height={1151}
						quality={80}
						className="shadow-xl w-full rounded-[2px]"
					/>
				</FluidBox>

				<FluidBox colStart={[2]} colEnd={[26]} rowStart={[11]} rowEnd={[12]}>
					<StoryblokImage
						src="https://a.storyblok.com/f/313088/7696x3523/9cd609c306/group-of-visitors-gather-around-a-wurst-stand.jpg"
						alt="A group of visitors gather around a wurst stand"
						width={1149}
						height={549}
						quality={80}
						className="shadow-xl w-full rounded-[2px]"
					/>
				</FluidBox>

				<FluidBox colStart={[1]} colEnd={[27,27,12]} rowStart={[13]} rowEnd={[14,14,17]}>
					<StoryblokImage
						src="https://a.storyblok.com/f/313088/8611x5740/e5fe5343b5/a-man-sits-quietly-reading-a-map-og.jpg"
						alt="A man sits quietly reading a map"
						width={1150}
						height={766}
						quality={80}
						className="shadow-xl w-full rounded-[2px]"
					/>
				</FluidBox>

				<FluidBox colStart={[1,1,13]} colEnd={[27]} rowStart={[15,15,13]} rowEnd={[17]}>
					<StoryblokImage
						src="https://a.storyblok.com/f/313088/1800x753/dbb1d117f7/woman-hailing-taxi-cab.jpg"
						alt="A cinematic photo of a woman hailing a taxi cab"
						width={1304}
						height={545}
						quality={80}
						className="shadow-xl w-full rounded-[2px]"
					/>
				</FluidBox>
				<FluidBox
					colStart={[1, 2]}
					colEnd={[27, 27, 25]}
					rowStart={[19]}
					rowEnd={22}
				>
					<StoryblokImage
						src="https://a.storyblok.com/f/313088/1500x999/4aa823a04f/young-girl-dancing-in-vienna.jpg"
						alt="A photo of a young girl dancing on the Vienna streets"
						width={736}
						height={490}
						quality={80}
						className="shadow-2xl w-full rounded-[2px]"
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
					<StoryblokImage
						src="https://a.storyblok.com/f/313088/1800x2705/696605a9cc/guard-stands-watch-at-deans-yard.jpg"
						alt="A photo of a guard standing watch by Dean's Yard in London"
						width={661}
						height={993}
						quality={80}
						className="shadow-xl w-full rounded-[2px]"
					/>
				</FluidBox>
				<FluidBox
					colStart={[2, 2, 13]}
					colEnd={[26, 26, 26]}
					rowStart={[30, 30, 28]}
					rowEnd={[32, 32, 31]}
				>
					<StoryblokImage
						src="https://a.storyblok.com/f/313088/1800x1847/96fc69403c/andre-headshot.jpg"
						alt="A portrait of Andre"
						width={416}
						height={427}
						quality={80}
						className="shadow-xl w-full rounded-[2px]"
					/>
				</FluidBox>
				<FluidBox colStart={[2]} colEnd={[26]} rowStart={[33]} rowEnd={[35]}>
					<StoryblokImage
						src="https://a.storyblok.com/f/313088/1800x2705/a322514087/georgia-portrait.jpg"
						alt="A portrait of Georgia"
						width={768}
						height={1154}
						quality={80}
						className="shadow-2xl w-full rounded-[2px]"
					/>
				</FluidBox>
				<FluidBox colStart={[2]} colEnd={[26]} rowStart={[38]} rowEnd={[39]}>
					<p>Enjoy your visit</p>
				</FluidBox>
			</FluidEngine>
		</div>
	)
}
