import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-8">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <p className="text-gray-600">
            &copy; 2025 E-commerce. All rights reserved.
          </p>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-gray-800"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
