import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/AddToCartButton";
import { ImageGallery } from "@/components/ImageGallery";
import { mockProducts } from "@/data/products";

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = mockProducts.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ImageGallery images={product.images} />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold mb-4">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <AddToCartButton productId={Number(product.id)} />
        </div>
      </div>
    </div>
  );
}
