// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed output: "export" to enable dynamic features for admin CMS
  output: "export",
  // For deployment, you'll need Node.js hosting (Vercel, Netlify, VPS with Node.js)
  
  // Keep unoptimized images if deploying to static hosting for public pages
  images: {
    unoptimized: true,
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
    ],
  },

  // Optional but recommended
  trailingSlash: true, // helps Apache routing
};


export default nextConfig;
