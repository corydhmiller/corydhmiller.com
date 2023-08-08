import { Heading, useColorMode } from "@chakra-ui/react"
import Link from "next/link"

export const Header = () => {
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
			</Heading>
		</header>
	)
}
