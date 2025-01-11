module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'img.icons8.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
    async redirects() {
      return [
        {
          source: '/',
          destination: '/currency/bitcoin',
          permanent: true,
        },
      ]
    },
  };