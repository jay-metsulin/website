import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {},
  webpack: (config) => {
    config.watchOptions = {
      poll: 3000,
      aggregateTimeout: 1000,
      ignored: ["**/node_modules/**", "**/.next/**", "**/.git/**"],
    };
    return config;
  },
};

export default nextConfig;


