const withTm = require('@weco/next-plugin-transpile-modules')
const withImages = require('next-images')

// TODO: abstract next plugins into graphiconf
module.exports = withImages(
  withTm({
    exportPathMap: () => ({
      '/': { page: '/' },
      '/code-of-conduct': { page: '/code-of-conduct' },
      '/imprint': { page: '/imprint' },
      '/team': { page: '/team' },
    }),

    transpileModules: ['graphiconf'],
  }),
)
