const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: ['./templates/main.js'],
    output: {
        path: path.resolve(__dirname),
        filename: 'app.js'
    }
};

if (process.env.NODE_ENV === 'production') {
    module.exports.module = {
        rules: [{
            test: /\.js$/,
            exclude: '/(node_modules|bower_components)/',
            loaders: 'babel-loader',
            query: {
                presets: ['env']
            }
        }
        ]
    };
    module.exports.plugins = [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            compress: {
                warnings: false
            }
        })
    ]
} else {
    module.exports.devtool = "source-map";
}
