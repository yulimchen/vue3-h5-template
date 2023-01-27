<script setup lang="ts">
import Tabbar from "@/components/Tabbar/index.vue";
</script>

<template>
  <div class="app-wrapper">
    <div class="app-wrapper__content">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </div>
    <div class="app-wrapper__footer">
      <tabbar />
    </div>
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
