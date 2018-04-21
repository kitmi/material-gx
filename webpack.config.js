const path = require('path');

module.exports = {
    name: 'browser',
    mode: 'development',
    entry: {
        index: './test/index.js'
    },
    output: {
        path: path.resolve('./test/build'),
        filename: '[name].bundle.js',
        chunkFilename: '[id].bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env', 'babel-preset-react'],
                        plugins: [
                            'transform-decorators-legacy',
                            'transform-class-properties',
                            'transform-object-rest-spread',
                            'transform-function-bind',
                            'transform-react-jsx-source',
                            'transform-react-jsx-self'
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.svg$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        prefix: 'svg'
                    }
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        prefix: 'img'
                    }
                }
            },
            {
                test: /\.(woff2?|ttf|eot|otf)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        prefix: 'font'
                    }
                }
            },
            {
                test: /\.(csv|tsv)$/,
                use: {
                    loader: 'csv-loader'
                }
            },
            {
                test: /\.xml$/,
                use: {
                    loader: 'xml-loader'
                }
            },
            {
                test: /\.txt$/,
                use: {
                    loader: 'raw-loader'
                }
            }
        ]
    }
};
