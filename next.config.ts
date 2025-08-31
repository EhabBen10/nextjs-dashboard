import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    ppr: 'incremental' //value allows you to adopt PPR for specific routes.
  }
};

export default nextConfig;
