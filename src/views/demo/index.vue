<script setup lang="ts">
import { reactive } from "vue";
import GridPatternDashed from "@/components/grid-pattern/grid-pattern-dashed.vue";

defineOptions({
  name: "Demo"
});

const contentList = reactive([
  { text: "⚡ Vue3 + Vite5", fullWidth: false },
  { text: "🍕 TypeScript", fullWidth: false },
  { text: "✨ Vant4 组件库", fullWidth: false },
  { text: "🍍 Pinia 状态管理", fullWidth: false },
  { text: "🌀 Tailwindcss 原子类框架", fullWidth: true },
  { text: "🗺️ Vue-router 4", fullWidth: false },
  { text: "👏 集成多种图标方案", fullWidth: false },
  { text: "🔧 集成 ESLint", fullWidth: false },
  { text: "🌓 支持深色模式", fullWidth: false },
  { text: "📏 vmin 视口适配", fullWidth: false },
  { text: "📡 Axios 封装", fullWidth: false },
  { text: "📦 打包资源 gzip 压缩", fullWidth: false },
  { text: "🛠️ 开发 Mock 数据", fullWidth: false },
  { text: "🚀 首屏加载动画", fullWidth: false },
  { text: "🔍 开发环境调试面板", fullWidth: false }
]);
</script>

<template>
  <GridPatternDashed />
  <div class="demo-content px-[12px]">
    <img
      class="block w-[120px] mx-auto mb-[30px] pt-[40px]"
      alt="Vue logo"
      src="~@/assets/logo_melomini.png"
    />
    <div
      class="text-[14px] py-[12px] px-[20px] rounded-[12px] bg-[var(--color-block-background)] mt-[14px]"
    >
      <div>
        <a
          class="flex items-center"
          href="https://github.com/yulimchen/vue3-h5-template"
          target="_blank"
        >
          <svg-icon class="text-[20px] mr-[8px]" name="github" />
          <h3 class="font-bold text-[18px] my-[4px]">Vue3-h5-template</h3>
          <svg-icon class="text-[12px] ml-[5px]" name="link" />
        </a>
      </div>
      <p class="leading-[24px] my-[6px]">
        🌱 基于 Vue3 全家桶、TypeScript、Vite 构建工具，开箱即用的 H5
        移动端项目基础模板
      </p>
    </div>

    <div
      class="mt-[16px] pb-[24px] grid grid-cols-2 gap-[12px] text-[14px] text-center"
    >
      <div
        v-for="item in contentList"
        :key="item.text"
        :class="[
          'truncate p-[12px] rounded-[12px] border border-[var(--color-border)]',
          item.fullWidth ? 'col-span-2' : ''
        ]"
      >
        {{ item.text }}
      </div>
    </div>
  </div>
</template>
