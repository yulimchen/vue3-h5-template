<script setup lang="ts" name="Tools">
import { getListApi, getListApiError } from "@/api/mock";
import { reactive } from "vue";
import { showFailToast, showSuccessToast } from "vant";
import "vant/es/toast/style";

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
</script>

<template>
  <div class="tools-content">
    <div class="tools-content__title">
      <h3>Mock</h3>
    </div>
    <van-space>
      <van-button type="success" @click="handleSuccessReq">成功请求</van-button>
      <van-button type="danger" @click="handleErrorReq">失败请求</van-button>
    </van-space>
    <div class="tools-content__desc">
      <p>
        {{ showList }}
      </p>
    </div>
  </div>
</template>

<style lang="less" scoped>
.tools-content {
  padding: 20px 12px 0;

  &__title {
    border-left: 3px solid #41b883;
    padding-left: 12px;

    h3 {
      margin: 12px 0;
      font-size: 18px;
    }
  }

  &__desc {
    font-size: 14px;
    padding: 2px 10px;
    border-radius: 4px;
    background-color: #eee;
    margin-top: 14px;

    p {
      line-height: 24px;
    }
  }
}
</style>
