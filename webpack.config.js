const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWbbpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const svelteConfig = require('./svelte.config');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
	entry: {
		main: ['./src/main.js']
	},
	resolve: {
		alias: {
			svelte: path.resolve('node_modules', 'svelte'),
			'@': path.resolve('src')
		},
		extensions: ['.mjs', '.js', '.svelte'],
		mainFields: ['svelte', 'browser', 'module', 'main']
	},
	output: {
		path: `${__dirname}/dist`, // 绝对路径
		filename: 'js/[name].[chunkHash].js',
		chunkFilename: 'js/[name].[chunkHash].js'
	},
	devtool: prod ? false: 'source-map',
	module: {
		rules: [
			{
				test: /\.(js|mjs)$/,
				/* svelte 相关的包都属于后编译 */
				include: [
					path.resolve('src'),
					path.resolve('node_modules/svelte'),
					path.resolve('node_modules/svelte-routing'),
					path.resolve('node_modules/svelte-loadable')
				],
				use: 'babel-loader',
			},
			{
				test: /\.svelte$/,
				use: [
					'babel-loader',
					{
						loader: 'svelte-loader',
						options: {
							...svelteConfig,
							emitCss: true,
							hotReload: true
						}
					}
				]
			},
			{
				test: /\.css$/,
				use: [
					/**
					 * MiniCssExtractPlugin doesn't support HMR.
					 * For developing, use 'style-loader' instead.
					 * */
					prod ? MiniCssExtractPlugin.loader : 'style-loader',
					'css-loader',
					'postcss-loader'
				]
			},
			{
				test: /\.less$/,
				use: [
					'style-loader',
					'css-loader',
					'postcss-loader',
					'less-loader'
				]
			},
			{
				test: /\.(png|jpg|gif)$/i,
				use: ['url-loader']
			},
			{
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader'
      }
		]
	},
	mode,
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					name: 'vendor',
					test: /[\\/]node_modules[\\/]/,
					/* 异步同步都抽离，其他选项 initial 和 async */
					chunks: 'all',
					priority: 10
				},
				common: {
					name: 'common',
					test: /[\\/]src[\\/]/,
					minSize: 1998848, // 244 Kib，大于 244Kib 的文件抽离到 common 
					chunks: 'all',
					priority: 5
				},
				/* 抽离样式文件为 style.css */
				styles: {
          name: 'style',
          test: /\.css$/,
          chunks: 'async',
          enforce: true,
          priority: 20, 
        }
			}
		}
	},
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
		}),
		new CleanWebpackPlugin({ dry: !prod, /* verbose: true */ }) // dry 开发模式下不删除文件
	],
	devServer: {
		historyApiFallback: true,
		contentBase: path.resolve('dist'),
		open: true
	}
};
