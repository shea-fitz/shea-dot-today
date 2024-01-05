const path = require('path');

module.exports = {
  entry: './src/index.js', // Adjust the entry point based on your project structure
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Adjust the output path based on your project structure
  },
  resolve: {
    fallback: {
      "buffer": require.resolve("buffer/"),
    },
  },
};
