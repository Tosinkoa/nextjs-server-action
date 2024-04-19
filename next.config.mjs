/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    RETOOL_API: process.env.RETOOL_API,
  },
};

export default nextConfig;
