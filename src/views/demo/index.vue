<template>
  <div class="demo-content">
    <img class="logo" alt="Vue logo" src="~@/assets/logo_vue3.png">
    <div class="demo-content__title">
      <a href="https://github.com/yulimchen/vue3-h5-template" target="_blank">
        <svg-icon icon-class="github" />
        <h3>Vue3-h5-template</h3>
        <svg-icon class="link-icon" icon-class="link" />
      </a>
    </div>
    <div class="demo-content__desc">
      <p>🌱 基于 Vue3 全家桶、Vant3 组件库，开箱即用的 H5 移动端项目基础模板</p>
    </div>

    <div class="demo-main">
      <van-cell v-for="(item, idx) in contentList" :key="idx" :title="item" />
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'Demo',
  setup() {
    const contentList = reactive([
      '✔ Vue3✨',
      '✔ Vant3✨',
      '✔ 支持 SVG 图标自动注册组件✨',
      '✔ vw 视口适配',
      '✔ Axios 封装',
      '✔ 生产环境 CDN 依赖',
      '✔ 打包资源 gzip 压缩',
      '✔ ESLint',
      '✔ 首屏加载动画',
      '✔ 项目资源路径 alias 别名',
      '✔ 开发环境调试面板',
      '✔ Vuex 集成',
      '✔ Vue-router 集成',
      '✔ 开发环境 Mock 数据'
    ])

    return {
      contentList
    }
  }
}
</script>

<style lang="less" scoped>
.demo-content {
  padding: 0 12px;

  .logo {
    display: block;
    width: 120px;
    margin: 30px auto 20px;
  }

  &__title {
    border-left: 3px solid #41b883;
    padding-left: 12px;

    .svg-icon {
      font-size: 20px;
      margin-right: 8px;
    }

    h3 {
      margin: 6px 0;
      font-size: 18px;
    }

    > a {
      display: flex;
      align-items: center;

      .link-icon {
        font-size: 12px;
        margin-left: 5px;
      }
    }
  }

  &__desc {
    font-size: 14px;
    padding: 2px 10px;
    border-radius: 4px;
    background-color: #eee;
    margin-top: 14px;

    p {
      line-height: 24px;
    }
  }

  .demo-main {

  }
}
</style>
