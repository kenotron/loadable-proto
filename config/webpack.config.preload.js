const base = require('./webpack.config.treeshake');
const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

module.exports = (options) => {
    return merge(base({analyzerPort: 8889, ...options}), {
        output: {
            path: path.resolve(__dirname, '../build-preload')
        },
        module: {  
            rules: [
                {
                    test: /\.(jsx?|tsx?)$/,
                    include: require('@uifabric/webpack-utils/lib/fabricAsyncLoaderInclude'),
                    loader: '@uifabric/webpack-utils/lib/fabricAsyncLoader.js',
                    options: {
                        chunkName: 'fabricChunk',
                        preload: true
                    }
                }
            ]
        },
        plugins: [
            new ScriptExtHtmlWebpackPlugin({
                preload: /\.js$/,
            })
        ]
    });
}