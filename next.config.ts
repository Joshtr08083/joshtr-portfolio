import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['127.0.0.1', '192.168.0.165', '10.0.0.1', '10.0.0.3'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'www.durhamfurniture.com',
        port: '',
        pathname: '/**'
      },
    ]
  }
};

export default nextConfig;
