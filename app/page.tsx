"use client";

import Image from "next/image";
import Link from "next/link";
import { SearchBar } from "@/components/SearchBar";
import { FilterSection } from "@/components/FilterSection";
import banner from "../public/banner.jpg";
import { CarouselDemo } from "@/components/CarouselDemo";
import { mockProducts } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { useFilter } from "@/contexts/FilterContext";
import { Product } from "@/data/products";

export default function Home() {
  return (
    <div>
      {/* Banner Section with Search */}
      <section className="relative h-[60vh] min-h-[400px]">
        <Image
          src={banner}
          alt="Banner"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold mb-8">
            Welcome to E-commerce
          </h1>
          <SearchBar />
        </div>
      </section>

      {/* Carousel Section */}
      <section className="my-12 w-screen flex flex-col justify-center items-center">
        <label className="text-2xl font-bold">Featured Products</label>
        <CarouselDemo />
      </section>

      {/* Filter Section */}
      <section className="my-12">
        <div className="container flex flex-col gap-2 justify-center items-center mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Find Product</h2>
          <FilterSection />
        </div>
      </section>

      {/* Featured Products */}
      <section className="my-12">
        <div className="container mx-auto px-4">
          <FilteredProducts products={mockProducts} />
          <div className="text-center mt-8">
            <Link
              href="/products"
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function FilteredProducts({ products }: { products: Product[] }) {
  const { filterProducts } = useFilter();
  const filteredProducts = filterProducts(products);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
