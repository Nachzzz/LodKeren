import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co', // Permitimos este dominio temporal
        port: '',
        pathname: '/**',
      },
      // Si más adelante usas imágenes de otro lado (ej: Cloudinary o un CDN),
      // tendrás que agregarlo aquí también.
    ],
  },
};

export default nextConfig;