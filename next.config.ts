import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "images.pexels.com",
    ], // Add the domain here
  },
};

export default nextConfig;
