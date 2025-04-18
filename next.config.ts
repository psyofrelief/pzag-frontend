import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["www.google.com", "api.qrserver.com"], // Allow Google favicon domain
  },
};

export default nextConfig;
