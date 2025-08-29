export default function PreviewBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-yellow-400 text-black px-4 py-2 text-sm font-medium shadow-md">
      <div className="flex items-center justify-between max-w-4xl mx-auto">
        <span>
          🔍 Preview Mode - You are viewing draft content
        </span>
        <a
          href="/api/disable-draft"
          className="bg-white px-3 py-1 rounded text-xs hover:bg-gray-100 transition-colors"
        >
          Exit Preview
        </a>
      </div>
    </div>
  )
}