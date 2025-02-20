"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@/data/products";

interface FilterContextType {
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  brand: string;
  setBrand: (brand: string) => void;
  rating: string;
  setRating: (rating: string) => void;
  filterProducts: (products: Product[]) => Product[];
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: ReactNode }) {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [brand, setBrand] = useState("");
  const [rating, setRating] = useState("");

  const filterProducts = (products: Product[]) => {
    return products.filter((product) => {
      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesBrand = brand === "" || product.brand === brand;
      const matchesRating = rating === "" || product.rating >= Number(rating);
      return matchesPrice && matchesBrand && matchesRating;
    });
  };

  return (
    <FilterContext.Provider
      value={{
        priceRange,
        setPriceRange,
        brand,
        setBrand,
        rating,
        setRating,
        filterProducts,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) throw new Error("useFilter must be used within FilterProvider");
  return context;
};
