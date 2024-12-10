import Link from "@components/UI/Link"

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

	return (
		<div className="flex justify-between items-center mt-8">
			{currentPage > 1 && (
				<Link href={`/blog?page=${currentPage - 1}`} variant="primary">
					← Previous
				</Link>
			)}
			<span className="text-sm">
				Page {currentPage} of {totalPages}
			</span>
			{currentPage < totalPages && (
				<Link href={`/blog?page=${currentPage + 1}`} variant="primary">
					Next →
				</Link>
			)}
		</div>
	)
}

export default PaginationControls
