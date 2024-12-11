import Link from "@components/UI/Link"
import FeatherIcon from "feather-icons-react"

import Button from "../UI/Button/Button"

interface PaginationControlsProps {
	currentPage: number
	totalPosts: number
	postsPerPage: number
}

const PaginationControls = ({
	currentPage,
	totalPosts,
	postsPerPage,
}: PaginationControlsProps) => {
	const totalPages = Math.ceil(totalPosts / postsPerPage) || 1

	if (totalPages === 1) return null

	return (
		<div className="flex justify-between items-center mt-8">
			<div>
				{currentPage > 1 && (
					<Link
						href={`/blog?page=${currentPage - 1}`}
						variant="primary"
						className="flex items-center gap-1 text-sm"
					>
						<FeatherIcon icon="chevron-left" size={16} />
						<span className="hidden sm:inline">Previous</span>
					</Link>
				)}
			</div>
			<span className="text-sm opacity-60">
				Page {currentPage} of {totalPages}
			</span>
			<div>
				{currentPage < totalPages && (
					<Link
						href={`/blog?page=${currentPage + 1}`}
						variant="primary"
						className="flex items-center gap-1 text-sm"
					>
						<span className="hidden sm:inline">Next</span>
						<FeatherIcon icon="chevron-right" size={16} />
					</Link>
				)}
			</div>
		</div>
	)
}

export default PaginationControls
