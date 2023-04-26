module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src/'],
        alias: {
          screens: './src/screens',
          constants: './src/constants',
          components: './src/components',
          utils: './src/utils',
          styles: './src/styles',
          navigator: './src/navigation',
          assets: './src/assets',
          api: './src/api',
          hooks: './src/hooks',
          reducer: './src/redux/reducers',
          saga: './src/redux/saga',
          store: './src/redux/store',
          services: './src/services',
          routes: './src/routes',
        },
      },
    ],
  ],
};
