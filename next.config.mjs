/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,    // Catches common issues
//     experimental: {
//       workerThreads: true,    // Use worker threads to reduce memory usage
//       cpus: 2,                // Limit CPU cores used during build
//     },
//     images: {
//       formats: ['image/avif', 'image/webp'], // Optimized image formats
//     },
//     webpack(config) {
//       // Enable SVG support
//       config.module.rules.push({
//         test: /\.svg$/,
//         use: ['@svgr/webpack']
//       });
  
//       // Increase memory limit
//       config.resolve.fallback = { fs: false };
//       return config;
//     }
//   };
  
//   export default nextConfig;
  
  
  