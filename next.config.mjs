/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "sfgov.legistar.com" },
    ],
  },
  // Bundle the SQLite database into every serverless function so the deployed
  // app has data at runtime (it isn't traced automatically since no code
  // statically imports it).
  experimental: {
    outputFileTracingIncludes: {
      "/**": ["./prisma/dev.db"],
    },
  },
};

export default nextConfig;
