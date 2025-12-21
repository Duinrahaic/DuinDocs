import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX({
    // Configure MDX to use multiple collections
    rootDir: 'content',
});

/** @type {import('next').NextConfig} */
const config = {
    reactStrictMode: true,
    output: "standalone",
    images: {
        unoptimized: true, // Cloudflare can't do next/image optimization
    },
};

export default withMDX(config);
