const base = require('./webpack.config.treeshake');
const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');

module.exports = (options) => {
    return merge(base({analyzerPort: 8889, ...options}), {
        output: {
            path: path.resolve(__dirname, '../build-async')
        },
        module: {  
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