import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export", // enables static export
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
