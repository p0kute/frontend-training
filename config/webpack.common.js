/* eslint import/no-extraneous-dependencies: 0  */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const helpers = require('./helpers');

const webpackConfig = function (options) {
    const jsFolder = options.jsFolder || 'js/';
    const imgFolder = options.imgFolder || 'images/';
    const fontsFolder = options.fontsFolder || 'fonts/';

    const isPropd = options.env === 'prod' || options.env === 'production';

    return {
        entry: {
            polyfills: [helpers.root('src', 'js', 'polyfills.js')],
            app: [helpers.root('src', 'js', 'index.js')],
        },
        output: {
            path: helpers.root('build'),
            publicPath: isPropd ? '' : '/',
            filename: `${jsFolder}[name].js`,
        },
        resolve: {
            extensions: ['.js', '.json'],
            modules: [
                helpers.root('src'),
                helpers.root('node_modules'),
            ],
        },
        module: {
            rules: [
                // scripts
                {
                    test: /\.js$/,
                    use: {
                        loader: 'babel-loader',
                        options: { cacheDirectory: true },
                    },
                },
                // styles
                {
                    test: /\.pcss$/,
                    use: ['style-loader', 'css-loader', 'postcss-loader'],
                },
                // images
                {
                    test: /\.(jpg|png|gif|svg)$/,
                    use: {
                        loader: 'file-loader',
                        options: { name: `${imgFolder}[name].[ext]` },
                    },
                },
                // fonts
                {
                    test: /\.eot$/,
                    use: {
                        loader: 'file-loader',
                        options: { mimetype: 'application/vnd.ms-fontobject', name: `${fontsFolder}[name].[ext]` },
                    },
                },

                {
                    test: /\.ttf(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    use: {
                        loader: 'file-loader',
                        options: { mimetype: 'application/octet-stream', name: `${fontsFolder}[name].[ext]` },
                    },
                },
                {
                    test: /.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    use: {
                        loader: 'file-loader',
                        options: { mimetype: 'application/font-woff', name: `${fontsFolder}[name].[ext]` },
                    },
                },
                {
                    test: /.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    use: {
                        loader: 'file-loader',
                        options: { mimetype: 'application/font-woff2', name: `${fontsFolder}[name].[ext]` },
                    },
                },

            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                inject: 'body',
                template: 'src/index.html',
            }),
            new CopyWebpackPlugin([
                {
                    from: helpers.root('src', 'static'),
                    to: helpers.root('build', 'static'),
                    ignore: ['.gitkeep'],
                },
            ]),
        ],
    };
};

module.exports = webpackConfig;
