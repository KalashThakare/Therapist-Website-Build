import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable React Strict Mode
  reactStrictMode: true,

  // Optional: Add custom webpack config to handle hydration issues
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve = {
        ...config.resolve,
        fallback: {
          ...config.resolve?.fallback,
          fs: false,
        },
      };
    }
    return config;
  },
};

export default nextConfig;
