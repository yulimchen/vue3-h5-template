<script setup lang="ts" name="Tools">
import { getListApi, getListApiError } from "@/api/mock";
import { reactive } from "vue";
import { showFailToast, showSuccessToast } from "vant";
import "vant/es/toast/style";
import { $t } from "@/locales";

const showList: string[] = reactive([]);

const handleSuccessReq = async () => {
  const { list } = await getListApi();
  showSuccessToast({ message: $t("tools.reqOK"), wordBreak: "break-word" });
  showList.push(...list);
};
const handleErrorReq = () => {
  getListApiError().then(
    () => {},
    err => {
      console.log(err);
      showFailToast({ message: $t("tools.reqErr"), wordBreak: "break-word" });
    }
  );
};
</script>

<template>
  <div class="tools-content pt-[20px] px-[12px]">
    <div class="pl-[12px] border-l-[3px] border-[color:#41b883] mb-[12px]">
      <h3 class="font-bold text-[18px] my-[4px]">Mock</h3>
    </div>
    <van-space>
      <van-button type="success" @click="handleSuccessReq">{{
        $t("tools.successBtn")
      }}</van-button>
      <van-button type="danger" @click="handleErrorReq">{{
        $t("tools.errorBtn")
      }}</van-button>
    </van-space>
    <div
      class="text-[14px] py-[2px] px-[10px] rounded-[4px] bg-[var(--color-block-background)] mt-[14px]"
    >
      <p class="my-[14px] leading-[24px]">
        {{ showList }}
      </p>
    </div>
  </div>
</template>
