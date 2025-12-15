/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // IMPORTANT for cPanel
  },
};

module.exports = nextConfig;

