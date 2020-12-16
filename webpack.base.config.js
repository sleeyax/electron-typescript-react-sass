const path = require('path');

module.exports = {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        libraryTarget: 'umd' 
    },
    node: {
        __dirname: false,
        __filename: false,
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json', '.svg', '.png']
    },
    devtool: 'source-map',
    plugins: [],
    module: {
        rules: [
            {
                test: /\.(gif|png|jpe?g|svg|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name() {
                                return process.env.NODE_ENV === 'production' ? '[contenthash].[ext]' : 'assets/[name].[ext]';
                            },
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            disable: true
                        }
                    }
                ]
            },
        ]
    }
};
