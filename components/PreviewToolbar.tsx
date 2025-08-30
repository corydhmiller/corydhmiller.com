"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function PreviewToolbar({ enabled }: { enabled?: boolean }) {
	const pathname = usePathname()
	if (!enabled) return null

	return (
		<div className="fixed top-0 right-0 z-50">
			<Link
				prefetch={false}
				href={`/api/exit-draft?pathname=${pathname}`}
				className="bg-white px-4 py-2 rounded text-xs hover:bg-gray-100 transition-colors"
			>
				Refresh Preview
			</Link>
		</div>
	)
}
