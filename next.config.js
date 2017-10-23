const path = require('path')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

module.exports = {
  exportPathMap: () => (
    {
      '/': { page: '/' },
      '/code-of-conduct': { page: '/code-of-conduct' },
      '/imprint': { page: '/imprint' },
    }
  ),

  // Custom Webpack config
  webpack: (config, { dev }) => {
    /* Enable only in Production */
    if (!dev) {

      /**
       * Install and Update our Service worker
       * on our main entry file :)
       * Reason: https://github.com/ooade/NextSimpleStarter/issues/32
       */
      const oldEntry = config.entry

      config.entry = () =>
        oldEntry().then(entry => {
          entry['main.js'].push(path.resolve('./utils/offline'))
          return entry
        })

      // Service Worker
      config.plugins.push(
        new SWPrecacheWebpackPlugin({
          filename: 'sw.js',
          minify: true,
          staticFileGlobsIgnorePatterns: [/\.next\//],
          staticFileGlobs: [
            'static/**/*' // Precache all static files by default
          ],
          forceDelete: true,
          runtimeCaching: [
            // Example with different handlers
            {
              handler: 'fastest',
              urlPattern: /[.](png|jpg|css)/
            },
            {
              handler: 'networkFirst',
              urlPattern: /^http.*/ //cache all files
            }
          ]
        })
      )
    }
    return config
  }
}
