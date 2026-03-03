/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' to enable API routes (serverless functions)
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
