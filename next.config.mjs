// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,    // Helps catch potential issues early
    swcMinify: true,          // Faster and more efficient minification
    experimental: {
      workerThreads: true,    // Use worker threads to reduce memory usage
      cpus: 2,                // Limit the number of CPU cores used during the build
    },
    images: {
      formats: ['image/avif', 'image/webp'], // Optimize image formats
    },
    webpack(config) {
      // Enable SVG support
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack']
      });
  
      // Increase memory limit
      config.resolve.fallback = { fs: false };
      return config;
    }
  };
  
  export default nextConfig;
  
  