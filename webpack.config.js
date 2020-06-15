const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWbbpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
	entry: {
		bundle: ['./src/main.js']
	},
	resolve: {
		alias: {
			svelte: path.resolve('node_modules', 'svelte'),
			'@': path.resolve(__dirname, 'src')
		},
		extensions: ['.mjs', '.js', '.svelte'],
		mainFields: ['svelte', 'browser', 'module', 'main']
	},
	output: {
		path: __dirname + '/dist',
		filename: 'js/[name].[chunkHash].js',
		chunkFilename: 'js/[name].[chunkHash].js'
	},
	module: {
		rules: [
			{
				test: /\.(js|mjs|svelte)$/,
				exclude: /node_modules\/(?!svelte)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: [['@babel/plugin-syntax-dynamic-import', { useESModules: true }]]
					}
				},
			},
			{
				test: /\.svelte$/,
				use: {
					loader: 'svelte-loader',
					options: {
						emitCss: true,
						hotReload: true
					}
				}
			},
			{
				test: /\.css$/,
				use: [
					/**
					 * MiniCssExtractPlugin doesn't support HMR.
					 * For developing, use 'style-loader' instead.
					 * */
					prod ? MiniCssExtractPlugin.loader : 'style-loader',
					'css-loader'
				]
			}
		]
	},
	mode,
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/[name].[hash].css'
		}),
		new HtmlWbbpackPlugin({
			template: './public/index.html'
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: 'public',
					to: 'public',
					globOptions: {
						ignore: ['**/*.html']
					}
				}
			]
		})
	],
	devtool: prod ? false: 'source-map',
	devServer: {
		historyApiFallback: true,
		contentBase: path.resolve(__dirname, 'dist'),
	}
};
