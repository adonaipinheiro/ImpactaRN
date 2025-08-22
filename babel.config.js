module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module-resolver', {
      root: ['./src'],
      extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
      alias: {
        '@components': './src/components',
        '@store': './src/store',
        '@utils': './src/utils',
        '@hooks': './src/hooks',
        '@assets': './src/assets',
        '@services': './src/services',
      },
    }],
  ],
};
