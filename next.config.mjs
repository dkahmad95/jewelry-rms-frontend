/** @type {import('next').NextConfig} */
const nextConfig = {
  // output:"export",
  async rewrites() {
    return [
      {
        source: '/:any*',
        destination: '/',
      },
    ];
  },
};

export default nextConfig;
