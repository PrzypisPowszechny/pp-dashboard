const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const localPath = (...args) => path.resolve(__dirname, ...args);
const ROOT = localPath('..');

const { loadPPSettings } = require('./pp-settings');

module.exports = (environment, argv) => {
	const PPSettings = loadPPSettings(env, argv);

	return {
		mode: 'development',
			devtool: 'cheap-module-source-map',

		entry: ['react-dev-utils/webpackHotDevClient', path.resolve('src/index.js')],

		resolve: {
		modules: [
			path.resolve('src'),
			path.resolve('node_modules'),
		],
			extensions: ['.js', '.jsx'],
	},

		output: {
			path: path.resolve('.tmp'),
				filename: '[name].js',
				publicPath: '/',
		},

		plugins: [
			new webpack.HotModuleReplacementPlugin(),
			new HTMLWebpackPlugin({
				template: path.resolve('public/index.html'),
				templateParameters: {
					firebaseConfig: PPSettings.FIREBASE_CONFIG
				}
			}),
			new webpack.DefinePlugin({
				// use appropriate (development or production) PP settings
				PPSettings: JSON.stringify(PPSettings),
			}),
		],

			devServer: {
		contentBase: '.tmp',
			hot: true,
			port: 3000,
			historyApiFallback: true,
	},

		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							cacheDirectory: true,
							plugins: ['react-hot-loader/babel'],
						},
					},
				},
				{
					/* SCSS modules */
					test: /\.scss$/,
					use: [
						'style-loader',
						{
							loader: 'css-loader',
							options: {
								modules: true,
								camelCase: true,
								localIdentName: '[name]__[local]--[hash:base64:5]',
							},
						},
						{
							loader: 'sass-loader',
							options: {
								includePaths: [
									localPath(ROOT, 'src'),
								],
							},
						}],
				},
				{
					test: /\.(jpe?g|png|gif|svg|ico)$/i,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].[ext]',
							},
						},
					],
				},
			],
		},
	}
};
