var path = require('path');
var moduleExports = {};

// 源文件目录
moduleExports.staticRootDir = path.resolve(__dirname, '../'); // 项目根目录
moduleExports.dllDir = path.resolve(moduleExports.staticRootDir, './dll'); // 存放由各种不常改变的js/css打包而来的dll
// 生成文件目录
moduleExports.buildDir = path.resolve(moduleExports.staticRootDir, './build'); // 存放编译后生成的所有代码、资源（图片、字体等，虽然只是简单的从源目录迁移过来）

module.exports = moduleExports;
