var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './src/sandbox.jsx',
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'react-sandbox.js',
        library: 'ReactSandbox',
        libraryTarget: 'umd',
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'src'),
        }],
    },
    plugins: [
        new webpack.BannerPlugin([
            // This lets GitHub know that the file was generated
            '// Generated by webpack',
        ].join(''), {raw: true}),
    ],
};
