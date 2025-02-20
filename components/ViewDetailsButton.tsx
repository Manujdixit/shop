import Link from "next/link";

interface ViewDetailsButtonProps {
  productId: number;
}

export function ViewDetailsButton({ productId }: ViewDetailsButtonProps) {
  return (
    <Link
      href={`/products/${productId}`}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors inline-block text-center"
    >
      View Details
    </Link>
  );
}
