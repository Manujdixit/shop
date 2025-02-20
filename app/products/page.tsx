"use client";

import { mockProducts } from "@/data/products";
import { FilterSection } from "@/components/FilterSection";
import { ProductCard } from "@/components/ProductCard";
import { useFilter } from "@/contexts/FilterContext";

export default function ProductsPage() {
  const { filterProducts } = useFilter();
  const filteredProducts = filterProducts(mockProducts);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>
      <FilterSection />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
