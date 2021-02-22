<template>
  <div class="demo-content">
    <img class="logo" alt="Vue logo" src="~@/assets/logo.png">
    <div class="demo-content__title">
      <a href="https://github.com/yulimchen/vue3-h5-template" target="_blank">
        <svg-icon icon-class="github" />
        <h3>Vue3-h5-template</h3>
        <svg-icon class="link-icon" icon-class="link" />
      </a>
    </div>
    <div class="demo-content__desc">
      <p>🌱 基于 vue3、vant3 组件库，开箱即用的 H5 移动端项目基础模板</p>
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
      '✔ vue3✨',
      '✔ vant3✨',
      '✔ 支持 svg 图标自动注册组件✨',
      '✔ vw/vh 视口适配',
      '✔ 首屏加载动画',
      '✔ 项目资源路径 alias 别名',
      '✔ 开发环境调试面板',
      '💭 axios 封装 (TODO)',
      '💭 vuex 封装 (TODO)'
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
