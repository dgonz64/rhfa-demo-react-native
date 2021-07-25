// const path = require('path')

/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

// const extraNodeModules = {
//   'rhfa-react-native': path.resolve(__dirname, './src/lib/index.js')
// }

// const watchFolders = [
//   path.resolve(__dirname, '../rhfa-react-native/')
// ]

module.exports = {
  resolver: {
    sourceExts: ['jsx', 'js'],
    // extraNodeModules
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
