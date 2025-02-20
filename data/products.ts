export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  rating: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    brand: "Sony",
    price: 199.99,
    rating: 4.5,
    image: "/products/headphones.jpg",
    description: "Premium wireless headphones with noise cancellation",
  },
  {
    id: "2",
    name: "Smartwatch Pro",
    brand: "Apple",
    price: 399.99,
    rating: 5,
    image: "/products/smartwatch.jpg",
    description: "Advanced smartwatch with health tracking",
  },
  {
    id: "3",
    name: "Gaming Laptop",
    brand: "ASUS",
    price: 1299.99,
    rating: 4.8,
    image: "/products/gaming-laptop.jpg",
    description: "High-performance gaming laptop with RTX graphics",
  },
  {
    id: "4",
    name: "Mechanical Keyboard",
    brand: "Keychron",
    price: 99.99,
    rating: 4.7,
    image: "/products/keyboard.jpg",
    description: "RGB mechanical keyboard with hot-swappable switches",
  },
  {
    id: "5",
    name: "4K Monitor",
    brand: "LG",
    price: 499.99,
    rating: 4.6,
    image: "/products/monitor.jpg",
    description: "Ultra HD 4K monitor with HDR support",
  },
  {
    id: "6",
    name: "Wireless Mouse",
    brand: "Logitech",
    price: 49.99,
    rating: 4.5,
    image: "/products/mouse.jpg",
    description: "Ergonomic wireless mouse with customizable buttons",
  },
  {
    id: "7",
    name: "Bluetooth Speaker",
    brand: "JBL",
    price: 129.99,
    rating: 4.7,
    image: "/products/speaker.jpg",
    description: "Portable Bluetooth speaker with deep bass",
  },
  {
    id: "8",
    name: "Fitness Tracker",
    brand: "Fitbit",
    price: 149.99,
    rating: 4.4,
    image: "/products/fitness-tracker.jpg",
    description: "Track your fitness activities and heart rate",
  },
  {
    id: "9",
    name: "Smart TV",
    brand: "Samsung",
    price: 799.99,
    rating: 4.8,
    image: "/products/smart-tv.jpg",
    description: "55-inch Smart TV with 4K UHD resolution",
  },
  {
    id: "10",
    name: "Noise Cancelling Earbuds",
    brand: "Bose",
    price: 249.99,
    rating: 4.6,
    image: "/products/earbuds.jpg",
    description: "Compact noise-cancelling earbuds with premium sound",
  },
];
