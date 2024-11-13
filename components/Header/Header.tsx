import Link from "next/link"

export const Header = () => {
	return (
		<header className="p-6 w-100vw">
			<Link href="/" passHref>
				<div
					className={`text-gray-400 font-serif transform inline-block font-bold text-6xl cursor-pointer hover:text-orange-400 focus:text-orange-400 transition-colors duration-500`}
				>
					/C
				</div>
			</Link>
		</header>
	)
}
