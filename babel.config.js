module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@': './src',
          '@sinabro/design-token': './packages/design-token',
          '@sinabro/ui': './packages/ui',
          '@sinabro/icon': './packages/icon',
          '@sinabro/util': './packages/util',
        },
      },
    ],
    'babel-plugin-styled-components',
  ],
};
