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
// var precss       = require('precss'); // ʵ����Sass�Ĺ��ܣ�������Ƕ�ף�mixins
// var autoprefixer = require('autoprefixer'); // �Զ���������ǰ׺


// module.exports = {
// 	// ��������webpackִ�д���ļ�����ڣ���һ������
// 	entry: {
// 		vendor: './private/one/index.js',
// 		main: './private/js/index.js',
// 		san: './private/two/index.js'
// 	},
// 	// ����ָ�������ļ���·���Լ��ļ�����
// 	output: {
// 		// ָ�������ļ�·��
// 		path: path.resolve(__dirname, 'dist'),
// 		// ָ����������·��
// 		publicPath: "/output/",
// 		// ָ�������ļ�������
// 		filename: '[name].js'
// 	},
// 	module: {
// 		// �������ö�Ӧ��׺�ļ�ʹ�ú��ּ��������д���
// 		loaders : [
// 			{
// 				// ʹ��������ʽ��ָ��ĳ���ض����ļ�����
// 				test: /\.jsx?%/,
// 				//  �ų�ĳ���ļ����µ��ļ����д���
// 				exclude: /(node_modules|bower_components)/,
// 				//  ָ����Ӧ�ļ����������������ʹ��!��������,ÿ��loader������ʡ�Ժ�׺��babel-loader ����д��babel
// 				loader: 'babel-loader',
// 				// ָ����������������Ϣ��Ҳ����ʹ��?ֱ��������loader����
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