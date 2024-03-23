<script setup lang="ts">
import { useDarkMode, useToggleDarkMode } from "@/hooks/useToggleDarkMode";
import { ref } from "vue";
import { setLocale } from "@/locales";

const onClickDarkMode = () => {
  useToggleDarkMode();
};

const showPopover = ref(false);
const langOptions = [
  { text: "简体中文", key: "zh-cn" },
  { text: "English", key: "en" }
];
const onSelectLang = action => {
  setLocale(action.key);
};
</script>

<template>
  <van-nav-bar fixed placeholder>
    <template #right>
      <van-popover
        v-model:show="showPopover"
        :actions="langOptions"
        @select="onSelectLang"
        placement="bottom-end"
      >
        <template #reference>
          <svg-icon class="text-[18px] mr-[12px]" name="lang" />
        </template>
      </van-popover>

      <svg-icon
        class="text-[18px]"
        :name="useDarkMode() ? 'light' : 'dark'"
        @click="onClickDarkMode"
      />
    </template>
  </van-nav-bar>
</template>

<style scoped></style>
