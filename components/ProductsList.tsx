"use client";

import { mockProducts } from "@/data/products";
import { FilterSection } from "@/components/FilterSection";
import { ProductCard } from "@/components/ProductCard";
import { useFilter } from "@/contexts/FilterContext";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function ProductsList() {
  const searchParams = useSearchParams();
  const { setSearchQuery, filterProducts, searchQuery } = useFilter();

  useEffect(() => {
    const search = searchParams.get("search");
    setSearchQuery(search || "");
  }, [searchParams, setSearchQuery]);

  const filteredProducts = filterProducts(mockProducts);

  return (
    <div className="container mx-auto px-4 py-8">
      {searchQuery ? (
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Search Results</h1>
          <p className="text-gray-600 mt-2">
            Found {filteredProducts.length} results for "{searchQuery}"
          </p>
        </div>
      ) : (
        <h1 className="text-3xl font-bold mb-8">All Products</h1>
      )}

      <FilterSection />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-full text-center py-8">
            <p className="text-gray-500">
              No products found matching your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
