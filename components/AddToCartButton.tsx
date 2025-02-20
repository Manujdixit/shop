"use client"

import { useState } from "react"
import { ShoppingCart } from "lucide-react"

export function AddToCartButton({ productId }: { productId: number }) {
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    // Here you would typically add the product to the cart
    // For now, we'll just toggle the button state
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <button
      onClick={handleAddToCart}
      className={`flex items-center justify-center px-6 py-3 rounded-md text-white transition-colors ${
        isAdded ? "bg-green-500" : "bg-blue-500 hover:bg-blue-600"
      }`}
      disabled={isAdded}
    >
      {isAdded ? (
        "Added to Cart!"
      ) : (
        <>
          <ShoppingCart className="mr-2" size={20} />
          Add to Cart
        </>
      )}
    </button>
  )
}

