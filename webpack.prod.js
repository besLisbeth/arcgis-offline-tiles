const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = env => merge(common(env), {
    mode: 'production',
    optimization: {
        mangleWasmImports: true,
        minimizer: [
            new TerserPlugin({
                extractComments: true,
                parallel: true,
                terserOptions: {
                    compress: {
                        drop_console: true,
                        drop_debugger: true,
                        reduce_funcs: false
                    }
                }
            })
        ]
    }
});
