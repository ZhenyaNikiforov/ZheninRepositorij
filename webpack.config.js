const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './iskhodnik/menu.js',
    mode: 'production',
    //devtool: 'inline-source-map',
    /*devServer: {
    static: './gotovo'
  },*/
    
    output: {
        path: path.resolve(__dirname, 'gotovo'),
        filename: 'menu.js'
  },
    
  plugins: [
       
       new HtmlWebpackPlugin({
           template: './iskhodnik/inindex.html'
       }),
       new HtmlWebpackPlugin({
           filename: 'kontaktyi.html',
           template: './iskhodnik/kontaktyi.html'
       }),
      new HtmlWebpackPlugin({
          filename: 'tovaryi.html',
          template: './iskhodnik/tovaryi.html'
      }),
      new HtmlWebpackPlugin({
          filename: 'uslugi.html',
          template: './iskhodnik/uslugi.html'
      }),
       new MiniCssExtractPlugin()
   ],
    module: {
        rules: [
            {
                test: /\.(ttf)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {esModule: false, name: './[name].[ext]', outputPath: 'shr'}
                }],
                type: 'javascript/auto'
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{
                          loader: 'file-loader',
                          options: {esModule: false, name: './[name].[ext]', outputPath: 'imag'}
                     }],
                type: 'javascript/auto'
            },
            {
                test: /\.less$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]
            },
            {
               test: /\.html$/i,
                loader: 'html-loader'
            }
        ]
    }
}