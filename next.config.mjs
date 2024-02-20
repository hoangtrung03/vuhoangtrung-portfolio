/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['mega.com.vn']
  },
  async rewrites() {
    return [
      {
        source: '/notfound(.*)',
        destination: '/404.html'
      }
    ]
  }
}

export default nextConfig
