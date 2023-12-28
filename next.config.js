/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
      protocol: 'https',
      hostname: 'cdn.myanimelist.net'
      },
      {
      protocol: 'https',
      hostname: 'i.animepahe.ru'
      },
    ],
  },
}

module.exports = nextConfig
