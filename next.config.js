/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    trailingSlash: true,
    basePath: process.env.NODE_ENV === 'production' ? '/app-foet' : '/app-foet',
    publicRuntimeConfig: {
        contextPath: process.env.NODE_ENV === 'production' ? '/app-foet' : '/app-foet',
        uploadPath: process.env.NODE_ENV === 'production' ? '/app-foet/upload.php' : '/api/upload'
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
          // Usa la versión web de react-pdf en el cliente
          config.resolve.alias['react-pdf$'] = 'react-pdf/web';
        }
        return config;
      }
};

module.exports = nextConfig;
