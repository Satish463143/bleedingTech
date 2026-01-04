// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ⚠️ IMPORTANT: Removed  because we're using:
  // 1. Dynamic routes with backend API calls
  // 2. Client-side data fetching
  // 3. Server components
  // For deployment, use Vercel, Netlify, or VPS with Node.js
  // output: "export",
  async headers() {
    return [
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400',
          },
        ],
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.s3.*.amazonaws.com", // Allow S3 images
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "bleeding-tech.s3.eu-north-1.amazonaws.com", // Specific S3 bucket
        pathname: "/**",
      },
    ],
  },

  // Optional but recommended
  trailingSlash: true, // helps with routing
};

export default nextConfig;
