module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [{ test: /\\.(png|jp(e*)g|svg|gif)$/, use: ['file-loader'] }],
  },
};
