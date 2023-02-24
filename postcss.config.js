module.exports = {
  plugins: {
    // 使用 postcss-mobile-to-multi-displays 做 vw 适配，限制最大宽度，兼容桌面端
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
