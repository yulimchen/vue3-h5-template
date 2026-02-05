<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import NavBar from '@/components/nav-bar/index.vue'
import tabbar from '@/components/tabbar/index.vue'
import { useCachedViewStoreHook } from '@/store/modules/cached-view'
import { useDarkModeStore } from '@/store/modules/dark-mode'

const cachedViews = computed(() => {
  return useCachedViewStoreHook().cachedViewList
})

const darkModeStore = useDarkModeStore()
const { theme } = storeToRefs(darkModeStore)
</script>

<template>
  <div class="app-wrapper">
    <van-config-provider :theme="theme">
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
