const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);
const noDefined = (ext) => (isDev ? `[name]${ext}` : `[name].[hash]${ext}`);

const pluginsFunc = () => {
  const plaginsArr = [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      minify: {
        collapseWhitespace: isProd,
      },
      inject: 'body',
    }),
    new MiniCssExtractPlugin({
      filename: filename('css'),
    }),
  ];
  if (isProd) {
    plaginsArr.push(new BundleAnalyzerPlugin());
  }
  return plaginsArr;
};

let mode = 'development';
if (isProd) {
  mode = 'production';
}
console.log('\u001b[' + 32 + 'm' + mode + ' mode' + '\u001b[0m');
module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: mode,
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: `assets/${noDefined('[ext]')}`,
    clean: true,
  },
  devtool: isDev ? 'eval-source-map' : false,
  devServer: {
    historyApiFallback: true,
    compress: true,
    port: 9000,
  },
  plugins: pluginsFunc(),
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          mode === 'development' ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: `assets/fonts/${noDefined('[ext]')}`,
        },
      },
      {
        test: /\.(m?js|m?jsx|m?ts|m?tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
