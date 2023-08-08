import { Button, Heading, useColorMode } from "@chakra-ui/react"
import Link from "next/link"

export const Header = () => {
	const { colorMode, setColorMode } = useColorMode()
	return (
		<header>
			<Heading
				color="gray.400"
				fontWeight="bold"
				fontSize="6xl"
				transform="inline-block"
				cursor="pointer"
				transition="color 200ms ease-in-out"
				_hover={{
					color: "orange.400",
				}}
				_focus={{
					color: "orange.400",
				}}
			>
				<Link href="/" passHref>
					/C
				</Link>

				<Button
					onClick={() => {
						setColorMode(colorMode === "light" ? "dark" : "light")
					}}
				>
					{colorMode === "light" ? "Dark" : "Light"}
				</Button>
			</Heading>
		</header>
	)
}
