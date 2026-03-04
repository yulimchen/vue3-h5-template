<script setup lang="ts">
import type { UserItem } from '@/api/mock'
import Fa6SolidAddressBook from '@iconify-icons/fa6-solid/address-book'
import Fa6SolidAppleWhole from '@iconify-icons/fa6-solid/apple-whole'
import Fa6SolidBaby from '@iconify-icons/fa6-solid/baby'
import Fa6SolidBasketball from '@iconify-icons/fa6-solid/basketball'
import Fa6SolidBurger from '@iconify-icons/fa6-solid/burger'
import Fa6SolidChessKnight from '@iconify-icons/fa6-solid/chess-knight'
import { showFailToast, showSuccessToast } from 'vant'
import { getListApi, getListApiError, submitFormApi } from '@/api/mock'
import 'vant/es/toast/style'

defineOptions({
  name: 'Tools',
})

// ===== GET 请求示例 =====
const userList = ref<UserItem[]>([])
const getLoading = ref(false)

async function handleGetRequest() {
  getLoading.value = true
  try {
    const { list } = await getListApi()
    userList.value = list
    showSuccessToast('GET 请求成功')
  }
  catch {
    showFailToast('GET 请求失败')
  }
  finally {
    getLoading.value = false
  }
}

// ===== POST 请求示例 =====
const postResult = ref<{ id: string, createdAt: string } | null>(null)
const postLoading = ref(false)

async function handlePostRequest() {
  postLoading.value = true
  try {
    const result = await submitFormApi({ name: 'Vue3 H5 Template', message: 'Hello from POST!' })
    postResult.value = result
    showSuccessToast('POST 提交成功')
  }
  catch {
    showFailToast('POST 提交失败')
  }
  finally {
    postLoading.value = false
  }
}

// ===== 错误请求示例 =====
async function handleErrorRequest() {
  try {
    await getListApiError()
  }
  catch (err) {
    if (import.meta.env.DEV) {
      console.error('请求错误:', err)
    }
    showFailToast('请求有误\n（预期行为）')
  }
}

const iconOnlineList = [
  'material-symbols:admin-panel-settings-outline',
  'jam:android',
  'lucide:badge-check',
  'pixelarticons:heart',
  'fxemoji:alienmonster',
  'meteocons:thunderstorms-day-overcast-fill',
]
const iconOfflineList = [
  Fa6SolidAddressBook,
  Fa6SolidAppleWhole,
  Fa6SolidBaby,
  Fa6SolidBasketball,
  Fa6SolidBurger,
  Fa6SolidChessKnight,
]
// 获取所有本地 svg 图标文件名称
const modules = import.meta.glob('../../icons/svg/*.svg', { eager: true })
const svgIconLocalList = Object.keys(modules).map(key =>
  key.replace('../../icons/svg/', '').replace('.svg', ''),
)
</script>

<template>
  <div class="tools-content pt-[20px] px-[12px]">
    <!-- HTTP 请求示例 -->
    <div class="pl-[12px] border-l-[3px] border-[color:#41b883] mb-[12px]">
      <h3 class="font-bold text-[18px] my-[4px]">
        HTTP 请求示例
      </h3>
    </div>

    <!-- GET -->
    <p class="text-[13px] text-[var(--van-text-color-2)] mb-[6px]">
      <van-tag
        type="success"
        class="mr-[4px]"
        plain
      >
        GET
      </van-tag>
      获取用户列表
    </p>
    <van-button
      type="success"
      size="small"
      :loading="getLoading"
      loading-text="请求中..."
      @click="handleGetRequest"
    >
      发起 GET 请求
    </van-button>

    <div
      v-if="userList.length"
      class="rounded-[8px] bg-[var(--color-block-background)] mt-[10px] p-[10px]"
    >
      <div
        v-for="user in userList"
        :key="user.id"
        class="flex items-center py-[6px]"
      >
        <van-image
          :src="user.avatar"
          round
          width="32"
          height="32"
          class="mr-[10px] shrink-0"
        />
        <span class="text-[14px]">{{ user.name }}</span>
        <van-tag plain class="ml-auto">
          {{ user.city }}
        </van-tag>
      </div>
    </div>

    <!-- POST -->
    <p class="text-[13px] text-[var(--van-text-color-2)] mt-[16px] mb-[6px]">
      <van-tag
        type="primary"
        class="mr-[4px]"
        plain
      >
        POST
      </van-tag>
      提交表单数据
    </p>
    <van-button
      type="primary"
      size="small"
      :loading="postLoading"
      loading-text="提交中..."
      @click="handlePostRequest"
    >
      发起 POST 请求
    </van-button>
    <div
      v-if="postResult"
      class="rounded-[8px] bg-[var(--color-block-background)] mt-[10px] p-[10px] text-[13px] leading-[22px]"
    >
      <p>Response ID: <code>{{ postResult.id }}</code></p>
      <p>Response Created Time: {{ postResult.createdAt }}</p>
    </div>

    <!-- 错误请求 -->
    <p class="text-[13px] text-[var(--van-text-color-2)] mt-[16px] mb-[6px]">
      <van-tag
        type="danger"
        class="mr-[4px]"
        plain
      >
        ERROR
      </van-tag>
      模拟请求失败（拦截器自动处理）
    </p>
    <van-button type="danger" size="small" @click="handleErrorRequest">
      发起失败请求
    </van-button>
    <!-- Icon -->
    <div
      class="pl-[12px] border-l-[3px] border-[color:#41b883] mt-[24px] mb-[12px]"
    >
      <h3 class="font-bold text-[18px] my-[4px]">
        Iconify Icon
      </h3>
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
      <h3 class="font-bold text-[18px] my-[4px]">
        Svg Icon
      </h3>
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
