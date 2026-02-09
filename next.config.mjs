/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Keeps images working despite remote connection resets during development
    unoptimized: true, 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'darkturquoise-pigeon-678798.hostingersite.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

export default nextConfig;