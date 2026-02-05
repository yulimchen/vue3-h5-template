<script setup lang="ts">
import { useRouter } from 'vue-router'

defineOptions({
  name: 'NotFound',
})

const router = useRouter()

function goHome() {
  router.push({ name: 'Demo' })
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center p-4 bg-[#f5f5f5] dark:bg-[#1a1a1a]">
    <div class="max-w-md w-full">
      <!-- 404 数字 -->
      <div class="text-center mb-8">
        <div class="text-[140px] font-black leading-none tracking-tighter text-[#333] dark:text-[#fff] opacity-20">
          404
        </div>
        <div class="-mt-16">
          <svg class="w-24 h-24 mx-auto text-[#1989fa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>

      <!-- 文字信息 -->
      <div class="text-center mb-10">
        <h1 class="text-2xl font-bold text-[#323233] dark:text-[#f5f5f5] mb-2">
          页面走丢了
        </h1>
        <p class="text-[#969799] dark:text-[#7d7e80] text-sm">
          您访问的页面不存在，可能已被移除或链接有误
        </p>
      </div>

      <!-- 按钮组 -->
      <div class="space-y-3">
        <van-button
          block
          type="primary"
          round
          plain
          @click="goHome"
        >
          返回首页
        </van-button>
      </div>
    </div>
  </div>
</template>
