<script setup lang="ts">
import { getListApi } from "@/api/mock";
import { reactive } from "vue";

let showList = reactive([]);

const handleSuccessReq = async () => {
  const { list } = await getListApi();
  showList.push(...list);
};
</script>

<template>
  <div style="padding-top: 20px">
    <van-button type="primary" @click="handleSuccessReq">成功请求</van-button>
    <div>
      {{ showList }}
    </div>
  </div>
</template>

<style scoped></style>
