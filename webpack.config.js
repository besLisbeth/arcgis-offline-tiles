const path = require('path');

module.exports = {
    entry: [
        path.resolve(__dirname, './src/index.js')
    ],

    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: './index.js',
        libraryTarget: 'amd'
    },

    module: {
        rules: [
            { test: /\.jsx$|\.js$/, exclude: /node_modules/, use: ['babel-loader'] }
        ]
    },

    externals: /^esri/i
};