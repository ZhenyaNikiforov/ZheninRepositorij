const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const fs = require('fs');

function generateHtmlPlugin (pathToFiles) {
    const arrayHtmlFiles = fs.readdirSync(path.resolve(__dirname, pathToFiles));
    const arrayHtmlPlugins = arrayHtmlFiles.map(function (item) {
        const parts = item.split('.');
        const name = parts[0];
        const extension = parts[1];
        const newPlug = new HtmlWebpackPlugin ({
            filename: `${name}.html`,
            template: `./iskhodnik/htmlFiles/${name}.html`
        });
        return newPlug;
    });
    return arrayHtmlPlugins;
}

const htmlPlugins = generateHtmlPlugin('./iskhodnik/htmlFiles');

module.exports = {
    entry: './iskhodnik/menu.js',
    mode: 'production',
   /* devServer: {
    static: './gotovo'
  },*/
    
    output: {
        path: path.resolve(__dirname, 'gotovo'),
        filename: 'menu.js'
  },
    
  plugins: [
       new MiniCssExtractPlugin()
   ].concat(htmlPlugins),
    
    module: {
        rules: [
            {
                test: /\.(ttf|eot|woff|woff2)$/i,
                type: 'asset/resource',
                generator: {filename: 'shr/[name][ext]'}
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource',
                generator: {filename: 'imag/[name][ext]'}
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
    },
    optimization: {
        minimizer: [new CssMinimizerPlugin()]
    }
}