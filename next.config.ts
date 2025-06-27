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
        hostname: "thedial.infura-ipfs.io",
        pathname: "/ipfs/**",
      },
      {
        protocol: "https",
        hostname: "digitalax.xyz",
        pathname: "/api/infura/**",
      },
    ],

    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/%D8%A7%D9%84%D9%83%D9%88%D8%AF-%D9%87%D9%86%D8%A7",
        destination: "/code-here",
      },
      {
        source: "/%D7%9E%D7%95%D7%A1%D7%93%D7%95%D7%AA",
        destination: "/orgs",
      },
      {
        source: "/%D0%BC%D0%B5%D1%80%D1%87",
        destination: "/merch",
      },
    ];
  },
  trailingSlash: true,
  async headers() {
    let headersConfig: any[] = [];

    const allowedOrigins = [
      "https://thedial.infura-ipfs.io",
      "https://digitalax.xyz",
    ];
    allowedOrigins.forEach((origin) => {
      headersConfig.push({
        source: "/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: origin,
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "Origin, X-Requested-With, Content-Type, Accept, Authorization",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
        ],
      });
    });

    return headersConfig;
  },
};

export default nextConfig;
