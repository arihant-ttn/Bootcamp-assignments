import type { NextConfig } from "next";

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.dummyjson.com"],
  },
  
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  
};

module.exports = withBundleAnalyzer(nextConfig);
