/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // allow local public images; add CDNs here if needed
    unoptimized: false
  },
  experimental: {
    // keep Pages Router behavior
  }
}

module.exports = nextConfig
