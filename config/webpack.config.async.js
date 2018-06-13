const base = require('./webpack.config.treeshake');
const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');

module.exports = () => {
    return merge(base(), {
        module: {
            output: {
                path: path.resolve(__dirname, '../build-async')
            },
            rules: [
                {
                    test: /\.(jsx?|tsx?)$/,
                    include: require('@uifabric/webpack-utils/lib/fabricAsyncLoaderInclude'),
                    loader: '@uifabric/webpack-utils/lib/fabricAsyncLoader.js'
                }
            ]
        }
    });
}