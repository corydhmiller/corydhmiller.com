import Link from "@/components/UI/Link"
import { formatDate } from "@/src/utils/dates.utils"

import { cn } from "@/src/utils/cn.utils"
import Image from "next/image"

type BlogArchivePostCardProps = {
	slug: string
	name: string
	created_at: string
	content: {
		excerpt: string
		image: {
			filename: string
			alt: string
			description: string
		}
	}
	priority?: boolean
}

const BlogArchivePostCard = ({
	slug,
	name,
	created_at,
	content,
	priority,
}: BlogArchivePostCardProps) => {
	return (
		<div
			className={cn(
				"relative overflow-hidden dark:bg-gray-400/20 rounded border border-gray-800/10 hover:scale-[101%] transition-transform duration-200 group"
			)}
		>
			{content?.image && (
				<Link variant="naked" href={`/blog/${slug}`}>
					<Image
						src={content.image.filename}
						alt={content.image.alt}
						width={488}
						height={323}
						className="w-full max-h-[300px] object-cover group-hover:opacity-100 opacity-75 transition-opacity duration-300"
						priority={priority}
					/>
				</Link>
			)}
			<div className="p-4 flex flex-col gap-4">
				<Link href={`/blog/${slug}`} className="text-2xl sm:text-3xl font-bold">
					{name}
				</Link>
				{created_at && (
					<span className="text-sm block opacity-60">
						{formatDate(created_at)}
					</span>
				)}
				<p className="prose-lg opacity-80">{content.excerpt}</p>
			</div>
		</div>
	)
}

export default BlogArchivePostCard
