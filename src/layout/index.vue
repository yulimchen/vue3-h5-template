<script setup lang="ts">
import { computed } from 'vue'
import NavBar from '@/components/nav-bar/index.vue'
import tabbar from '@/components/tabbar/index.vue'
import { useDarkMode } from '@/composables/useToggleDarkMode'
import { useCachedViewStoreHook } from '@/store/modules/cached-view'

const cachedViews = computed(() => {
  return useCachedViewStoreHook().cachedViewList
})
</script>

<template>
  <div class="app-wrapper">
    <van-config-provider :theme="useDarkMode() ? 'dark' : 'light'">
      <NavBar />
      <router-view v-slot="{ Component }">
        <keep-alive :include="cachedViews">
          <component :is="Component" />
        </keep-alive>
      </router-view>
      <tabbar />
    </van-config-provider>
  </div>
</template>

<style lang="less" scoped>
@import "@/styles/mixin.less";

.app-wrapper {
  .clearfix();
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
