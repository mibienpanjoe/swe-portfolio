import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // pin the root so a stray lockfile in a parent directory can't shift it
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
