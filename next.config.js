/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "promptpay.io",
      },
    ],
  },
}

module.exports = nextConfig
