<script setup lang="ts">
import { useDarkMode, useToggleDarkMode } from "@/hooks/useToggleDarkMode";

const onClickRight = (event: TouchEvent | MouseEvent) => {
  useToggleDarkMode(event);
};

const isDarkMode = useDarkMode();
</script>

<template>
  <van-nav-bar fixed placeholder @click-right="onClickRight">
    <template #right>
      <svg-icon class="text-[18px]" :name="isDarkMode ? 'light' : 'dark'" />
    </template>
  </van-nav-bar>
</template>

<style scoped></style>
