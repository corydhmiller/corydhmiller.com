import Link from "@/components/UI/Link"
import { MarkdownCode } from "./markdownComponents/MarkdownCode"
import { MarkdownImage } from "./markdownComponents/MarkdownImage"

export const MarkdownComponents: object = {
	code: MarkdownCode,
	pre: MarkdownCode,
	img: MarkdownImage,
	a: ({ href, children }: { href: string; children: React.ReactNode }) => {
		return (
			<Link variant="primary" href={href}>
				{children}
			</Link>
		)
	},
}
 