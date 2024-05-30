export default {
  plugins: {
    tailwindcss: {},
    // 使用 cnjm-postcss-px-to-viewport 规避 postcss.plugin was deprecated 警告
    "cnjm-postcss-px-to-viewport": {
      viewportWidth: 375, // 根据设计稿设定
      unitPrecision: 4, // 转化精度，转换后保留位数
      viewportUnit: "vmin", // 转换后的单位
      fontViewportUnit: "vmin", // 字体单位
      unitToConvert: "px" // 需要转换的单位
    },
    autoprefixer: {
      overrideBrowserslist: ["Android >= 4.0", "iOS >= 7"]
    }
  }
};
