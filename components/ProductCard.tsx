import Image from "next/image";
import { Product } from "@/data/products";
import { ViewDetailsButton } from "./ViewDetailsButton";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.brand}</p>

        <div className="flex  justify-between items-center mt-2">
          <span className="text-lg font-bold text-blue-600">
            ${product.price.toFixed(2)}
          </span>
          <div className="flex items-center">
            <span className="text-yellow-400">★</span>
            <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
          </div>
          <ViewDetailsButton productId={Number(product.id)} />
        </div>
      </div>
    </div>
  );
}
