import Link from "@/components/UI/Link"
import { formatDate } from "@/src/utils/dates.utils"

import { cn } from "@/src/utils/cn.utils"

type BlogArchivePostCardProps = {
	slug: string
	name: string
	created_at: string
	content: {
		excerpt: string
	}
}

const BlogArchivePostCard = ({
	slug,
	name,
	created_at,
	content,
}: BlogArchivePostCardProps) => {
	return (
		<div className={cn("pl-4 py-12 pr-28 relative overflow-hidden border-b border-gray-200/50 dark:border-gray-700")}>
			<Link href={`/blog/${slug}`} className="text-2xl sm:text-3xl font-bold">
				{name}
			</Link>
			{created_at && (
				<span className="text-sm block opacity-60">
					{formatDate(created_at)}
				</span>
			)}
			{content?.excerpt && (
				<span className="prose-xl text-gray-800 dark:text-gray-100">
					{content.excerpt}
				</span>
			)}
		</div>
	)
}

export default BlogArchivePostCard
