module.exports = {
    entry: './app.js',
    output: {
        path: '../server/public',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: 'style!css?sourceMap!sass?sourceMap'
            },
            {
              test: /\.html$/,
              loader: "html-loader"
            }
        ]
    },
    sassLoader: {
        includePaths: ['./scss/content', './scss/core', './scss/includes', './scss/layout', './scss/mobile', './scss/general']
    }
};
