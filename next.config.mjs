// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


// const withMDX = require('@next/mdx')();

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // Configure `pageExtensions` to include MDX files
//   pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
//   // Optionally, add any other Next.js config below
// };

// module.exports = withMDX(nextConfig);


// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.md$/,
        use: 'markdown-loader',
      });
      return config;
    },
  };
export default nextConfig;
  