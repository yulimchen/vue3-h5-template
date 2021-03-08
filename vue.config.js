'use strict'
const autoprefixer = require('autoprefixer')
const pxtoviewport = require('postcss-px-to-viewport')

const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

const defaultSettings = require('./src/settings.js')
const name = defaultSettings.title || 'Vue3 H5 Template'

module.exports = {
  lintOnSave: true,
  publicPath: './',
  productionSourceMap: false, // 去除生产环境.map文件
  configureWebpack: {
    name: name, // name 字段将插值到 index.html 中
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtoviewport({
            viewportWidth: 375 // 根据设计稿设定
          })
        ]
      }
    }
  },
  chainWebpack: (config) => {
    // 设置 svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
  devServer: {
    before: require('./mock/mock-server.js')
  }
}
