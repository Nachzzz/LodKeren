import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow your local network IP to access dev resources
  allowedDevOrigins: ['192.168.100.5'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;