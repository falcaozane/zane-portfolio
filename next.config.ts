import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.shields.io',
        port: '',
        pathname: '/**',
      },
      
// Wikimedia Commons originals & thumbs
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/wikipedia/commons/**',
      },
      // Google-hosted Cloud logo on gstatic
      {
        protocol: 'https',
        hostname: 'gstatic.com',
        pathname: '/devrel-devsite/**',
      },

    ],
  },
};

export default nextConfig;
