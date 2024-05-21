const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/index.js', // Altere para o caminho do seu arquivo de entrada
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  target: 'node',
  externals: [nodeExternals()], // Exclui dependências node_modules da compilação
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Se estiver usando Babel para transpilar o código
        },
      },
    ],
  },
};