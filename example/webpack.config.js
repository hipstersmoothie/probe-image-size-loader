module.exports = {
  mode: 'production',
  entry: './src/index.js',

  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g)$/i,
        use: ['../dist/index.js', 'file-loader']
      }
    ]
  }
};
