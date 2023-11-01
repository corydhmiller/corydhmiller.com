import Image from "next/image"
import { ImageResponse } from "next/og"

export const runtime = "edge"

const getJuanaFont = async () => {
	const response = await fetch(
		new URL("../../public/fonts/webFonts/JuanaBold/font.woff", import.meta.url)
	)
	const Juana = await response.arrayBuffer()

	return Juana
}

const getHKGroteskFont = async () => {
	const response = await fetch(
		new URL(
			"../../public/fonts/webFonts/HKGrotesk/HKGrotesk-SemiBold.woff",
			import.meta.url
		)
	)
	const HKGrotesk = await response.arrayBuffer()
	return HKGrotesk
}

export async function GET(req) {
	const requestUrl = new URL(req.url)
	const title = decodeURIComponent(requestUrl.searchParams.get("title") || "")
	// const posts = getAllPosts()
	// console.log(posts)
	return new ImageResponse(
		(
			<div
				style={{
					// background: "#1c1c27",
					// use 1c1c27 and 28293d for gradient
					// 10% lightere for 1c1c27
					background: "linear-gradient(107deg, #272735 0%, #1c1c27 100%)",
				}}
				tw="flex justify-center flex-col  text-center w-full h-full text-white"
			>
				<div
					tw="flex absolute items-center justify-between w-full bottom-8 text-7 px-8"
					style={{
						fontFamily: "HKGrotesk",
						color: "#ff8802",
					}}
				>
					<div
						tw={`text-gray-400 font-serif transform inline-block font-bold text-6xl cursor-pointer hover:text-orange-400 focus:text-orange-400 transition-colors duration-500`}
					>
						/C
					</div>
					<div tw="flex flex-col">
						<div tw="flex flex-col"></div>
						<div tw="flex flex-col">corydhmiller.com</div>
					</div>
				</div>
				<div
					tw="flex text-24 relative leading-none mb-12 px-12"
					style={{
						fontFamily: "Juana",
					}}
				>
					{title}
				</div>
			</div>
		),
		{
			width: 1200,
			height: 600,
			fonts: [
				{
					name: "Juana",
					data: await getJuanaFont(),
					style: "normal",
					weight: "400",
				},
				{
					name: "HKGrotesk",
					data: await getHKGroteskFont(),
					style: "normal",
					weight: "400",
				},
			],
		}
	)
}
