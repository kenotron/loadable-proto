const base = require('./webpack.config');
const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');

module.exports = () => {
    const config = merge(base({analyzerPort: 8889}), {
        output: {
            path: path.resolve(__dirname, '../build-treeshake')
        },
        plugins: [
            new webpack.optimize.ModuleConcatenationPlugin()
        ]
    });

    console.log(JSON.stringify(config, null, 2));

    return config;
}