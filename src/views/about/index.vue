<script setup lang="ts">
import GridPatternDashed from '@/components/grid-pattern/grid-pattern-dashed.vue'
import pkg from '../../../package.json'

defineOptions({
  name: 'About',
})

const version = pkg.version

const techStack = [
  { name: 'Vue 3', color: '#41b883' },
  { name: 'Vite 8', color: '#646cff' },
  { name: 'TypeScript', color: '#3178c6' },
  { name: 'Vant 4', color: '#1989fa' },
  { name: 'Tailwind CSS', color: '#06b6d4' },
  { name: 'Pinia', color: '#f7a41d' },
  { name: 'Axios', color: '#5a29e4' },
  { name: 'VueUse', color: '#41b883' },
]

const links = [
  {
    label: 'GitHub',
    desc: 'yulimchen/vue3-h5-template',
    icon: 'github',
    url: 'https://github.com/yulimchen/vue3-h5-template',
  },
  {
    label: '在线预览',
    desc: 'yulimchen.github.io',
    icon: 'link',
    url: 'https://yulimchen.github.io/vue3-h5-template/',
  },
]
</script>

<template>
  <GridPatternDashed />
  <div class="px-[16px] pb-[40px]">
    <!-- 顶部 hero -->
    <div class="text-center pt-[48px] pb-[28px]">
      <img
        class="w-[68px] mx-auto mb-[14px]"
        alt="logo"
        src="~@/assets/logo_melomini.png"
      >
      <h2 class="text-[20px] font-bold tracking-wide">
        Vue3 H5 Template
      </h2>
      <span
        class="inline-block mt-[10px] text-[12px] px-[12px] py-[3px] rounded-full"
        style="background: rgba(65,184,131,0.12); color: #41b883;"
      >
        v{{ version }}
      </span>
      <p class="mt-[12px] text-[13px] leading-[22px] text-[var(--van-text-color-2)] max-w-[240px] mx-auto">
        基于 Vue3 全家桶 + TypeScript + Vite 的移动端 H5 项目基础模板
      </p>
    </div>

    <!-- 技术栈 -->
    <div class="rounded-[12px] bg-[var(--color-block-background)] p-[16px] mb-[10px]">
      <p class="text-[13px] font-bold mb-[12px]">
        技术栈
      </p>
      <div class="flex flex-wrap gap-[8px]">
        <span
          v-for="tech in techStack"
          :key="tech.name"
          class="text-[12px] px-[10px] py-[3px] rounded-full border"
          :style="{ color: tech.color, borderColor: `${tech.color}50` }"
        >
          {{ tech.name }}
        </span>
      </div>
    </div>

    <!-- 链接 -->
    <div class="rounded-[12px] bg-[var(--color-block-background)] overflow-hidden mb-[10px]">
      <a
        v-for="(link, idx) in links"
        :key="link.label"
        :href="link.url"
        target="_blank"
        class="flex items-center px-[16px] py-[14px]"
        :class="[idx < links.length - 1 ? 'border-b border-[var(--color-border)]' : '']"
      >
        <svg-icon class="text-[20px] mr-[12px] shrink-0" :name="link.icon" />
        <div class="min-w-0">
          <p class="text-[14px] font-medium">
            {{ link.label }}
          </p>
          <p class="text-[12px] text-[var(--van-text-color-2)] truncate">
            {{ link.desc }}
          </p>
        </div>
        <svg-icon class="text-[11px] ml-auto shrink-0 text-[var(--van-text-color-2)]" name="link" />
      </a>
    </div>

    <!-- License -->
    <p class="text-center text-[12px] text-[var(--van-text-color-2)] mt-[28px]">
      MIT License &nbsp;·&nbsp; yulimchen
    </p>
  </div>
</template>
