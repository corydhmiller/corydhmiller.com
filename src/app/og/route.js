/* eslint-disable react/no-unknown-property */
import { ImageResponse } from "next/og"

export const runtime = "edge"

const getFonts = async () => {
  try {
    const juanaFontURL = new URL("../../../public/fonts/webFonts/JuanaBold/font.woff", import.meta.url);
    const hKGroteskFontURL = new URL("../../../public/fonts/webFonts/HKGrotesk/HKGrotesk-SemiBold.woff", import.meta.url);

    // Fetch both fonts in parallel
    const [juanaResponse, hKGroteskResponse] = await Promise.all([
      fetch(juanaFontURL),
      fetch(hKGroteskFontURL),
    ]);

    // Wait for both arrayBuffers in parallel
    const [juanaArrayBuffer, hKGroteskArrayBuffer] = await Promise.all([
      juanaResponse.arrayBuffer(),
      hKGroteskResponse.arrayBuffer(),
    ]);

    return {
      juanaFont: juanaArrayBuffer,
      hKGroteskFont: hKGroteskArrayBuffer,
    };
  } catch (error) {
    console.error('Error fetching fonts:', error);
    throw error;
  }
};

export async function GET(req) {
	const requestUrl = new URL(req.url)
	const title = decodeURIComponent(requestUrl.searchParams.get("title") || "")
	const fonts = await getFonts()

	return new ImageResponse(
		(
			<div
				style={{
					background: "#1c1c27",
				}}
				tw="flex justify-center flex-col text-left w-full h-full text-white"
			>
				<div
					tw="flex w-1/2 h-full absolute bottom-1/2 left-1/2"
					style={{
						transform: "translateY(50%) translateX(-50%)",
						opacity: ".31",
						transformOrigin: "left top",
						filter: "blur(100px)",
						background: "#ac5cd9",
					}}
				></div>
				<div
					tw="flex h-1/2 absolute bottom-1/2 left-1/2"
					style={{
						transform: "rotate(10deg) translateY(50%) translateX(-50%)",
						opacity: ".31",
						transformOrigin: "left top",
						filter: "blur(100px)",
						width: "150%",
						background: "#3d7bfa",
					}}
				></div>
				<div
					tw="flex h-1/2 absolute bottom-1/2 left-1/2"
					style={{
						transform: "rotate(-45deg) translateY(50%) translateX(-50%)",
						opacity: "0.05",
						transformOrigin: "left top",
						filter: "blur(100px)",
						width: "150%",
						background: "#ff5c5c",
					}}
				></div>
				<div
					tw="flex absolute bottom-0 left-0"
					style={{
						opacity: "1",
						filter: "blur(100px)",
						background: "#fdac41",
						height: "300px",
						width: "300px",
						transform: "translateY(50%) translateX(-50%)",
					}}
				></div>
				<div
					tw="flex absolute items-center justify-between w-full bottom-8 text-7 px-8"
					style={{
						fontFamily: "HKGrotesk",
					}}
				>
					<div
						tw={`text-white font-serif font-bold text-6xl opacity-80`}
					>
						/C
					</div>
					<div tw="flex items-center">
							<img
								src="https://corydhmiller.com/images/cory-miller-profile-picture.jpg"
								tw="rounded-full w-16 h-16"
								alt=""
							/>
						<div tw="flex ml-8 text-6" style={{ color: "#fccc75" }}>
							corydhmiller.com
						</div>
					</div>
				</div>
				<div
					tw="flex h-1/2 absolute bottom-1/2 left-1/2"
					style={{
						transform: "rotate(-5deg) translateY(50%) translateX(-50%)",
						opacity: ".1",
						filter: "blur(100px)",
						width: "110%",
						background: "#fdac41",
					}}
				></div>
				<div
					tw="flex justify-center items-center h-full text-24 relative leading-none mb-12 px-12 w-full opacity-90"
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
					data: fonts.juanaFont,
					style: "normal",
					weight: "400",
				},
				{
					name: "HKGrotesk",
					data: fonts.hKGroteskFont,
					style: "normal",
					weight: "400",
				},
			],
		}
	)
}
