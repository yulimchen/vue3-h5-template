module.exports = {
  plugins: {
    // 使用 cnjm-postcss-px-to-viewport 规避 postcss.plugin was deprecated 警告
    "postcss-mobile-to-multi-displays": {
      rootClass: "app-wrapper", // 视图的根选择器名称
      viewportWidth: 375, // 根据设计稿设定
      unitPrecision: 2 // 转化精度，转换后保留位数
    },
    autoprefixer: {
      overrideBrowserslist: ["Android >= 4.0", "iOS >= 7"]
    }
  }
};
