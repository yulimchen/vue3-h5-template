<script setup lang="ts">
import { getList } from "@/api/mock";

const handleClick = () => {
  console.log(123);
  getList().then(res => {
    console.log(res);
  });
};
</script>

<template>
  <div>
    <van-button type="primary" @click="handleClick">主要按钮</van-button>
  </div>
</template>

<style scoped></style>
