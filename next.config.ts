import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  experimental: {
    scrollRestoration: true,
    optimizeCss: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.digitalax.xyz",
        pathname: "/ipfs/**",
      },
    ],

    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/%D8%A7%D9%84%D9%83%D9%88%D8%AF-%D9%87%D9%86%D8%A7",
        destination: "/code-here/",
        permanent: true,
      },
      {
        source: "/%D7%A4%D7%A8%D7%95%D7%99%D7%A7%D7%98%D7%99%D7%9D",
        destination: "/orgs/",
        permanent: true,
      },
      {
        source: "/%D0%BC%D0%B5%D1%80%D1%87",
        destination: "/merch/",
        permanent: true,
      },
    ];
  },
  trailingSlash: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@x402/core": false,
      "@x402/evm": false,
      "@x402/svm": false,
      "@x402/extensions": false,
      "@x402/express": false,
      "@x402/fetch": false,
    };
    return config;
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
