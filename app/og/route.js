/* eslint-disable react/no-unknown-property */
import { ImageResponse } from "next/og"

export const runtime = "edge"

const getGrazieMilleFont = async () => {
	const response = await fetch(
		new URL(
			"../../public/fonts/webFonts/grazie_mille/variable/GrazieMille.woff",
			import.meta.url
		)
	)
	const GrazieMille = await response.arrayBuffer()

	return GrazieMille
}

export async function GET(req) {
	const requestUrl = new URL(req.url)
	const title = decodeURIComponent(requestUrl.searchParams.get("title") || "")
	const image = decodeURIComponent(requestUrl.searchParams.get("image") || "")

	return new ImageResponse(
		(
			<div
				style={{
					background: "#141414",
				}}
				tw="relative overflow-hidden flex justify-center flex-col text-left w-full h-full text-white"
			>
				{image ? (
					<img
						src={image}
						alt="background"
						width={1200}
						height={600}
						tw="absolute inset-0 w-full h-full opacity-10"
						style={{
							objectFit: "cover",
						}}
					/>
				) : null}
				<div
					tw="flex flex-col justify-center items-center h-3/5 absolute right-0 top-1/2 transform w-48 rounded-12 overflow-hidden"
					style={{
						transform: "translateY(-50%) translateX(70%)",
						background: "#EEEEEC",
						zIndex: 10,
					}}
				></div>
				<div
					tw="flex justify-center items-center h-full text-24 relative font-black leading-none mb-12 mr-28 pl-12 opacity-100"
					style={{
						fontFamily: "GrazieMille",
						zIndex: 20,
					}}
				>
					{title}
				</div>
				<div
					tw="flex justify-center items-center text-8 absolute bottom-0 left-0 leading-none mb-4 px-12 opacity-50"
					style={{
						fontFamily: "GrazieMille",
						zIndex: 30,
					}}
				>
					corydhmiller.com
				</div>
			</div>
		),
		{
			width: 1200,
			height: 600,
			fonts: [
				{
					name: "GrazieMille",
					data: await getGrazieMilleFont(),
					style: "normal",
					weight: "400",
				},
			],
		}
	)
}
