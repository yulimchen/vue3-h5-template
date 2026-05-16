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

const modules = import.meta.glob('../../icons/svg/*.svg', { eager: true })
const svgIconLocalList = Object.keys(modules).map(key =>
  key.replace('../../icons/svg/', '').replace('.svg', ''),
)
</script>

<template>
  <div class="pt-[20px] px-[12px] pb-[32px]">
    <!-- HTTP 请求示例 -->
    <div class="pl-[12px] border-l-[3px] border-[#41b883] mb-[12px]">
      <h3 class="font-bold text-[18px] my-[4px]">
        HTTP 请求示例
      </h3>
    </div>

    <div class="rounded-[12px] bg-[var(--color-block-background)] overflow-hidden mb-[24px]">
      <!-- GET -->
      <div class="px-[14px] pt-[14px] pb-[12px] border-b border-[var(--color-border)]">
        <div class="flex items-center justify-between mb-[10px]">
          <div class="flex items-center gap-[6px] text-[13px] text-[var(--van-text-color-2)]">
            <van-tag type="success" plain>
              GET
            </van-tag>
            获取用户列表
          </div>
          <van-button
            type="success"
            size="small"
            :loading="getLoading"
            loading-text="请求中..."
            @click="handleGetRequest"
          >
            发送
          </van-button>
        </div>
        <div v-if="userList.length" class="space-y-[6px]">
          <div
            v-for="user in userList"
            :key="user.id"
            class="flex items-center"
          >
            <van-image
              :src="user.avatar"
              round
              width="28"
              height="28"
              class="mr-[8px] shrink-0"
            />
            <span class="text-[13px]">{{ user.name }}</span>
            <van-tag plain class="ml-auto text-[11px]">
              {{ user.city }}
            </van-tag>
          </div>
        </div>
      </div>

      <!-- POST -->
      <div class="px-[14px] pt-[14px] pb-[12px] border-b border-[var(--color-border)]">
        <div class="flex items-center justify-between mb-[10px]">
          <div class="flex items-center gap-[6px] text-[13px] text-[var(--van-text-color-2)]">
            <van-tag type="primary" plain>
              POST
            </van-tag>
            提交表单数据
          </div>
          <van-button
            type="primary"
            size="small"
            :loading="postLoading"
            loading-text="提交中..."
            @click="handlePostRequest"
          >
            发送
          </van-button>
        </div>
        <div
          v-if="postResult"
          class="text-[12px] text-[var(--van-text-color-2)] leading-[20px] font-mono"
        >
          <p>id: {{ postResult.id }}</p>
          <p>createdAt: {{ postResult.createdAt }}</p>
        </div>
      </div>

      <!-- ERROR -->
      <div class="px-[14px] py-[14px]">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-[6px] text-[13px] text-[var(--van-text-color-2)]">
            <van-tag type="danger" plain>
              ERROR
            </van-tag>
            拦截器处理错误响应
          </div>
          <van-button type="danger" size="small" @click="handleErrorRequest">
            发送
          </van-button>
        </div>
      </div>
    </div>

    <!-- Iconify 图标 -->
    <div class="pl-[12px] border-l-[3px] border-[#41b883] mb-[12px]">
      <h3 class="font-bold text-[18px] my-[4px]">
        Iconify 图标
      </h3>
    </div>
    <div class="rounded-[12px] bg-[var(--color-block-background)] p-[14px] mb-[24px]">
      <p class="text-[12px] text-[var(--van-text-color-2)] mb-[10px]">
        在线图标
      </p>
      <div class="flex flex-wrap gap-[14px]">
        <i-icon
          v-for="item in iconOnlineList"
          :key="item"
          :icon="item"
          class="text-[24px]"
        />
      </div>
      <p class="text-[12px] text-[var(--van-text-color-2)] mt-[14px] mb-[10px]">
        离线图标包
      </p>
      <div class="flex flex-wrap gap-[14px]">
        <i-icon
          v-for="(item, idx) in iconOfflineList"
          :key="idx"
          :icon="item"
          class="text-[24px]"
        />
      </div>
    </div>

    <!-- 本地 SVG 图标 -->
    <div class="pl-[12px] border-l-[3px] border-[#41b883] mb-[12px]">
      <h3 class="font-bold text-[18px] my-[4px]">
        本地 SVG 图标
      </h3>
    </div>
    <div class="rounded-[12px] bg-[var(--color-block-background)] p-[14px]">
      <div class="flex flex-wrap gap-[14px]">
        <svg-icon
          v-for="item in svgIconLocalList"
          :key="item"
          :name="item"
          class="text-[24px]"
        />
      </div>
    </div>
  </div>
</template>
