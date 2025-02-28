import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          E-commerce
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-gray-600 hover:text-gray-800">
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="text-gray-600 hover:text-gray-800">
              Products
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-600 hover:text-gray-800">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

