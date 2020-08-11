const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ArcGISPlugin = require('@arcgis/webpack-plugin');
const path = require('path');

module.exports = env => {
    return {
        entry: './src/index.jsx',
        output: {
            path: __dirname + '/dist',
            publicPath: '/',
            filename: 'scripts/[name]/[name].[hash].bundle.js',
            chunkFilename: 'scripts/[name]/[name].[chunkhash].bundle.js'
        },
        module: {
            rules: [
                //@formatter:off
                { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader', resolve: { extensions: ['.js', '.jsx'] } },
                { test: /\.(jpe?g|png|gif|svg|xml)$/i, use: ['file-loader?name=images/[name].[ext]'] },
                { test: /\.scss$|\.css$/, use: [MiniCssExtractPlugin.loader,
                        { loader: 'css-loader', options: { importLoaders: 1,  import: true } },
                        { loader: 'resolve-url-loader' }, 'sass-loader?sourceMap']
                },
                { test: /\.(ttf|eot|otf|svg|woff2?)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/, use: ['url-loader?name=fonts/[name].[ext]'] },
                { test: /\.html$/, loader: 'html-loader' },
                { test: /\.scss$/, use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"] },
                { test: /\.wasm$/, type: "javascript/auto", loader: 'file-loader' }
                //@formatter:on
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new ArcGISPlugin(),
            new HtmlWebpackPlugin({
                title: 'index.html',
                template: './index.html',
                xhtml: true,
                chunksSortMode: 'none',
                inlineSource: '.(css)$'
            }),
            new webpack.HashedModuleIdsPlugin(),
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: 'styles/[name].[chunkhash].bundle.css',
                chunkFilename: 'styles/[id].[chunkhash].bundle.css'
            })
        ],
        externals: [
            (context, request, callback) => {
                if (/pe-wasm$/.test(request)) {
                    return callback(null, 'amd ' + request);
                }
                callback();
            }
        ],
        node: {
            process: false,
            global: false,
            fs: 'empty'
        }
    }
};
