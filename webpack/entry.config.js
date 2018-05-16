module.exports = {
  prod: {
    //user
    'admin/index': './js/admin/index.js',
    'antd/index': './js/antd/index.js'
  },
  watch: {
    'admin/index': ['webpack-dev-server/client?http://127.0.0.1:8888', // WebpackDevServer host and port
      'webpack/hot/only-dev-server',
      './js/admin/index.js'
    ],
    'antd/index': ['webpack-dev-server/client?http://127.0.0.1:8888', // WebpackDevServer host and port
      'webpack/hot/only-dev-server',
      './js/antd/index.js'
    ],
  }
}