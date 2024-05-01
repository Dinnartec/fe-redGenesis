/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ddgx4ey7f6u9.cloudfront.net",
      },
    ]
  }
};

export default nextConfig;
