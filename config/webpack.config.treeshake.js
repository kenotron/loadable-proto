const base = require('./webpack.config');
const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');

module.exports = (options) => {
    const config = merge(base({analyzerPort: 8889, ...options}), {
        optimization: {
            concatenateModules: true
        },
        output: {
            path: path.resolve(__dirname, '../build-treeshake')
        },
    });
    return config;
}