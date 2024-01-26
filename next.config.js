/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'docs.paperless-ngx.com',
        port: '',
        pathname: '/assets/**',
      },
      {
        protocol: 'https',
        hostname: 'strapi.digitizerspace.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
