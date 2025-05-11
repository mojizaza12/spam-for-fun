import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  module.exports = {
  webpack: (config, { isServer }) => {
    // Prevent loading the problematic SWC modules
    config.resolve.alias = {
      ...config.resolve.alias,
      '@next/swc-linux-x64-gnu': false,
      '@next/swc-linux-x64-musl': false
    }
    return config
  }
}
};

export default nextConfig;
