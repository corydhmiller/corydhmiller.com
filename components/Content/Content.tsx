const Content = ({ children }) => {
	return (
		<div className="px-8 prose-xl prose-pre:bg-transparent prose-p:max-w-3xl prose-headings:text-gray-800 dark:prose-headings:text-white prose-strong:text-gray-800 dark:prose-strong:text-white prose-h1:text-3xl sm:prose-h1:text-8xl text-gray-800 dark:text-white text-balance prose-figcaption:text-sm sm:prose-figcaption:text-base prose-figcaption:italic prose-img:max-w-3xl prose-img:w-full prose-blockquote:text-3xl prose-blockquote:max-w-3xl prose-blockquote:text-center  prose-blockquote:border-primary prose-blockquote:border-2 prose-blockquote:rounded-lg prose-blockquote:px-4 prose-blockquote:relative prose-blockquote:bg-primary/10 prose-blockquote:dark:bg-gray-800/80">
			<div className="max-w-6xl mx-auto">{children}</div>
		</div>
	)
}

export default Content
