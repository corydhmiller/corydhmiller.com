import { motion } from "framer-motion"
import { cn } from "@utils/cn.utils"
import BlurImage from "../BlurImage"

interface PhotoCardProps {
  photo: any
  index: number
  focusedIndex: number
  onSelect: (photo: any) => void
  onFocus: (index: number) => void
}

export function PhotoCard({ photo, index, focusedIndex, onSelect, onFocus }: PhotoCardProps) {
  return (
    <motion.div
      key={photo.id}
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div
        id={`photo-${photo.id}`}
        tabIndex={0}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        onClick={() => onSelect(photo)}
        onFocus={() => onFocus(index)}
        className={cn(
          "relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg shadow-sm",
          focusedIndex === index && "ring-2 ring-blue-500"
        )}
      >
        <BlurImage
          src={photo.content.image.filename + "/m/500x0"}
          alt={photo.content.image.alt}
          className="h-full w-full object-cover transition-opacity duration-500"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
    </motion.div>
  )
} 