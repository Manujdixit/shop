"use client"

import { useState } from "react"
import Image from "next/image"
import { ZoomIn } from "lucide-react"

export function ImageGallery({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  return (
    <div>
      <div className="relative mb-4">
        <Image
          src={images[selectedImage] || "/placeholder.svg"}
          alt={`Product image ${selectedImage + 1}`}
          width={600}
          height={600}
          className="w-full h-auto rounded-lg"
        />
        <button
          onClick={() => setIsZoomed(!isZoomed)}
          className="absolute top-2 right-2 bg-white bg-opacity-75 p-2 rounded-full"
        >
          <ZoomIn size={20} />
        </button>
      </div>
      <div className="flex space-x-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`border-2 rounded-md overflow-hidden ${
              selectedImage === index ? "border-blue-500" : "border-gray-300"
            }`}
          >
            <Image src={image || "/placeholder.svg"} alt={`Product thumbnail ${index + 1}`} width={80} height={80} />
          </button>
        ))}
      </div>
      {isZoomed && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setIsZoomed(false)}
        >
          <Image
            src={images[selectedImage] || "/placeholder.svg"}
            alt={`Zoomed product image ${selectedImage + 1}`}
            width={1200}
            height={1200}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  )
}

