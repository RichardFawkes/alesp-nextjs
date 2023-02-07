const withTypescript = require('@zeit/next-typescript');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = withTypescript(nextConfig);
