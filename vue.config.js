// 这个文件时 vue-cli 创建出来的项目的配置文件
// 在 vue.config.js 这个配置文件中，可以对整个项目打包，构建进行全局的配置

// webpack 在进行打包时，底层用了 node.js
// 因此，在 vue.config.js 中可以使用 node.js 中的核心模块
const path = require('path')
const themePath = path.join(__dirname, './src/theme.less')
console.log(themePath)

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            // hack: `true; @import "${themePath}";`
          }
        }
      }
    }
  }
})
