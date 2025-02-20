import { Star } from "lucide-react"

// Mock review data
const mockReviews = [
  { id: 1, author: "John Doe", rating: 5, comment: "Great product! Highly recommended." },
  { id: 2, author: "Jane Smith", rating: 4, comment: "Good quality, but a bit pricey." },
  { id: 3, author: "Bob Johnson", rating: 3, comment: "Average product. Does the job." },
]

export function CustomerReviews({ productId }: { productId: number }) {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
      <div className="space-y-4">
        {mockReviews.map((review) => (
          <div key={review.id} className="border-b pb-4">
            <div className="flex items-center mb-2">
              <div className="flex mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}
                  />
                ))}
              </div>
              <span className="font-semibold">{review.author}</span>
            </div>
            <p className="text-gray-600">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

