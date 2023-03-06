# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.5.2](https://github.com/yulimchen/vue3-h5-template/compare/v0.5.1...v0.5.2) (2023-03-06)


### Features

* 支持 `tailwindcss` & 重构页面样式 ([982f81b](https://github.com/yulimchen/vue3-h5-template/commit/982f81bc6e9f36da2d48f136eb5986b3f6f1310b))

### 0.5.1 (2023-02-20)


### Features

* `axios` 封装 ([224e1cd](https://github.com/yulimchen/vue3-h5-template/commit/224e1cd1325ebe7c250976c56c548a91d3bd644b))
* 按环境启用 `eruda` 调试工具 ([9be036d](https://github.com/yulimchen/vue3-h5-template/commit/9be036d84e6713ffcf4fc2c4b4991f0a4b3e86e3))
* 加入 `Pinia` 结合完成组件缓存 ([70b1ccf](https://github.com/yulimchen/vue3-h5-template/commit/70b1ccf15ca8d16611cb50e58b1ecde27a25c44a))
* 开发环境加入调试面板 ([fed71f5](https://github.com/yulimchen/vue3-h5-template/commit/fed71f58aae0ef13cda4e04b968144ac533b9acd))
* 全局a标签样式重置 ([878789a](https://github.com/yulimchen/vue3-h5-template/commit/878789a5b2698a8ee393983332da9829036f619b))
* 生产环境 `gzip` 压缩 ([ad884b9](https://github.com/yulimchen/vue3-h5-template/commit/ad884b9f8412b27562b47b1a254c8a57ef996e29))
* 生产环境开启gzip打包 ([c73a060](https://github.com/yulimchen/vue3-h5-template/commit/c73a0609fdf8c5285e3a0199fd7c3cc6531c2163))
* 视口 `vw/vh` 适配 ([fd66141](https://github.com/yulimchen/vue3-h5-template/commit/fd6614101648e05aad2f61aa4cad3649255df3f5))
* 首屏加载动画 ([d8dfa93](https://github.com/yulimchen/vue3-h5-template/commit/d8dfa933ae60c2031bca8ef3f453a842a107a60f))
* 添加 `svg-sprite` ([8bd1bab](https://github.com/yulimchen/vue3-h5-template/commit/8bd1bab01bfb6c846e6320577287f350e209e36b))
* 页面根据路由 `title` 设置标签名 ([caff118](https://github.com/yulimchen/vue3-h5-template/commit/caff118021eafbb8a911fd1ab1fab283baa06dcb))
* 增加vue-router ([2320803](https://github.com/yulimchen/vue3-h5-template/commit/23208030e6472bf9ee1de687fabbe1093ab03d08))
* 支持 svg 图标自动引入 ([e9c0e9b](https://github.com/yulimchen/vue3-h5-template/commit/e9c0e9bbf62ae9cff339f601f6db81032262bd04))
* 支持开发环境 `mock` ([f4626d0](https://github.com/yulimchen/vue3-h5-template/commit/f4626d088fd66ad076ac639b8d687d28f4f9dbcc))


### Bug Fixes

* **index.html:** 避免环境变量缺少导致页面错误 ([9584156](https://github.com/yulimchen/vue3-h5-template/commit/95841560ad5237bc35c6088c587cc105cc1dce5d))
* **SvgIcon:** 不解构使用props，避免数据失去reactive ([c6f3f07](https://github.com/yulimchen/vue3-h5-template/commit/c6f3f07303065054df4e1fc3d6b250edd4db00bf))
* **Tabbar:** 开启路由模式 ([1e61c5a](https://github.com/yulimchen/vue3-h5-template/commit/1e61c5a3555ced9bd6a5bf62302a2252bf01e12b))
