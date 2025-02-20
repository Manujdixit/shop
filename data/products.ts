export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  rating: number;
  images: string[];
  description: string;
}
export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    brand: "Sony",
    price: 199.99,
    rating: 4.5,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60", // Headphones
      "https://images.unsplash.com/photo-1578319439584-104c94d37305?w=800&auto=format&fit=crop&q=60", // Headphones on desk
      "https://images.unsplash.com/photo-1618366719320-3f2b0a2b0b0b?w=800&auto=format&fit=crop&q=60", // Headphones in case
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
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&auto=format&fit=crop&q=60", // Apple Watch
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&auto=format&fit=crop&q=60", // Apple Watch on wrist
      "https://images.unsplash.com/photo-1578303512597-81e6f9d6b5d1?w=800&auto=format&fit=crop&q=60", // Apple Watch box
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
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=800&auto=format&fit=crop&q=60", // Gaming Laptop
      "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&auto=format&fit=crop&q=60", // Laptop keyboard
      "https://images.unsplash.com/photo-1598550880863-4e3066f83172?w=800&auto=format&fit=crop&q=60", // Laptop setup
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
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=60", // Mechanical Keyboard
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&auto=format&fit=crop&q=60", // RGB Keyboard
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&auto=format&fit=crop&q=60", // Wireless Keyboard
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
      "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=800&auto=format&fit=crop&q=60", // 4K Monitor
      "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=800&auto=format&fit=crop&q=60", // Monitor setup
      "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=800&auto=format&fit=crop&q=60", // Ultrawide Monitor
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
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=800&auto=format&fit=crop&q=60", // Wireless Mouse
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=800&auto=format&fit=crop&q=60", // Mouse on desk
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=800&auto=format&fit=crop&q=60", // Gaming Mouse
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
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=60", // Bluetooth Speaker
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=60", // Portable Speaker
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=60", // Speaker outdoors
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
      "https://images.unsplash.com/photo-1589476993333-f55b84301219?w=800&auto=format&fit=crop&q=60", // Fitness Tracker
      "https://images.unsplash.com/photo-1589476993333-f55b84301219?w=800&auto=format&fit=crop&q=60", // Tracker on wrist
      "https://images.unsplash.com/photo-1589476993333-f55b84301219?w=800&auto=format&fit=crop&q=60", // Tracker app
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
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&auto=format&fit=crop&q=60", // Smart TV
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&auto=format&fit=crop&q=60", // TV in living room
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&auto=format&fit=crop&q=60", // TV remote
    ],
    description: "55-inch Smart TV with 4K UHD resolution and smart features.",
  },
];
