'use strict';

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: ['webpack/hot/dev-server', path.resolve(__dirname, '../app/main.js')],
	output: {
		path: path.resolve(__dirname, '../build'),
		filename: 'bundle.js',
	},
	plugins: [new HtmlWebpackPlugin()],
	module : {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel',
		    query: {
		      presets: ['es2015'],
		      cacheDirectory: true,
		      plugins: ['transform-runtime']
		    }
		}]
	}
};
