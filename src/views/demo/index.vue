<script setup lang="ts" name="Demo">
import { ref, watch } from "vue";
import { $t, $locale } from "@/locales";

const list = ref<string[]>([]);

const updateList = () => {
  list.value = [
    `✔ ⚡ ${$t("demo.details.vue3")}`,
    `✔ 🍕 ${$t("demo.details.typescript")}`,
    `✔ ✨ ${$t("demo.details.vant")}`,
    `✔ 🌀 ${$t("demo.details.tailwindcss")}`,
    `✔ 🍍 ${$t("demo.details.pinia")}`,
    `✔ 🌓 ${$t("demo.details.darkmode")}`,
    `✔ 🧀 ${$t("demo.details.i18n")}`,
    `✔ ${$t("demo.details.router")}`,
    `✔ ${$t("demo.details.icon")}`,
    `✔ ${$t("demo.details.vw")}`,
    `✔ ${$t("demo.details.axios")}`,
    `✔ ${$t("demo.details.gzip")}`,
    `✔ ${$t("demo.details.mock")}`,
    `✔ ${$t("demo.details.eslint")}`,
    `✔ ${$t("demo.details.loading")}`,
    `✔ ${$t("demo.details.eruda")}`
  ];
};
updateList();
// 监听语言变化，更新列表
watch(() => $locale.value, updateList);
</script>

<template>
  <div class="demo-content px-[12px]">
    <img
      class="block w-[120px] mx-auto mb-[20px] pt-[30px]"
      alt="Vue logo"
      src="~@/assets/logo_melomini.png"
    />
    <div class="pl-[12px] border-l-[3px] border-[color:#41b883]">
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
    <div
      class="text-[14px] py-[2px] px-[10px] rounded-[4px] bg-[var(--color-block-background)] mt-[14px]"
    >
      <p class="my-[14px] leading-[24px]">🌱 {{ $t("demo.description") }}</p>
    </div>

    <div class="demo-main">
      <van-cell v-for="(item, idx) in list" :key="idx" :title="item" />
    </div>
  </div>
</template>
