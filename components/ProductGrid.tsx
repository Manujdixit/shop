"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

// Mock product data
const mockProducts = [
  { id: 1, name: "Product 1", price: 19.99, image: "/placeholder.svg?height=300&width=300&text=Product+1" },
  { id: 2, name: "Product 2", price: 29.99, image: "/placeholder.svg?height=300&width=300&text=Product+2" },
  { id: 3, name: "Product 3", price: 39.99, image: "/placeholder.svg?height=300&width=300&text=Product+3" },
  { id: 4, name: "Product 4", price: 49.99, image: "/placeholder.svg?height=300&width=300&text=Product+4" },
  { id: 5, name: "Product 5", price: 59.99, image: "/placeholder.svg?height=300&width=300&text=Product+5" },
  { id: 6, name: "Product 6", price: 69.99, image: "/placeholder.svg?height=300&width=300&text=Product+6" },
]

export function ProductGrid() {
  const [products, setProducts] = useState(mockProducts)
  const searchParams = useSearchParams()

  useEffect(() => {
    const search = searchParams.get("search")
    if (search) {
      const filteredProducts = mockProducts.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase()),
      )
      setProducts(filteredProducts)
    } else {
      setProducts(mockProducts)
    }
  }, [searchParams])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg overflow-hidden shadow-md">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={300}
            height={300}
            className="w-full h-auto"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
            <Link
              href={`/products/${product.id}`}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

