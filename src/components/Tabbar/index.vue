<template>
  <van-tabbar
    class="tabbar"
    v-model="active"
    :placeholder="true"
    :route="true"
    fixed
  >
    <van-tabbar-item
      v-for="(item, index) in tabbarData"
      :key="index"
      :icon="item.icon"
      :to="item.to"
    >
      {{ item.title }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

const active = ref(0);
const tabbarData = reactive([
  {
    icon: "wap-home-o",
    title: "主页",
    to: {
      name: "Demo"
    }
  },
  {
    icon: "gem-o",
    title: "工具",
    to: {
      name: "Tools"
    }
  },
  {
    icon: "user-o",
    title: "关于",
    to: {
      name: "About"
    }
  }
]);
</script>

<style scoped>
.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  /* 形成包含块，使得 fided 定位的子元素 tabbar 的百分百宽度能够基于这个元素 */
  transform: rotate(0);
}
</style>
