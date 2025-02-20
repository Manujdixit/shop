"use client";

import Image from "next/image";
import Link from "next/link";
import { SearchBar } from "@/components/SearchBar";
import { FilterSection } from "@/components/FilterSection";
import banner from "../public/banner.jpg";
import { CarouselDemo } from "@/components/CarouselDemo";
import { mockProducts } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { Product } from "@/data/products";

export default function Home() {
  return (
    <div>
      {/* Banner Section */}
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

      {/* Carousel*/}
      <section className="my-12 w-screen flex flex-col justify-center items-center">
        <label className="text-2xl font-bold">Featured Products</label>
        <CarouselDemo />
      </section>

      <section className="my-12">
        <div className="container mx-auto px-4 justify-center items-center flex-col">
          <h2 className="text-2xl font-bold mb-4">Products</h2>
          <Products products={mockProducts} />
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

function Products({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
