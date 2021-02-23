<template>
  <div class="app-wrapper">
    <div class="app-wrapper__content">
      <router-view v-slot="{ Component }">
        <keep-alive :include="keepAliveRoutes">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
    <div class="app-wrapper__footer">
      <tabbar />
    </div>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'
import { computed } from 'vue'
import store from '@/store'

export default {
  name: 'Layout',
  components: {
    Tabbar
  },
  setup() {
    const keepAliveRoutes = computed(() => store.getters.cachedViews)

    return {
      keepAliveRoutes
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/mixin.less';

.app-wrapper {
  .clearfix();
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
