import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // No global SSR disable option. To enforce CSR on pages/components, use 'use client' directive.
  // See: https://nextjs.org/docs/messages/invalid-next-config

  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  webpack(config) {
    // No additional raw-loader config required.
    return config;
  },
};

export default nextConfig;