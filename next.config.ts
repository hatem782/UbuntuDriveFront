import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: "/", // The page you want to redirect from (e.g., a protected route)
        destination: "/login", // The page you want to redirect to (e.g., login page)
        permanent: false, // Set to true if you want a permanent redirect (301), false for temporary (302)
      },
    ];
  },
};

export default nextConfig;
