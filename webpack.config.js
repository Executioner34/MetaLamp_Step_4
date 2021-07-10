const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, './src/index.ts'),
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		index: 'demo.html', //Запускаемый файл в режиме разработки
		port: 9000,
	},
	// devtool: 'inline-source-map',
	module: {
		rules: [
			//  TypeScript
			{
				test: /\.ts?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			//  CSS, PostCSS, Sass
			{
				test: /\.(scss|css)$/,
				use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
			},
			// PUG
			{
				test: /\.pug$/,
				loader: 'pug-loader'
			}
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'demo Sliders',
			template: path.resolve(__dirname, './src/demo/demo.pug'),
			filename: 'demo.html', 
		}),
		new CleanWebpackPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
		}),
	],
};