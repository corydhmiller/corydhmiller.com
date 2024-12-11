import Link from "@/components/UI/Link"
import { formatDate } from "@/src/utils/dates.utils"
import styles from "./BlogArchivePostCard.module.css"
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
		<div
			className={cn(
				styles.card,
				"dark:hover:bg-gray-800 dark:bg-opacity-100 hover:bg-white hover:bg-opacity-100 hover:rounded-xl p-4 sm:p-8"
			)}
		>
			<Link href={`/blog/${slug}`}>{name}</Link>
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
