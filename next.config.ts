import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    quality: 90,
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
