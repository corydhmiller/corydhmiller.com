import getImageSize from "image-size"
import type { MDXComponents } from "mdx/types"
import Image from "next/image"
import path from "path"

export function useMDXComponents(components: MDXComponents): MDXComponents {

	return {

		img: (props) => {
			// Copy props into new object since it's locked
			const newProps = { ...props }

			const isLocalImage = !props.src.startsWith("http")

			// If no dimensions are defined, let's find it!
			if (!props.width && !props.height && isLocalImage) {
				// Extract the file name and path. You may need to adjust this for your app.
				const fileName = props.src.replace("/images", "") // e.g. file.png, or /subdir/file.png
				const filePath = path.join(process.cwd(), "public", "images", fileName)

				const dimensions = getImageSize(filePath)

				newProps.width = dimensions.width
				newProps.height = dimensions.height
			}

			return (
				<>
					donk
					<Image {...newProps} />
				</>
			)
		},
	}
}
