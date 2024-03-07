/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //we add this snippet of code here so that next.js knows that this image is secure and authorise it to be put on the webpage
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '4000',
      },
    ]
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: 'http://localhost:4000/api/:path*', // Proxy to your server
  //     },
  //   ];
  // },
};

export default nextConfig;
