/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  images: {
    domains: ['cdn.sanity.io']
  },
  async redirects() {
    return [
      {
        source: '/404', //this does not work => have to find solution to redirect from 404 page to home in config.next
        destination: '/offert',
        permanent: true,
      },
    ]
  },
}