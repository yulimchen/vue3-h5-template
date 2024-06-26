<script setup lang="ts" name="Tools">
import { getListApi, getListApiError } from "@/api/mock";
import { reactive } from "vue";
import { showFailToast, showSuccessToast } from "vant";
import "vant/es/toast/style";
import Fa6SolidAddressBook from "@iconify-icons/fa6-solid/address-book";
import Fa6SolidAppleWhole from "@iconify-icons/fa6-solid/apple-whole";
import Fa6SolidBaby from "@iconify-icons/fa6-solid/baby";
import Fa6SolidBasketball from "@iconify-icons/fa6-solid/basketball";
import Fa6SolidBurger from "@iconify-icons/fa6-solid/burger";
import Fa6SolidChessKnight from "@iconify-icons/fa6-solid/chess-knight";

const showList: string[] = reactive([]);

const handleSuccessReq = async () => {
  const { list } = await getListApi();
  showSuccessToast("请求成功");
  showList.push(...list);
};
const handleErrorReq = () => {
  getListApiError().then(
    () => {},
    err => {
      console.log(err);
      showFailToast("请求有误");
    }
  );
};

const iconOnlineList = [
  "material-symbols:admin-panel-settings-outline",
  "jam:android",
  "lucide:badge-check",
  "pixelarticons:heart",
  "fxemoji:alienmonster",
  "meteocons:thunderstorms-day-overcast-fill"
];
const iconOfflineList = [
  Fa6SolidAddressBook,
  Fa6SolidAppleWhole,
  Fa6SolidBaby,
  Fa6SolidBasketball,
  Fa6SolidBurger,
  Fa6SolidChessKnight
];
// 获取所有本地 svg 图标文件名称
const modules = import.meta.glob("../../icons/svg/*.svg", { eager: true });
const svgIconLocalList = Object.keys(modules).map(key =>
  key.replace("../../icons/svg/", "").replace(".svg", "")
);
</script>

<template>
  <div class="tools-content pt-[20px] px-[12px]">
    <!-- Mock -->
    <div class="pl-[12px] border-l-[3px] border-[color:#41b883] mb-[12px]">
      <h3 class="font-bold text-[18px] my-[4px]">Mock</h3>
    </div>
    <van-space>
      <van-button type="success" @click="handleSuccessReq">成功请求</van-button>
      <van-button type="danger" @click="handleErrorReq">失败请求</van-button>
    </van-space>
    <div
      class="text-[14px] py-[2px] px-[10px] rounded-[4px] bg-[var(--color-block-background)] mt-[14px]"
    >
      <p class="my-[14px] leading-[24px]">
        {{ showList }}
      </p>
    </div>
    <!-- Icon -->
    <div
      class="pl-[12px] border-l-[3px] border-[color:#41b883] mt-[24px] mb-[12px]"
    >
      <h3 class="font-bold text-[18px] my-[4px]">Iconify Icon</h3>
    </div>
    <!-- online iconify icon -->
    <div>
      <i-icon
        v-for="item in iconOnlineList"
        :key="item"
        :icon="item"
        class="inline-block text-[24px] mr-3"
      />
    </div>
    <!-- offline iconify icon -->
    <div class="mt-2">
      <i-icon
        v-for="(item, idx) in iconOfflineList"
        :key="idx"
        :icon="item"
        class="inline-block text-[24px] mr-3"
      />
    </div>
    <div
      class="pl-[12px] border-l-[3px] border-[color:#41b883] mt-[24px] mb-[12px]"
    >
      <h3 class="font-bold text-[18px] my-[4px]">Svg Icon</h3>
    </div>
    <!-- local svg file icon -->
    <div>
      <svg-icon
        v-for="item in svgIconLocalList"
        :key="item"
        :name="item"
        class="inline-block text-[24px] mr-3"
      />
    </div>
  </div>
</template>
