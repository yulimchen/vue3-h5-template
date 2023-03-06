module.exports = {
  plugins: {
    tailwindcss: {},
    // 使用 postcss-mobile-to-multi-displays 做 vw 适配，限制最大宽度，兼容桌面端
    "postcss-mobile-forever": {
      rootSelector: "#app", // 视图的根选择器名称
      viewportWidth: 375, // 根据设计稿设定
      unitPrecision: 2, // 转化精度，转换后保留位数
      border: true, // 桌面和横屏视图的边框
      desktopWidth: 600, // 桌面端视图宽度
      landscapeWidth: 425, // 横屏视图宽度
      disableDesktop: false, // 关闭桌面端适配
      disableLandscape: false // 关闭横屏适配
    },
    autoprefixer: {
      overrideBrowserslist: ["Android >= 4.0", "iOS >= 7"]
    }
  }
};
