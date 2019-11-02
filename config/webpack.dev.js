/* eslint import/no-extraneous-dependencies: 0  */
const path = require('path');
const webpackMerge = require('webpack-merge');

const ENV = 'development';

const commonConfig = require('./webpack.common.js')({ env: ENV });

const config = webpackMerge.smart(commonConfig, {
    mode: ENV,
    devtool: 'cheap-module-source-map',
    output: {
        devtoolModuleFilenameTemplate: info => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
    },
});

module.exports = config;
