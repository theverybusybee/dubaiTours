/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    baseUrl:
      "https://dubai-tours-awr9-theverybusybees-projects-314b8cea.vercel.app",
    // baseUrl: "https://dubai-tour.vercel.app",
    // baseUrl: "http://localhost:3000",
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "uxwing.com",
      },
    ],
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );
    {
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      });

      return config;
    }
  },
};

module.exports = nextConfig;
