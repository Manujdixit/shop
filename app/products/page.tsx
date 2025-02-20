"use client";

import { Suspense } from "react";
import ProductsList from "../../components/ProductsList";

export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsList />
    </Suspense>
  );
}
