const {merge} = require('webpack-merge');
const ObfuscationPlugin = require('./webpack.obfuscation.config');

const baseConfig = require('./webpack.main.config');

module.exports = merge(baseConfig, {
    mode: 'production',
    plugins: [
        ObfuscationPlugin
    ],
});
