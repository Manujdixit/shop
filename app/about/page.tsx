import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-lg mb-4">
            Welcome to our e-commerce store! We are passionate about providing high-quality products and exceptional
            customer service to our valued customers.
          </p>
          <p className="text-lg mb-4">
            Our mission is to make online shopping easy, enjoyable, and accessible to everyone. We carefully curate our
            product selection to ensure that we offer only the best items at competitive prices.
          </p>
          <p className="text-lg">
            With years of experience in the e-commerce industry, our team is dedicated to continuously improving our
            platform and expanding our product range to meet the evolving needs of our customers.
          </p>
        </div>
        <div className="relative h-64 md:h-full">
          <Image
            src="/placeholder.svg?height=400&width=600&text=About+Us+Image"
            alt="About Us"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}

