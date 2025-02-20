import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/AddToCartButton";
import { ImageGallery } from "@/components/ImageGallery";
import { CustomerReviews } from "@/components/CustomerReviews";

export const mockProducts = [
  {
    id: "1",
    name: "Wireless Headphones",
    brand: "Sony",
    price: 199.99,
    rating: 4.5,
    images: [
      "/products/headphones-1.jpg",
      "/products/headphones-2.jpg",
      "/products/headphones-3.jpg",
    ],
    description:
      "Premium wireless headphones with noise cancellation and long battery life.",
  },
  {
    id: "2",
    name: "Smartwatch Pro",
    brand: "Apple",
    price: 399.99,
    rating: 5,
    images: [
      "/products/smartwatch-1.jpg",
      "/products/smartwatch-2.jpg",
      "/products/smartwatch-3.jpg",
    ],
    description:
      "Advanced smartwatch with health tracking, GPS, and seamless phone integration.",
  },
  {
    id: "3",
    name: "Gaming Laptop",
    brand: "ASUS",
    price: 1299.99,
    rating: 4.8,
    images: [
      "/products/gaming-laptop-1.jpg",
      "/products/gaming-laptop-2.jpg",
      "/products/gaming-laptop-3.jpg",
    ],
    description:
      "High-performance gaming laptop with RTX graphics and a high refresh rate display.",
  },
  {
    id: "4",
    name: "Mechanical Keyboard",
    brand: "Keychron",
    price: 99.99,
    rating: 4.7,
    images: [
      "/products/keyboard-1.jpg",
      "/products/keyboard-2.jpg",
      "/products/keyboard-3.jpg",
    ],
    description:
      "RGB mechanical keyboard with hot-swappable switches and wireless connectivity.",
  },
  {
    id: "5",
    name: "4K Monitor",
    brand: "LG",
    price: 499.99,
    rating: 4.6,
    images: [
      "/products/monitor-1.jpg",
      "/products/monitor-2.jpg",
      "/products/monitor-3.jpg",
    ],
    description:
      "Ultra HD 4K monitor with HDR support and high color accuracy.",
  },
  {
    id: "6",
    name: "Wireless Mouse",
    brand: "Logitech",
    price: 49.99,
    rating: 4.5,
    images: [
      "/products/mouse-1.jpg",
      "/products/mouse-2.jpg",
      "/products/mouse-3.jpg",
    ],
    description:
      "Ergonomic wireless mouse with customizable buttons and smooth tracking.",
  },
  {
    id: "7",
    name: "Bluetooth Speaker",
    brand: "JBL",
    price: 129.99,
    rating: 4.7,
    images: [
      "/products/speaker-1.jpg",
      "/products/speaker-2.jpg",
      "/products/speaker-3.jpg",
    ],
    description:
      "Portable Bluetooth speaker with deep bass and water resistance.",
  },
  {
    id: "8",
    name: "Fitness Tracker",
    brand: "Fitbit",
    price: 149.99,
    rating: 4.4,
    images: [
      "/products/fitness-tracker-1.jpg",
      "/products/fitness-tracker-2.jpg",
      "/products/fitness-tracker-3.jpg",
    ],
    description:
      "Track your fitness activities, heart rate, and sleep quality.",
  },
  {
    id: "9",
    name: "Smart TV",
    brand: "Samsung",
    price: 799.99,
    rating: 4.8,
    images: [
      "/products/smart-tv-1.jpg",
      "/products/smart-tv-2.jpg",
      "/products/smart-tv-3.jpg",
    ],
    description: "55-inch Smart TV with 4K UHD resolution and smart features.",
  },
  {
    id: "10",
    name: "Noise Cancelling Earbuds",
    brand: "Bose",
    price: 249.99,
    rating: 4.6,
    images: [
      "/products/earbuds-1.jpg",
      "/products/earbuds-2.jpg",
      "/products/earbuds-3.jpg",
    ],
    description:
      "Compact noise-cancelling earbuds with premium sound and long battery life.",
  },
];

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
          <AddToCartButton productId={product.id} />
        </div>
      </div>
      <CustomerReviews productId={product.id} />
    </div>
  );
}
