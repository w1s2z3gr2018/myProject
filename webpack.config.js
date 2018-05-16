const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const WebpackDevServer = require('webpack-dev-server');
const entries = require('./webpack/entry.config.js');
const version = require('./package.json').version;
const argv = require('yargs').argv;
const dirVars = require('./webpack/dir.config.js');
//const glob = require('glob');  //按需加载bootstrap样式
//const PurifyCSSPlugin = require('purifycss-webpack');
var purify = require("purifycss-webpack-plugin");
let theme = {
	'@primary-color': '#58a3ff',
	'@link-color': '#58a3ff'
};
let isWatch = argv.env.watch == 'watch';
let isDev = isWatch || argv.env.deploy == 'dev';

process.traceDeprecation = true;
process.noDeprecation = true;

module.exports = (function() {
	let plugins = [
		//把入口文件里面的数组打包成verdors.js
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendors'
		}),
		//排序输出  (通过模块调用次数给模块分配ids，常用的ids就会分配更短的id，使ids可预测，减小文件大小，推荐使用)
		new webpack.optimize.OccurrenceOrderPlugin(true),
		//自动加载模块
		new webpack.ProvidePlugin({
			$: 'jquery',
			React:'react',
			Mock:'mockjs',
			axios:'axios',
			jsonp:'fetch-jsonp',
			querystring:'querystring'
		}),
		//定义全局常量
		new webpack.DefinePlugin({
			"sub": {
				"name":JSON.stringify("liting")
			}
		}),
		/* 配置好Dll */
		new webpack.DllReferencePlugin({
			context: dirVars.staticRootDir, // 指定一个路径作为上下文环境，需要与DllPlugin的context参数保持一致，建议统一设置为项目根目录
			manifest: require('./dll/' + argv.env.deploy + '/manifest.json') // 指定manifest.json
		}),
		// 把dll文件复制到打包后的文件中
		new CopyWebpackPlugin([{
			from: path.resolve('./dll/' + argv.env.deploy),
			to: (__dirname, './dll/'),
			ignore: ['.*']
		}]),
		// 将 dll.js 插入HTML里
		new HtmlWebpackIncludeAssetsPlugin({
			assets: [(__dirname, 'dll/dll.js'), (__dirname, 'dll/dll.css')],
			append: false
		}),
		//		//目录下的所有html模板都会被影响  清除无用css
		//		new PurifyCSSPlugin({
		//		    paths: glob.sync(path.join(__dirname, './build/' + argv.env.deploy + '/' + version)),
		//		}), 
		new ExtractTextPlugin({
			filename: "[name].css",
			disable: false,
			allChunks: true
		}),
		//单独打包页面

		new HtmlWebpackPlugin({
			title: '后台系统首页',
			filename: 'admin/index.html',
			template: './template/template.html',
			chunks: ['admin/index', 'vendors']
		}),

		//测试通讯
		new HtmlWebpackPlugin({
			title: 'antd组件应用',
			filename: 'antd/index.html',
			template: './template/template.html',
			chunks: ['antd/index', 'vendors']
		})
	];
	if(!isDev) {
		//定义全局常量
		plugins.unshift(new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("production")
			}
		}));
		//这个使用uglifyJs压缩你的js代码
		plugins.unshift(new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			compress: {
				warnings: true
			}
		}));
	}

	//let staticHost = 'http://afts.hnzhiming.com';
	let staticHost = 'http://127.0.0.1:8888';
	switch(argv.env.deploy) {
		case 'test':
			staticHost = 'http://static.jishutao.com';
			break;
		case 'prod':
			staticHost = 'http://s.jishutao.com';
			break;
		default:
			break;
	}
	staticHost = staticHost + '/' + version
	theme['@icon-url'] = '"' + staticHost + 'css/iconfont/iconfont"'
	return {
		entry: isWatch ? entries.watch : entries.prod,
		output: {
			path: path.resolve(__dirname, './build/' + argv.env.deploy + '/' + version),
			filename: '[name].js',
			publicPath: staticHost,
			chunkFilename: 'chunks/[name].[hash:8].js'
		},
		module: require('./webpack/module.config.js')(theme),
		resolve: {
			alias: {
				'@': __dirname + '/js/admin',
				'~': __dirname + '/js/antd',
				'img': __dirname + '/img',
				test: path.resolve('js/admin/main/html/test_alias/test')
			}, //配置 简易路径写法  省略../../../../  
			extensions: ['*', '.js', '.jsx', '.json', '.less', '.css'] //省略后缀，自动补全
		},
		plugins: plugins,
		devServer: {
			disableHostCheck: true,
			allowedHosts: ['aft.hnzhiming.com', 'afts.hnzhiming.com'],
			headers: {
				"Access-Control-Allow-Origin": "*"
			}
		}
	};
})();