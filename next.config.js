/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // Use the name of your repository
    basePath: '/manny.github.io',
    // assetPrefix: '/manny.github.io/',
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
