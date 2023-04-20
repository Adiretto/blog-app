/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blog-app-server-adiretto.vercel.app",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
