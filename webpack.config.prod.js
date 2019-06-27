const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const { loadPPSettings } = require('./pp-settings');


module.exports = (env, argv) => {
	const PPSettings = loadPPSettings(env, argv);

	return {
		mode: 'production',
		devtool: 'source-map',

		entry: [path.resolve('src/index.js')],

		resolve: {
			modules: [
				path.resolve('src'),
				path.resolve('node_modules'),
			],
			extensions: ['.js', '.jsx'],
		},

		output: {
			path: path.resolve('dist'),
			filename: '[name].[hash].js',
			publicPath: '',
		},

		plugins: [
			new CleanWebpackPlugin(['dist']),
			new MiniCssExtractPlugin({
				filename: '[name].css',
			}),
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

		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							cacheDirectory: true,
						},
					},
				},
				{
					test: /\.(scss|sass)$/,
					use: [
						MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {
								sourceMap: true,
								modules: true,
								camelCase: true,
								localIdentName: '[name]__[local]--[hash:base64:5]',
							},
						},
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: true,
								plugins: () => [
									autoprefixer({
										browsers: [
											'>1%',
											'last 4 versions',
											'Firefox ESR',
											'not ie < 10',
										],
									}),
								],
							},
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true,
							},
						},
					],
				},
				{
					test: /\.(jpe?g|png|svg|gif|ico)$/i,
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
