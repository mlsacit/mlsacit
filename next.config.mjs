// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true, // Enable SWC minification for smaller builds
    experimental: {
      largePageDataBytes: 128 * 1000000, // Increase page data limit
    },
    output: 'standalone', // Optimize build for serverless deployment
  };
  
  export default nextConfig;
  