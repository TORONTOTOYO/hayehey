const path = require('path');

module.exports = {
  entry: './src/index.js', // Your main file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // The output file
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  mode: 'production', // Ensures minification in production mode
};
