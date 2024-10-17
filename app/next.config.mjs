/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      config.watchOptions = {
        poll: 300,
        aggregateTimeout: 300,
      };
      return config;
    },
    output: "export",
  };
export default nextConfig;
