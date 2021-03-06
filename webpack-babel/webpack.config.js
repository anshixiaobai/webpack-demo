var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		index: './private/js',
		one: './private/one/',
		app: [
			'webpack-dev-server/client?http://localhost:8080/'
		]
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/static/build',
		filename: '[name].js',
		chunkFilename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 
					{
			          loader: 'postcss-loader', options: {
			            plugins: [require('autoprefixer')]
			          }
			        }, {
			          loader: 'resolve-url-loader'
			        },

					'sass-loader']
				})
			},{
				test: /\.(png|jpg|gif|svg)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10000,
							name: 'assets/[name]-[hash:5].[ext]'
						}
					}
				]
			}, {
				loader: 'img-loader'
			}, {
				test: /\.html$/,
				loader: 'html-withimg-loader'
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("[name].css"),
		new HtmlWebpackPlugin({
			 template: 'index.html'
		})
	]
}





// var path = require('path');
// var webpack = require('webpack');
// var ManifestPlugin = require('webpack-manifest-plugin');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");
// var precss       = require('precss'); // 实现类Sass的功能，变量，嵌套，mixins
// var autoprefixer = require('autoprefixer'); // 自动添加浏览器前缀


// module.exports = {
// 	// 用于设置webpack执行打包文件的入口，是一个数组
// 	entry: {
// 		vendor: './private/one/index.js',
// 		main: './private/js/index.js',
// 		san: './private/two/index.js'
// 	},
// 	// 用于指定生成文件的路径以及文件名等
// 	output: {
// 		// 指定生成文件路径
// 		path: path.resolve(__dirname, 'dist'),
// 		// 指定域名公共路径
// 		publicPath: "/output/",
// 		// 指定生成文件的名称
// 		filename: '[name].js'
// 	},
// 	module: {
// 		// 用于配置对应后缀文件使用何种加载器进行处理
// 		loaders : [
// 			{
// 				// 使用正则表达式来指定某种特定的文件类型
// 				test: /\.jsx?%/,
// 				//  排除某个文件夹下的文件进行处理
// 				exclude: /(node_modules|bower_components)/,
// 				//  指定相应的加载器，多个加载器使用!进行连接,每个loader都可以省略后缀如babel-loader 可以写成babel
// 				loader: 'babel-loader',
// 				// 指定加载器的配置信息，也可以使用?直接连接在loader后面
// 				query: {
// 					presets: ['es2015']
// 				}
// 			},{
// 				test: /.scss$/,
// 				use: [{
// 		          loader: 'style-loader'
// 		        }, {
// 		          loader: 'css-loader', options: {
// 		            modules: true,
// 		            importLoaders: 3,
// 		            localIdentName: '[name]__[local]__[hash:base64:5]'
// 		          }
// 		        }, {
// 		          loader: 'postcss-loader', options: {
// 		            plugins: [require('autoprefixer')]
// 		          }
// 		        }, {
// 		          loader: 'resolve-url-loader'
// 		        }, {
// 		          loader: 'sass-loader', options: {
// 		            outputStyle: 'expanded',
// 		            sourceMap: true
// 		          }
// 		        }]


// 			}
// 		]
// 	},
// 	plugins: [
// 	    new webpack.LoaderOptionsPlugin({
// 	      options: {
// 	        context: __dirname,
// 	        postcss: [
// 	          autoprefixer
// 	        ]
// 	      }
// 	    })
//   ]
// };