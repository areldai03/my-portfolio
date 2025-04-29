/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.watchOptions = {
      poll: 300,
      aggregateTimeout: 300,
    };
    return config;
  },
  output: "export", // 静的エクスポートを使うならこれを維持
  images: {
    unoptimized: true, // ← この設定を追加
  },
};

export default nextConfig;