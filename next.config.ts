/** @type {import('next').NextConfig} */
const nextConfig = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  webpack: (config: any) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "locomotive-scroll": "locomotive-scroll/dist/locomotive-scroll.min.js",
    };
    return config;
  },
};

module.exports = nextConfig;
