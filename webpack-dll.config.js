const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const dirVars = require('./webpack/dir.config.js');
var path = require('path');
const version = require('./package.json').version;
const argv = require('yargs').argv;

let theme = {
  '@primary-color': '#58a3ff',
  '@link-color': '#58a3ff'
};
module.exports = (function () {
	let staticHost = 'http://127.0.0.1:8888';    
    switch (argv.env.deploy) {
        case 'test':
            staticHost = 'http://static.jishutao.com';
            break;
        case 'prod':
            staticHost = 'http://s.jishutao.com';
            break;
        default:
            break;
    }
	staticHost = staticHost + '/' + version + '/';
	theme['@icon-url'] = '"' + staticHost + 'css/iconfont/iconfont"'
  var dllContext = path.resolve(dirVars.dllDir, './' + argv.env.deploy);
  return {
    output: {
      path: dllContext,
      filename: '[name].js',
      library: '[name]', // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与DllPlugin的name参数保持一致
    },
    entry: {
      dll: [
        'react', 'react-dom', 'antd', 'jquery/src/ajax/xhr.js', 'jquery/src/ajax', 'antd/lib/style'
      ],
    },
    plugins: [
      new webpack.DllPlugin({
        path: path.resolve(dllContext, 'manifest.json'), // 本Dll文件中各模块的索引，供DllReferencePlugin读取使用
        name: '[name]', // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与参数output.library保持一致
        context: dirVars.staticRootDir, // 指定一个路径作为上下文环境，需要与DllReferencePlugin的context参数保持一致，建议统一设置为项目根目录
      }),
      new ExtractTextPlugin({
        filename: "[name].css",
        disable: false,
        allChunks: true
      }), // 打包css/less的时候会用到ExtractTextPlugin
      new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compress: {
          warnings: false,
        },
      })
    ],
    module: require('./webpack/module.config.js')(theme),
    resolve: {
      extensions: ['.js', '.jsx']
    }
  }
})();